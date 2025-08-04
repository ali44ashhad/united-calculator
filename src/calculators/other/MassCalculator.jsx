import React, { useState } from "react";

const MassCalculator = () => {
  const [density, setDensity] = useState("");
  const [volume, setVolume] = useState("");
  const [mass, setMass] = useState(null);

  const calculateMass = () => {
    const d = parseFloat(density);
    const v = parseFloat(volume);

    if (!isNaN(d) && !isNaN(v)) {
      const result = d * v;
      setMass(result.toFixed(2));
    } else {
      setMass(null);
    }
  };

  const handleReset = () => {
    setDensity("");
    setVolume("");
    setMass(null);
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-600">
        Mass Calculator
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Density (kg/m³)</label>
          <input
            type="number"
            value={density}
            onChange={(e) => setDensity(e.target.value)}
            placeholder="Enter density"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Volume (m³)</label>
          <input
            type="number"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            placeholder="Enter volume"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex space-x-4">
          <button
            onClick={calculateMass}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
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

      {mass !== null && (
        <section className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Result:</h3>
          <p className="text-2xl font-bold text-blue-800">{mass} kg</p>
        </section>
      )}
    </div>
  );
};

export default MassCalculator;
