import React, { useState } from "react";

const PresentValueCalculator = () => {
  const [futureValue, setFutureValue] = useState("10000");
  const [interestRate, setInterestRate] = useState("5");
  const [years, setYears] = useState("10");

  const calculatePresentValue = () => {
    const FV = parseFloat(futureValue);
    const r = parseFloat(interestRate) / 100;
    const n = parseFloat(years);

    if (isNaN(FV) || isNaN(r) || isNaN(n)) return null;

    const PV = FV / Math.pow(1 + r, n);
    return PV.toFixed(2);
  };

  const result = calculatePresentValue();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Future Value (₹)</label>
          <input
            type="number"
            value={futureValue}
            onChange={(e) => setFutureValue(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Number of Years</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Present Value Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Present Value:</span>
            <span className="text-green-600">₹{result}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default PresentValueCalculator;
