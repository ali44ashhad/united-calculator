import React, { useState } from "react";

const OhmsLawCalculator = () => {
  const [voltage, setVoltage] = useState("");
  const [current, setCurrent] = useState("");
  const [resistance, setResistance] = useState("");
  const [result, setResult] = useState("");

  const calculateOhmsLaw = () => {
    const V = parseFloat(voltage);
    const I = parseFloat(current);
    const R = parseFloat(resistance);

    if (!isNaN(V) && !isNaN(I)) {
      setResult(`Resistance (R) = ${(V / I).toFixed(2)} ohms`);
    } else if (!isNaN(V) && !isNaN(R)) {
      setResult(`Current (I) = ${(V / R).toFixed(2)} amps`);
    } else if (!isNaN(I) && !isNaN(R)) {
      setResult(`Voltage (V) = ${(I * R).toFixed(2)} volts`);
    } else {
      setResult("Enter any two values to calculate the third.");
    }
  };

  const clearFields = () => {
    setVoltage("");
    setCurrent("");
    setResistance("");
    setResult("");
  };

  return (
    <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Ohm's Law Calculator
      </h2>

      <div className="space-y-4">
        <input
          type="number"
          placeholder="Voltage (V)"
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl"
        />
        <input
          type="number"
          placeholder="Current (I)"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl"
        />
        <input
          type="number"
          placeholder="Resistance (R)"
          value={resistance}
          onChange={(e) => setResistance(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl"
        />

        <div className="flex justify-between gap-4">
          <button
            onClick={calculateOhmsLaw}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl"
          >
            Calculate
          </button>
          <button
            onClick={clearFields}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-xl"
          >
            Clear
          </button>
        </div>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 border rounded-xl text-blue-700">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default OhmsLawCalculator;
