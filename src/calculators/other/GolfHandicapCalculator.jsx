import React, { useState } from "react";

const GolfHandicapCalculator = () => {
  const [score, setScore] = useState("");
  const [courseRating, setCourseRating] = useState("");
  const [slopeRating, setSlopeRating] = useState("");

  const calculateHandicap = () => {
    const s = parseFloat(score);
    const cr = parseFloat(courseRating);
    const sr = parseFloat(slopeRating);

    if (isNaN(s) || isNaN(cr) || isNaN(sr) || sr === 0) return null;

    const handicap = ((s - cr) * 113) / sr;
    return handicap.toFixed(2);
  };

  const result = calculateHandicap();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Score</label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="e.g. 90"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Course Rating</label>
          <input
            type="number"
            value={courseRating}
            onChange={(e) => setCourseRating(e.target.value)}
            placeholder="e.g. 72.5"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Slope Rating</label>
          <input
            type="number"
            value={slopeRating}
            onChange={(e) => setSlopeRating(e.target.value)}
            placeholder="e.g. 113"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Handicap Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Handicap Index:</span>
            <span className="text-green-600">{result}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default GolfHandicapCalculator;
