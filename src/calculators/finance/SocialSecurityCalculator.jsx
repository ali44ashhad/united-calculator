import React, { useState } from "react";

const SocialSecurityCalculator = () => {
  const [currentAge, setCurrentAge] = useState("30");
  const [retirementAge, setRetirementAge] = useState("67");
  const [monthlyBenefit, setMonthlyBenefit] = useState("1500");

  const calculate = () => {
    const ageNow = parseInt(currentAge);
    const ageRetire = parseInt(retirementAge);
    const benefit = parseFloat(monthlyBenefit);

    if (
      isNaN(ageNow) ||
      isNaN(ageRetire) ||
      isNaN(benefit) ||
      ageNow >= ageRetire
    )
      return null;

    const yearsToCollect = 85 - ageRetire; // Assuming life expectancy of 85
    const totalBenefit = yearsToCollect * 12 * benefit;

    return {
      yearsToCollect,
      totalBenefit: totalBenefit.toFixed(2),
    };
  };

  const result = calculate();

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
            placeholder="e.g. 67"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Expected Monthly Benefit ($)
          </label>
          <input
            type="number"
            value={monthlyBenefit}
            onChange={(e) => setMonthlyBenefit(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 1500"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Estimated Social Security
          </h2>
          <div className="space-y-2 text-lg font-semibold">
            <div className="flex justify-between">
              <span>Years Receiving Benefits:</span>
              <span className="text-blue-600">
                {result.yearsToCollect} years
              </span>
            </div>
            <div className="flex justify-between">
              <span>Total Estimated Benefit:</span>
              <span className="text-green-600">${result.totalBenefit}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SocialSecurityCalculator;
