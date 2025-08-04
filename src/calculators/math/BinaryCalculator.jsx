import React, { useState } from "react";

const BinaryCalculator = () => {
  const [bin1, setBin1] = useState("");
  const [bin2, setBin2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState("");

  const isValidBinary = (str) => /^[01]+$/.test(str);

  const calculate = () => {
    if (!isValidBinary(bin1) || !isValidBinary(bin2)) {
      setResult("Invalid binary input");
      return;
    }

    const num1 = parseInt(bin1, 2);
    const num2 = parseInt(bin2, 2);
    let res;

    switch (operation) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          setResult("Cannot divide by 0");
          return;
        }
        res = Math.floor(num1 / num2);
        break;
      default:
        setResult("Invalid operation");
        return;
    }

    setResult(res.toString(2)); // convert result back to binary
  };

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Binary Calculator
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Binary Number 1</label>
          <input
            type="text"
            value={bin1}
            onChange={(e) => setBin1(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 1010"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Binary Number 2</label>
          <input
            type="text"
            value={bin2}
            onChange={(e) => setBin2(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 0110"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Operation</label>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (*)</option>
            <option value="/">Division (/)</option>
          </select>
        </div>

        <button
          onClick={calculate}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold transition"
        >
          Calculate
        </button>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Result (Binary)
          </h3>
          <p className="text-blue-600 break-words">{result}</p>
        </section>
      )}
    </div>
  );
};

export default BinaryCalculator;
