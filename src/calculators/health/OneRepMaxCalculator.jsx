import React, { useState } from "react";

const OneRepMaxCalculator = () => {
  const [weightLifted, setWeightLifted] = useState("100");
  const [reps, setReps] = useState("5");

  const calculateOneRepMax = () => {
    const w = parseFloat(weightLifted);
    const r = parseInt(reps);

    if (isNaN(w) || isNaN(r) || w <= 0 || r <= 0) return null;

    // Epley Formula: 1RM = weight * (1 + reps / 30)
    const oneRepMax = w * (1 + r / 30);
    return oneRepMax.toFixed(2);
  };

  const result = calculateOneRepMax();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Weight Lifted (kg)</label>
          <input
            type="number"
            value={weightLifted}
            onChange={(e) => setWeightLifted(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Repetitions</label>
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Estimated One-Rep Max
          </h2>
          <div className="text-lg font-semibold text-gray-700">{result} kg</div>
        </section>
      )}
    </div>
  );
};

export default OneRepMaxCalculator;
