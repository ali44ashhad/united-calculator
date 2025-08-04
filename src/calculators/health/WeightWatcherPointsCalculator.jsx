import React, { useState } from "react";

const WeightWatcherPointsCalculator = () => {
  const [calories, setCalories] = useState("");
  const [fat, setFat] = useState("");
  const [fiber, setFiber] = useState("");

  const calculatePoints = () => {
    const cal = parseFloat(calories);
    const fatGrams = parseFloat(fat);
    let fiberGrams = parseFloat(fiber);

    if (isNaN(cal) || isNaN(fatGrams) || isNaN(fiberGrams)) return null;
    if (fiberGrams > 4) fiberGrams = 4;

    const points = cal / 50 + fatGrams / 12 - fiberGrams / 5;
    return Math.round(points * 10) / 10;
  };

  const result = calculatePoints();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Calories</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Fat (g)</label>
          <input
            type="number"
            value={fat}
            onChange={(e) => setFat(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Fiber (g)</label>
          <input
            type="number"
            value={fiber}
            onChange={(e) => setFiber(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>

      {result !== null && (
        <section className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            Weight Watchers Points
          </h2>
          <p className="text-gray-800 text-lg">
            🍽️ <strong>Points:</strong> {result}
          </p>
        </section>
      )}
    </div>
  );
};

export default WeightWatcherPointsCalculator;
