import React, { useState } from "react";

const RoofingCalculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [pitch, setPitch] = useState("");
  const [area, setArea] = useState(null);

  const calculateRoofingArea = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const p = parseFloat(pitch);

    if (isNaN(l) || isNaN(w) || isNaN(p)) {
      setArea("Please enter valid values");
      return;
    }

    const pitchFactor = Math.sqrt(1 + Math.pow(p / 12, 2));
    const totalArea = (l * w * pitchFactor).toFixed(2);
    setArea(totalArea);
  };

  return (
    <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Roofing Calculator
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Roof Length (ft)</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Enter roof length"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Roof Width (ft)</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Enter roof width"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Roof Pitch (rise per 12 inches of run)
        </label>
        <input
          type="number"
          value={pitch}
          onChange={(e) => setPitch(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Enter roof pitch (e.g. 4 for 4/12)"
        />
      </div>

      <button
        onClick={calculateRoofingArea}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Calculate Area
      </button>

      {area && (
        <div className="mt-4 text-center text-lg font-semibold">
          Total Roofing Area:{" "}
          <span className="text-blue-700">{area} sq ft</span>
        </div>
      )}
    </div>
  );
};

export default RoofingCalculator;
