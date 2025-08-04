import React, { useState } from "react";

const DueDateCalculator = () => {
  const [lastPeriod, setLastPeriod] = useState("");

  const calculateDueDate = () => {
    if (!lastPeriod) return null;
    const periodDate = new Date(lastPeriod);
    periodDate.setDate(periodDate.getDate() + 280); // 40 weeks
    return periodDate.toDateString();
  };

  const result = calculateDueDate();

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
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Estimated Due Date
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Your Baby's Due:</span>
            <span className="text-green-600">{result}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default DueDateCalculator;
