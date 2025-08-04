import React, { useState } from "react";
import Mexp from "math-expression-evaluator";

const BasicCalculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const result = new Mexp().eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Basic Calculator
      </h2>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          className="w-full text-right text-xl border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          readOnly
        />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
        ].map((item) => (
          <button
            key={item}
            onClick={() =>
              item === "=" ? calculateResult() : handleClick(item)
            }
            className="bg-gray-100 hover:bg-gray-200 text-xl font-medium p-4 rounded shadow text-gray-800"
          >
            {item}
          </button>
        ))}

        <button
          onClick={handleClear}
          className="col-span-2 bg-red-100 hover:bg-red-200 text-red-600 font-medium p-4 rounded shadow"
        >
          Clear
        </button>
        <button
          onClick={handleDelete}
          className="col-span-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-medium p-4 rounded shadow"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BasicCalculator;
