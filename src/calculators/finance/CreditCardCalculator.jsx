import React, { useState } from "react";

const CreditCardCalculator = () => {
  const [balance, setBalance] = useState("5000");
  const [annualInterestRate, setAnnualInterestRate] = useState("18"); // % APR
  const [monthlyPayment, setMonthlyPayment] = useState("500");

  const calculateCreditCard = () => {
    const bal = parseFloat(balance);
    const rate = parseFloat(annualInterestRate) / 100 / 12; // monthly interest rate
    const payment = parseFloat(monthlyPayment);

    if (isNaN(bal) || isNaN(rate) || isNaN(payment) || payment <= 0 || bal <= 0)
      return null;
    if (payment <= bal * rate)
      return { message: "Payment too low to cover interest!" };

    let months = 0;
    let currentBalance = bal;
    let totalPaid = 0;

    while (currentBalance > 0 && months < 1000) {
      // cap months to prevent infinite loop
      const interest = currentBalance * rate;
      currentBalance = currentBalance + interest - payment;
      if (currentBalance < 0) currentBalance = 0;
      totalPaid += payment;
      months++;
    }

    return {
      months,
      totalPaid: totalPaid.toFixed(2),
      originalBalance: bal.toFixed(2),
      interestPaid: (totalPaid - bal).toFixed(2),
    };
  };

  const result = calculateCreditCard();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Outstanding Balance ($)
          </label>
          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5000"
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
            placeholder="e.g. 18"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Monthly Payment ($)</label>
          <input
            type="number"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 500"
          />
        </div>
      </div>

      {result && result.message ? (
        <div className="bg-red-100 text-red-700 p-4 rounded mt-6 border border-red-300">
          {result.message}
        </div>
      ) : (
        result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Credit Card Payoff Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Months to Payoff:</span>
                <span className="text-blue-600 font-medium">
                  {result.months}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Paid:</span>
                <span className="text-green-600 font-medium">
                  ${result.totalPaid}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Interest Paid:</span>
                <span className="text-red-600">${result.interestPaid}</span>
              </div>
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default CreditCardCalculator;
