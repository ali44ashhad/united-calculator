import React, { useState } from "react";

const RightTriangleCalculator = () => {
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [hypotenuse, setHypotenuse] = useState("");
  const [missingSide, setMissingSide] = useState("");

  const calculateHypotenuse = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
      setHypotenuse("Invalid input");
      return;
    }

    const c = Math.sqrt(a * a + b * b);
    setHypotenuse(c.toFixed(2));
    setMissingSide("");
  };

  const calculateMissingSide = () => {
    const a = parseFloat(sideA);
    const c = parseFloat(sideB);

    if (isNaN(a) || isNaN(c) || a <= 0 || c <= 0 || c <= a) {
      setMissingSide("Invalid input");
      return;
    }

    const b = Math.sqrt(c * c - a * a);
    setMissingSide(b.toFixed(2));
    setHypotenuse("");
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md max-w-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Side A (Base or Leg)</label>
          <input
            type="number"
            value={sideA}
            onChange={(e) => setSideA(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter side A"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            {hypotenuse || missingSide
              ? "Side B (Second Leg or Hypotenuse)"
              : "Side B"}
          </label>
          <input
            type="number"
            value={sideB}
            onChange={(e) => setSideB(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter side B"
          />
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
          <button
            onClick={calculateHypotenuse}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Calculate Hypotenuse
          </button>
          <button
            onClick={calculateMissingSide}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Calculate Missing Side
          </button>
        </div>
      </div>

      {(hypotenuse || missingSide) && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Result</h2>
          {hypotenuse && (
            <div className="text-blue-600 font-bold text-xl">
              Hypotenuse = {hypotenuse}
            </div>
          )}
          {missingSide && (
            <div className="text-green-600 font-bold text-xl">
              Missing Side = {missingSide}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default RightTriangleCalculator;
