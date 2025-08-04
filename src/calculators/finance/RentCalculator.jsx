import React, { useState } from "react";

const RentCalculator = () => {
  const [monthlyRent, setMonthlyRent] = useState("15000");
  const [numberOfMonths, setNumberOfMonths] = useState("12");

  const calculateTotalRent = () => {
    const rent = parseFloat(monthlyRent);
    const months = parseFloat(numberOfMonths);

    if (isNaN(rent) || isNaN(months)) return null;

    const totalRent = rent * months;

    return {
      totalRent: totalRent.toFixed(2),
    };
  };

  const result = calculateTotalRent();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Monthly Rent</label>
          <input
            type="number"
            value={monthlyRent}
            onChange={(e) => setMonthlyRent(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 15000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Number of Months</label>
          <input
            type="number"
            value={numberOfMonths}
            onChange={(e) => setNumberOfMonths(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 12"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Rent Summary
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Total Rent Payable:</span>
            <span className="text-green-600">₹{result.totalRent}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default RentCalculator;
