import React, { useState } from "react";

const gravityOptions = {
  Earth: 9.81,
  Moon: 1.62,
  Mars: 3.71,
  Jupiter: 24.79,
  Venus: 8.87,
  Mercury: 3.7,
};

const WeightCalculator = () => {
  const [mass, setMass] = useState("70");
  const [planet, setPlanet] = useState("Earth");
  const [unit, setUnit] = useState("kg");

  const calculateWeight = () => {
    let massValue = parseFloat(mass);
    if (isNaN(massValue) || massValue <= 0) return null;

    // Convert lbs to kg if necessary
    if (unit === "lbs") {
      massValue = massValue * 0.453592;
    }

    const gravity = gravityOptions[planet];
    const weight = massValue * gravity;

    return {
      weight: weight.toFixed(2),
    };
  };

  const result = calculateWeight();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Mass</label>
          <input
            type="number"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 70"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Mass Unit</label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="kg">Kilograms (kg)</option>
            <option value="lbs">Pounds (lbs)</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Select Planet/Body</label>
          <select
            value={planet}
            onChange={(e) => setPlanet(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            {Object.keys(gravityOptions).map((planetName) => (
              <option key={planetName} value={planetName}>
                {planetName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Weight Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Weight on {planet}:</span>
            <span className="text-blue-600">{result.weight} N</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default WeightCalculator;
