import React, { useState } from "react";

const BodySurfaceAreaCalculator = () => {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("175");

  const calculateBSA = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h)) return null;

    const bsa = Math.sqrt((w * h) / 3600);
    return bsa.toFixed(2);
  };

  const result = calculateBSA();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 70"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 175"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Body Surface Area Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Your BSA:</span>
            <span className="text-blue-600">{result} m²</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default BodySurfaceAreaCalculator;
