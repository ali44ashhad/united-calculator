import React, { useState } from "react";

const HeatIndexCalculator = () => {
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");

  const calculateHeatIndex = () => {
    const T = parseFloat(temperature);
    const R = parseFloat(humidity);

    if (isNaN(T) || isNaN(R)) return null;

    const HI =
      -42.379 +
      2.04901523 * T +
      10.14333127 * R -
      0.22475541 * T * R -
      0.00683783 * T * T -
      0.05481717 * R * R +
      0.00122874 * T * T * R +
      0.00085282 * T * R * R -
      0.00000199 * T * T * R * R;

    return HI.toFixed(2);
  };

  const result = calculateHeatIndex();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Temperature (°F)</label>
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="e.g. 90"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Humidity (%)</label>
          <input
            type="number"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
            placeholder="e.g. 70"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Heat Index Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Heat Index:</span>
            <span className="text-pink-600">{result} °F</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default HeatIndexCalculator;
