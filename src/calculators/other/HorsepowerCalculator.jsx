import React, { useState } from "react";

const HorsepowerCalculator = () => {
  const [torque, setTorque] = useState("");
  const [rpm, setRpm] = useState("");
  const [horsepower, setHorsepower] = useState(null);

  const calculateHorsepower = () => {
    const t = parseFloat(torque);
    const r = parseFloat(rpm);
    if (isNaN(t) || isNaN(r) || r === 0) {
      setHorsepower(null);
      return;
    }

    const hp = (t * r) / 5252;
    setHorsepower(hp.toFixed(2));
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Horsepower Calculator
      </h1>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Torque (lb-ft)</label>
          <input
            type="number"
            value={torque}
            onChange={(e) => setTorque(e.target.value)}
            placeholder="e.g. 400"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">RPM</label>
          <input
            type="number"
            value={rpm}
            onChange={(e) => setRpm(e.target.value)}
            placeholder="e.g. 5000"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <button
          onClick={calculateHorsepower}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Calculate Horsepower
        </button>
      </div>

      {horsepower && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Result</h2>
          <p className="text-gray-700">
            <strong>Horsepower:</strong> {horsepower} HP
          </p>
        </section>
      )}
    </div>
  );
};

export default HorsepowerCalculator;
