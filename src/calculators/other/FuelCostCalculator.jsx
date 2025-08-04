import React, { useState } from "react";

const FuelCostCalculator = () => {
  const [distance, setDistance] = useState("");
  const [mileage, setMileage] = useState("");
  const [fuelPrice, setFuelPrice] = useState("");

  const calculateFuelCost = () => {
    const D = parseFloat(distance);
    const M = parseFloat(mileage);
    const P = parseFloat(fuelPrice);

    if (isNaN(D) || isNaN(M) || isNaN(P) || M === 0) return null;

    const cost = (D / M) * P;
    return cost.toFixed(2);
  };

  const result = calculateFuelCost();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Distance (km)</label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="e.g. 150"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Mileage (km/l)</label>
          <input
            type="number"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            placeholder="e.g. 18"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Fuel Price (₹/l)</label>
          <input
            type="number"
            value={fuelPrice}
            onChange={(e) => setFuelPrice(e.target.value)}
            placeholder="e.g. 105"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Fuel Cost Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Total Fuel Cost:</span>
            <span className="text-green-600">₹{result}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default FuelCostCalculator;
