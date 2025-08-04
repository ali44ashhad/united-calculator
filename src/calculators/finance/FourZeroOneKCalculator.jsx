import React, { useState } from "react";

const FourZeroOneKCalculator = () => {
  const [annualContribution, setAnnualContribution] = useState("19500");
  const [employerMatch, setEmployerMatch] = useState("50"); // in percentage
  const [salary, setSalary] = useState("60000");
  const [annualReturn, setAnnualReturn] = useState("7");
  const [years, setYears] = useState("30");

  const calculate401k = () => {
    const contribution = parseFloat(annualContribution);
    const matchPercent = parseFloat(employerMatch) / 100;
    const salaryAmt = parseFloat(salary);
    const returnRate = parseFloat(annualReturn) / 100;
    const time = parseFloat(years);

    if (
      isNaN(contribution) ||
      isNaN(matchPercent) ||
      isNaN(salaryAmt) ||
      isNaN(returnRate) ||
      isNaN(time)
    )
      return null;

    const employerMatchAmount =
      Math.min(contribution, salaryAmt * 0.06) * matchPercent;

    let total = 0;
    for (let i = 0; i < time; i++) {
      total = (total + contribution + employerMatchAmount) * (1 + returnRate);
    }

    const totalContribution = (contribution + employerMatchAmount) * time;
    const totalGrowth = total - totalContribution;

    return {
      total: total.toFixed(2),
      totalContribution: totalContribution.toFixed(2),
      totalGrowth: totalGrowth.toFixed(2),
    };
  };

  const result = calculate401k();

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
            placeholder="e.g. 19500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Employer Match (%)</label>
          <input
            type="number"
            value={employerMatch}
            onChange={(e) => setEmployerMatch(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 50"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Annual Salary ($)</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 60000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Expected Annual Return (%)
          </label>
          <input
            type="number"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 7"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Years of Investment</label>
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
            401(k) Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Total Contributions:</span>
              <span className="text-yellow-600 font-medium">
                ${result.totalContribution}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Estimated Growth:</span>
              <span className="text-green-600 font-medium">
                ${result.totalGrowth}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Total Value at Retirement:</span>
              <span className="text-blue-600">${result.total}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default FourZeroOneKCalculator;
