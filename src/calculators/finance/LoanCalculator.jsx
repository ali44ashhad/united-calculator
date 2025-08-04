import React, { useState } from "react";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("10000");
  const [interestRate, setInterestRate] = useState("5");
  const [loanTerm, setLoanTerm] = useState("5");

  const P = parseFloat(loanAmount || 0);
  const r = parseFloat(interestRate || 0) / 100 / 12;
  const n = parseFloat(loanTerm || 0) * 12;

  const monthlyPayment =
    r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = monthlyPayment * n;
  const totalInterest = totalPayment - P;

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
            placeholder="10000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="5"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Loan Term (years)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="5"
          />
        </div>
      </div>

      <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Loan Summary
        </h2>
        <div className="flex justify-between text-lg font-semibold">
          <span className="text-gray-800">Monthly Payment:</span>
          <span className="text-blue-600">${monthlyPayment.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold mt-2">
          <span className="text-gray-800">Total Payment:</span>
          <span className="text-blue-600">${totalPayment.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold mt-2">
          <span className="text-gray-800">Total Interest:</span>
          <span className="text-blue-600">${totalInterest.toFixed(2)}</span>
        </div>
      </section>
    </div>
  );
};

export default LoanCalculator;
