import React, { useState } from "react";

const RothIRACalculator = () => {
  const [annualContribution, setAnnualContribution] = useState("6000");
  const [annualReturnRate, setAnnualReturnRate] = useState("7");
  const [years, setYears] = useState("30");

  const calculateRothIRA = () => {
    const contribution = parseFloat(annualContribution);
    const rate = parseFloat(annualReturnRate) / 100;
    const time = parseFloat(years);

    if (isNaN(contribution) || isNaN(rate) || isNaN(time)) return null;

    let futureValue = 0;

    for (let i = 0; i < time; i++) {
      futureValue = (futureValue + contribution) * (1 + rate);
    }

    return {
      futureValue: futureValue.toFixed(2),
    };
  };

  const result = calculateRothIRA();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Annual Contribution ($)
          </label>
          <input
            type="number"
            value={annualContribution}
            onChange={(e) => setAnnualContribution(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 6000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Annual Return Rate (%)
          </label>
          <input
            type="number"
            value={annualReturnRate}
            onChange={(e) => setAnnualReturnRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 7"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Investment Period (Years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 30"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Roth IRA Summary
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Future Value:</span>
            <span className="text-green-600">${result.futureValue}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default RothIRACalculator;
