import React, { useState } from "react";

const LeastCommonMultipleCalculator = () => {
  const [numbers, setNumbers] = useState("12, 18");

  const parseInput = () => {
    return numbers
      .split(",")
      .map((num) => parseInt(num.trim()))
      .filter((n) => !isNaN(n) && n > 0);
  };

  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const lcmTwo = (a, b) => (a * b) / gcd(a, b);

  const calculateLCM = (arr) => {
    return arr.reduce((acc, val) => lcmTwo(acc, val));
  };

  const inputNumbers = parseInput();
  const lcm = inputNumbers.length >= 2 ? calculateLCM(inputNumbers) : null;

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Enter Numbers (comma-separated)
          </label>
          <input
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 12, 18"
          />
        </div>
      </div>

      {lcm !== null && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            LCM Result
          </h2>
          <p>
            <strong>Numbers:</strong> {inputNumbers.join(", ")}
          </p>
          <p>
            <strong>Least Common Multiple (LCM):</strong> {lcm}
          </p>
        </section>
      )}
    </div>
  );
};

export default LeastCommonMultipleCalculator;
