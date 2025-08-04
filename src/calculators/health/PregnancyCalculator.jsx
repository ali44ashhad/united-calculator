import React, { useState } from "react";

const PregnancyCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState("");

  const calculateDueDate = () => {
    if (!lastPeriodDate) return null;

    const lastDate = new Date(lastPeriodDate);
    const dueDate = new Date(lastDate);
    dueDate.setDate(dueDate.getDate() + 280); // 40 weeks

    return dueDate.toDateString();
  };

  const result = calculateDueDate();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Last Menstrual Period (LMP)
          </label>
          <input
            type="date"
            value={lastPeriodDate}
            onChange={(e) => setLastPeriodDate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-pink-50 p-4 rounded-lg border border-pink-200 mt-6">
          <h2 className="text-xl font-semibold text-pink-700 mb-2">
            Estimated Due Date
          </h2>
          <p className="text-gray-800">
            <span className="font-medium">Due Date:</span> {result}
          </p>
        </section>
      )}
    </div>
  );
};

export default PregnancyCalculator;
