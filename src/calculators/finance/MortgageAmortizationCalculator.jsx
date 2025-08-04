import React, { useState } from "react";

const MortgageAmortizationCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("300000");
  const [annualInterestRate, setAnnualInterestRate] = useState("5");
  const [loanTermYears, setLoanTermYears] = useState("30");

  const principal = parseFloat(loanAmount || 0);
  const rate = parseFloat(annualInterestRate || 0) / 100 / 12;
  const numberOfPayments = parseInt(loanTermYears || 0) * 12;

  const monthlyPayment =
    principal && rate && numberOfPayments
      ? (principal * rate) / (1 - Math.pow(1 + rate, -numberOfPayments))
      : 0;

  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - principal;

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Loan Amount ($)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="300000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            value={annualInterestRate}
            onChange={(e) => setAnnualInterestRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="5"
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
          <span className="text-gray-800">Total Interest Paid:</span>
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

export default MortgageAmortizationCalculator;
