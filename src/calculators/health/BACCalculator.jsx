import React, { useState } from "react";

const BACCalculator = () => {
  const [weight, setWeight] = useState("70"); // in kg
  const [gender, setGender] = useState("male"); // 'male' or 'female'
  const [alcoholConsumed, setAlcoholConsumed] = useState("40"); // in grams
  const [hours, setHours] = useState("1"); // hours since drinking started

  // Widmark formula constants
  // r = body water constant (0.68 men, 0.55 women)
  const calculateBAC = () => {
    const w = parseFloat(weight);
    const a = parseFloat(alcoholConsumed);
    const h = parseFloat(hours);
    if (isNaN(w) || isNaN(a) || isNaN(h) || w === 0) return null;

    const r = gender === "male" ? 0.68 : 0.55;
    // BAC = (Alcohol in grams / (Body weight in grams * r)) * 100 - (0.015 * hours)
    // Convert weight to grams (kg * 1000)
    const bacRaw = (a / (w * 1000 * r)) * 100 - 0.015 * h;
    const bac = bacRaw < 0 ? 0 : bacRaw;

    return bac.toFixed(4);
  };

  const result = calculateBAC();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 70"
            min="1"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Alcohol Consumed (grams)
          </label>
          <input
            type="number"
            value={alcoholConsumed}
            onChange={(e) => setAlcoholConsumed(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 40"
            min="0"
          />
          <small className="text-gray-500">
            E.g., 40 grams = approx 3 standard drinks
          </small>
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Hours Since Drinking Began
          </label>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 1"
            min="0"
          />
        </div>
      </div>

      {result !== null && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Blood Alcohol Content (BAC) Result
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Estimated BAC:</span>
              <span className="text-red-600">{result}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BACCalculator;
