import React, { useState } from "react";

const VolumeCalculator = () => {
  const [shape, setShape] = useState("cube");
  const [inputs, setInputs] = useState({});
  const [volume, setVolume] = useState(null);

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const calculateVolume = () => {
    let result = 0;

    switch (shape) {
      case "cube":
        if (inputs.side) result = Math.pow(inputs.side, 3);
        break;
      case "cuboid":
        if (inputs.length && inputs.width && inputs.height)
          result = inputs.length * inputs.width * inputs.height;
        break;
      case "sphere":
        if (inputs.radius)
          result = (4 / 3) * Math.PI * Math.pow(inputs.radius, 3);
        break;
      case "cylinder":
        if (inputs.radius && inputs.height)
          result = Math.PI * Math.pow(inputs.radius, 2) * inputs.height;
        break;
      case "cone":
        if (inputs.radius && inputs.height)
          result =
            (1 / 3) * Math.PI * Math.pow(inputs.radius, 2) * inputs.height;
        break;
      default:
        result = 0;
    }

    setVolume(result ? result.toFixed(2) : "Invalid input");
  };

  const renderFields = () => {
    switch (shape) {
      case "cube":
        return (
          <input
            type="number"
            name="side"
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            placeholder="Side Length"
          />
        );
      case "cuboid":
        return (
          <>
            <input
              type="number"
              name="length"
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              placeholder="Length"
            />
            <input
              type="number"
              name="width"
              onChange={handleInputChange}
              className="w-full border rounded p-2 mt-2"
              placeholder="Width"
            />
            <input
              type="number"
              name="height"
              onChange={handleInputChange}
              className="w-full border rounded p-2 mt-2"
              placeholder="Height"
            />
          </>
        );
      case "sphere":
        return (
          <input
            type="number"
            name="radius"
            onChange={handleInputChange}
            className="w-full border rounded p-2"
            placeholder="Radius"
          />
        );
      case "cylinder":
      case "cone":
        return (
          <>
            <input
              type="number"
              name="radius"
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              placeholder="Radius"
            />
            <input
              type="number"
              name="height"
              onChange={handleInputChange}
              className="w-full border rounded p-2 mt-2"
              placeholder="Height"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Volume Calculator</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Choose Shape</label>
        <select
          value={shape}
          onChange={(e) => {
            setShape(e.target.value);
            setInputs({});
            setVolume(null);
          }}
          className="w-full border rounded p-2"
        >
          <option value="cube">Cube</option>
          <option value="cuboid">Cuboid</option>
          <option value="sphere">Sphere</option>
          <option value="cylinder">Cylinder</option>
          <option value="cone">Cone</option>
        </select>
      </div>

      <div className="space-y-2">{renderFields()}</div>

      <button
        onClick={calculateVolume}
        className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
      >
        Calculate Volume
      </button>

      {volume !== null && (
        <div className="mt-4 p-4 bg-gray-50 border rounded">
          <h3 className="text-lg font-semibold text-gray-800">Result:</h3>
          <p className="text-green-600 text-xl font-bold">
            {volume} cubic units
          </p>
        </div>
      )}
    </div>
  );
};

export default VolumeCalculator;
