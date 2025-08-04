import React, { useState } from "react";

const AnorexicBMICalculator = () => {
  const [weight, setWeight] = useState("45"); // kg
  const [height, setHeight] = useState("160"); // cm

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to meters

    if (isNaN(w) || isNaN(h) || h === 0) return null;

    const bmi = w / (h * h);

    let category = "";
    let warning = "";

    if (bmi < 16) {
      category = "Severely Underweight (Anorexic Range)";
      warning = "⚠️ Warning: BMI indicates severe underweight/anorexia risk.";
    } else if (bmi >= 16 && bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    return {
      bmi: bmi.toFixed(2),
      category,
      warning,
    };
  };

  const result = calculateBMI();

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
            placeholder="e.g. 45"
            min="0"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 160"
            min="0"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            BMI Result Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Your BMI:</span>
              <span className="text-blue-600 font-medium">{result.bmi}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Category:</span>
              <span
                className={`${
                  result.warning ? "text-red-600" : "text-green-600"
                }`}
              >
                {result.category}
              </span>
            </div>
            {result.warning && (
              <p className="mt-3 text-red-700 font-semibold">
                {result.warning}
              </p>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default AnorexicBMICalculator;
