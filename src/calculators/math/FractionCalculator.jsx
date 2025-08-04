import React, { useState } from "react";

const FractionCalculator = () => {
  const [num1, setNum1] = useState("1");
  const [den1, setDen1] = useState("2");
  const [num2, setNum2] = useState("1");
  const [den2, setDen2] = useState("3");
  const [operation, setOperation] = useState("add");

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const simplify = (numerator, denominator) => {
    const common = gcd(Math.abs(numerator), Math.abs(denominator));
    return {
      numerator: numerator / common,
      denominator: denominator / common,
    };
  };

  const calculateFraction = () => {
    const a = parseInt(num1);
    const b = parseInt(den1);
    const c = parseInt(num2);
    const d = parseInt(den2);

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || b === 0 || d === 0) {
      return null;
    }

    let numerator, denominator;

    switch (operation) {
      case "add":
        numerator = a * d + b * c;
        denominator = b * d;
        break;
      case "subtract":
        numerator = a * d - b * c;
        denominator = b * d;
        break;
      case "multiply":
        numerator = a * c;
        denominator = b * d;
        break;
      case "divide":
        if (c === 0) return null;
        numerator = a * d;
        denominator = b * c;
        break;
      default:
        return null;
    }

    const simplified = simplify(numerator, denominator);
    return {
      numerator: simplified.numerator,
      denominator: simplified.denominator,
    };
  };

  const result = calculateFraction();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Numerator 1</label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. 1"
          />
        </div>
        <div>
          <label className="block font-medium">Denominator 1</label>
          <input
            type="number"
            value={den1}
            onChange={(e) => setDen1(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. 2"
          />
        </div>
        <div>
          <label className="block font-medium">Numerator 2</label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. 1"
          />
        </div>
        <div>
          <label className="block font-medium">Denominator 2</label>
          <input
            type="number"
            value={den2}
            onChange={(e) => setDen2(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. 3"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block font-medium mb-1">Operation</label>
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="add">Addition (+)</option>
          <option value="subtract">Subtraction (-)</option>
          <option value="multiply">Multiplication (×)</option>
          <option value="divide">Division (÷)</option>
        </select>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Result (Simplified)
          </h2>
          <div className="text-blue-600 text-lg font-medium">
            {result.numerator} / {result.denominator}
          </div>
        </section>
      )}
    </div>
  );
};

export default FractionCalculator;
