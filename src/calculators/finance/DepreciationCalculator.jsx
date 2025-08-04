import React, { useState } from "react";

const DepreciationCalculator = () => {
  const [cost, setCost] = useState("50000");
  const [salvageValue, setSalvageValue] = useState("5000");
  const [usefulLife, setUsefulLife] = useState("10");

  const calculateDepreciation = () => {
    const c = parseFloat(cost);
    const s = parseFloat(salvageValue);
    const life = parseFloat(usefulLife);

    if (
      isNaN(c) ||
      isNaN(s) ||
      isNaN(life) ||
      c <= 0 ||
      life <= 0 ||
      s < 0 ||
      s > c
    )
      return null;

    const annualDepreciation = (c - s) / life;
    const totalDepreciation = annualDepreciation * life;

    return {
      annualDepreciation: annualDepreciation.toFixed(2),
      totalDepreciation: totalDepreciation.toFixed(2),
    };
  };

  const result = calculateDepreciation();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Cost of Asset ($)</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 50000"
            min="0"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Salvage Value ($)</label>
          <input
            type="number"
            value={salvageValue}
            onChange={(e) => setSalvageValue(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5000"
            min="0"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Useful Life (years)</label>
          <input
            type="number"
            value={usefulLife}
            onChange={(e) => setUsefulLife(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
            min="1"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Depreciation Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Annual Depreciation:</span>
              <span className="text-blue-600 font-medium">
                ${result.annualDepreciation}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Total Depreciation:</span>
              <span className="text-green-600">
                ${result.totalDepreciation}
              </span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DepreciationCalculator;
