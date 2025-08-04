import React, { useState } from "react";

const OvulationCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [cycleLength, setCycleLength] = useState("28");

  const calculateOvulation = () => {
    const cycle = parseInt(cycleLength);
    if (!lastPeriodDate || isNaN(cycle) || cycle < 20 || cycle > 45)
      return null;

    const startDate = new Date(lastPeriodDate);
    const ovulationDate = new Date(startDate);
    ovulationDate.setDate(startDate.getDate() + cycle - 14);

    const fertileStart = new Date(ovulationDate);
    fertileStart.setDate(ovulationDate.getDate() - 5);

    const fertileEnd = new Date(ovulationDate);
    fertileEnd.setDate(ovulationDate.getDate() + 1);

    return {
      ovulationDate: ovulationDate.toDateString(),
      fertileWindow: `${fertileStart.toDateString()} to ${fertileEnd.toDateString()}`,
    };
  };

  const result = calculateOvulation();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Last Period Start Date
          </label>
          <input
            type="date"
            value={lastPeriodDate}
            onChange={(e) => setLastPeriodDate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Average Cycle Length (days)
          </label>
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
          <h2 className="text-xl font-semibold text-pink-700 mb-3">
            Ovulation Result
          </h2>
          <div className="text-gray-800 space-y-2">
            <p>
              <span className="font-medium">Estimated Ovulation Date:</span>{" "}
              {result.ovulationDate}
            </p>
            <p>
              <span className="font-medium">Fertile Window:</span>{" "}
              {result.fertileWindow}
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default OvulationCalculator;
