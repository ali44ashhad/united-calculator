import React, { useState } from "react";

const GasMileageCalculator = () => {
  const [distance, setDistance] = useState("");
  const [fuelUsed, setFuelUsed] = useState("");

  const calculateMPG = () => {
    const D = parseFloat(distance);
    const F = parseFloat(fuelUsed);

    if (isNaN(D) || isNaN(F) || F === 0) return null;

    const mpg = D / F;
    return mpg.toFixed(2);
  };

  const result = calculateMPG();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Distance Traveled (miles)
          </label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="e.g. 300"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Fuel Used (gallons)</label>
          <input
            type="number"
            value={fuelUsed}
            onChange={(e) => setFuelUsed(e.target.value)}
            placeholder="e.g. 10"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Gas Mileage Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Mileage:</span>
            <span className="text-blue-600">{result} MPG</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default GasMileageCalculator;
