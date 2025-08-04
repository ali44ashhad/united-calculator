import React, { useState } from "react";

const FinanceCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState("10000");
  const [annualRate, setAnnualRate] = useState("8"); // in %
  const [years, setYears] = useState("10");

  const calculateFutureValue = () => {
    const P = parseFloat(initialInvestment);
    const r = parseFloat(annualRate) / 100;
    const t = parseFloat(years);

    if (isNaN(P) || isNaN(r) || isNaN(t)) return null;

    const futureValue = P * Math.pow(1 + r, t);
    const totalInterest = futureValue - P;

    return {
      futureValue: futureValue.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculateFutureValue();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Initial Investment ($)
          </label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
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
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 8"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Time Period (in Years)
          </label>
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
            Finance Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Total Interest Earned:</span>
              <span className="text-green-600 font-medium">
                ${result.totalInterest}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Future Value:</span>
              <span className="text-blue-600">${result.futureValue}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default FinanceCalculator;
