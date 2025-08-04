import React, { useState } from "react";

const PregnancyWeightGainCalculator = () => {
  const [prePregnancyWeight, setPrePregnancyWeight] = useState("");
  const [height, setHeight] = useState("");
  const [trimester, setTrimester] = useState("1");

  const calculateBMI = () => {
    const weight = parseFloat(prePregnancyWeight);
    const heightInMeters = parseFloat(height) / 100;

    if (!weight || !heightInMeters) return null;

    return weight / (heightInMeters * heightInMeters);
  };

  const getWeightGainRange = () => {
    const bmi = calculateBMI();
    if (bmi === null) return null;

    if (bmi < 18.5) return "28-40 lbs (12.5–18 kg)";
    if (bmi < 25) return "25-35 lbs (11.5–16 kg)";
    if (bmi < 30) return "15-25 lbs (7–11.5 kg)";
    return "11-20 lbs (5–9 kg)";
  };

  const recommended = getWeightGainRange();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Pre-pregnancy Weight (kg)
          </label>
          <input
            type="number"
            value={prePregnancyWeight}
            onChange={(e) => setPrePregnancyWeight(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Trimester</label>
          <select
            value={trimester}
            onChange={(e) => setTrimester(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="1">First Trimester</option>
            <option value="2">Second Trimester</option>
            <option value="3">Third Trimester</option>
          </select>
        </div>
      </div>

      {recommended && (
        <section className="bg-pink-50 p-4 rounded-lg border border-pink-200 mt-6">
          <h2 className="text-xl font-semibold text-pink-700 mb-2">
            Recommended Weight Gain
          </h2>
          <p className="text-gray-800">
            Based on your BMI, the total recommended pregnancy weight gain is:{" "}
            <span className="font-semibold">{recommended}</span>
          </p>
        </section>
      )}
    </div>
  );
};

export default PregnancyWeightGainCalculator;
