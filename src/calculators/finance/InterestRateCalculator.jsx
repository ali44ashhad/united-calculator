import React, { useState } from "react";

const InterestRateCalculator = () => {
  const [principal, setPrincipal] = useState("10000");
  const [interest, setInterest] = useState("1000");
  const [time, setTime] = useState("2");

  const calculateInterestRate = () => {
    const P = parseFloat(principal);
    const I = parseFloat(interest);
    const T = parseFloat(time);

    if (isNaN(P) || isNaN(I) || isNaN(T) || P === 0 || T === 0) return null;

    const rate = (I * 100) / (P * T);

    return {
      rate: rate.toFixed(2),
    };
  };

  const result = calculateInterestRate();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Principal Amount (₹)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Interest Earned (₹)</label>
          <input
            type="number"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 1000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Time Period (Years)</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 2"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Interest Rate Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Annual Interest Rate:</span>
            <span className="text-blue-600">{result.rate}%</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default InterestRateCalculator;
