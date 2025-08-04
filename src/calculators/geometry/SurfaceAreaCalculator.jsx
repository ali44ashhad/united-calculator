import React, { useState } from "react";

const SurfaceAreaCalculator = () => {
  const [shape, setShape] = useState("cube");
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const calculateSurfaceArea = () => {
    let area = 0;
    const { side, length, width, height, radius, slantHeight } = inputs;

    switch (shape) {
      case "cube":
        area = 6 * Math.pow(parseFloat(side), 2);
        break;
      case "cuboid":
        area =
          2 *
          (parseFloat(length) * parseFloat(width) +
            parseFloat(length) * parseFloat(height) +
            parseFloat(width) * parseFloat(height));
        break;
      case "sphere":
        area = 4 * Math.PI * Math.pow(parseFloat(radius), 2);
        break;
      case "cylinder":
        area =
          2 *
          Math.PI *
          parseFloat(radius) *
          (parseFloat(radius) + parseFloat(height));
        break;
      case "cone":
        area =
          Math.PI *
          parseFloat(radius) *
          (parseFloat(radius) + parseFloat(slantHeight));
        break;
      default:
        area = 0;
    }

    if (isNaN(area)) {
      setResult("Invalid input");
    } else {
      setResult(area.toFixed(2) + " sq units");
    }
  };

  const renderInputs = () => {
    switch (shape) {
      case "cube":
        return (
          <input
            type="number"
            name="side"
            value={inputs.side || ""}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Side length"
          />
        );
      case "cuboid":
        return (
          <>
            <input
              type="number"
              name="length"
              value={inputs.length || ""}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="Length"
            />
            <input
              type="number"
              name="width"
              value={inputs.width || ""}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded mt-2"
              placeholder="Width"
            />
            <input
              type="number"
              name="height"
              value={inputs.height || ""}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded mt-2"
              placeholder="Height"
            />
          </>
        );
      case "sphere":
        return (
          <input
            type="number"
            name="radius"
            value={inputs.radius || ""}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Radius"
          />
        );
      case "cylinder":
        return (
          <>
            <input
              type="number"
              name="radius"
              value={inputs.radius || ""}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="Radius"
            />
            <input
              type="number"
              name="height"
              value={inputs.height || ""}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded mt-2"
              placeholder="Height"
            />
          </>
        );
      case "cone":
        return (
          <>
            <input
              type="number"
              name="radius"
              value={inputs.radius || ""}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="Radius"
            />
            <input
              type="number"
              name="slantHeight"
              value={inputs.slantHeight || ""}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded mt-2"
              placeholder="Slant Height"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md max-w-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Select Shape</label>
          <select
            value={shape}
            onChange={(e) => {
              setShape(e.target.value);
              setInputs({});
              setResult("");
            }}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="cube">Cube</option>
            <option value="cuboid">Cuboid</option>
            <option value="sphere">Sphere</option>
            <option value="cylinder">Cylinder</option>
            <option value="cone">Cone</option>
          </select>
        </div>

        <div>{renderInputs()}</div>

        <button
          onClick={calculateSurfaceArea}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition mt-2"
        >
          Calculate Surface Area
        </button>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Result</h2>
          <div className="text-green-600 font-bold text-2xl">{result}</div>
        </section>
      )}
    </div>
  );
};

export default SurfaceAreaCalculator;
