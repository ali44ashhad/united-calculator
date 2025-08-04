import React, { useState } from "react";

const RMDCalculator = () => {
  const [accountBalance, setAccountBalance] = useState("200000");
  const [age, setAge] = useState("73");

  const calculateRMD = () => {
    const balance = parseFloat(accountBalance);
    const userAge = parseInt(age);

    if (isNaN(balance) || isNaN(userAge) || userAge < 72) return null;

    // IRS Uniform Lifetime Table divisor (simplified for ages 72–100)
    const distributionTable = {
      72: 27.4,
      73: 26.5,
      74: 25.5,
      75: 24.6,
      76: 23.7,
      77: 22.9,
      78: 22.0,
      79: 21.1,
      80: 20.2,
      81: 19.4,
      82: 18.5,
      83: 17.7,
      84: 16.8,
      85: 16.0,
      86: 15.2,
      87: 14.4,
      88: 13.7,
      89: 12.9,
      90: 12.2,
      91: 11.5,
      92: 10.8,
      93: 10.1,
      94: 9.5,
      95: 8.9,
      96: 8.4,
      97: 7.8,
      98: 7.3,
      99: 6.8,
      100: 6.4,
    };

    const divisor = distributionTable[userAge] || null;

    if (!divisor) return null;

    const rmd = balance / divisor;

    return {
      rmd: rmd.toFixed(2),
      divisor,
    };
  };

  const result = calculateRMD();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            IRA Account Balance ($)
          </label>
          <input
            type="number"
            value={accountBalance}
            onChange={(e) => setAccountBalance(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 200000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 73"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            RMD Calculation Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">
                IRS Life Expectancy Divisor:
              </span>
              <span className="text-yellow-600 font-medium">
                {result.divisor}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">
                Required Minimum Distribution:
              </span>
              <span className="text-blue-600">${result.rmd}</span>
            </div>
          </div>
        </section>
      )}

      {parseInt(age) < 72 && (
        <p className="text-red-600 text-sm mt-4">
          RMDs are required only if you're 72 or older.
        </p>
      )}
    </div>
  );
};

export default RMDCalculator;
