import React, { useState } from "react";

const LoveCalculator = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(null);

  const calculateLove = () => {
    if (!name1 || !name2) return;

    const combined = (name1 + name2).toLowerCase();
    let score = 0;
    for (let i = 0; i < combined.length; i++) {
      score += combined.charCodeAt(i);
    }

    const lovePercentage = (score % 100) + 1;
    setResult(lovePercentage);
  };

  const handleReset = () => {
    setName1("");
    setName2("");
    setResult(null);
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            type="text"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Partner's Name</label>
          <input
            type="text"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder="Enter partner's name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="flex space-x-4">
          <button
            onClick={calculateLove}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded w-full"
          >
            Calculate
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded w-full"
          >
            Reset
          </button>
        </div>
      </div>

      {result !== null && (
        <section className="bg-pink-50 p-4 rounded-lg border border-pink-200 mt-6">
          <h2 className="text-xl font-semibold text-pink-700 mb-3">
            Love Match Result ❤️
          </h2>
          <div className="text-center text-3xl font-bold text-pink-600">
            {result}%
          </div>
        </section>
      )}
    </div>
  );
};

export default LoveCalculator;
