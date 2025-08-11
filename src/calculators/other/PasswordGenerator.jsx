import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>Password Generator | Create Strong & Secure Passwords</title>
        <meta
          name="description"
          content="Use our Password Generator to create strong, secure, and random passwords for your accounts."
        />
        <meta
          name="keywords"
          content="password generator, strong password generator, secure password creator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/password-generator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Password Generator | Create Strong & Secure Passwords"
        />
        <meta
          property="og:description"
          content="Generate strong and secure passwords easily with our Password Generator tool."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/password-generator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Password Generator",
  "url": "https://www.unitedcalculator.net/other/password-generator",
  "description": "Create strong, secure, and random passwords easily using our Password Generator tool.",
  "publisher": {
    "@type": "Organization",
    "name": "United Calculator",
    "url": "https://www.unitedcalculator.net"
  }
}
    `}
        </script>

        {/* JSON-LD: FAQ */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Password Generator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Password Generator creates strong and random passwords to help protect your online accounts."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Password Generator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Select your desired password length and character types, then generate a secure password instantly."
      }
    }
  ]
}
    `}
        </script>

        {/* JSON-LD: Breadcrumb */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.unitedcalculator.net"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Other Calculators",
      "item": "https://www.unitedcalculator.net/other"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Password Generator",
      "item": "https://www.unitedcalculator.net/other/password-generator"
    }
  ]
}
    `}
        </script>
      </Helmet>

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
    </>
  );
};

export default PasswordGenerator;
