import React, { useState } from "react";

const VoltageDropCalculator = () => {
  const [current, setCurrent] = useState("10"); // in Amps
  const [length, setLength] = useState("50"); // in meters
  const [resistance, setResistance] = useState("0.0175"); // in ohm/m
  const [unit, setUnit] = useState("meter");

  const calculateVoltageDrop = () => {
    const I = parseFloat(current);
    const L = parseFloat(length);
    const R = parseFloat(resistance);
    const isFeet = unit === "feet";

    if (isNaN(I) || isNaN(L) || isNaN(R)) return null;

    // Convert feet to meters if needed
    const lengthInMeters = isFeet ? L * 0.3048 : L;

    // Voltage Drop = 2 × I × R × L
    const VD = 2 * I * R * lengthInMeters;

    return {
      voltageDrop: VD.toFixed(2),
    };
  };

  const result = calculateVoltageDrop();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Current (Amps)</label>
          <input
            type="number"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Conductor Length</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. 50"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Length Unit</label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="meter">Meters</option>
            <option value="feet">Feet</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Resistance per Unit Length (Ω/{unit})
          </label>
          <input
            type="number"
            value={resistance}
            onChange={(e) => setResistance(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. 0.0175"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Voltage Drop Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Voltage Drop:</span>
            <span className="text-blue-600">{result.voltageDrop} V</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default VoltageDropCalculator;
