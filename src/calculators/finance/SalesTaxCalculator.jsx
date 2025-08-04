import React, { useState } from "react";

const SalesTaxCalculator = () => {
  const [amount, setAmount] = useState("100");
  const [taxRate, setTaxRate] = useState("8");

  const calculateTax = () => {
    const price = parseFloat(amount);
    const rate = parseFloat(taxRate);

    if (isNaN(price) || isNaN(rate)) return null;

    const taxAmount = (price * rate) / 100;
    const totalAmount = price + taxAmount;

    return {
      taxAmount: taxAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    };
  };

  const result = calculateTax();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Amount ($)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Tax Rate (%)</label>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 8"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Sales Tax Breakdown
          </h2>
          <div className="space-y-2 text-lg font-semibold">
            <div className="flex justify-between">
              <span>Tax Amount:</span>
              <span className="text-red-600">${result.taxAmount}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Amount:</span>
              <span className="text-green-600">${result.totalAmount}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SalesTaxCalculator;
