import React, { useState } from "react";

const ROICalculator = () => {
  const [gainFromInvestment, setGainFromInvestment] = useState("120000");
  const [costOfInvestment, setCostOfInvestment] = useState("100000");

  const calculateROI = () => {
    const gain = parseFloat(gainFromInvestment);
    const cost = parseFloat(costOfInvestment);

    if (isNaN(gain) || isNaN(cost) || cost === 0) return null;

    const roi = ((gain - cost) / cost) * 100;

    return {
      roi: roi.toFixed(2),
    };
  };

  const result = calculateROI();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Gain from Investment</label>
          <input
            type="number"
            value={gainFromInvestment}
            onChange={(e) => setGainFromInvestment(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 120000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Cost of Investment</label>
          <input
            type="number"
            value={costOfInvestment}
            onChange={(e) => setCostOfInvestment(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 100000"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            ROI Summary
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Return on Investment (ROI):</span>
            <span className="text-green-600">{result.roi}%</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default ROICalculator;
