import React, { useState } from "react";

const MarriageTaxCalculator = () => {
  const [singleIncome, setSingleIncome] = useState("50000");
  const [spouseIncome, setSpouseIncome] = useState("40000");

  const totalIncome =
    parseFloat(singleIncome || 0) + parseFloat(spouseIncome || 0);

  const taxSingle =
    parseFloat(singleIncome || 0) * 0.22 + parseFloat(spouseIncome || 0) * 0.22;
  const taxMarried = totalIncome * 0.22;

  const marriageBonus = taxSingle - taxMarried;

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Your Income ($)</label>
          <input
            type="number"
            value={singleIncome}
            onChange={(e) => setSingleIncome(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="50000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Spouse's Income ($)</label>
          <input
            type="number"
            value={spouseIncome}
            onChange={(e) => setSpouseIncome(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="40000"
          />
        </div>
      </div>

      <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Tax Comparison
        </h2>
        <div className="flex justify-between text-lg font-semibold">
          <span className="text-gray-800">Tax (If Filing Separately):</span>
          <span className="text-red-600">${taxSingle.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold mt-2">
          <span className="text-gray-800">
            Tax (If Married Filing Jointly):
          </span>
          <span className="text-green-600">${taxMarried.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold mt-2">
          <span className="text-gray-800">Marriage Bonus/Penalty:</span>
          <span
            className={marriageBonus >= 0 ? "text-blue-600" : "text-red-600"}
          >
            {marriageBonus >= 0 ? "+" : "-"}$
            {Math.abs(marriageBonus).toFixed(2)}
          </span>
        </div>
      </section>
    </div>
  );
};

export default MarriageTaxCalculator;
