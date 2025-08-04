import React, { useState } from "react";

const WindChillCalculator = () => {
  const [temperature, setTemperature] = useState("");
  const [windSpeed, setWindSpeed] = useState("");

  const calculateWindChill = () => {
    const t = parseFloat(temperature);
    const v = parseFloat(windSpeed);

    if (isNaN(t) || isNaN(v) || t > 50 || v < 3) return null;

    const windChill =
      35.74 +
      0.6215 * t -
      35.75 * Math.pow(v, 0.16) +
      0.4275 * t * Math.pow(v, 0.16);

    return windChill.toFixed(2);
  };

  const result = calculateWindChill();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Temperature (°F) [Must be ≤ 50°F]
          </label>
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Wind Speed (mph) [Must be ≥ 3 mph]
          </label>
          <input
            type="number"
            value={windSpeed}
            onChange={(e) => setWindSpeed(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Wind Chill Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Feels like:</span>
            <span className="text-blue-600">{result} °F</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default WindChillCalculator;
