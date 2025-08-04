import React, { useState } from "react";

const EstateTaxCalculator = () => {
  const [estateValue, setEstateValue] = useState("2000000"); // in ₹
  const [exemptionLimit, setExemptionLimit] = useState("1000000"); // in ₹
  const [taxRate, setTaxRate] = useState("40"); // in %

  const calculateEstateTax = () => {
    const value = parseFloat(estateValue);
    const exemption = parseFloat(exemptionLimit);
    const rate = parseFloat(taxRate) / 100;

    if (isNaN(value) || isNaN(exemption) || isNaN(rate)) return null;

    const taxableAmount = Math.max(0, value - exemption);
    const taxDue = taxableAmount * rate;

    return {
      taxableAmount: taxableAmount.toFixed(2),
      taxDue: taxDue.toFixed(2),
    };
  };

  const result = calculateEstateTax();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Total Estate Value (₹)
          </label>
          <input
            type="number"
            value={estateValue}
            onChange={(e) => setEstateValue(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 2000000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Exemption Limit (₹)</label>
          <input
            type="number"
            value={exemptionLimit}
            onChange={(e) => setExemptionLimit(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 1000000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Estate Tax Rate (%)</label>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 40"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Estate Tax Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Taxable Estate:</span>
              <span className="text-yellow-600 font-medium">
                ₹{result.taxableAmount}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Estate Tax Due:</span>
              <span className="text-red-600">₹{result.taxDue}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default EstateTaxCalculator;
