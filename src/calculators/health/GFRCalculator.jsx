import React, { useState } from "react";

const GFRCalculator = () => {
  const [age, setAge] = useState("40");
  const [creatinine, setCreatinine] = useState("1.0");
  const [gender, setGender] = useState("male");
  const [isAfricanAmerican, setIsAfricanAmerican] = useState(false);

  const calculateGFR = () => {
    const ageVal = parseFloat(age);
    const creatinineVal = parseFloat(creatinine);

    if (isNaN(ageVal) || isNaN(creatinineVal)) return null;

    let k = gender === "male" ? 0.9 : 0.7;
    let a = gender === "male" ? -0.411 : -0.329;

    let crRatio = creatinineVal / k;
    let minCr = Math.min(crRatio, 1) ** a;
    let maxCr = Math.max(crRatio, 1) ** -1.209;

    let gfr = 141 * minCr * maxCr * 0.993 ** ageVal;

    if (gender === "female") gfr *= 1.018;
    if (isAfricanAmerican) gfr *= 1.159;

    return gfr.toFixed(1);
  };

  const result = calculateGFR();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Age (years)</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Serum Creatinine (mg/dL)
          </label>
          <input
            type="number"
            step="0.01"
            value={creatinine}
            onChange={(e) => setCreatinine(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            id="race"
            type="checkbox"
            checked={isAfricanAmerican}
            onChange={(e) => setIsAfricanAmerican(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="race" className="font-medium">
            African American
          </label>
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Estimated GFR
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">GFR:</span>
            <span className="text-green-600">{result} mL/min/1.73m²</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default GFRCalculator;
