import React, { useState } from "react";

const MarginCalculator = () => {
  const [cost, setCost] = useState("100");
  const [price, setPrice] = useState("150");

  const costVal = parseFloat(cost || 0);
  const priceVal = parseFloat(price || 0);

  const profit = priceVal - costVal;
  const margin = priceVal === 0 ? 0 : (profit / priceVal) * 100;
  const markup = costVal === 0 ? 0 : (profit / costVal) * 100;

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Cost Price ($)</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Selling Price ($)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="150"
          />
        </div>
      </div>

      <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Margin Summary
        </h2>
        <div className="flex justify-between text-lg font-semibold">
          <span className="text-gray-800">Profit:</span>
          <span className="text-green-600">${profit.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold mt-2">
          <span className="text-gray-800">Margin (%):</span>
          <span className="text-blue-600">{margin.toFixed(2)}%</span>
        </div>
        <div className="flex justify-between text-lg font-semibold mt-2">
          <span className="text-gray-800">Markup (%):</span>
          <span className="text-purple-600">{markup.toFixed(2)}%</span>
        </div>
      </section>
    </div>
  );
};

export default MarginCalculator;
