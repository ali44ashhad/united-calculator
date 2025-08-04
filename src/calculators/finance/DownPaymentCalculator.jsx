import React, { useState } from "react";

const DownPaymentCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState("500000");
  const [downPaymentPercentage, setDownPaymentPercentage] = useState("20");

  const calculateDownPayment = () => {
    const price = parseFloat(purchasePrice);
    const percentage = parseFloat(downPaymentPercentage);

    if (isNaN(price) || isNaN(percentage)) return null;

    const downPayment = (price * percentage) / 100;
    const loanAmount = price - downPayment;

    return {
      downPayment: downPayment.toFixed(2),
      loanAmount: loanAmount.toFixed(2),
    };
  };

  const result = calculateDownPayment();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Purchase Price (₹)</label>
          <input
            type="number"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 500000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Down Payment (%)</label>
          <input
            type="number"
            value={downPaymentPercentage}
            onChange={(e) => setDownPaymentPercentage(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 20"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Down Payment Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Down Payment Amount:</span>
              <span className="text-green-600 font-medium">
                ₹{result.downPayment}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Loan Amount Required:</span>
              <span className="text-blue-600">₹{result.loanAmount}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DownPaymentCalculator;
