import React, { useState } from "react";

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState("1000");
  const [rate, setRate] = useState("5");
  const [time, setTime] = useState("2");

  const calculateInterest = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);

    if (isNaN(P) || isNaN(R) || isNaN(T)) return null;

    const interest = (P * R * T) / 100;
    const total = P + interest;

    return {
      interest: interest.toFixed(2),
      total: total.toFixed(2),
    };
  };

  const result = calculateInterest();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Principal Amount</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 1000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Rate of Interest (%)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Time Period (years)</label>
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
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Result</h2>
          <div className="space-y-2 text-lg font-semibold">
            <div className="flex justify-between">
              <span>Simple Interest:</span>
              <span className="text-blue-600">₹{result.interest}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Amount:</span>
              <span className="text-green-600">₹{result.total}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SimpleInterestCalculator;
