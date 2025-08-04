import React, { useState } from "react";

const TimeDurationCalculator = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [duration, setDuration] = useState(null);

  const calculateDuration = () => {
    const [startH, startM] = startTime.split(":").map(Number);
    const [endH, endM] = endTime.split(":").map(Number);

    if (!isNaN(startH) && !isNaN(startM) && !isNaN(endH) && !isNaN(endM)) {
      const startTotal = startH * 60 + startM;
      const endTotal = endH * 60 + endM;

      let diff = endTotal - startTotal;
      if (diff < 0) diff += 24 * 60; // Handle overnight duration

      const hours = Math.floor(diff / 60);
      const minutes = diff % 60;

      setDuration(`${hours}h ${minutes}m`);
    } else {
      setDuration(null);
    }
  };

  const handleReset = () => {
    setStartTime("");
    setEndTime("");
    setDuration(null);
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center text-green-600">
        Time Duration Calculator
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="flex space-x-4">
          <button
            onClick={calculateDuration}
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

      {duration !== null && (
        <section className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
          <h3 className="text-lg font-semibold text-green-700 mb-2">Result:</h3>
          <p className="text-2xl font-bold text-green-800">{duration}</p>
        </section>
      )}
    </div>
  );
};

export default TimeDurationCalculator;
