import React, { useState } from "react";

const HeightCalculator = () => {
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState("cm");

  const convertHeight = () => {
    const h = parseFloat(height);
    if (isNaN(h)) return null;

    let cm = 0;
    if (unit === "cm") {
      cm = h;
    } else if (unit === "ft") {
      cm = h * 30.48;
    } else if (unit === "in") {
      cm = h * 2.54;
    }

    const feet = Math.floor(cm / 30.48);
    const inches = ((cm / 2.54) % 12).toFixed(2);
    return {
      cm: cm.toFixed(2),
      feet,
      inches,
    };
  };

  const result = convertHeight();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Enter Height</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 170"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Select Unit</label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="cm">Centimeters (cm)</option>
            <option value="ft">Feet (ft)</option>
            <option value="in">Inches (in)</option>
          </select>
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Converted Height
          </h2>
          <div className="text-gray-800 space-y-2">
            <p>
              <strong>Centimeters:</strong> {result.cm} cm
            </p>
            <p>
              <strong>Feet & Inches:</strong> {result.feet} ft {result.inches}{" "}
              in
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default HeightCalculator;
