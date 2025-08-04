import React, { useState } from "react";

const RentVsBuyCalculator = () => {
  const [monthlyRent, setMonthlyRent] = useState("20000");
  const [homePrice, setHomePrice] = useState("5000000");
  const [annualAppreciation, setAnnualAppreciation] = useState("5");
  const [mortgageRate, setMortgageRate] = useState("7");
  const [loanTermYears, setLoanTermYears] = useState("20");

  const calculateComparison = () => {
    const rent = parseFloat(monthlyRent);
    const price = parseFloat(homePrice);
    const appreciation = parseFloat(annualAppreciation) / 100;
    const rate = parseFloat(mortgageRate) / 100 / 12;
    const months = parseFloat(loanTermYears) * 12;

    if (
      isNaN(rent) ||
      isNaN(price) ||
      isNaN(appreciation) ||
      isNaN(rate) ||
      isNaN(months)
    ) {
      return null;
    }

    // Total Rent Paid Over Loan Term
    const totalRent = rent * months;

    // Monthly Mortgage Payment (EMI)
    const emi =
      (price * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1);
    const totalMortgage = emi * months;

    // Future Value of Home (after appreciation)
    const futureHomeValue = price * Math.pow(1 + appreciation, loanTermYears);

    return {
      totalRent: totalRent.toFixed(2),
      totalMortgage: totalMortgage.toFixed(2),
      futureHomeValue: futureHomeValue.toFixed(2),
    };
  };

  const result = calculateComparison();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Monthly Rent (₹)</label>
          <input
            type="number"
            value={monthlyRent}
            onChange={(e) => setMonthlyRent(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 20000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Home Price (₹)</label>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5000000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Annual Home Appreciation (%)
          </label>
          <input
            type="number"
            value={annualAppreciation}
            onChange={(e) => setAnnualAppreciation(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Mortgage Interest Rate (%)
          </label>
          <input
            type="number"
            value={mortgageRate}
            onChange={(e) => setMortgageRate(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 7"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Loan Term (Years)</label>
          <input
            type="number"
            value={loanTermYears}
            onChange={(e) => setLoanTermYears(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 20"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Comparison Result
          </h2>
          <div className="space-y-2 text-lg font-medium text-gray-700">
            <div className="flex justify-between">
              <span>Total Rent Paid:</span>
              <span className="text-red-600">₹{result.totalRent}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Mortgage Paid:</span>
              <span className="text-orange-600">₹{result.totalMortgage}</span>
            </div>
            <div className="flex justify-between">
              <span>Future Home Value:</span>
              <span className="text-green-600">₹{result.futureHomeValue}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default RentVsBuyCalculator;
