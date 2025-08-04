import React, { useState } from "react";

const StandardDeviationCalculator = () => {
  const [numbers, setNumbers] = useState("10, 20, 30, 40, 50");
  const [result, setResult] = useState(null);

  const calculateStandardDeviation = () => {
    const numArray = numbers
      .split(",")
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n));

    if (numArray.length === 0) {
      setResult("Please enter valid numbers separated by commas.");
      return;
    }

    const mean = numArray.reduce((a, b) => a + b, 0) / numArray.length;
    const variance =
      numArray.reduce((sum, n) => sum + Math.pow(n - mean, 2), 0) /
      numArray.length;
    const stdDeviation = Math.sqrt(variance).toFixed(4);

    setResult(`Standard Deviation: ${stdDeviation}`);
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Enter numbers</label>
          <input
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            placeholder="e.g. 10, 20, 30"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          onClick={calculateStandardDeviation}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Calculate
        </button>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Result</h2>
          <div className="text-green-600 font-bold text-2xl">{result}</div>
        </section>
      )}
    </div>
  );
};

export default StandardDeviationCalculator;
