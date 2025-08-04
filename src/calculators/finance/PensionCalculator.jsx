import React, { useState } from "react";

const PensionCalculator = () => {
  const [currentAge, setCurrentAge] = useState("30");
  const [retirementAge, setRetirementAge] = useState("60");
  const [monthlyContribution, setMonthlyContribution] = useState("5000");
  const [annualReturnRate, setAnnualReturnRate] = useState("10");

  const calculatePension = () => {
    const ageNow = parseFloat(currentAge);
    const retireAt = parseFloat(retirementAge);
    const monthlyInvest = parseFloat(monthlyContribution);
    const annualRate = parseFloat(annualReturnRate);

    if (
      isNaN(ageNow) ||
      isNaN(retireAt) ||
      isNaN(monthlyInvest) ||
      isNaN(annualRate) ||
      ageNow >= retireAt
    )
      return null;

    const totalMonths = (retireAt - ageNow) * 12;
    const monthlyRate = annualRate / 100 / 12;

    const futureValue =
      monthlyInvest *
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
      (1 + monthlyRate);

    const totalInvested = monthlyInvest * totalMonths;
    const estimatedReturns = futureValue - totalInvested;

    return {
      totalInvested: totalInvested.toFixed(2),
      estimatedReturns: estimatedReturns.toFixed(2),
      futureValue: futureValue.toFixed(2),
    };
  };

  const result = calculatePension();

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
          <label className="block mb-1 font-medium">
            Monthly Contribution (₹)
          </label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Expected Annual Return (%)
          </label>
          <input
            type="number"
            value={annualReturnRate}
            onChange={(e) => setAnnualReturnRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Pension Summary at Retirement
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Total Invested:</span>
              <span className="text-yellow-600 font-medium">
                ₹{result.totalInvested}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Estimated Returns:</span>
              <span className="text-green-600 font-medium">
                ₹{result.estimatedReturns}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Total Pension Fund:</span>
              <span className="text-blue-600">₹{result.futureValue}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PensionCalculator;
