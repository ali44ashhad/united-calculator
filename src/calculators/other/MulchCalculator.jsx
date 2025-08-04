import React, { useState } from "react";

const MulchCalculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [result, setResult] = useState("");

  const calculateMulch = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const d = parseFloat(depth);

    if (isNaN(l) || isNaN(w) || isNaN(d)) {
      setResult("Please enter valid numbers.");
      return;
    }

    const volume = (l * w * (d / 12)) / 27; // Convert to cubic yards
    setResult(
      `You need approximately ${volume.toFixed(2)} cubic yards of mulch.`
    );
  };

  const clearFields = () => {
    setLength("");
    setWidth("");
    setDepth("");
    setResult("");
  };

  return (
    <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Mulch Calculator
      </h2>

      <div className="space-y-4">
        <input
          type="number"
          placeholder="Length (feet)"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl"
        />
        <input
          type="number"
          placeholder="Width (feet)"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl"
        />
        <input
          type="number"
          placeholder="Depth (inches)"
          value={depth}
          onChange={(e) => setDepth(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl"
        />

        <div className="flex justify-between gap-4">
          <button
            onClick={calculateMulch}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl"
          >
            Calculate
          </button>
          <button
            onClick={clearFields}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-xl"
          >
            Clear
          </button>
        </div>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 border rounded-xl text-blue-700">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default MulchCalculator;
