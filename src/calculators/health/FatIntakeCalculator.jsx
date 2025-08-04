import React, { useState } from "react";

const FatIntakeCalculator = () => {
  const [calories, setCalories] = useState("2000");
  const [fatPercentage, setFatPercentage] = useState("30");

  const calculateFatIntake = () => {
    const cal = parseFloat(calories);
    const percent = parseFloat(fatPercentage);

    if (isNaN(cal) || isNaN(percent)) return null;

    const fatCalories = (cal * percent) / 100;
    const fatGrams = fatCalories / 9;

    return fatGrams.toFixed(1);
  };

  const result = calculateFatIntake();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Daily Calorie Intake</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Fat Percentage (%)</label>
          <input
            type="number"
            value={fatPercentage}
            onChange={(e) => setFatPercentage(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Recommended Fat Intake
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Daily Fat:</span>
            <span className="text-green-600">{result} grams</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default FatIntakeCalculator;
