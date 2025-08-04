import React, { useState } from "react";

const FactorCalculator = () => {
  const [number, setNumber] = useState("28");

  const calculateFactors = () => {
    const num = parseInt(number);

    if (isNaN(num) || num <= 0) return null;

    const factors = [];
    for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        factors.push(i);
        if (i !== num / i) {
          factors.push(num / i);
        }
      }
    }

    return {
      number: num,
      factors: factors.sort((a, b) => a - b),
    };
  };

  const result = calculateFactors();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Enter a Number</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 28"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Factors of {result.number}
          </h2>
          <div className="text-blue-600 font-medium text-lg">
            {result.factors.join(", ")}
          </div>
        </section>
      )}
    </div>
  );
};

export default FactorCalculator;
