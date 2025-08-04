import React, { useState } from "react";

const IRRCalculator = () => {
  const [cashFlowsInput, setCashFlowsInput] = useState(
    "-10000, 2000, 3000, 4000, 5000"
  );

  const calculateIRR = (cashFlows, guess = 0.1) => {
    const maxIterations = 1000;
    const precision = 1e-6;
    let rate = guess;

    for (let i = 0; i < maxIterations; i++) {
      let npv = 0;
      let derivative = 0;

      for (let t = 0; t < cashFlows.length; t++) {
        npv += cashFlows[t] / Math.pow(1 + rate, t);
        derivative -= (t * cashFlows[t]) / Math.pow(1 + rate, t + 1);
      }

      const newRate = rate - npv / derivative;
      if (Math.abs(newRate - rate) < precision) {
        return newRate * 100;
      }

      rate = newRate;
    }

    return null;
  };

  const parseCashFlows = () => {
    return cashFlowsInput
      .split(",")
      .map((val) => parseFloat(val.trim()))
      .filter((val) => !isNaN(val));
  };

  const cashFlows = parseCashFlows();
  const irr = cashFlows.length > 1 ? calculateIRR(cashFlows) : null;

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Enter Cash Flows (comma separated)
          </label>
          <input
            type="text"
            value={cashFlowsInput}
            onChange={(e) => setCashFlowsInput(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="-10000, 2000, 3000, 4000, 5000"
          />
        </div>
      </div>

      {irr !== null ? (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Internal Rate of Return (IRR)
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">IRR:</span>
            <span className="text-green-600">{irr.toFixed(2)}%</span>
          </div>
        </section>
      ) : (
        <p className="text-red-600 mt-4">
          Please enter at least two valid numeric cash flows to calculate IRR.
        </p>
      )}
    </div>
  );
};

export default IRRCalculator;
