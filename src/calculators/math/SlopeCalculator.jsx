import React, { useState } from "react";

const SlopeCalculator = () => {
  const [x1, setX1] = useState("");
  const [y1, setY1] = useState("");
  const [x2, setX2] = useState("");
  const [y2, setY2] = useState("");
  const [slope, setSlope] = useState("");

  const calculateSlope = () => {
    const x1Val = parseFloat(x1);
    const y1Val = parseFloat(y1);
    const x2Val = parseFloat(x2);
    const y2Val = parseFloat(y2);

    if (isNaN(x1Val) || isNaN(y1Val) || isNaN(x2Val) || isNaN(y2Val)) {
      setSlope("Please enter valid numbers");
      return;
    }

    if (x2Val === x1Val) {
      setSlope("Undefined (division by zero)");
      return;
    }

    const result = (y2Val - y1Val) / (x2Val - x1Val);
    setSlope(result.toFixed(4));
  };

  return (
    <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Slope Calculator</h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 font-medium">x₁</label>
          <input
            type="number"
            value={x1}
            onChange={(e) => setX1(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter x₁"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">y₁</label>
          <input
            type="number"
            value={y1}
            onChange={(e) => setY1(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter y₁"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">x₂</label>
          <input
            type="number"
            value={x2}
            onChange={(e) => setX2(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter x₂"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">y₂</label>
          <input
            type="number"
            value={y2}
            onChange={(e) => setY2(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter y₂"
          />
        </div>
      </div>

      <button
        onClick={calculateSlope}
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
      >
        Calculate Slope
      </button>

      {slope && (
        <div className="mt-4 text-green-600 font-medium text-center">
          Slope (m): {slope}
        </div>
      )}
    </div>
  );
};

export default SlopeCalculator;
