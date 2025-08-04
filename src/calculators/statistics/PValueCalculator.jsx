import React, { useState } from "react";

const PValueCalculator = () => {
  const [zScore, setZScore] = useState("");
  const [pValue, setPValue] = useState(null);

  const calculatePValue = () => {
    const z = parseFloat(zScore);

    if (isNaN(z)) {
      setPValue("Invalid input");
      return;
    }

    // Calculate the p-value for a z-score assuming standard normal distribution
    const p = 1 - cumulativeStandardNormalDistribution(Math.abs(z));
    setPValue(p.toFixed(6));
  };

  const cumulativeStandardNormalDistribution = (z) => {
    // Using the approximation of the standard normal CDF
    const t = 1 / (1 + 0.2316419 * z);
    const d = 0.3989423 * Math.exp((-z * z) / 2);
    const prob =
      d *
      t *
      (0.3193815 +
        t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return 1 - prob;
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        P-Value Calculator
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Z-Score</label>
        <input
          type="number"
          value={zScore}
          onChange={(e) => setZScore(e.target.value)}
          placeholder="e.g., 1.96"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <button
        onClick={calculatePValue}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Calculate
      </button>

      {pValue !== null && (
        <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-200">
          {pValue === "Invalid input" ? (
            <p className="text-red-600">Please enter a valid z-score.</p>
          ) : (
            <p>
              <strong>P-Value:</strong> {pValue}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PValueCalculator;
