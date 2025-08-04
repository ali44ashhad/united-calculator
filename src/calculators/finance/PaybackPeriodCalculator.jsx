import React, { useState } from "react";

const PaybackPeriodCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState("100000");
  const [annualCashInflow, setAnnualCashInflow] = useState("25000");

  const calculatePaybackPeriod = () => {
    const investment = parseFloat(initialInvestment);
    const inflow = parseFloat(annualCashInflow);

    if (isNaN(investment) || isNaN(inflow) || inflow <= 0) return null;

    const paybackPeriod = investment / inflow;

    return {
      years: Math.floor(paybackPeriod),
      months: Math.round((paybackPeriod % 1) * 12),
      totalYears: paybackPeriod.toFixed(2),
    };
  };

  const result = calculatePaybackPeriod();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Initial Investment ($)
          </label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 100000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Annual Cash Inflow ($)
          </label>
          <input
            type="number"
            value={annualCashInflow}
            onChange={(e) => setAnnualCashInflow(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 25000"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Payback Period Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Payback Period:</span>
              <span className="text-yellow-600 font-medium">
                {result.years} years {result.months} months
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Total Payback Time:</span>
              <span className="text-blue-600">{result.totalYears} years</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PaybackPeriodCalculator;
