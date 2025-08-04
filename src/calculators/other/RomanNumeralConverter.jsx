import React, { useState } from "react";

const RomanNumeralConverter = () => {
  const [number, setNumber] = useState("");
  const [roman, setRoman] = useState("");

  const convertToRoman = () => {
    let num = parseInt(number);
    if (isNaN(num) || num < 1 || num > 3999) {
      setRoman("Enter a number between 1 and 3999");
      return;
    }

    const romanNumerals = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];

    let result = "";
    for (const [romanChar, value] of romanNumerals) {
      while (num >= value) {
        result += romanChar;
        num -= value;
      }
    }
    setRoman(result);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Roman Numeral Converter
      </h2>
      <input
        type="number"
        placeholder="Enter number (1 - 3999)"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={convertToRoman}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Convert
      </button>
      {roman && (
        <div className="mt-4 text-center text-lg font-semibold text-gray-700">
          Roman Numeral: <span className="text-blue-700">{roman}</span>
        </div>
      )}
    </div>
  );
};

export default RomanNumeralConverter;
