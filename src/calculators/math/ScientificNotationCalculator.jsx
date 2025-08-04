import React, { useState } from "react";

const ScientificNotationCalculator = () => {
  const [number, setNumber] = useState("");
  const [scientific, setScientific] = useState("");
  const [fromScientific, setFromScientific] = useState("");
  const [converted, setConverted] = useState("");

  const convertToScientific = () => {
    const num = parseFloat(number);
    if (!isNaN(num)) {
      setScientific(num.toExponential());
    } else {
      setScientific("Invalid input");
    }
  };

  const convertFromScientific = () => {
    try {
      const value = Number(fromScientific);
      if (!isNaN(value)) {
        setConverted(value.toString());
      } else {
        setConverted("Invalid input");
      }
    } catch {
      setConverted("Invalid input");
    }
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">
        Scientific Notation Calculator
      </h2>

      <div className="mb-6">
        <label className="block mb-1 font-medium">
          Number to Convert to Scientific Notation
        </label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
          placeholder="Enter a number"
        />
        <button
          onClick={convertToScientific}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Convert to Scientific Notation
        </button>
        {scientific && (
          <div className="mt-2 text-green-600 font-medium">
            Result: {scientific}
          </div>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Scientific Notation to Convert to Number
        </label>
        <input
          type="text"
          value={fromScientific}
          onChange={(e) => setFromScientific(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
          placeholder="Enter scientific notation (e.g., 1.23e4)"
        />
        <button
          onClick={convertFromScientific}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Convert to Standard Number
        </button>
        {converted && (
          <div className="mt-2 text-green-600 font-medium">
            Result: {converted}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScientificNotationCalculator;
