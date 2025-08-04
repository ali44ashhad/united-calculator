import React, { useState } from "react";

const StatisticsCalculator = () => {
  const [input, setInput] = useState("10, 20, 20, 40, 50");
  const [stats, setStats] = useState(null);

  const calculateStats = () => {
    const nums = input
      .split(",")
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n));

    if (nums.length === 0) {
      setStats({ error: "Enter valid numbers separated by commas." });
      return;
    }

    // Mean
    const sum = nums.reduce((a, b) => a + b, 0);
    const mean = sum / nums.length;

    // Median
    const sorted = [...nums].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median =
      sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];

    // Mode
    const freq = {};
    sorted.forEach((n) => (freq[n] = (freq[n] || 0) + 1));
    const maxFreq = Math.max(...Object.values(freq));
    const modes = Object.keys(freq)
      .filter((k) => freq[k] === maxFreq)
      .map(Number);

    // Range
    const range = sorted[sorted.length - 1] - sorted[0];

    setStats({
      mean: mean.toFixed(4),
      median: median.toFixed(4),
      mode: modes.join(", "),
      range: range.toFixed(4),
    });
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Enter Numbers (comma‑separated)
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10, 20, 20, 40"
          />
        </div>

        <button
          onClick={calculateStats}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Calculate Statistics
        </button>
      </div>

      {stats && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          {stats.error ? (
            <div className="text-red-600 font-medium">{stats.error}</div>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Results
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Mean:</span>
                  <span className="text-blue-600 font-medium">
                    {stats.mean}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Median:</span>
                  <span className="text-green-600 font-medium">
                    {stats.median}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Mode:</span>
                  <span className="text-yellow-600 font-medium">
                    {stats.mode}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-gray-800">Range:</span>
                  <span className="text-indigo-600">{stats.range}</span>
                </div>
              </div>
            </>
          )}
        </section>
      )}
    </div>
  );
};

export default StatisticsCalculator;
