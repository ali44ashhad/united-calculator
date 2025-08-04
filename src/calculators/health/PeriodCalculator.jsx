import React, { useState } from "react";

const PeriodCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [cycleLength, setCycleLength] = useState("28");

  const calculateNextPeriod = () => {
    const cycle = parseInt(cycleLength);
    const lastDate = new Date(lastPeriodDate);
    if (!lastPeriodDate || isNaN(cycle)) return null;

    const nextPeriodDate = new Date(lastDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + cycle);

    return nextPeriodDate.toDateString();
  };

  const result = calculateNextPeriod();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Last Period Date</label>
          <input
            type="date"
            value={lastPeriodDate}
            onChange={(e) => setLastPeriodDate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Cycle Length (days)</label>
          <input
            type="number"
            value={cycleLength}
            onChange={(e) => setCycleLength(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-pink-50 p-4 rounded-lg border border-pink-200 mt-6">
          <h2 className="text-xl font-semibold text-pink-700 mb-2">
            Next Period Date
          </h2>
          <p className="text-gray-800">
            <span className="font-medium">Expected:</span> {result}
          </p>
        </section>
      )}
    </div>
  );
};

export default PeriodCalculator;
