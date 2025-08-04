import React, { useState } from "react";

const StairCalculator = () => {
  const [totalRise, setTotalRise] = useState("");
  const [riserHeight, setRiserHeight] = useState("");
  const [treadDepth, setTreadDepth] = useState("");
  const [results, setResults] = useState(null);

  const calculateStairs = () => {
    const rise = parseFloat(totalRise);
    const riser = parseFloat(riserHeight);
    const tread = parseFloat(treadDepth);

    if (
      isNaN(rise) ||
      isNaN(riser) ||
      isNaN(tread) ||
      rise <= 0 ||
      riser <= 0 ||
      tread <= 0
    ) {
      setResults(null);
      return;
    }

    const numberOfSteps = Math.ceil(rise / riser);
    const totalRun = (numberOfSteps - 1) * tread;

    setResults({
      numberOfSteps,
      totalRun: totalRun.toFixed(2),
    });
  };

  const resetFields = () => {
    setTotalRise("");
    setRiserHeight("");
    setTreadDepth("");
    setResults(null);
  };

  return (
    <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Stair Calculator</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Total Rise (inches)</label>
        <input
          type="number"
          value={totalRise}
          onChange={(e) => setTotalRise(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="e.g., 96"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">
          Desired Riser Height (inches)
        </label>
        <input
          type="number"
          value={riserHeight}
          onChange={(e) => setRiserHeight(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="e.g., 7.5"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Tread Depth (inches)</label>
        <input
          type="number"
          value={treadDepth}
          onChange={(e) => setTreadDepth(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="e.g., 10"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={calculateStairs}
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

      {results && (
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold text-green-600">
            Number of Steps: {results.numberOfSteps}
          </p>
          <p className="text-lg font-semibold text-green-600">
            Total Run: {results.totalRun} inches
          </p>
        </div>
      )}
    </div>
  );
};

export default StairCalculator;
