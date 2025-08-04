import React, { useState } from "react";

const TakeHomePaycheckCalculator = () => {
  const [grossIncome, setGrossIncome] = useState("60000");
  const [federalTaxRate, setFederalTaxRate] = useState("12");
  const [stateTaxRate, setStateTaxRate] = useState("5");
  const [otherDeductions, setOtherDeductions] = useState("2000");

  const calculateTakeHomePay = () => {
    const income = parseFloat(grossIncome);
    const federalTax = parseFloat(federalTaxRate) / 100;
    const stateTax = parseFloat(stateTaxRate) / 100;
    const otherDeduct = parseFloat(otherDeductions);

    if (
      isNaN(income) ||
      isNaN(federalTax) ||
      isNaN(stateTax) ||
      isNaN(otherDeduct)
    )
      return null;

    const totalTax = income * (federalTax + stateTax);
    const netIncome = income - totalTax - otherDeduct;

    return {
      totalTax: totalTax.toFixed(2),
      deductions: otherDeduct.toFixed(2),
      netPay: netIncome.toFixed(2),
    };
  };

  const result = calculateTakeHomePay();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Annual Gross Income ($)
          </label>
          <input
            type="number"
            value={grossIncome}
            onChange={(e) => setGrossIncome(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 60000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Federal Tax Rate (%)</label>
          <input
            type="number"
            value={federalTaxRate}
            onChange={(e) => setFederalTaxRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 12"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">State Tax Rate (%)</label>
          <input
            type="number"
            value={stateTaxRate}
            onChange={(e) => setStateTaxRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Other Deductions ($)</label>
          <input
            type="number"
            value={otherDeductions}
            onChange={(e) => setOtherDeductions(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 2000"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Take-Home Pay Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Total Taxes Paid:</span>
              <span className="text-red-600 font-medium">
                ${result.totalTax}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Other Deductions:</span>
              <span className="text-yellow-600 font-medium">
                ${result.deductions}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Annual Take-Home Pay:</span>
              <span className="text-green-600">${result.netPay}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default TakeHomePaycheckCalculator;
