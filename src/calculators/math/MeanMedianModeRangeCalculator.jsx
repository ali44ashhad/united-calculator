import React, { useState } from "react";

const MeanMedianModeRangeCalculator = () => {
  const [numbers, setNumbers] = useState("4, 8, 6, 5, 3, 8");

  const parseNumbers = (input) => {
    return input
      .split(",")
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n));
  };

  const getMean = (nums) =>
    nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0;

  const getMedian = (nums) => {
    if (!nums.length) return 0;
    const sorted = [...nums].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  };

  const getMode = (nums) => {
    if (!nums.length) return [];

    const frequency = {};
    nums.forEach((num) => {
      frequency[num] = (frequency[num] || 0) + 1;
    });

    const maxFreq = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency)
      .filter((key) => frequency[key] === maxFreq)
      .map(Number);

    return modes.length === nums.length ? [] : modes;
  };

  const getRange = (nums) =>
    nums.length ? Math.max(...nums) - Math.min(...nums) : 0;

  const nums = parseNumbers(numbers);
  const mean = getMean(nums);
  const median = getMedian(nums);
  const mode = getMode(nums);
  const range = getRange(nums);

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div>
        <label className="block mb-2 font-medium">
          Enter numbers (comma separated)
        </label>
        <input
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          placeholder="e.g. 4, 8, 6, 5, 3, 8"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {nums.length > 0 ? (
        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Results</h2>
          <p>
            <strong>Mean:</strong> {mean.toFixed(2)}
          </p>
          <p>
            <strong>Median:</strong> {median}
          </p>
          <p>
            <strong>Mode:</strong> {mode.length ? mode.join(", ") : "No mode"}
          </p>
          <p>
            <strong>Range:</strong> {range}
          </p>
        </div>
      ) : (
        <p className="text-red-600 mt-4">Please enter valid numbers.</p>
      )}
    </div>
  );
};

export default MeanMedianModeRangeCalculator;
