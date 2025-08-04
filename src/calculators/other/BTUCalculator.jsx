import React, { useState } from "react";

const BTUCalculator = () => {
  const [roomLength, setRoomLength] = useState("");
  const [roomWidth, setRoomWidth] = useState("");
  const [roomHeight, setRoomHeight] = useState("");
  const [people, setPeople] = useState("1");

  const calculateBTU = () => {
    const length = parseFloat(roomLength);
    const width = parseFloat(roomWidth);
    const height = parseFloat(roomHeight);
    const numPeople = parseInt(people);

    if (isNaN(length) || isNaN(width) || isNaN(height) || isNaN(numPeople))
      return null;

    const roomVolume = length * width * height;

    // Base BTU for room volume (approx. 5 BTU per cubic foot)
    let btu = roomVolume * 5;

    // Add BTU per person beyond the first
    if (numPeople > 1) {
      btu += (numPeople - 1) * 600;
    }

    return {
      roomVolume: roomVolume.toFixed(2),
      requiredBTU: Math.round(btu),
    };
  };

  const result = calculateBTU();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Room Length (ft)</label>
          <input
            type="number"
            value={roomLength}
            onChange={(e) => setRoomLength(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 15"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Room Width (ft)</label>
          <input
            type="number"
            value={roomWidth}
            onChange={(e) => setRoomWidth(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 12"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Room Height (ft)</label>
          <input
            type="number"
            value={roomHeight}
            onChange={(e) => setRoomHeight(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 8"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Number of People</label>
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 2"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            BTU Requirement
          </h2>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Room Volume:</span>
              <span>{result.roomVolume} cu ft</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Estimated BTU Needed:</span>
              <span className="text-blue-600">{result.requiredBTU} BTU</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BTUCalculator;
