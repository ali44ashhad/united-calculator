import React, { useState } from "react";

const RoundingCalculator = () => {
  const [number, setNumber] = useState("123.45678");
  const [decimals, setDecimals] = useState("2");
  const [result, setResult] = useState("");

  const calculateRounded = () => {
    const num = parseFloat(number);
    const decimalPlaces = parseInt(decimals);

    if (isNaN(num) || isNaN(decimalPlaces) || decimalPlaces < 0) {
      setResult("Invalid input");
      return;
    }

    const rounded = num.toFixed(decimalPlaces);
    setResult(rounded);
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Number</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter number to round"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Decimal Places</label>
          <input
            type="number"
            value={decimals}
            onChange={(e) => setDecimals(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter number of decimal places"
          />
        </div>

        <button
          onClick={calculateRounded}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Round Number
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

export default RoundingCalculator;
