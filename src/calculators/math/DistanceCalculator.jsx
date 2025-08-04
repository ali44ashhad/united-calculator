import React, { useState } from "react";

const DistanceCalculator = () => {
  const [speed, setSpeed] = useState("60");
  const [time, setTime] = useState("2");

  const calculateDistance = () => {
    const s = parseFloat(speed);
    const t = parseFloat(time);

    if (isNaN(s) || isNaN(t) || s < 0 || t < 0) return null;

    const distance = s * t;

    return {
      distance: distance.toFixed(2),
      speed: s.toFixed(2),
      time: t.toFixed(2),
    };
  };

  const result = calculateDistance();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Speed (km/h)</label>
          <input
            type="number"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 60"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Time (hours)</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 2"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Distance Calculation Result
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Speed:</span>
              <span className="text-yellow-600 font-medium">
                {result.speed} km/h
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Time:</span>
              <span className="text-green-600 font-medium">
                {result.time} hours
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Distance:</span>
              <span className="text-blue-600">{result.distance} km</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DistanceCalculator;
