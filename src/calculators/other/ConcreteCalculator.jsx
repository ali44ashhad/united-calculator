import React, { useState } from "react";

const ConcreteCalculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");

  const calculateConcrete = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);

    if (isNaN(l) || isNaN(w) || isNaN(d)) return null;

    // Convert depth from inches to feet
    const depthInFeet = d / 12;

    // Volume in cubic feet
    const volumeCubicFeet = l * w * depthInFeet;

    // Convert to cubic yards (1 cubic yard = 27 cubic feet)
    const volumeCubicYards = volumeCubicFeet / 27;

    return {
      cubicFeet: volumeCubicFeet.toFixed(2),
      cubicYards: volumeCubicYards.toFixed(2),
    };
  };

  const result = calculateConcrete();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Length (ft)</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Width (ft)</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 8"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Depth (inches)</label>
          <input
            type="number"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 6"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Concrete Volume Estimate
          </h2>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Total Volume:</span>
              <span>{result.cubicFeet} cubic feet</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Concrete Needed:</span>
              <span className="text-blue-600">
                {result.cubicYards} cubic yards
              </span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ConcreteCalculator;
