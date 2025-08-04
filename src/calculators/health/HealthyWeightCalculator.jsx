import React, { useState } from "react";

const HealthyWeightCalculator = () => {
  const [height, setHeight] = useState("170"); // in cm

  const calculateHealthyWeight = () => {
    const h = parseFloat(height);
    if (isNaN(h) || h <= 0) return null;

    const heightInMeters = h / 100;
    const minWeight = 18.5 * heightInMeters * heightInMeters;
    const maxWeight = 24.9 * heightInMeters * heightInMeters;

    return {
      min: minWeight.toFixed(1),
      max: maxWeight.toFixed(1),
    };
  };

  const result = calculateHealthyWeight();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Height (in cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Healthy Weight Range
          </h2>
          <div className="text-lg font-semibold text-gray-700">
            {result.min} kg – {result.max} kg
          </div>
        </section>
      )}
    </div>
  );
};

export default HealthyWeightCalculator;
