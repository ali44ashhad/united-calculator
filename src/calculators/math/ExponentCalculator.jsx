import React, { useState } from "react";

const ExponentCalculator = () => {
  const [base, setBase] = useState("2");
  const [exponent, setExponent] = useState("3");

  const calculateExponent = () => {
    const b = parseFloat(base);
    const e = parseFloat(exponent);

    if (isNaN(b) || isNaN(e)) return null;

    const result = Math.pow(b, e);

    return {
      base: b.toFixed(2),
      exponent: e.toFixed(2),
      result: result.toFixed(4),
    };
  };

  const result = calculateExponent();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Base</label>
          <input
            type="number"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Exponent</label>
          <input
            type="number"
            value={exponent}
            onChange={(e) => setExponent(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 3"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Exponentiation Result
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Base:</span>
              <span className="text-yellow-600 font-medium">{result.base}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Exponent:</span>
              <span className="text-green-600 font-medium">
                {result.exponent}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Result:</span>
              <span className="text-blue-600">{result.result}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ExponentCalculator;
