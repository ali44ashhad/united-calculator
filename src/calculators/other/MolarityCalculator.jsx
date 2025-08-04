import React, { useState } from "react";

const MolarityCalculator = () => {
  const [moles, setMoles] = useState("");
  const [volume, setVolume] = useState("");
  const [molarity, setMolarity] = useState(null);

  const calculateMolarity = () => {
    const mol = parseFloat(moles);
    const vol = parseFloat(volume);

    if (!isNaN(mol) && !isNaN(vol) && vol !== 0) {
      const result = mol / vol;
      setMolarity(result.toFixed(4));
    } else {
      setMolarity(null);
    }
  };

  const handleReset = () => {
    setMoles("");
    setVolume("");
    setMolarity(null);
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center text-indigo-600">
        Molarity Calculator
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Moles of Solute (mol)
          </label>
          <input
            type="number"
            value={moles}
            onChange={(e) => setMoles(e.target.value)}
            placeholder="Enter moles"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Volume of Solution (liters)
          </label>
          <input
            type="number"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            placeholder="Enter volume"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="flex space-x-4">
          <button
            onClick={calculateMolarity}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded w-full"
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

      {molarity !== null && (
        <section className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 mt-6">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">
            Result:
          </h3>
          <p className="text-2xl font-bold text-indigo-800">{molarity} mol/L</p>
        </section>
      )}
    </div>
  );
};

export default MolarityCalculator;
