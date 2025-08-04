import React, { useState } from "react";

const DayOfTheWeekCalculator = () => {
  const [inputDate, setInputDate] = useState("");

  const calculateDayOfWeek = () => {
    if (!inputDate) return null;

    const date = new Date(inputDate);
    const options = { weekday: "long" };
    const dayOfWeek = date.toLocaleDateString("en-US", options);

    return dayOfWeek;
  };

  const result = calculateDayOfWeek();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Select a Date</label>
          <input
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Day of the Week
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">It falls on:</span>
            <span className="text-blue-600">{result}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default DayOfTheWeekCalculator;
