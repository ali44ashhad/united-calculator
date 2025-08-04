import React, { useState } from "react";

const MileageCalculator = () => {
  const [distance, setDistance] = useState("");
  const [fuel, setFuel] = useState("");
  const [mileage, setMileage] = useState(null);

  const calculateMileage = () => {
    const d = parseFloat(distance);
    const f = parseFloat(fuel);

    if (!isNaN(d) && !isNaN(f) && f !== 0) {
      const result = d / f;
      setMileage(result.toFixed(2));
    } else {
      setMileage(null);
    }
  };

  const handleReset = () => {
    setDistance("");
    setFuel("");
    setMileage(null);
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center text-green-600">
        Mileage Calculator
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Distance Traveled (km)
          </label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="Enter distance"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Fuel Consumed (liters)
          </label>
          <input
            type="number"
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
            placeholder="Enter fuel used"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="flex space-x-4">
          <button
            onClick={calculateMileage}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
          >
            Calculate
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded w-full"
          >
            Reset
          </button>
        </div>
      </div>

      {mileage !== null && (
        <section className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
          <h3 className="text-lg font-semibold text-green-700 mb-2">Result:</h3>
          <p className="text-2xl font-bold text-green-800">{mileage} km/l</p>
        </section>
      )}
    </div>
  );
};

export default MileageCalculator;
