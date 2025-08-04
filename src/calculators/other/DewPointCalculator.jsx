import React, { useState } from "react";

const DewPointCalculator = () => {
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");

  const calculateDewPoint = () => {
    const T = parseFloat(temperature); // temperature in °C
    const RH = parseFloat(humidity); // relative humidity in %

    if (isNaN(T) || isNaN(RH) || RH <= 0 || RH > 100) return null;

    // Magnus formula
    const a = 17.27;
    const b = 237.7;
    const alpha = (a * T) / (b + T) + Math.log(RH / 100);
    const dewPoint = (b * alpha) / (a - alpha);

    return dewPoint.toFixed(2);
  };

  const result = calculateDewPoint();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Temperature (°C)</label>
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="e.g. 25"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Relative Humidity (%)
          </label>
          <input
            type="number"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
            placeholder="e.g. 60"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Dew Point Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Dew Point:</span>
            <span className="text-blue-600">{result} °C</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default DewPointCalculator;
