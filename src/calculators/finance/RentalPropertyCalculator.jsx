import React, { useState } from "react";

const RentalPropertyCalculator = () => {
  const [monthlyRent, setMonthlyRent] = useState("25000");
  const [monthlyExpenses, setMonthlyExpenses] = useState("10000");
  const [propertyPrice, setPropertyPrice] = useState("3000000");

  const calculate = () => {
    const rent = parseFloat(monthlyRent);
    const expenses = parseFloat(monthlyExpenses);
    const price = parseFloat(propertyPrice);

    if (isNaN(rent) || isNaN(expenses) || isNaN(price)) return null;

    const netIncome = rent - expenses;
    const annualCashFlow = netIncome * 12;
    const roi = (annualCashFlow / price) * 100;

    return {
      netIncome: netIncome.toFixed(2),
      annualCashFlow: annualCashFlow.toFixed(2),
      roi: roi.toFixed(2),
    };
  };

  const result = calculate();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Monthly Rent Income</label>
          <input
            type="number"
            value={monthlyRent}
            onChange={(e) => setMonthlyRent(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 25000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Monthly Expenses</label>
          <input
            type="number"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Property Price</label>
          <input
            type="number"
            value={propertyPrice}
            onChange={(e) => setPropertyPrice(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 3000000"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Rental Property Summary
          </h2>
          <div className="text-lg font-medium text-gray-700 space-y-2">
            <div className="flex justify-between">
              <span>Monthly Net Income:</span>
              <span className="text-green-600">₹{result.netIncome}</span>
            </div>
            <div className="flex justify-between">
              <span>Annual Cash Flow:</span>
              <span className="text-green-600">₹{result.annualCashFlow}</span>
            </div>
            <div className="flex justify-between">
              <span>ROI (Return on Investment):</span>
              <span className="text-blue-600">{result.roi}%</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default RentalPropertyCalculator;
