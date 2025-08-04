import React, { useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?";

    let charset = "";
    if (includeUppercase) charset += upper;
    if (includeLowercase) charset += lower;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;

    if (charset === "") {
      setPassword("Please select at least one character type.");
      return;
    }

    let generated = "";
    for (let i = 0; i < length; i++) {
      generated += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(generated);
  };

  const clearFields = () => {
    setLength(12);
    setIncludeUppercase(true);
    setIncludeLowercase(true);
    setIncludeNumbers(true);
    setIncludeSymbols(false);
    setPassword("");
  };

  return (
    <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Password Generator
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Password Length</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            min="4"
            max="100"
            className="w-full px-4 py-2 border rounded-xl mt-1"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            Include Uppercase Letters
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            Include Lowercase Letters
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Include Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Include Symbols
          </label>
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={generatePassword}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl"
          >
            Generate
          </button>
          <button
            onClick={clearFields}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-xl"
          >
            Clear
          </button>
        </div>

        {password && (
          <div className="mt-4 p-4 bg-green-50 border rounded-xl text-green-700 break-words">
            {password}
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
