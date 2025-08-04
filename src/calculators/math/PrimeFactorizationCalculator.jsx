import React, { useState } from "react";

const PrimeFactorizationCalculator = () => {
  const [number, setNumber] = useState("");
  const [factors, setFactors] = useState([]);

  const getPrimeFactors = (num) => {
    const result = [];
    let n = num;

    // Divide by 2 until odd
    while (n % 2 === 0) {
      result.push(2);
      n = n / 2;
    }

    // Check odd divisors
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      while (n % i === 0) {
        result.push(i);
        n = n / i;
      }
    }

    // If n becomes a prime number greater than 2
    if (n > 2) {
      result.push(n);
    }

    return result;
  };

  const handleCalculate = () => {
    const num = parseInt(number);
    if (!isNaN(num) && num > 1) {
      const primeFactors = getPrimeFactors(num);
      setFactors(primeFactors);
    } else {
      setFactors([]);
    }
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Prime Factorization Calculator
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Enter a number</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="e.g., 60"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Calculate
      </button>

      {factors.length > 0 && (
        <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-200">
          <p>
            <strong>Prime Factors:</strong> {factors.join(" × ")}
          </p>
        </div>
      )}

      {number !== "" && parseInt(number) <= 1 && (
        <p className="text-red-600 mt-4">
          Please enter a number greater than 1
        </p>
      )}
    </div>
  );
};

export default PrimeFactorizationCalculator;
