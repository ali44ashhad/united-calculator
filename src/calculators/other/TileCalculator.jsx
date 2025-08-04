import React, { useState } from "react";

const TileCalculator = () => {
  const [floorLength, setFloorLength] = useState("");
  const [floorWidth, setFloorWidth] = useState("");
  const [tileLength, setTileLength] = useState("");
  const [tileWidth, setTileWidth] = useState("");
  const [totalTiles, setTotalTiles] = useState(null);

  const calculateTiles = () => {
    const fLength = parseFloat(floorLength);
    const fWidth = parseFloat(floorWidth);
    const tLength = parseFloat(tileLength);
    const tWidth = parseFloat(tileWidth);

    if (
      !isNaN(fLength) &&
      !isNaN(fWidth) &&
      !isNaN(tLength) &&
      !isNaN(tWidth) &&
      tLength !== 0 &&
      tWidth !== 0
    ) {
      const floorArea = fLength * fWidth;
      const tileArea = tLength * tWidth;
      const requiredTiles = Math.ceil(floorArea / tileArea);
      setTotalTiles(requiredTiles);
    } else {
      setTotalTiles(null);
    }
  };

  const handleReset = () => {
    setFloorLength("");
    setFloorWidth("");
    setTileLength("");
    setTileWidth("");
    setTotalTiles(null);
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center text-green-600">
        Tile Calculator
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Floor Length (ft)</label>
          <input
            type="number"
            value={floorLength}
            onChange={(e) => setFloorLength(e.target.value)}
            placeholder="Enter floor length"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Floor Width (ft)</label>
          <input
            type="number"
            value={floorWidth}
            onChange={(e) => setFloorWidth(e.target.value)}
            placeholder="Enter floor width"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Tile Length (ft)</label>
          <input
            type="number"
            value={tileLength}
            onChange={(e) => setTileLength(e.target.value)}
            placeholder="Enter tile length"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Tile Width (ft)</label>
          <input
            type="number"
            value={tileWidth}
            onChange={(e) => setTileWidth(e.target.value)}
            placeholder="Enter tile width"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="flex space-x-4">
          <button
            onClick={calculateTiles}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
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

      {totalTiles !== null && (
        <section className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
          <h3 className="text-lg font-semibold text-green-700 mb-2">Result:</h3>
          <p className="text-2xl font-bold text-green-800">
            {totalTiles} tile{totalTiles > 1 ? "s" : ""} needed
          </p>
        </section>
      )}
    </div>
  );
};

export default TileCalculator;
