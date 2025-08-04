import React, { useState } from "react";

const CarbohydrateCalculator = () => {
  const [totalCarbs, setTotalCarbs] = useState("40");
  const [fiber, setFiber] = useState("5");
  const [sugarAlcohols, setSugarAlcohols] = useState("10");

  const calculateNetCarbs = () => {
    const carbs = parseFloat(totalCarbs);
    const fiberVal = parseFloat(fiber);
    const sugarAlcohol = parseFloat(sugarAlcohols);

    if (isNaN(carbs) || isNaN(fiberVal) || isNaN(sugarAlcohol)) return null;

    const netCarbs = carbs - fiberVal - sugarAlcohol / 2;
    return netCarbs.toFixed(2);
  };

  const result = calculateNetCarbs();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Total Carbohydrates (g)
          </label>
          <input
            type="number"
            value={totalCarbs}
            onChange={(e) => setTotalCarbs(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 40"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Fiber (g)</label>
          <input
            type="number"
            value={fiber}
            onChange={(e) => setFiber(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Sugar Alcohols (g)</label>
          <input
            type="number"
            value={sugarAlcohols}
            onChange={(e) => setSugarAlcohols(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Net Carbohydrate Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Net Carbs:</span>
            <span className="text-green-600">{result} g</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default CarbohydrateCalculator;
