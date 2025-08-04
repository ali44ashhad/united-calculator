import React, { useState } from "react";

const activityOptions = [
  { label: "Walking (5 km/h)", value: 3.5 },
  { label: "Running (8 km/h)", value: 8.3 },
  { label: "Cycling (leisure)", value: 4.0 },
  { label: "Swimming (light)", value: 6.0 },
  { label: "Yoga", value: 2.5 },
  { label: "Weight Lifting", value: 3.0 },
  { label: "Dancing", value: 5.0 },
];

const CaloriesBurnedCalculator = () => {
  const [weight, setWeight] = useState("70"); // in kg
  const [duration, setDuration] = useState("30"); // in minutes
  const [activity, setActivity] = useState("3.5"); // MET

  const calculateCaloriesBurned = () => {
    const w = parseFloat(weight);
    const d = parseFloat(duration) / 60; // convert minutes to hours
    const met = parseFloat(activity);

    if (isNaN(w) || isNaN(d) || isNaN(met)) return null;

    const calories = met * w * d;
    return calories.toFixed(2);
  };

  const result = calculateCaloriesBurned();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Your Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 70"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Duration (minutes)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 30"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Activity Type</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            {activityOptions.map((opt) => (
              <option key={opt.label} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Calories Burned Summary
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Estimated Calories Burned:</span>
            <span className="text-blue-600">{result} kcal</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default CaloriesBurnedCalculator;
