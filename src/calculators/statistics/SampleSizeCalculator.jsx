import React, { useState } from "react";

const SampleSizeCalculator = () => {
  const [population, setPopulation] = useState("10000");
  const [confidenceLevel, setConfidenceLevel] = useState("95");
  const [marginOfError, setMarginOfError] = useState("5");
  const [result, setResult] = useState("");

  const calculateSampleSize = () => {
    const N = parseFloat(population);
    const z = getZScore(confidenceLevel);
    const E = parseFloat(marginOfError) / 100;
    const p = 0.5; // proportion of population
    const q = 1 - p;

    if (isNaN(N) || isNaN(z) || isNaN(E) || N <= 0 || E <= 0) {
      setResult("Invalid input");
      return;
    }

    const numerator = z * z * p * q;
    const denominator = E * E;
    const n0 = numerator / denominator;

    const n = n0 / (1 + (n0 - 1) / N);
    setResult(Math.ceil(n));
  };

  const getZScore = (level) => {
    switch (parseInt(level)) {
      case 90:
        return 1.645;
      case 95:
        return 1.96;
      case 99:
        return 2.576;
      default:
        return 1.96;
    }
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Population Size</label>
          <input
            type="number"
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter population size"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Confidence Level (%)</label>
          <select
            value={confidenceLevel}
            onChange={(e) => setConfidenceLevel(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="90">90%</option>
            <option value="95">95%</option>
            <option value="99">99%</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Margin of Error (%)</label>
          <input
            type="number"
            value={marginOfError}
            onChange={(e) => setMarginOfError(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 5"
          />
        </div>

        <button
          onClick={calculateSampleSize}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Calculate Sample Size
        </button>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Required Sample Size
          </h2>
          <div className="text-green-600 font-bold text-2xl">
            {result} people
          </div>
        </section>
      )}
    </div>
  );
};

export default SampleSizeCalculator;
