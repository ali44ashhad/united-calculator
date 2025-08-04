import React, { useState } from "react";

const TriangleCalculator = () => {
  const [base, setBase] = useState("10");
  const [height, setHeight] = useState("5");
  const [sideA, setSideA] = useState("10");
  const [sideB, setSideB] = useState("6");
  const [sideC, setSideC] = useState("8");
  const [results, setResults] = useState({ area: "", perimeter: "" });

  const calculateTriangle = () => {
    const b = parseFloat(base);
    const h = parseFloat(height);
    const a = parseFloat(sideA);
    const c = parseFloat(sideC);
    const d = parseFloat(sideB);

    if (
      isNaN(b) ||
      isNaN(h) ||
      isNaN(a) ||
      isNaN(c) ||
      isNaN(d) ||
      b <= 0 ||
      h <= 0 ||
      a <= 0 ||
      c <= 0 ||
      d <= 0
    ) {
      setResults({ area: "Invalid input", perimeter: "Invalid input" });
      return;
    }

    const area = 0.5 * b * h;
    const perimeter = a + c + d;

    setResults({
      area: area.toFixed(2),
      perimeter: perimeter.toFixed(2),
    });
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="grid gap-4">
        <div>
          <label className="block mb-1 font-medium">Base</label>
          <input
            type="number"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter base"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Height</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter height"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Side A</label>
          <input
            type="number"
            value={sideA}
            onChange={(e) => setSideA(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter side A"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Side B</label>
          <input
            type="number"
            value={sideB}
            onChange={(e) => setSideB(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter side B"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Side C</label>
          <input
            type="number"
            value={sideC}
            onChange={(e) => setSideC(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter side C"
          />
        </div>

        <button
          onClick={calculateTriangle}
          className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
        >
          Calculate Area & Perimeter
        </button>
      </div>

      {results.area && (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Results</h2>
          <p className="text-green-600 font-semibold text-lg">
            Area: {results.area} units²
          </p>
          <p className="text-blue-600 font-semibold text-lg">
            Perimeter: {results.perimeter} units
          </p>
        </div>
      )}
    </div>
  );
};

export default TriangleCalculator;
