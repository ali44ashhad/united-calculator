import React, { useState } from "react";

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState("30");
  const [retirementAge, setRetirementAge] = useState("60");
  const [currentSavings, setCurrentSavings] = useState("500000");
  const [monthlyContribution, setMonthlyContribution] = useState("10000");
  const [expectedReturn, setExpectedReturn] = useState("10");

  const calculateRetirementSavings = () => {
    const ageNow = parseFloat(currentAge);
    const ageRetire = parseFloat(retirementAge);
    const savings = parseFloat(currentSavings);
    const monthly = parseFloat(monthlyContribution);
    const rate = parseFloat(expectedReturn) / 100;

    if (
      isNaN(ageNow) ||
      isNaN(ageRetire) ||
      isNaN(savings) ||
      isNaN(monthly) ||
      isNaN(rate)
    )
      return null;

    const years = ageRetire - ageNow;
    const months = years * 12;
    const monthlyRate = rate / 12;

    const futureValueSavings = savings * Math.pow(1 + monthlyRate, months);
    const futureValueContributions =
      monthly *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);

    const total = futureValueSavings + futureValueContributions;

    return {
      totalSavings: total.toFixed(2),
    };
  };

  const result = calculateRetirementSavings();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Current Age</label>
          <input
            type="number"
            value={currentAge}
            onChange={(e) => setCurrentAge(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 30"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Retirement Age</label>
          <input
            type="number"
            value={retirementAge}
            onChange={(e) => setRetirementAge(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 60"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Current Savings (₹)</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 500000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Monthly Contribution (₹)
          </label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Expected Annual Return (%)
          </label>
          <input
            type="number"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Retirement Savings Summary
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Total Savings at Retirement:</span>
            <span className="text-green-600">₹{result.totalSavings}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default RetirementCalculator;
