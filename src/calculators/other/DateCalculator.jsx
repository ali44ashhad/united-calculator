import React, { useState } from "react";

const DateCalculator = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const calculateDateDifference = () => {
    if (!startDate || !endDate) return null;

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start) || isNaN(end)) return null;

    const timeDiff = end.getTime() - start.getTime();
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    const diffInWeeks = Math.floor(dayDiff / 7);
    const remainingDays = dayDiff % 7;

    return {
      totalDays: dayDiff,
      weeks: diffInWeeks,
      remainingDays,
    };
  };

  const result = calculateDateDifference();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Date Difference
          </h2>
          <div className="text-gray-700 text-lg space-y-1">
            <div className="flex justify-between">
              <span>Total Days:</span>
              <span className="font-medium text-blue-600">
                {result.totalDays} days
              </span>
            </div>
            <div className="flex justify-between">
              <span>Weeks:</span>
              <span>{result.weeks} weeks</span>
            </div>
            <div className="flex justify-between">
              <span>Remaining Days:</span>
              <span>{result.remainingDays} days</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DateCalculator;
