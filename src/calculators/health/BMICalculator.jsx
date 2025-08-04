import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("70"); // in kg
  const [height, setHeight] = useState("170"); // in cm

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to meters

    if (isNaN(w) || isNaN(h) || h === 0) return null;

    const bmi = w / (h * h);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) category = "Normal weight";
    else if (bmi >= 25 && bmi < 29.9) category = "Overweight";
    else category = "Obese";

    return {
      bmi: bmi.toFixed(2),
      category,
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
            placeholder="e.g. 170"
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
              <span className="text-green-600">{result.category}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BMICalculator;
