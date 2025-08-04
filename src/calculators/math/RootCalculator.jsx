import React, { useState } from "react";

const RootCalculator = () => {
  const [base, setBase] = useState("16");
  const [root, setRoot] = useState("2");
  const [result, setResult] = useState("");

  const calculateRoot = () => {
    const baseValue = parseFloat(base);
    const rootValue = parseFloat(root);

    if (isNaN(baseValue) || isNaN(rootValue) || rootValue === 0) {
      setResult("Invalid input");
      return;
    }

    const rootResult = Math.pow(baseValue, 1 / rootValue);
    setResult(rootResult.toFixed(6));
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Number (Base)</label>
          <input
            type="number"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter base number"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Root (n)</label>
          <input
            type="number"
            value={root}
            onChange={(e) => setRoot(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter root (e.g., 2 for square root)"
          />
        </div>

        <button
          onClick={calculateRoot}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Calculate Root
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

export default RootCalculator;
