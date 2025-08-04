import React, { useState } from "react";

const StudentLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("30000");
  const [interestRate, setInterestRate] = useState("5");
  const [loanTerm, setLoanTerm] = useState("10");

  const calculate = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const termYears = parseInt(loanTerm);

    if (
      isNaN(principal) ||
      isNaN(annualRate) ||
      isNaN(termYears) ||
      principal <= 0 ||
      termYears <= 0
    ) {
      return null;
    }

    const monthlyRate = annualRate / 12;
    const numberOfPayments = termYears * 12;

    const monthlyPayment =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    const totalRepayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalRepayment - principal;

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculate();

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
            placeholder="e.g. 30000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Interest Rate (% per year)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Loan Term (Years)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Loan Summary
          </h2>
          <div className="space-y-2 text-lg font-semibold">
            <div className="flex justify-between">
              <span>Monthly Payment:</span>
              <span className="text-blue-600">${result.monthlyPayment}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Repayment:</span>
              <span className="text-green-600">${result.totalRepayment}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Interest:</span>
              <span className="text-red-600">${result.totalInterest}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default StudentLoanCalculator;
