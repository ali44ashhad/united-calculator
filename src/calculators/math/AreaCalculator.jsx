import React, { useState } from "react";

const AreaCalculator = () => {
  const [shape, setShape] = useState("rectangle");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const calculateArea = () => {
    const a = parseFloat(input1);
    const b = parseFloat(input2);

    if (isNaN(a) || (shape !== "circle" && isNaN(b))) return null;

    switch (shape) {
      case "rectangle":
        return a * b;
      case "triangle":
        return 0.5 * a * b;
      case "circle":
        return Math.PI * a * a;
      case "parallelogram":
        return a * b;
      case "trapezoid":
        return 0.5 * (a + b) * parseFloat(input2);
      default:
        return null;
    }
  };

  const result = calculateArea();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
      <div className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Select Shape</label>
          <select
            value={shape}
            onChange={(e) => {
              setShape(e.target.value);
              setInput1("");
              setInput2("");
            }}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="rectangle">Rectangle</option>
            <option value="triangle">Triangle</option>
            <option value="circle">Circle</option>
            <option value="parallelogram">Parallelogram</option>
            <option value="trapezoid">Trapezoid</option>
          </select>
        </div>

        {shape === "circle" ? (
          <div>
            <label className="block mb-1 font-medium">Radius</label>
            <input
              type="number"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        ) : (
          <>
            <div>
              <label className="block mb-1 font-medium">
                {shape === "trapezoid"
                  ? "Base 1"
                  : shape === "triangle"
                  ? "Base"
                  : "Length"}
              </label>
              <input
                type="number"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                {shape === "trapezoid"
                  ? "Base 2"
                  : shape === "triangle"
                  ? "Height"
                  : "Width"}
              </label>
              <input
                type="number"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </>
        )}
      </div>

      {result !== null && (
        <section className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Area</h2>
          <p className="text-gray-800 text-lg">
            📐 <strong>{result.toFixed(2)}</strong> square units
          </p>
        </section>
      )}
    </div>
  );
};

export default AreaCalculator;
