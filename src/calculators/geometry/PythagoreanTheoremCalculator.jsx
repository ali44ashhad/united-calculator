import React, { useState } from "react";

const PythagoreanTheoremCalculator = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState("");

  const calculateMissingSide = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);

    if (c === "") {
      if (!isNaN(numA) && !isNaN(numB)) {
        const hypotenuse = Math.sqrt(numA ** 2 + numB ** 2);
        setResult(`Hypotenuse (c) = ${hypotenuse.toFixed(4)}`);
      } else {
        setResult("Enter valid values for a and b");
      }
    } else if (a === "") {
      if (!isNaN(numC) && !isNaN(numB) && numC > numB) {
        const sideA = Math.sqrt(numC ** 2 - numB ** 2);
        setResult(`Side a = ${sideA.toFixed(4)}`);
      } else {
        setResult("Enter valid values for c and b (c > b)");
      }
    } else if (b === "") {
      if (!isNaN(numC) && !isNaN(numA) && numC > numA) {
        const sideB = Math.sqrt(numC ** 2 - numA ** 2);
        setResult(`Side b = ${sideB.toFixed(4)}`);
      } else {
        setResult("Enter valid values for c and a (c > a)");
      }
    } else {
      setResult("Leave one field empty to calculate it");
    }
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Pythagorean Theorem Calculator
      </h2>

      <div className="mb-3">
        <label className="block font-medium mb-1">Side a</label>
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="Leave blank if unknown"
          className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="mb-3">
        <label className="block font-medium mb-1">Side b</label>
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Leave blank if unknown"
          className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="mb-3">
        <label className="block font-medium mb-1">Hypotenuse (c)</label>
        <input
          type="number"
          value={c}
          onChange={(e) => setC(e.target.value)}
          placeholder="Leave blank if unknown"
          className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <button
        onClick={calculateMissingSide}
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
      >
        Calculate
      </button>

      {result && (
        <div className="mt-4 bg-gray-50 p-4 border rounded text-gray-800">
          {result}
        </div>
      )}
    </div>
  );
};

export default PythagoreanTheoremCalculator;
