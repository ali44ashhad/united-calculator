import React, { useState } from "react";

const AverageCalculator = () => {
  const [numbers, setNumbers] = useState("");
  const [average, setAverage] = useState(null);

  const calculateAverage = () => {
    const nums = numbers
      .split(",")
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n));

    if (nums.length === 0) {
      setAverage(null);
      return;
    }

    const total = nums.reduce((acc, curr) => acc + curr, 0);
    const avg = total / nums.length;
    setAverage(avg.toFixed(2));
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Enter numbers (comma separated)
          </label>
          <input
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            placeholder="e.g. 10, 20, 30"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <button
          onClick={calculateAverage}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
        >
          Calculate Average
        </button>
      </div>

      {average !== null && (
        <div className="mt-6 bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h2 className="text-lg font-semibold text-purple-700 mb-2">Result</h2>
          <p className="text-gray-800">
            📊 Average: <strong>{average}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default AverageCalculator;
