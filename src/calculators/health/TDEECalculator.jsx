import React, { useState } from "react";

const TDEECalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.2");

  const calculateTDEE = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const act = parseFloat(activity);

    if (!w || !h || !a) return null;

    const bmr =
      gender === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    const tdee = Math.round(bmr * act);
    return tdee;
  };

  const result = calculateTDEE();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Activity Level</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="1.2">Sedentary (little or no exercise)</option>
            <option value="1.375">Lightly active (1–3 days/week)</option>
            <option value="1.55">Moderately active (3–5 days/week)</option>
            <option value="1.725">Very active (6–7 days/week)</option>
            <option value="1.9">
              Super active (twice/day or physical job)
            </option>
          </select>
        </div>
      </div>

      {result && (
        <section className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            TDEE Result
          </h2>
          <p className="text-gray-800">
            🔥 <strong>Your TDEE:</strong> {result} kcal/day
          </p>
        </section>
      )}
    </div>
  );
};

export default TDEECalculator;
