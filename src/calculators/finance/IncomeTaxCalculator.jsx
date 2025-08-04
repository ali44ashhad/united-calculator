import React, { useState } from "react";

const IncomeTaxCalculator = () => {
  const [income, setIncome] = useState("1000000"); // default: ₹10,00,000
  const [regime, setRegime] = useState("old");

  const calculateTax = () => {
    const annualIncome = parseFloat(income);

    if (isNaN(annualIncome) || annualIncome < 0) return null;

    let tax = 0;

    if (regime === "old") {
      if (annualIncome <= 250000) {
        tax = 0;
      } else if (annualIncome <= 500000) {
        tax = (annualIncome - 250000) * 0.05;
      } else if (annualIncome <= 1000000) {
        tax = 12500 + (annualIncome - 500000) * 0.2;
      } else {
        tax = 112500 + (annualIncome - 1000000) * 0.3;
      }
    } else {
      if (annualIncome <= 300000) {
        tax = 0;
      } else if (annualIncome <= 600000) {
        tax = (annualIncome - 300000) * 0.05;
      } else if (annualIncome <= 900000) {
        tax = 15000 + (annualIncome - 600000) * 0.1;
      } else if (annualIncome <= 1200000) {
        tax = 45000 + (annualIncome - 900000) * 0.15;
      } else if (annualIncome <= 1500000) {
        tax = 90000 + (annualIncome - 1200000) * 0.2;
      } else {
        tax = 150000 + (annualIncome - 1500000) * 0.3;
      }
    }

    const cess = tax * 0.04;
    const totalTax = tax + cess;

    return {
      income: annualIncome,
      regime: regime === "old" ? "Old Regime" : "New Regime",
      tax: tax.toFixed(2),
      cess: cess.toFixed(2),
      totalTax: totalTax.toFixed(2),
    };
  };

  const result = calculateTax();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Annual Income (INR)</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 1000000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Select Tax Regime</label>
          <select
            value={regime}
            onChange={(e) => setRegime(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="old">Old Regime</option>
            <option value="new">New Regime</option>
          </select>
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Income Tax Summary
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-700">Annual Income:</span>
              <span className="text-blue-600 font-medium">
                ₹{result.income.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Tax Regime:</span>
              <span className="text-gray-800 font-medium">{result.regime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Income Tax:</span>
              <span className="text-red-600 font-medium">₹{result.tax}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Cess (4%):</span>
              <span className="text-orange-600 font-medium">
                ₹{result.cess}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Total Tax Payable:</span>
              <span className="text-green-600">₹{result.totalTax}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default IncomeTaxCalculator;
