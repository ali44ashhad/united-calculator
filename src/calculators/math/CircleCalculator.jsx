import React, { useState } from "react";

const CircleCalculator = () => {
  const [radius, setRadius] = useState("");
  const [result, setResult] = useState(null);

  const calculateCircle = () => {
    const r = parseFloat(radius);
    if (isNaN(r) || r < 0) {
      setResult("Invalid radius");
      return;
    }

    const diameter = 2 * r;
    const circumference = 2 * Math.PI * r;
    const area = Math.PI * r * r;

    setResult({
      diameter: diameter.toFixed(2),
      circumference: circumference.toFixed(2),
      area: area.toFixed(2),
    });
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Circle Calculator
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Radius (in units)</label>
          <input
            type="number"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5"
          />
        </div>

        <button
          onClick={calculateCircle}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold transition"
        >
          Calculate
        </button>
      </div>

      {result && typeof result === "object" && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Circle Properties
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-700">Diameter:</span>
              <span className="text-yellow-600 font-medium">
                {result.diameter} units
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Circumference:</span>
              <span className="text-green-600 font-medium">
                {result.circumference} units
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Area:</span>
              <span className="text-blue-600">{result.area} sq units</span>
            </div>
          </div>
        </section>
      )}

      {typeof result === "string" && (
        <p className="mt-4 text-red-600 font-medium">{result}</p>
      )}
    </div>
  );
};

export default CircleCalculator;
