import React, { useState } from "react";

const CDCalculator = () => {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("5");
  const [term, setTerm] = useState("3");
  const [compoundingsPerYear, setCompoundingsPerYear] = useState("4"); // Quarterly

  const calculateCD = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(term);
    const n = parseFloat(compoundingsPerYear);

    if (isNaN(P) || isNaN(r) || isNaN(t) || isNaN(n) || n === 0) return null;

    const A = P * Math.pow(1 + r / n, n * t);
    const interest = A - P;

    return {
      maturityAmount: A.toFixed(2),
      interestEarned: interest.toFixed(2),
    };
  };

  const result = calculateCD();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Principal Amount ($)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Term (Years)</label>
          <input
            type="number"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 3"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Compoundings Per Year
          </label>
          <input
            type="number"
            value={compoundingsPerYear}
            onChange={(e) => setCompoundingsPerYear(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 4 for quarterly"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            CD Maturity Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Interest Earned:</span>
              <span className="text-blue-600 font-medium">
                ${result.interestEarned}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Maturity Amount:</span>
              <span className="text-green-600">${result.maturityAmount}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CDCalculator;
