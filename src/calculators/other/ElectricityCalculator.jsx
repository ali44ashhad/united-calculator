import React, { useState } from "react";

const ElectricityCalculator = () => {
  const [power, setPower] = useState(""); // in kilowatts
  const [hours, setHours] = useState(""); // time in hours
  const [rate, setRate] = useState(""); // ₹ per kWh

  const calculateCost = () => {
    const P = parseFloat(power);
    const T = parseFloat(hours);
    const R = parseFloat(rate);

    if (isNaN(P) || isNaN(T) || isNaN(R)) return null;

    const cost = P * T * R;
    return cost.toFixed(2);
  };

  const result = calculateCost();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Power (kW)</label>
          <input
            type="number"
            value={power}
            onChange={(e) => setPower(e.target.value)}
            placeholder="e.g. 1.5"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Time (Hours)</label>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            placeholder="e.g. 5"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Rate (₹/kWh)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="e.g. 6"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Electricity Cost Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Total Cost:</span>
            <span className="text-green-600">₹{result}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default ElectricityCalculator;
