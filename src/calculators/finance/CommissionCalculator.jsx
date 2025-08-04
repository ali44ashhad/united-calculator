import React, { useState } from "react";

const CommissionCalculator = () => {
  const [saleAmount, setSaleAmount] = useState("1000");
  const [commissionRate, setCommissionRate] = useState("10");

  const calculateCommission = () => {
    const sale = parseFloat(saleAmount);
    const rate = parseFloat(commissionRate) / 100;

    if (isNaN(sale) || isNaN(rate)) return null;

    const commission = sale * rate;
    const earnings = sale - commission;

    return {
      commission: commission.toFixed(2),
      earnings: earnings.toFixed(2),
    };
  };

  const result = calculateCommission();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Sale Amount ($)</label>
          <input
            type="number"
            value={saleAmount}
            onChange={(e) => setSaleAmount(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 1000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Commission Rate (%)</label>
          <input
            type="number"
            value={commissionRate}
            onChange={(e) => setCommissionRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Commission Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Commission Amount:</span>
              <span className="text-red-600 font-medium">
                ${result.commission}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">
                You Keep (After Commission):
              </span>
              <span className="text-green-600">${result.earnings}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CommissionCalculator;
