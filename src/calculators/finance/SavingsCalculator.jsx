import React, { useState } from "react";

const SavingsCalculator = () => {
  const [initialAmount, setInitialAmount] = useState("10000");
  const [monthlyContribution, setMonthlyContribution] = useState("500");
  const [annualInterestRate, setAnnualInterestRate] = useState("5");
  const [years, setYears] = useState("10");

  const calculateSavings = () => {
    const P = parseFloat(initialAmount);
    const PMT = parseFloat(monthlyContribution);
    const r = parseFloat(annualInterestRate) / 100 / 12;
    const n = parseFloat(years) * 12;

    if (isNaN(P) || isNaN(PMT) || isNaN(r) || isNaN(n)) return null;

    const futureValue =
      P * Math.pow(1 + r, n) + PMT * ((Math.pow(1 + r, n) - 1) / r);

    return {
      futureValue: futureValue.toFixed(2),
    };
  };

  const result = calculateSavings();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Initial Amount ($)</label>
          <input
            type="number"
            value={initialAmount}
            onChange={(e) => setInitialAmount(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Monthly Contribution ($)
          </label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            value={annualInterestRate}
            onChange={(e) => setAnnualInterestRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Years</label>
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
            Savings Growth
          </h2>
          <div className="text-lg font-semibold flex justify-between">
            <span>Future Value:</span>
            <span className="text-green-600">${result.futureValue}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default SavingsCalculator;
