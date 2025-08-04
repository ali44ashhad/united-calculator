import React, { useState } from "react";

const PaceCalculator = () => {
  const [distance, setDistance] = useState("5");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("30");
  const [seconds, setSeconds] = useState("0");

  const calculatePace = () => {
    const d = parseFloat(distance);
    const h = parseInt(hours);
    const m = parseInt(minutes);
    const s = parseInt(seconds);

    if (isNaN(d) || d <= 0 || isNaN(h) || isNaN(m) || isNaN(s)) return null;

    const totalMinutes = h * 60 + m + s / 60;
    const pace = totalMinutes / d;

    const paceMin = Math.floor(pace);
    const paceSec = Math.round((pace - paceMin) * 60);

    return `${paceMin} min ${paceSec < 10 ? "0" : ""}${paceSec} sec / km`;
  };

  const result = calculatePace();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Distance (km)</label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block mb-1 font-medium">Hours</label>
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Minutes</label>
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Seconds</label>
            <input
              type="number"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      {result && (
        <section className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Pace Result
          </h2>
          <p className="text-gray-800">
            <span className="font-medium">Pace:</span> {result}
          </p>
        </section>
      )}
    </div>
  );
};

export default PaceCalculator;
