import React, { useState } from "react";

const MortgagePayoffCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("300000"); // total loan
  const [interestRate, setInterestRate] = useState("4"); // annual interest %
  const [monthlyPayment, setMonthlyPayment] = useState("2000"); // monthly payment

  const calculatePayoff = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12; // monthly interest rate
    const M = parseFloat(monthlyPayment);

    if (isNaN(P) || isNaN(r) || isNaN(M) || M <= P * r) return null;

    const numPayments = Math.log(M / (M - P * r)) / Math.log(1 + r);
    const totalPaid = M * numPayments;
    const totalInterest = totalPaid - P;

    return {
      months: Math.ceil(numPayments),
      years: Math.floor(numPayments / 12),
      remainingMonths: Math.ceil(numPayments) % 12,
      totalPaid: totalPaid.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculatePayoff();

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
            placeholder="e.g. 300000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Interest Rate (% per annum)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 4"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Monthly Payment ($)</label>
          <input
            type="number"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 2000"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Payoff Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Time to Payoff:</span>
              <span className="text-yellow-600 font-medium">
                {result.years} years {result.remainingMonths} months
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Total Interest Paid:</span>
              <span className="text-green-600 font-medium">
                ${result.totalInterest}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Total Amount Paid:</span>
              <span className="text-blue-600">${result.totalPaid}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MortgagePayoffCalculator;
