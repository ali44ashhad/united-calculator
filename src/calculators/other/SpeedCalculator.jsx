import React, { useState } from "react";

const SpeedCalculator = () => {
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [speed, setSpeed] = useState(null);

  const calculateSpeed = () => {
    const d = parseFloat(distance);
    const t = parseFloat(time);

    if (isNaN(d) || isNaN(t) || t === 0) {
      setSpeed(null);
      return;
    }

    const result = d / t;
    setSpeed(result.toFixed(2));
  };

  const resetFields = () => {
    setDistance("");
    setTime("");
    setSpeed(null);
  };

  return (
    <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Speed Calculator</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Distance (km)</label>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="e.g., 100"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Time (hours)</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="e.g., 2"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={calculateSpeed}
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

      {speed !== null && (
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-green-600">
            Speed: {speed} km/h
          </h3>
        </div>
      )}
    </div>
  );
};

export default SpeedCalculator;
