import React, { useState } from "react";

const TargetHeartRateCalculator = () => {
  const [age, setAge] = useState("");

  const calculateTargetHeartRate = () => {
    const a = parseInt(age);
    if (!a || a <= 0) return null;

    const maxHeartRate = 220 - a;
    const lowerRange = Math.round(maxHeartRate * 0.5);
    const upperRange = Math.round(maxHeartRate * 0.85);

    return { lowerRange, upperRange, maxHeartRate };
  };

  const result = calculateTargetHeartRate();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Your Age (in years)</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-red-50 p-4 rounded-lg border border-red-200 mt-6">
          <h2 className="text-xl font-semibold text-red-700 mb-2">
            Target Heart Rate Zone
          </h2>
          <p className="text-gray-800 mb-1">
            🫀 <strong>Max Heart Rate:</strong> {result.maxHeartRate} bpm
          </p>
          <p className="text-gray-800">
            ✅ <strong>Target Zone:</strong> {result.lowerRange} –{" "}
            {result.upperRange} bpm
          </p>
        </section>
      )}
    </div>
  );
};

export default TargetHeartRateCalculator;
