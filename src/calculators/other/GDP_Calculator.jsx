import React, { useState } from "react";

const GDP_Calculator = () => {
  const [consumption, setConsumption] = useState("");
  const [investment, setInvestment] = useState("");
  const [governmentSpending, setGovernmentSpending] = useState("");
  const [exports, setExports] = useState("");
  const [imports, setImports] = useState("");

  const calculateGDP = () => {
    const C = parseFloat(consumption);
    const I = parseFloat(investment);
    const G = parseFloat(governmentSpending);
    const X = parseFloat(exports);
    const M = parseFloat(imports);

    if ([C, I, G, X, M].some((val) => isNaN(val))) return null;

    const GDP = C + I + G + (X - M);
    return GDP.toFixed(2);
  };

  const result = calculateGDP();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Consumption (C)</label>
          <input
            type="number"
            value={consumption}
            onChange={(e) => setConsumption(e.target.value)}
            placeholder="e.g. 5000"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Investment (I)</label>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
            placeholder="e.g. 2000"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Government Spending (G)
          </label>
          <input
            type="number"
            value={governmentSpending}
            onChange={(e) => setGovernmentSpending(e.target.value)}
            placeholder="e.g. 3000"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Exports (X)</label>
          <input
            type="number"
            value={exports}
            onChange={(e) => setExports(e.target.value)}
            placeholder="e.g. 1500"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Imports (M)</label>
          <input
            type="number"
            value={imports}
            onChange={(e) => setImports(e.target.value)}
            placeholder="e.g. 1000"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            GDP Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">GDP:</span>
            <span className="text-green-600">${result}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default GDP_Calculator;
