import React, { useState } from "react";

const LogCalculator = () => {
  const [number, setNumber] = useState("100");
  const [base, setBase] = useState("10");

  const parsedNumber = parseFloat(number);
  const parsedBase = parseFloat(base);

  const isValid =
    !isNaN(parsedNumber) &&
    parsedNumber > 0 &&
    !isNaN(parsedBase) &&
    parsedBase > 0 &&
    parsedBase !== 1;

  const logResult = isValid
    ? Math.log(parsedNumber) / Math.log(parsedBase)
    : null;

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Enter Number</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Enter Base</label>
          <input
            type="number"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
          />
        </div>
      </div>

      {isValid && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Logarithm Result
          </h2>
          <p>
            <strong>
              log<sub>{parsedBase}</sub>({parsedNumber})
            </strong>{" "}
            = {logResult.toFixed(6)}
          </p>
        </section>
      )}

      {!isValid && (
        <p className="text-red-600 mt-4">
          Please enter a positive number and a valid base (base must be greater
          than 0 and ≠ 1).
        </p>
      )}
    </div>
  );
};

export default LogCalculator;
