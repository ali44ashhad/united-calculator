import React, { useState } from "react";

const timeZones = [
  "UTC",
  "Asia/Kolkata",
  "America/New_York",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Berlin",
  "Asia/Tokyo",
  "Australia/Sydney",
];

const TimeZoneCalculator = () => {
  const [dateTime, setDateTime] = useState("");
  const [fromZone, setFromZone] = useState("UTC");
  const [toZone, setToZone] = useState("Asia/Kolkata");

  const convertTime = () => {
    if (!dateTime || !fromZone || !toZone) return null;

    try {
      const utcDate = new Date(dateTime);
      const fromTime = new Intl.DateTimeFormat("en-US", {
        timeZone: fromZone,
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }).format(utcDate);

      const converted = new Intl.DateTimeFormat("en-US", {
        timeZone: toZone,
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }).format(utcDate);

      return { fromTime, converted };
    } catch (err) {
      return { error: "Conversion failed. Please check your input." };
    }
  };

  const result = convertTime();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Select Date & Time</label>
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">From Time Zone</label>
          <select
            value={fromZone}
            onChange={(e) => setFromZone(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            {timeZones.map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">To Time Zone</label>
          <select
            value={toZone}
            onChange={(e) => setToZone(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            {timeZones.map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Time Zone Conversion
          </h2>

          {result.error ? (
            <p className="text-red-600 font-medium">{result.error}</p>
          ) : (
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Time in {fromZone}:</span>
                <span className="text-yellow-600 font-medium">
                  {result.fromTime}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Time in {toZone}:</span>
                <span className="text-blue-600">{result.converted}</span>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default TimeZoneCalculator;
