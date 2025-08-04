import React, { useState } from "react";

const RefinanceCalculator = () => {
  const [currentLoanAmount, setCurrentLoanAmount] = useState("200000");
  const [currentRate, setCurrentRate] = useState("6");
  const [currentTerm, setCurrentTerm] = useState("30");

  const [newRate, setNewRate] = useState("4");
  const [newTerm, setNewTerm] = useState("30");

  const calculateMonthlyPayment = (principal, rate, termYears) => {
    const monthlyRate = rate / 100 / 12;
    const totalMonths = termYears * 12;

    if (monthlyRate === 0) return principal / totalMonths;

    return (
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths))
    );
  };

  const currentMonthly = calculateMonthlyPayment(
    parseFloat(currentLoanAmount),
    parseFloat(currentRate),
    parseFloat(currentTerm)
  );

  const newMonthly = calculateMonthlyPayment(
    parseFloat(currentLoanAmount),
    parseFloat(newRate),
    parseFloat(newTerm)
  );

  const monthlySavings = currentMonthly - newMonthly;
  const totalSavings = monthlySavings * newTerm * 12;

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-bold mb-2">Current Loan</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Loan Amount (₹)</label>
              <input
                type="number"
                value={currentLoanAmount}
                onChange={(e) => setCurrentLoanAmount(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="e.g. 200000"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">
                Interest Rate (%)
              </label>
              <input
                type="number"
                value={currentRate}
                onChange={(e) => setCurrentRate(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="e.g. 6"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Term (Years)</label>
              <input
                type="number"
                value={currentTerm}
                onChange={(e) => setCurrentTerm(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="e.g. 30"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">New Loan</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">
                New Interest Rate (%)
              </label>
              <input
                type="number"
                value={newRate}
                onChange={(e) => setNewRate(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="e.g. 4"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">New Term (Years)</label>
              <input
                type="number"
                value={newTerm}
                onChange={(e) => setNewTerm(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="e.g. 30"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Refinance Summary
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
          <div className="flex justify-between">
            <span className="text-gray-700">Current Monthly Payment:</span>
            <span className="font-bold text-red-600">
              ₹{currentMonthly.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">New Monthly Payment:</span>
            <span className="font-bold text-green-600">
              ₹{newMonthly.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Monthly Savings:</span>
            <span className="font-bold text-blue-600">
              ₹{monthlySavings.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Total Savings:</span>
            <span className="font-bold text-indigo-600">
              ₹{totalSavings.toFixed(2)}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefinanceCalculator;
