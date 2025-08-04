import React, { useState } from "react";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState("500000");
  const [downPayment, setDownPayment] = useState("100000");
  const [loanTermYears, setLoanTermYears] = useState("30");
  const [interestRate, setInterestRate] = useState("4");

  const loanAmount = parseFloat(homePrice || 0) - parseFloat(downPayment || 0);
  const rate = parseFloat(interestRate || 0) / 100 / 12;
  const totalPayments = parseInt(loanTermYears || 0) * 12;

  const monthlyPayment =
    loanAmount && rate && totalPayments
      ? (loanAmount * rate) / (1 - Math.pow(1 + rate, -totalPayments))
      : 0;

  const totalPayment = monthlyPayment * totalPayments;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Home Price ($)</label>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="500000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Down Payment ($)</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="100000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Loan Term (Years)</label>
          <input
            type="number"
            value={loanTermYears}
            onChange={(e) => setLoanTermYears(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="30"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Interest Rate (%)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="4"
          />
        </div>
      </div>

      <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Mortgage Summary
        </h2>
        <div className="flex justify-between text-lg font-semibold">
          <span className="text-gray-800">Monthly Payment:</span>
          <span className="text-green-600">${monthlyPayment.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold mt-2">
          <span className="text-gray-800">Total Interest:</span>
          <span className="text-red-600">${totalInterest.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold mt-2">
          <span className="text-gray-800">Total Payment:</span>
          <span className="text-blue-600">${totalPayment.toFixed(2)}</span>
        </div>
      </section>
    </div>
  );
};

export default MortgageCalculator;
