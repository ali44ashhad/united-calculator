import React, { useState } from "react";

const PermutationCombinationCalculator = () => {
  const [n, setN] = useState("");
  const [r, setR] = useState("");

  const factorial = (num) => {
    if (num < 0) return 0;
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) result *= i;
    return result;
  };

  const isValid = () => {
    const N = parseInt(n);
    const R = parseInt(r);
    return !isNaN(N) && !isNaN(R) && N >= R && N >= 0 && R >= 0;
  };

  const calculatePermutation = () => {
    const N = parseInt(n);
    const R = parseInt(r);
    return factorial(N) / factorial(N - R);
  };

  const calculateCombination = () => {
    const N = parseInt(n);
    const R = parseInt(r);
    return factorial(N) / (factorial(R) * factorial(N - R));
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Permutation & Combination Calculator
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">n (total items)</label>
          <input
            type="number"
            value={n}
            onChange={(e) => setN(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter value of n"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">r (items chosen)</label>
          <input
            type="number"
            value={r}
            onChange={(e) => setR(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter value of r"
          />
        </div>
      </div>

      {isValid() && (
        <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-200 space-y-2">
          <p>
            <strong>Permutation (nPr):</strong>{" "}
            {calculatePermutation().toLocaleString()}
          </p>
          <p>
            <strong>Combination (nCr):</strong>{" "}
            {calculateCombination().toLocaleString()}
          </p>
        </div>
      )}

      {!isValid() && n !== "" && r !== "" && (
        <p className="text-red-600 mt-4">
          Please enter valid values where n ≥ r ≥ 0
        </p>
      )}
    </div>
  );
};

export default PermutationCombinationCalculator;
