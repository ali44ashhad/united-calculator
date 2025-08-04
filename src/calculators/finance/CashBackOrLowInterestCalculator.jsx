import React, { useState } from "react";

const CashBackOrLowInterestCalculator = () => {
  const [purchaseAmount, setPurchaseAmount] = useState("1000");
  const [cashBack, setCashBack] = useState("50");
  const [interestRate, setInterestRate] = useState("10");
  const [repaymentPeriod, setRepaymentPeriod] = useState("12");

  const calculate = () => {
    const amount = parseFloat(purchaseAmount);
    const cb = parseFloat(cashBack);
    const rate = parseFloat(interestRate) / 100 / 12; // monthly rate
    const months = parseInt(repaymentPeriod);

    if (
      isNaN(amount) ||
      isNaN(cb) ||
      isNaN(rate) ||
      isNaN(months) ||
      months === 0
    ) {
      return null;
    }

    const monthlyPayment = (amount * rate) / (1 - Math.pow(1 + rate, -months));
    const totalInterest = monthlyPayment * months - amount;
    const netCostWithInterest = amount + totalInterest;
    const netCostWithCashBack = amount - cb;

    const betterOption =
      netCostWithCashBack < netCostWithInterest ? "Cash Back" : "Low Interest";

    return {
      totalInterest: totalInterest.toFixed(2),
      netCostWithInterest: netCostWithInterest.toFixed(2),
      netCostWithCashBack: netCostWithCashBack.toFixed(2),
      betterOption,
    };
  };

  const result = calculate();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Purchase Amount ($)</label>
          <input
            type="number"
            value={purchaseAmount}
            onChange={(e) => setPurchaseAmount(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 1000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Cash Back ($)</label>
          <input
            type="number"
            value={cashBack}
            onChange={(e) => setCashBack(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 50"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Interest Rate (Annual %)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Repayment Period (months)
          </label>
          <input
            type="number"
            value={repaymentPeriod}
            onChange={(e) => setRepaymentPeriod(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 12"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Comparison Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Total Interest Paid:</span>
              <span className="text-blue-600 font-medium">
                ${result.totalInterest}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Cost with Low Interest:</span>
              <span className="text-blue-600 font-medium">
                ${result.netCostWithInterest}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Cost with Cash Back:</span>
              <span className="text-blue-600 font-medium">
                ${result.netCostWithCashBack}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Better Option:</span>
              <span className="text-green-600">{result.betterOption}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CashBackOrLowInterestCalculator;
