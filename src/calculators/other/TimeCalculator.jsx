import React, { useState } from "react";

const TimeCalculator = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [totalMinutes, setTotalMinutes] = useState(null);

  const calculateTime = () => {
    const h = parseFloat(hours);
    const m = parseFloat(minutes);

    if (!isNaN(h) && !isNaN(m) && h >= 0 && m >= 0) {
      const result = h * 60 + m;
      setTotalMinutes(result);
    } else {
      setTotalMinutes(null);
    }
  };

  const handleReset = () => {
    setHours("");
    setMinutes("");
    setTotalMinutes(null);
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center text-green-600">
        Time Calculator
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Hours</label>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            placeholder="Enter hours"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            min="0"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Minutes</label>
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            placeholder="Enter minutes"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            min="0"
          />
        </div>

        <div className="flex space-x-4">
          <button
            onClick={calculateTime}
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

      {totalMinutes !== null && (
        <section className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
          <h3 className="text-lg font-semibold text-green-700 mb-2">Result:</h3>
          <p className="text-2xl font-bold text-green-800">
            {totalMinutes} minute{totalMinutes !== 1 ? "s" : ""}
          </p>
        </section>
      )}
    </div>
  );
};

export default TimeCalculator;
