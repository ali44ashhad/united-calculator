import React, { useState } from "react";

const NumberSequenceCalculator = () => {
  const [startValue, setStartValue] = useState("1");
  const [difference, setDifference] = useState("2");
  const [length, setLength] = useState("10");

  const parsedStart = parseFloat(startValue);
  const parsedDiff = parseFloat(difference);
  const parsedLength = parseInt(length);

  const isValid =
    !isNaN(parsedStart) &&
    !isNaN(parsedDiff) &&
    !isNaN(parsedLength) &&
    parsedLength > 0;

  const generateSequence = () => {
    if (!isValid) return [];

    const sequence = [];
    for (let i = 0; i < parsedLength; i++) {
      sequence.push(parsedStart + i * parsedDiff);
    }
    return sequence;
  };

  const sequence = generateSequence();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Start Value</label>
          <input
            type="number"
            value={startValue}
            onChange={(e) => setStartValue(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 1"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Common Difference</label>
          <input
            type="number"
            value={difference}
            onChange={(e) => setDifference(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Number of Terms</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
          />
        </div>
      </div>

      {isValid && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Generated Sequence
          </h2>
          <p>{sequence.join(", ")}</p>
        </section>
      )}

      {!isValid && (
        <p className="text-red-600 mt-4">
          Please enter valid input. Number of terms must be greater than 0.
        </p>
      )}
    </div>
  );
};

export default NumberSequenceCalculator;
