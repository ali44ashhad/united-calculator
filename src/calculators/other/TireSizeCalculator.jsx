import React, { useState } from "react";

const TireSizeCalculator = () => {
  const [tireWidth, setTireWidth] = useState("205");
  const [aspectRatio, setAspectRatio] = useState("55");
  const [rimDiameter, setRimDiameter] = useState("16");

  const calculateTireSize = () => {
    const width = parseFloat(tireWidth);
    const ratio = parseFloat(aspectRatio);
    const rim = parseFloat(rimDiameter);

    if (isNaN(width) || isNaN(ratio) || isNaN(rim)) return null;

    // Sidewall height in mm
    const sidewall = (width * ratio) / 100;

    // Convert rim diameter to mm (1 inch = 25.4 mm)
    const rimMM = rim * 25.4;

    // Overall diameter = (2 * sidewall) + rim
    const diameter = (2 * sidewall + rimMM) / 25.4; // Convert to inches
    const circumference = Math.PI * diameter;

    return {
      sidewall: sidewall.toFixed(2),
      diameter: diameter.toFixed(2),
      circumference: circumference.toFixed(2),
    };
  };

  const result = calculateTireSize();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Tire Width (mm)</label>
          <input
            type="number"
            value={tireWidth}
            onChange={(e) => setTireWidth(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 205"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Aspect Ratio (%)</label>
          <input
            type="number"
            value={aspectRatio}
            onChange={(e) => setAspectRatio(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 55"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Rim Diameter (inches)
          </label>
          <input
            type="number"
            value={rimDiameter}
            onChange={(e) => setRimDiameter(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 16"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Tire Size Results
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Sidewall Height:</span>
              <span className="text-yellow-600 font-medium">
                {result.sidewall} mm
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Overall Diameter:</span>
              <span className="text-green-600 font-medium">
                {result.diameter} in
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Circumference:</span>
              <span className="text-blue-600">{result.circumference} in</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default TireSizeCalculator;
