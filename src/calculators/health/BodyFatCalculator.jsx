import React, { useState } from "react";

const BodyFatCalculator = () => {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("175");
  const [neck, setNeck] = useState("38");
  const [waist, setWaist] = useState("85");
  const [hip, setHip] = useState("95"); // Only used for females

  const calculateBodyFat = () => {
    const h = parseFloat(height);
    const n = parseFloat(neck);
    const w = parseFloat(waist);
    const hp = parseFloat(hip);

    if (isNaN(h) || isNaN(n) || isNaN(w)) return null;

    let bodyFat;
    if (gender === "male") {
      bodyFat = 86.01 * Math.log10(w - n) - 70.041 * Math.log10(h) + 36.76;
    } else {
      if (isNaN(hp)) return null;
      bodyFat =
        163.205 * Math.log10(w + hp - n) - 97.684 * Math.log10(h) - 78.387;
    }

    return bodyFat.toFixed(2);
  };

  const result = calculateBodyFat();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
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

        <div>
          <label className="block mb-1 font-medium">
            Neck Circumference (cm)
          </label>
          <input
            type="number"
            value={neck}
            onChange={(e) => setNeck(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 38"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Waist Circumference (cm)
          </label>
          <input
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 85"
          />
        </div>

        {gender === "female" && (
          <div>
            <label className="block mb-1 font-medium">
              Hip Circumference (cm)
            </label>
            <input
              type="number"
              value={hip}
              onChange={(e) => setHip(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 95"
            />
          </div>
        )}
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Body Fat Result Summary
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Body Fat Percentage:</span>
            <span className="text-blue-600">{result}%</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default BodyFatCalculator;
