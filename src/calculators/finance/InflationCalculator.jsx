import React, { useState } from "react";

const InflationCalculator = () => {
  const [initialAmount, setInitialAmount] = useState("1000");
  const [inflationRate, setInflationRate] = useState("3");
  const [years, setYears] = useState("10");

  const calculateInflation = () => {
    const P = parseFloat(initialAmount);
    const r = parseFloat(inflationRate) / 100;
    const t = parseFloat(years);

    if (isNaN(P) || isNaN(r) || isNaN(t)) return null;

    const futureValue = P / Math.pow(1 + r, t);
    const depreciation = P - futureValue;

    return {
      adjustedValue: futureValue.toFixed(2),
      depreciation: depreciation.toFixed(2),
    };
  };

  const result = calculateInflation();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Initial Amount (₹)</label>
          <input
            type="number"
            value={initialAmount}
            onChange={(e) => setInitialAmount(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 1000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Inflation Rate (%)</label>
          <input
            type="number"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 3"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Time Period (Years)</label>
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
            Inflation Adjusted Result
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Adjusted Value:</span>
              <span className="text-blue-600 font-medium">
                ₹{result.adjustedValue}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Loss in Value:</span>
              <span className="text-red-600">₹{result.depreciation}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default InflationCalculator;
