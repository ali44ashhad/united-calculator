import React, { useState } from "react";

const SalaryCalculator = () => {
  const [hourlyRate, setHourlyRate] = useState("25");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [weeksPerYear, setWeeksPerYear] = useState("52");

  const calculateSalary = () => {
    const rate = parseFloat(hourlyRate);
    const hours = parseFloat(hoursPerWeek);
    const weeks = parseFloat(weeksPerYear);

    if (isNaN(rate) || isNaN(hours) || isNaN(weeks)) return null;

    const weekly = rate * hours;
    const monthly = (weekly * weeks) / 12;
    const annual = weekly * weeks;

    return {
      weekly: weekly.toFixed(2),
      monthly: monthly.toFixed(2),
      annual: annual.toFixed(2),
    };
  };

  const result = calculateSalary();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Hourly Rate ($)</label>
          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 25"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Hours per Week</label>
          <input
            type="number"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 40"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Weeks per Year</label>
          <input
            type="number"
            value={weeksPerYear}
            onChange={(e) => setWeeksPerYear(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 52"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Salary Breakdown
          </h2>
          <div className="space-y-2 text-lg font-semibold">
            <div className="flex justify-between">
              <span>Weekly Salary:</span>
              <span className="text-blue-600">${result.weekly}</span>
            </div>
            <div className="flex justify-between">
              <span>Monthly Salary:</span>
              <span className="text-green-600">${result.monthly}</span>
            </div>
            <div className="flex justify-between">
              <span>Annual Salary:</span>
              <span className="text-purple-600">${result.annual}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SalaryCalculator;
