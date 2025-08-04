import React, { useState } from "react";

const GravelCalculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [density, setDensity] = useState("1600"); // Default in kg/m³ (common gravel)

  const calculateGravel = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);
    const dens = parseFloat(density);

    if (isNaN(l) || isNaN(w) || isNaN(d) || isNaN(dens)) return null;

    const volume = l * w * (d / 100); // m³
    const weight = volume * dens; // kg
    const tons = weight / 1000; // metric tons

    return {
      volume: volume.toFixed(2),
      weight: weight.toFixed(2),
      tons: tons.toFixed(2),
    };
  };

  const result = calculateGravel();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Length (meters)</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="e.g. 10"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Width (meters)</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="e.g. 5"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Depth (cm)</label>
          <input
            type="number"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            placeholder="e.g. 15"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Gravel Density (kg/m³)
          </label>
          <input
            type="number"
            value={density}
            onChange={(e) => setDensity(e.target.value)}
            placeholder="e.g. 1600"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Gravel Estimate
          </h2>
          <div className="space-y-2 text-gray-800 text-lg font-medium">
            <div className="flex justify-between">
              <span>Volume:</span>
              <span>{result.volume} m³</span>
            </div>
            <div className="flex justify-between">
              <span>Weight:</span>
              <span>{result.weight} kg</span>
            </div>
            <div className="flex justify-between">
              <span>Weight (Tons):</span>
              <span>{result.tons} metric tons</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default GravelCalculator;
