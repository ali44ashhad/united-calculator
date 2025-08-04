import React, { useState } from "react";

const IRACalculator = () => {
  const [contribution, setContribution] = useState("6000");
  const [rate, setRate] = useState("7");
  const [years, setYears] = useState("30");

  const calculateIRA = () => {
    const c = parseFloat(contribution);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;

    if (isNaN(c) || isNaN(r) || isNaN(n)) return null;

    const futureValue = c * ((Math.pow(1 + r, n) - 1) / r);
    const totalContribution = c * n;
    const interestEarned = futureValue - totalContribution;

    return {
      futureValue: futureValue.toFixed(2),
      interestEarned: interestEarned.toFixed(2),
      totalContribution: totalContribution.toFixed(2),
    };
  };

  const result = calculateIRA();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Monthly Contribution (₹)
          </label>
          <input
            type="number"
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 6000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
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
            IRA Investment Result
          </h2>
          <div className="flex justify-between text-lg font-semibold mb-2">
            <span className="text-gray-800">Future Value:</span>
            <span className="text-green-600">₹{result.futureValue}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mb-2">
            <span className="text-gray-800">Interest Earned:</span>
            <span className="text-blue-600">₹{result.interestEarned}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Total Contribution:</span>
            <span className="text-purple-600">₹{result.totalContribution}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default IRACalculator;
