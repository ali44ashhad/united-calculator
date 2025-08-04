import React, { useState } from "react";

const PercentErrorCalculator = () => {
  const [measuredValue, setMeasuredValue] = useState("105");
  const [actualValue, setActualValue] = useState("100");

  const parsedMeasured = parseFloat(measuredValue);
  const parsedActual = parseFloat(actualValue);

  const isValid =
    !isNaN(parsedMeasured) && !isNaN(parsedActual) && parsedActual !== 0;

  const percentError = isValid
    ? (Math.abs((parsedMeasured - parsedActual) / parsedActual) * 100).toFixed(
        2
      )
    : null;

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Measured Value</label>
          <input
            type="number"
            value={measuredValue}
            onChange={(e) => setMeasuredValue(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 105"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Actual Value</label>
          <input
            type="number"
            value={actualValue}
            onChange={(e) => setActualValue(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 100"
          />
        </div>
      </div>

      {isValid && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Percent Error
          </h2>
          <p>
            Percent Error = <strong>{percentError}%</strong>
          </p>
        </section>
      )}

      {!isValid && (
        <p className="text-red-600 mt-4">
          Please enter valid numbers. Actual value must not be zero.
        </p>
      )}
    </div>
  );
};

export default PercentErrorCalculator;
