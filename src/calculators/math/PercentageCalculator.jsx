import React, { useState } from "react";

const PercentageCalculator = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const parseVal1 = parseFloat(value1);
  const parseVal2 = parseFloat(value2);

  const isValid = !isNaN(parseVal1) && !isNaN(parseVal2) && parseVal2 !== 0;

  const percentOf = ((parseVal1 * parseVal2) / 100).toFixed(2);
  const isWhatPercent = ((parseVal1 / parseVal2) * 100).toFixed(2);
  const percentChange = (((parseVal2 - parseVal1) / parseVal1) * 100).toFixed(
    2
  );

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Value 1</label>
          <input
            type="number"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter value 1"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Value 2</label>
          <input
            type="number"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter value 2"
          />
        </div>
      </div>

      {isValid && (
        <div className="mt-6 space-y-4 bg-gray-50 p-4 rounded border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Results:</h2>
          <p>
            <strong>{value1}%</strong> of <strong>{value2}</strong> is{" "}
            <strong>{percentOf}</strong>
          </p>
          <p>
            <strong>{value1}</strong> is <strong>{isWhatPercent}%</strong> of{" "}
            <strong>{value2}</strong>
          </p>
          <p>
            Percentage change from <strong>{value1}</strong> to{" "}
            <strong>{value2}</strong> is <strong>{percentChange}%</strong>
          </p>
        </div>
      )}

      {!isValid && value1 && value2 && (
        <p className="text-red-600 mt-4">Please enter valid non-zero values.</p>
      )}
    </div>
  );
};

export default PercentageCalculator;
