import React, { useState } from "react";

const ZScoreCalculator = () => {
  const [score, setScore] = useState("85");
  const [mean, setMean] = useState("70");
  const [stdDev, setStdDev] = useState("10");
  const [zScore, setZScore] = useState(null);

  const calculateZScore = () => {
    const x = parseFloat(score);
    const mu = parseFloat(mean);
    const sigma = parseFloat(stdDev);

    if (isNaN(x) || isNaN(mu) || isNaN(sigma) || sigma === 0) {
      setZScore("Invalid input");
      return;
    }

    const z = (x - mu) / sigma;
    setZScore(z.toFixed(4));
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Raw Score (X)</label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter raw score"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Mean (μ)</label>
          <input
            type="number"
            value={mean}
            onChange={(e) => setMean(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter mean"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Standard Deviation (σ)
          </label>
          <input
            type="number"
            value={stdDev}
            onChange={(e) => setStdDev(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter standard deviation"
          />
        </div>

        <button
          onClick={calculateZScore}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Calculate Z-Score
        </button>
      </div>

      {zScore !== null && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Z-Score Result
          </h2>
          <div className="text-green-600 font-bold text-2xl">{zScore}</div>
        </section>
      )}
    </div>
  );
};

export default ZScoreCalculator;
