import React, { useState } from "react";

const CommonFactorCalculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [factors, setFactors] = useState([]);

  const calculateCommonFactors = () => {
    const a = parseInt(num1);
    const b = parseInt(num2);

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
      setFactors("Invalid input. Enter positive integers.");
      return;
    }

    const min = Math.min(a, b);
    const result = [];

    for (let i = 1; i <= min; i++) {
      if (a % i === 0 && b % i === 0) {
        result.push(i);
      }
    }

    setFactors(result);
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Common Factor Calculator
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">First Number</label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 60"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Second Number</label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 48"
          />
        </div>

        <button
          onClick={calculateCommonFactors}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold transition"
        >
          Calculate
        </button>
      </div>

      {factors && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Common Factors
          </h3>
          {typeof factors === "string" ? (
            <p className="text-red-600">{factors}</p>
          ) : (
            <p className="text-blue-600 break-words">{factors.join(", ")}</p>
          )}
        </section>
      )}
    </div>
  );
};

export default CommonFactorCalculator;
