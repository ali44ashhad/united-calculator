import React, { useState } from "react";

const CalorieCalculator = () => {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("175");
  const [age, setAge] = useState("25");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.55"); // default: Moderately active

  const calculateCalories = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const act = parseFloat(activity);

    if (isNaN(w) || isNaN(h) || isNaN(a) || isNaN(act)) return null;

    let bmr =
      gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const calories = bmr * act;

    return {
      bmr: bmr.toFixed(2),
      calories: calories.toFixed(2),
    };
  };

  const result = calculateCalories();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 70"
          />
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
          <label className="block mb-1 font-medium">Age (years)</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 25"
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

        <div>
          <label className="block mb-1 font-medium">Activity Level</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="1.2">Sedentary (little or no exercise)</option>
            <option value="1.375">Lightly active (1–3 days/week)</option>
            <option value="1.55">Moderately active (3–5 days/week)</option>
            <option value="1.725">Very active (6–7 days/week)</option>
            <option value="1.9">
              Super active (physical job or 2x training)
            </option>
          </select>
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Calorie Requirement Summary
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-700">Your BMR:</span>
              <span className="text-yellow-600 font-medium">
                {result.bmr} kcal/day
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Daily Calorie Needs:</span>
              <span className="text-blue-600">{result.calories} kcal/day</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CalorieCalculator;
