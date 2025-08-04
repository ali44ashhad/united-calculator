import React, { useState } from "react";

const LeaseCalculator = () => {
  const [monthlyPayment, setMonthlyPayment] = useState("300");
  const [leaseTerm, setLeaseTerm] = useState("36");
  const [downPayment, setDownPayment] = useState("2000");

  const totalLeaseCost =
    parseFloat(monthlyPayment || 0) * parseInt(leaseTerm || 0) +
    parseFloat(downPayment || 0);

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Monthly Lease Payment ($)
          </label>
          <input
            type="number"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="300"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Lease Term (months)</label>
          <input
            type="number"
            value={leaseTerm}
            onChange={(e) => setLeaseTerm(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="36"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Down Payment ($)</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="2000"
          />
        </div>
      </div>

      <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Lease Summary
        </h2>
        <div className="flex justify-between text-lg font-semibold">
          <span className="text-gray-800">Total Lease Cost:</span>
          <span className="text-blue-600">${totalLeaseCost.toFixed(2)}</span>
        </div>
      </section>
    </div>
  );
};

export default LeaseCalculator;
