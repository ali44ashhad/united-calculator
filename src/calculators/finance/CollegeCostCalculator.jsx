import React, { useState } from "react";

const CollegeCostCalculator = () => {
  const [currentCost, setCurrentCost] = useState("20000"); // per year
  const [yearsUntilCollege, setYearsUntilCollege] = useState("10");
  const [inflationRate, setInflationRate] = useState("5");
  const [numberOfYears, setNumberOfYears] = useState("4");

  const calculateCollegeCost = () => {
    const cost = parseFloat(currentCost);
    const inflation = parseFloat(inflationRate) / 100;
    const waitYears = parseFloat(yearsUntilCollege);
    const studyYears = parseFloat(numberOfYears);

    if (
      isNaN(cost) ||
      isNaN(inflation) ||
      isNaN(waitYears) ||
      isNaN(studyYears)
    )
      return null;

    let totalFutureCost = 0;
    for (let i = 0; i < studyYears; i++) {
      const year = waitYears + i;
      const inflatedCost = cost * Math.pow(1 + inflation, year);
      totalFutureCost += inflatedCost;
    }

    return {
      futureAnnualCost: (cost * Math.pow(1 + inflation, waitYears)).toFixed(2),
      totalFutureCost: totalFutureCost.toFixed(2),
    };
  };

  const result = calculateCollegeCost();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Current Annual College Cost ($)
          </label>
          <input
            type="number"
            value={currentCost}
            onChange={(e) => setCurrentCost(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 20000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Years Until College</label>
          <input
            type="number"
            value={yearsUntilCollege}
            onChange={(e) => setYearsUntilCollege(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Annual Inflation Rate (%)
          </label>
          <input
            type="number"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Number of Years in College
          </label>
          <input
            type="number"
            value={numberOfYears}
            onChange={(e) => setNumberOfYears(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 4"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            College Cost Estimate
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">First Year Cost (Future):</span>
              <span className="text-yellow-600 font-medium">
                ${result.futureAnnualCost}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">
                Total College Cost (All Years):
              </span>
              <span className="text-blue-600">${result.totalFutureCost}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CollegeCostCalculator;
