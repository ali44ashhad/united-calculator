import React, { useState } from "react";

const ProteinCalculator = () => {
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");

  const getProteinIntake = () => {
    const w = parseFloat(weight);
    if (!w) return null;

    let multiplier = 0.8;
    switch (activityLevel) {
      case "light":
        multiplier = 1.0;
        break;
      case "moderate":
        multiplier = 1.3;
        break;
      case "active":
        multiplier = 1.6;
        break;
      case "athlete":
        multiplier = 1.8;
        break;
      default:
        multiplier = 0.8;
    }

    return (w * multiplier).toFixed(1);
  };

  const protein = getProteinIntake();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Your Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Activity Level</label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="sedentary">Sedentary (little to no exercise)</option>
            <option value="light">
              Lightly active (light exercise 1–3 days/week)
            </option>
            <option value="moderate">
              Moderately active (moderate exercise 3–5 days/week)
            </option>
            <option value="active">Active (hard exercise 6–7 days/week)</option>
            <option value="athlete">
              Athlete (twice/day or intense training)
            </option>
          </select>
        </div>
      </div>

      {protein && (
        <section className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            Recommended Protein Intake
          </h2>
          <p className="text-gray-800">
            You should consume approximately{" "}
            <span className="font-semibold">{protein} grams</span> of protein
            per day based on your activity level.
          </p>
        </section>
      )}
    </div>
  );
};

export default ProteinCalculator;
