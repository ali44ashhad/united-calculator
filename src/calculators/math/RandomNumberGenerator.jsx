import React, { useState } from "react";

const RandomNumberGenerator = () => {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandom = () => {
    const minimum = parseInt(min);
    const maximum = parseInt(max);

    if (isNaN(minimum) || isNaN(maximum) || minimum > maximum) {
      setRandomNumber("Invalid range");
      return;
    }

    const result =
      Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    setRandomNumber(result);
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Minimum Value</label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter min value"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Maximum Value</label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter max value"
          />
        </div>

        <button
          onClick={generateRandom}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Generate Random Number
        </button>
      </div>

      {randomNumber !== null && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Random Number
          </h2>
          <div className="text-green-600 font-bold text-2xl">
            {randomNumber}
          </div>
        </section>
      )}
    </div>
  );
};

export default RandomNumberGenerator;
