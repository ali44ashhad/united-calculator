import React, { useState } from "react";
import Mexp from "math-expression-evaluator";

const ScientificCalculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const appendToExpression = (value) => {
    setExpression((prev) => prev + value);
  };

  const clearExpression = () => {
    setExpression("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      let replacedExpr = expression
        .replace(/π/g, "PI")
        .replace(/e/g, "E")
        .replace(/\^/g, "^");

      const mexp = new Mexp();
      const evalResult = mexp.eval(replacedExpr);
      setResult(evalResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "sin(",
    "4",
    "5",
    "6",
    "*",
    "cos(",
    "1",
    "2",
    "3",
    "-",
    "tan(",
    "0",
    ".",
    "+",
    "(",
    ")",
    "log(",
    "ln(",
    "sqrt(",
    "^",
    "π",
    "e",
    "C",
    "=",
  ];

  const handleButtonClick = (btn) => {
    if (btn === "C") {
      clearExpression();
    } else if (btn === "=") {
      calculateResult();
    } else {
      appendToExpression(btn);
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-md p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
        Scientific Calculator
      </h2>

      <input
        type="text"
        value={expression}
        className="w-full text-right text-xl border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        readOnly
      />
      <div className="text-right text-green-600 font-semibold mt-1 text-lg min-h-[24px]">
        {result}
      </div>

      <div className="grid grid-cols-5 gap-2 mt-4">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn)}
            className={`text-sm font-medium p-3 rounded shadow transition ${
              btn === "C"
                ? "bg-red-100 hover:bg-red-200 text-red-600"
                : btn === "="
                ? "bg-indigo-500 hover:bg-indigo-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScientificCalculator;
