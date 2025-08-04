import React, { useState } from "react";

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState("1000");
  const [discountPercentage, setDiscountPercentage] = useState("10");

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

    if (isNaN(price) || isNaN(discount)) return null;

    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;

    return {
      discountAmount: discountAmount.toFixed(2),
      finalPrice: finalPrice.toFixed(2),
    };
  };

  const result = calculateDiscount();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Original Price (₹)</label>
          <input
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 1000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Discount (%)</label>
          <input
            type="number"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Discount Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Discount Amount:</span>
              <span className="text-green-600 font-medium">
                ₹{result.discountAmount}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Final Price After Discount:</span>
              <span className="text-blue-600">₹{result.finalPrice}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DiscountCalculator;
