import React, { useState } from "react";

const DensityCalculator = () => {
  const [mass, setMass] = useState("");
  const [volume, setVolume] = useState("");

  const calculateDensity = () => {
    const m = parseFloat(mass);
    const v = parseFloat(volume);

    if (isNaN(m) || isNaN(v) || v === 0) return null;

    const density = m / v;
    return density.toFixed(3);
  };

  const result = calculateDensity();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Mass (kg)</label>
          <input
            type="number"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
            placeholder="e.g. 10"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Volume (m³)</label>
          <input
            type="number"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            placeholder="e.g. 2"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Density Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Density:</span>
            <span className="text-blue-600">{result} kg/m³</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default DensityCalculator;
