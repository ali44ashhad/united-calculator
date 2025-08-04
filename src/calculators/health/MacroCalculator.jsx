import React, { useState } from "react";

const MacroCalculator = () => {
  const [calories, setCalories] = useState("2000");
  const [carbsPercent, setCarbsPercent] = useState("50");
  const [proteinPercent, setProteinPercent] = useState("20");
  const [fatPercent, setFatPercent] = useState("30");

  const calculateMacros = () => {
    const cals = parseFloat(calories);
    const carbs = parseFloat(carbsPercent);
    const protein = parseFloat(proteinPercent);
    const fat = parseFloat(fatPercent);

    if (
      isNaN(cals) ||
      isNaN(carbs) ||
      isNaN(protein) ||
      isNaN(fat) ||
      carbs + protein + fat !== 100
    ) {
      return null;
    }

    const carbsGrams = ((carbs / 100) * cals) / 4;
    const proteinGrams = ((protein / 100) * cals) / 4;
    const fatGrams = ((fat / 100) * cals) / 9;

    return {
      carbs: carbsGrams.toFixed(1),
      protein: proteinGrams.toFixed(1),
      fat: fatGrams.toFixed(1),
    };
  };

  const result = calculateMacros();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Daily Calories</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">Carbs %</label>
            <input
              type="number"
              value={carbsPercent}
              onChange={(e) => setCarbsPercent(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Protein %</label>
            <input
              type="number"
              value={proteinPercent}
              onChange={(e) => setProteinPercent(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Fat %</label>
            <input
              type="number"
              value={fatPercent}
              onChange={(e) => setFatPercent(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Daily Macronutrient Breakdown
          </h2>
          <div className="text-gray-700 space-y-1 text-lg">
            <div>Carbohydrates: {result.carbs} g</div>
            <div>Protein: {result.protein} g</div>
            <div>Fat: {result.fat} g</div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MacroCalculator;
