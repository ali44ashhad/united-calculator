import React, { useState } from "react";

const DiceRoller = () => {
  const [diceCount, setDiceCount] = useState("1");
  const [sides, setSides] = useState("6");
  const [results, setResults] = useState([]);

  const rollDice = () => {
    const count = parseInt(diceCount);
    const side = parseInt(sides);

    if (isNaN(count) || isNaN(side) || count <= 0 || side <= 0) return;

    const newResults = [];
    for (let i = 0; i < count; i++) {
      newResults.push(Math.floor(Math.random() * side) + 1);
    }

    setResults(newResults);
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Number of Dice</label>
          <input
            type="number"
            value={diceCount}
            onChange={(e) => setDiceCount(e.target.value)}
            placeholder="e.g. 2"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Number of Sides per Die
          </label>
          <input
            type="number"
            value={sides}
            onChange={(e) => setSides(e.target.value)}
            placeholder="e.g. 6"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          onClick={rollDice}
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700 transition"
        >
          Roll Dice
        </button>
      </div>

      {results.length > 0 && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Roll Results
          </h2>
          <div className="flex flex-wrap gap-2">
            {results.map((val, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded font-medium"
              >
                🎲 {val}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default DiceRoller;
