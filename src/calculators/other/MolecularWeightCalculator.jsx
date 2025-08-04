import React, { useState } from "react";

const MolecularWeightCalculator = () => {
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState("");

  const elementWeights = {
    H: 1.008,
    He: 4.0026,
    Li: 6.94,
    Be: 9.0122,
    B: 10.81,
    C: 12.01,
    N: 14.01,
    O: 16.0,
    F: 19.0,
    Ne: 20.18,
    Na: 22.99,
    Mg: 24.31,
    Al: 26.98,
    Si: 28.09,
    P: 30.97,
    S: 32.07,
    Cl: 35.45,
    Ar: 39.95,
    K: 39.1,
    Ca: 40.08,
    Fe: 55.85,
    Cu: 63.55,
    Zn: 65.38,
    Ag: 107.87,
    I: 126.9,
    Ba: 137.33,
    Au: 196.97,
    Pb: 207.2,
    // Add more elements as needed
  };

  const parseFormula = (formula) => {
    const regex = /([A-Z][a-z]*)(\d*)/g;
    let match;
    let totalWeight = 0;

    while ((match = regex.exec(formula)) !== null) {
      const element = match[1];
      const count = parseInt(match[2] || "1", 10);
      const weight = elementWeights[element];

      if (weight) {
        totalWeight += weight * count;
      } else {
        return null; // unknown element
      }
    }

    return totalWeight.toFixed(2);
  };

  const calculateWeight = () => {
    const weight = parseFormula(formula.trim());
    if (weight === null) {
      setResult("Invalid formula or unknown element");
    } else {
      setResult(`Molecular Weight: ${weight} g/mol`);
    }
  };

  const clearFields = () => {
    setFormula("");
    setResult("");
  };

  return (
    <div className=" mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
        Molecular Weight Calculator
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Chemical Formula
        </label>
        <input
          type="text"
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="e.g., H2O, CO2, C6H12O6"
        />
      </div>
      <div className="flex justify-between space-x-2 mb-4">
        <button
          onClick={calculateWeight}
          className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Calculate
        </button>
        <button
          onClick={clearFields}
          className="w-1/2 bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
        >
          Clear
        </button>
      </div>
      {result && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded text-center text-blue-800 font-semibold">
          {result}
        </div>
      )}
    </div>
  );
};

export default MolecularWeightCalculator;
