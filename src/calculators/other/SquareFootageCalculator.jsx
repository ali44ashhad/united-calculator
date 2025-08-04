import React, { useState } from "react";

const SquareFootageCalculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [squareFootage, setSquareFootage] = useState(null);

  const calculateSquareFootage = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);

    if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) {
      setSquareFootage(null);
      return;
    }

    const result = l * w;
    setSquareFootage(result.toFixed(2));
  };

  const resetFields = () => {
    setLength("");
    setWidth("");
    setSquareFootage(null);
  };

  return (
    <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Square Footage Calculator
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Length (feet)</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="e.g., 12"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Width (feet)</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="e.g., 10"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={calculateSquareFootage}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Calculate
        </button>
        <button
          onClick={resetFields}
          className="w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>

      {squareFootage !== null && (
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-green-600">
            Total Area: {squareFootage} ft²
          </h3>
        </div>
      )}
    </div>
  );
};

export default SquareFootageCalculator;
