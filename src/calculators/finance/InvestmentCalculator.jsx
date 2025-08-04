import React, { useState } from "react";

const InvestmentCalculator = () => {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("8");
  const [years, setYears] = useState("5");

  const calculateInvestment = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);

    if (isNaN(P) || isNaN(r) || isNaN(t)) return null;

    const A = P * Math.pow(1 + r, t);
    const totalInterest = A - P;

    return {
      futureValue: A.toFixed(2),
      interestEarned: totalInterest.toFixed(2),
    };
  };

  const result = calculateInvestment();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Investment Amount (₹)
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 8"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Investment Period (Years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Investment Result
          </h2>
          <div className="flex justify-between text-lg font-semibold mb-2">
            <span className="text-gray-800">Future Value:</span>
            <span className="text-green-600">₹{result.futureValue}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Interest Earned:</span>
            <span className="text-blue-600">₹{result.interestEarned}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default InvestmentCalculator;
