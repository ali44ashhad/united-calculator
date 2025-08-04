import React, { useState } from "react";

const QuadraticFormulaCalculator = () => {
  const [a, setA] = useState("1");
  const [b, setB] = useState("-3");
  const [c, setC] = useState("2");

  const calculateRoots = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum) || aNum === 0) return null;

    const discriminant = bNum * bNum - 4 * aNum * cNum;

    if (discriminant > 0) {
      const root1 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
      const root2 = (-bNum - Math.sqrt(discriminant)) / (2 * aNum);
      return {
        type: "Real and Distinct",
        root1: root1.toFixed(4),
        root2: root2.toFixed(4),
      };
    } else if (discriminant === 0) {
      const root = -bNum / (2 * aNum);
      return {
        type: "Real and Equal",
        root1: root.toFixed(4),
        root2: root.toFixed(4),
      };
    } else {
      const realPart = (-bNum / (2 * aNum)).toFixed(4);
      const imagPart = (Math.sqrt(-discriminant) / (2 * aNum)).toFixed(4);
      return {
        type: "Complex Roots",
        root1: `${realPart} + ${imagPart}i`,
        root2: `${realPart} - ${imagPart}i`,
      };
    }
  };

  const result = calculateRoots();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Coefficient a</label>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. 1"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Coefficient b</label>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. -3"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Coefficient c</label>
          <input
            type="number"
            value={c}
            onChange={(e) => setC(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. 2"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Quadratic Equation Roots
          </h2>
          <div className="space-y-2">
            <div className="text-gray-700">
              Root Type:{" "}
              <span className="text-indigo-600 font-medium">{result.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Root 1:</span>
              <span className="text-blue-600 font-medium">{result.root1}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Root 2:</span>
              <span className="text-blue-600 font-medium">{result.root2}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default QuadraticFormulaCalculator;
