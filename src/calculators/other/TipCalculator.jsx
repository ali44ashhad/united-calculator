import React, { useState } from "react";

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState("0");
  const [tipPercentage, setTipPercentage] = useState("10");
  const [splitBy, setSplitBy] = useState("1");

  const calculateTip = () => {
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercentage);
    const people = parseInt(splitBy);

    if (isNaN(bill) || isNaN(tip) || isNaN(people) || people <= 0) return null;

    const tipAmount = (bill * tip) / 100;
    const total = bill + tipAmount;
    const perPerson = total / people;

    return {
      tipAmount: tipAmount.toFixed(2),
      total: total.toFixed(2),
      perPerson: perPerson.toFixed(2),
    };
  };

  const result = calculateTip();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Bill Amount (₹)</label>
          <input
            type="number"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 1000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Tip Percentage (%)</label>
          <input
            type="number"
            value={tipPercentage}
            onChange={(e) => setTipPercentage(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Split Between (People)
          </label>
          <input
            type="number"
            value={splitBy}
            onChange={(e) => setSplitBy(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 2"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Tip Calculation Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Tip Amount:</span>
              <span className="text-yellow-600 font-medium">
                ₹{result.tipAmount}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Total Bill (with Tip):</span>
              <span className="text-green-600 font-medium">
                ₹{result.total}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Per Person:</span>
              <span className="text-blue-600">₹{result.perPerson}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default TipCalculator;
