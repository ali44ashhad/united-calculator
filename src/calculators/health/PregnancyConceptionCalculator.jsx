import React, { useState } from "react";

const PregnancyConceptionCalculator = () => {
  const [dueDate, setDueDate] = useState("");

  const calculateConceptionDate = () => {
    if (!dueDate) return null;

    const due = new Date(dueDate);
    const conception = new Date(due);
    conception.setDate(conception.getDate() - 266); // Average conception is 266 days before due date

    return conception.toDateString();
  };

  const result = calculateConceptionDate();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Estimated Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-pink-50 p-4 rounded-lg border border-pink-200 mt-6">
          <h2 className="text-xl font-semibold text-pink-700 mb-2">
            Estimated Conception Date
          </h2>
          <p className="text-gray-800">
            <span className="font-medium">Conception Date:</span> {result}
          </p>
        </section>
      )}
    </div>
  );
};

export default PregnancyConceptionCalculator;
