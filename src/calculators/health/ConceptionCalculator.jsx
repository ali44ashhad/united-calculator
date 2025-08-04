import React, { useState } from "react";

const ConceptionCalculator = () => {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState("28");

  const calculateConceptionDate = () => {
    if (!lastPeriod || isNaN(cycleLength)) return null;

    const periodDate = new Date(lastPeriod);
    const ovulationOffset = parseInt(cycleLength, 10) - 14;

    if (isNaN(ovulationOffset)) return null;

    const conceptionDate = new Date(periodDate);
    conceptionDate.setDate(conceptionDate.getDate() + ovulationOffset);

    return conceptionDate.toDateString();
  };

  const result = calculateConceptionDate();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            First Day of Last Period
          </label>
          <input
            type="date"
            value={lastPeriod}
            onChange={(e) => setLastPeriod(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 28"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Estimated Conception Date
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Likely Date:</span>
            <span className="text-pink-600">{result}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default ConceptionCalculator;
