import React, { useState } from "react";

const ProbabilityCalculator = () => {
  const [favorable, setFavorable] = useState("");
  const [total, setTotal] = useState("");
  const [probability, setProbability] = useState(null);

  const calculateProbability = () => {
    const fav = parseFloat(favorable);
    const tot = parseFloat(total);

    if (isNaN(fav) || isNaN(tot) || tot <= 0 || fav < 0 || fav > tot) {
      setProbability("Invalid input");
      return;
    }

    const prob = fav / tot;
    setProbability(prob.toFixed(4));
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Probability Calculator
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Favorable Outcomes</label>
        <input
          type="number"
          value={favorable}
          onChange={(e) => setFavorable(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="e.g., 2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Total Outcomes</label>
        <input
          type="number"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="e.g., 6"
        />
      </div>

      <button
        onClick={calculateProbability}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Calculate
      </button>

      {probability !== null && (
        <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-200">
          {probability === "Invalid input" ? (
            <p className="text-red-600">Please enter valid values.</p>
          ) : (
            <p>
              <strong>Probability:</strong> {probability} (
              {(probability * 100).toFixed(2)}%)
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProbabilityCalculator;
