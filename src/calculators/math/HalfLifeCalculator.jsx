import React, { useState } from "react";

const HalfLifeCalculator = () => {
  const [initialAmount, setInitialAmount] = useState("100");
  const [halfLife, setHalfLife] = useState("5");
  const [timeElapsed, setTimeElapsed] = useState("10");

  const calculateHalfLife = () => {
    const A0 = parseFloat(initialAmount);
    const tHalf = parseFloat(halfLife);
    const t = parseFloat(timeElapsed);

    if (isNaN(A0) || isNaN(tHalf) || isNaN(t) || tHalf <= 0 || A0 < 0 || t < 0)
      return null;

    const remainingAmount = A0 * Math.pow(0.5, t / tHalf);

    return {
      initialAmount: A0.toFixed(2),
      timeElapsed: t.toFixed(2),
      halfLife: tHalf.toFixed(2),
      remainingAmount: remainingAmount.toFixed(4),
    };
  };

  const result = calculateHalfLife();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Initial Amount</label>
          <input
            type="number"
            value={initialAmount}
            onChange={(e) => setInitialAmount(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. 100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Half-Life (in same time unit)
          </label>
          <input
            type="number"
            value={halfLife}
            onChange={(e) => setHalfLife(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. 5"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Time Elapsed</label>
          <input
            type="number"
            value={timeElapsed}
            onChange={(e) => setTimeElapsed(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. 10"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Half-Life Result
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Initial Amount:</span>
              <span className="text-yellow-600 font-medium">
                {result.initialAmount}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Time Elapsed:</span>
              <span className="text-green-600 font-medium">
                {result.timeElapsed}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Half-Life:</span>
              <span className="text-indigo-600 font-medium">
                {result.halfLife}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Remaining Amount:</span>
              <span className="text-blue-600">{result.remainingAmount}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default HalfLifeCalculator;
