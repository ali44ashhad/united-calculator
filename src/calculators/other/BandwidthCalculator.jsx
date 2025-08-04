import React, { useState } from "react";

const BandwidthCalculator = () => {
  const [fileSize, setFileSize] = useState("100"); // in MB
  const [internetSpeed, setInternetSpeed] = useState("10"); // in Mbps

  const calculateDownloadTime = () => {
    const sizeInMb = parseFloat(fileSize) * 8; // Convert MB to Megabits
    const speedInMbps = parseFloat(internetSpeed);

    if (isNaN(sizeInMb) || isNaN(speedInMbps) || speedInMbps === 0) return null;

    const timeInSeconds = sizeInMb / speedInMbps;
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.round(timeInSeconds % 60);

    return {
      minutes,
      seconds,
      totalSeconds: timeInSeconds.toFixed(2),
    };
  };

  const result = calculateDownloadTime();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">File Size (in MB)</label>
          <input
            type="number"
            value={fileSize}
            onChange={(e) => setFileSize(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Internet Speed (in Mbps)
          </label>
          <input
            type="number"
            value={internetSpeed}
            onChange={(e) => setInternetSpeed(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 10"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Download Time Estimate
          </h2>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Total Time:</span>
              <span>
                {result.minutes} min {result.seconds} sec
              </span>
            </div>
            <div className="flex justify-between">
              <span>Total Seconds:</span>
              <span>{result.totalSeconds} sec</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BandwidthCalculator;
