import React, { useState } from "react";

const BodyTypeCalculator = () => {
  const [weight, setWeight] = useState("70"); // in kg
  const [height, setHeight] = useState("175"); // in cm
  const [frame, setFrame] = useState("medium"); // small, medium, large

  const calculateBodyType = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;

    if (isNaN(w) || isNaN(h) || h <= 0) return null;

    const bmi = w / (h * h);

    let bodyType = "";

    if (bmi < 18.5) {
      bodyType = "Ectomorph";
    } else if (bmi < 25) {
      if (frame === "small") bodyType = "Ectomorph";
      else if (frame === "medium") bodyType = "Mesomorph";
      else bodyType = "Endomorph";
    } else {
      if (frame === "small") bodyType = "Mesomorph";
      else bodyType = "Endomorph";
    }

    return { bmi: bmi.toFixed(1), bodyType };
  };

  const result = calculateBodyType();

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
          <label className="block mb-1 font-medium">Body Frame Size</label>
          <select
            value={frame}
            onChange={(e) => setFrame(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="small">Small Frame</option>
            <option value="medium">Medium Frame</option>
            <option value="large">Large Frame</option>
          </select>
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Body Type Result
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-700">Your BMI:</span>
              <span className="text-yellow-600 font-medium">{result.bmi}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Estimated Body Type:</span>
              <span className="text-blue-600">{result.bodyType}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BodyTypeCalculator;
