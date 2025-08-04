import React, { useState } from "react";

const HoursCalculator = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [totalHours, setTotalHours] = useState(null);

  const calculateHours = () => {
    if (!startTime || !endTime) {
      setTotalHours(null);
      return;
    }

    const [startH, startM] = startTime.split(":").map(Number);
    const [endH, endM] = endTime.split(":").map(Number);

    const start = new Date();
    const end = new Date();

    start.setHours(startH, startM, 0);
    end.setHours(endH, endM, 0);

    if (end < start) end.setDate(end.getDate() + 1); // handle overnight shift

    const diffMs = end - start;
    const diffHrs = diffMs / (1000 * 60 * 60);
    setTotalHours(diffHrs.toFixed(2));
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Hours Calculator
      </h1>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <button
          onClick={calculateHours}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Calculate Total Hours
        </button>
      </div>

      {totalHours && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Result</h2>
          <p className="text-gray-700">
            <strong>Total Hours Worked:</strong> {totalHours} hours
          </p>
        </section>
      )}
    </div>
  );
};

export default HoursCalculator;
