import React, { useState } from "react";

const RepaymentCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("100000");
  const [annualInterestRate, setAnnualInterestRate] = useState("7");
  const [loanTerm, setLoanTerm] = useState("5");

  const calculateRepayment = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(annualInterestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n) || n === 0) return null;

    const monthlyRepayment = (P * r) / (1 - Math.pow(1 + r, -n));
    const totalRepayment = monthlyRepayment * n;
    const totalInterest = totalRepayment - P;

    return {
      monthlyRepayment: monthlyRepayment.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculateRepayment();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Loan Amount</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 100000"
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
            placeholder="e.g. 7"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Loan Term (Years)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Repayment Summary
          </h2>
          <div className="space-y-2 text-lg font-medium text-gray-700">
            <div className="flex justify-between">
              <span>Monthly Repayment:</span>
              <span className="text-green-600">₹{result.monthlyRepayment}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Repayment:</span>
              <span className="text-blue-600">₹{result.totalRepayment}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Interest Paid:</span>
              <span className="text-red-600">₹{result.totalInterest}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default RepaymentCalculator;
