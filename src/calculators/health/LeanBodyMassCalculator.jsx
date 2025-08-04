import React, { useState } from "react";

const LeanBodyMassCalculator = () => {
  const [weight, setWeight] = useState("70"); // kg
  const [height, setHeight] = useState("170"); // cm
  const [gender, setGender] = useState("male");

  const calculateLBM = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h)) return null;

    let lbm;
    if (gender === "male") {
      lbm = 0.407 * w + 0.267 * h - 19.2;
    } else {
      lbm = 0.252 * w + 0.473 * h - 48.3;
    }

    return lbm.toFixed(2);
  };

  const result = calculateLBM();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Weight (in kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

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
            Lean Body Mass
          </h2>
          <div className="text-lg font-semibold text-gray-700">{result} kg</div>
        </section>
      )}
    </div>
  );
};

export default LeanBodyMassCalculator;
