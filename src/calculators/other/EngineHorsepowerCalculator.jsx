import React, { useState } from "react";

const EngineHorsepowerCalculator = () => {
  const [torque, setTorque] = useState("");
  const [rpm, setRPM] = useState("");

  const calculateHorsepower = () => {
    const T = parseFloat(torque);
    const R = parseFloat(rpm);

    if (isNaN(T) || isNaN(R) || R <= 0) return null;

    const hp = (T * R) / 5252;
    return hp.toFixed(2);
  };

  const result = calculateHorsepower();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Torque (lb-ft)</label>
          <input
            type="number"
            value={torque}
            onChange={(e) => setTorque(e.target.value)}
            placeholder="e.g. 350"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">RPM</label>
          <input
            type="number"
            value={rpm}
            onChange={(e) => setRPM(e.target.value)}
            placeholder="e.g. 6000"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Engine Horsepower Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Horsepower:</span>
            <span className="text-blue-600">{result} HP</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default EngineHorsepowerCalculator;
