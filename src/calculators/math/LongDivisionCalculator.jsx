import React, { useState } from "react";

const LongDivisionCalculator = () => {
  const [dividend, setDividend] = useState("100");
  const [divisor, setDivisor] = useState("7");

  const parsedDividend = parseFloat(dividend);
  const parsedDivisor = parseFloat(divisor);

  const isValid =
    !isNaN(parsedDividend) && !isNaN(parsedDivisor) && parsedDivisor !== 0;

  const quotient = isValid ? Math.floor(parsedDividend / parsedDivisor) : null;
  const remainder = isValid ? parsedDividend % parsedDivisor : null;

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Dividend</label>
          <input
            type="number"
            value={dividend}
            onChange={(e) => setDividend(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Divisor</label>
          <input
            type="number"
            value={divisor}
            onChange={(e) => setDivisor(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 7"
          />
        </div>
      </div>

      {isValid && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Long Division Result
          </h2>
          <p>
            <strong>{parsedDividend}</strong> ÷ <strong>{parsedDivisor}</strong>{" "}
            = <strong>{quotient}</strong> with a remainder of{" "}
            <strong>{remainder}</strong>
          </p>
        </section>
      )}

      {!isValid && (
        <p className="text-red-600 mt-4">
          Please enter valid numbers. Divisor must not be zero.
        </p>
      )}
    </div>
  );
};

export default LongDivisionCalculator;
