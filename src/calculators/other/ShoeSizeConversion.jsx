import React, { useState } from "react";

const ShoeSizeConverter = () => {
  const [usSize, setUsSize] = useState("");
  const [euSize, setEuSize] = useState("");
  const [ukSize, setUkSize] = useState("");

  const convertSize = () => {
    const us = parseFloat(usSize);
    if (isNaN(us)) {
      setEuSize("Enter valid US size");
      setUkSize("");
      return;
    }

    const eu = (us + 30).toFixed(1); // Approximation
    const uk = (us - 0.5).toFixed(1); // Approximation

    setEuSize(eu);
    setUkSize(uk);
  };

  return (
    <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Shoe Size Converter
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">US Shoe Size</label>
        <input
          type="number"
          value={usSize}
          onChange={(e) => setUsSize(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Enter US size"
        />
      </div>

      <button
        onClick={convertSize}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Convert
      </button>

      {euSize && (
        <div className="mt-4 text-center">
          <p className="text-lg">
            EU Size:{" "}
            <span className="font-semibold text-blue-700">{euSize}</span>
          </p>
          <p className="text-lg">
            UK Size:{" "}
            <span className="font-semibold text-blue-700">{ukSize}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ShoeSizeConverter;
