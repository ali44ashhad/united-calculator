import React, { useState } from "react";

const MortgageCalculatorUK = () => {
  const [loanAmount, setLoanAmount] = useState("250000"); // in GBP
  const [interestRate, setInterestRate] = useState("4"); // annual %
  const [loanTerm, setLoanTerm] = useState("25"); // in years

  const calculateMortgage = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12; // monthly interest rate
    const n = parseFloat(loanTerm) * 12; // total number of payments

    if (isNaN(P) || isNaN(r) || isNaN(n)) return null;

    const monthlyPayment =
      (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - P;

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculateMortgage();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Loan Amount (£)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 250000"
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
          <label className="block mb-1 font-medium">Loan Term (Years)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 25"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Mortgage Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Monthly Payment:</span>
              <span className="text-yellow-600 font-medium">
                £{result.monthlyPayment}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Total Interest Paid:</span>
              <span className="text-green-600 font-medium">
                £{result.totalInterest}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Total Repayment Amount:</span>
              <span className="text-blue-600">£{result.totalPayment}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MortgageCalculatorUK;
