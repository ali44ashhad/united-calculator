import React, { useState } from "react";

const VATCalculator = () => {
  const [amount, setAmount] = useState("1000");
  const [vatRate, setVatRate] = useState("20");
  const [includeVAT, setIncludeVAT] = useState(false);

  const calculateVAT = () => {
    const price = parseFloat(amount);
    const rate = parseFloat(vatRate) / 100;

    if (isNaN(price) || isNaN(rate)) return null;

    let vatAmount = 0;
    let netPrice = 0;
    let grossPrice = 0;

    if (includeVAT) {
      grossPrice = price;
      netPrice = price / (1 + rate);
      vatAmount = grossPrice - netPrice;
    } else {
      netPrice = price;
      vatAmount = netPrice * rate;
      grossPrice = netPrice + vatAmount;
    }

    return {
      netPrice: netPrice.toFixed(2),
      vatAmount: vatAmount.toFixed(2),
      grossPrice: grossPrice.toFixed(2),
    };
  };

  const result = calculateVAT();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            {includeVAT ? "Gross Price ($)" : "Net Price ($)"}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 1000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">VAT Rate (%)</label>
          <input
            type="number"
            value={vatRate}
            onChange={(e) => setVatRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 20"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeVAT}
            onChange={() => setIncludeVAT(!includeVAT)}
            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-400"
          />
          <label className="text-sm text-gray-700">Amount includes VAT</label>
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            VAT Calculation Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Net Price:</span>
              <span className="text-yellow-600 font-medium">
                ${result.netPrice}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">VAT Amount:</span>
              <span className="text-green-600 font-medium">
                ${result.vatAmount}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Gross Price:</span>
              <span className="text-blue-600">${result.grossPrice}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default VATCalculator;
