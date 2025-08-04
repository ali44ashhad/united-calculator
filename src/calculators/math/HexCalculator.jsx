import React, { useState } from "react";

const HexCalculator = () => {
  const [hex, setHex] = useState("1F");

  const convertHex = () => {
    const input = hex.trim().toUpperCase();
    if (!/^[0-9A-F]+$/.test(input)) return null;

    const decimal = parseInt(input, 16);
    return {
      hex: input,
      decimal,
      binary: decimal.toString(2),
      octal: decimal.toString(8),
    };
  };

  const result = convertHex();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">
            Hexadecimal (0–9, A–F)
          </label>
          <input
            type="text"
            value={hex}
            onChange={(e) => setHex(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 uppercase focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 1F"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6 space-y-2">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Converted Values
          </h2>
          <div>
            <strong>Decimal:</strong> {result.decimal}
          </div>
          <div>
            <strong>Binary:</strong> {result.binary}
          </div>
          <div>
            <strong>Octal:</strong> {result.octal}
          </div>
        </section>
      )}
    </div>
  );
};

export default HexCalculator;
