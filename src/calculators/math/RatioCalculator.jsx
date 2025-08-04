import React, { useState } from "react";

const RatioCalculator = () => {
  const [valueA, setValueA] = useState("8");
  const [valueB, setValueB] = useState("12");
  const [simplifiedRatio, setSimplifiedRatio] = useState("");

  const calculateGCD = (a, b) => {
    if (!b) return a;
    return calculateGCD(b, a % b);
  };

  const calculateRatio = () => {
    const a = parseFloat(valueA);
    const b = parseFloat(valueB);

    if (isNaN(a) || isNaN(b) || b === 0) {
      setSimplifiedRatio("Invalid input");
      return;
    }

    const gcd = calculateGCD(a, b);
    const simplifiedA = a / gcd;
    const simplifiedB = b / gcd;

    setSimplifiedRatio(`${simplifiedA} : ${simplifiedB}`);
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">First Value</label>
          <input
            type="number"
            value={valueA}
            onChange={(e) => setValueA(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter first value"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Second Value</label>
          <input
            type="number"
            value={valueB}
            onChange={(e) => setValueB(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter second value"
          />
        </div>

        <button
          onClick={calculateRatio}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Calculate Ratio
        </button>
      </div>

      {simplifiedRatio && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Simplified Ratio
          </h2>
          <div className="text-green-600 font-bold text-2xl">
            {simplifiedRatio}
          </div>
        </section>
      )}
    </div>
  );
};

export default RatioCalculator;
