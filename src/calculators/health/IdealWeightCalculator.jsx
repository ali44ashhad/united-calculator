import React, { useState } from "react";

const IdealWeightCalculator = () => {
  const [height, setHeight] = useState("170"); // cm
  const [gender, setGender] = useState("male");

  const calculateIdealWeight = () => {
    const h = parseFloat(height);
    if (isNaN(h) || h < 152) return null;

    const heightInInches = h / 2.54;
    const baseHeight = 60; // inches
    const extraInches = heightInInches - baseHeight;

    if (gender === "male") {
      return (50 + 2.3 * extraInches).toFixed(1);
    } else {
      return (45.5 + 2.3 * extraInches).toFixed(1);
    }
  };

  const result = calculateIdealWeight();

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

        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Ideal Body Weight
          </h2>
          <div className="text-lg font-semibold text-gray-700">{result} kg</div>
        </section>
      )}
    </div>
  );
};

export default IdealWeightCalculator;
