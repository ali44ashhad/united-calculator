import React, { useState } from "react";

const BraSizeCalculator = () => {
  const [bandSize, setBandSize] = useState("");
  const [bustSize, setBustSize] = useState("");

  const calculateBraSize = () => {
    const band = parseInt(bandSize);
    const bust = parseInt(bustSize);

    if (isNaN(band) || isNaN(bust) || band <= 0 || bust <= 0) return null;

    const bandAdjusted = band % 2 === 0 ? band : band + 1; // round up to nearest even number

    const difference = bust - bandAdjusted;

    const cupSizes = [
      "AA",
      "A",
      "B",
      "C",
      "D",
      "DD",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
    ];

    const cupIndex = Math.max(0, Math.min(difference, cupSizes.length - 1));
    const cupSize = cupSizes[cupIndex];

    return {
      band: bandAdjusted,
      cupSize,
    };
  };

  const result = calculateBraSize();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Band Size (under bust in inches)
          </label>
          <input
            type="number"
            value={bandSize}
            onChange={(e) => setBandSize(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 32"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Bust Size (full bust in inches)
          </label>
          <input
            type="number"
            value={bustSize}
            onChange={(e) => setBustSize(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 34"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Your Bra Size
          </h2>
          <div className="text-gray-700 text-lg">
            <span className="font-medium text-blue-600">
              {result.band}
              {result.cupSize}
            </span>
          </div>
        </section>
      )}
    </div>
  );
};

export default BraSizeCalculator;
