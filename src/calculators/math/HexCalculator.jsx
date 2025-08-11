import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>
          Hex Calculator | Convert and Calculate Hexadecimal Numbers
        </title>
        <meta
          name="description"
          content="Use our Hex Calculator to perform conversions and calculations with hexadecimal numbers. Ideal for programmers, students, and engineers."
        />
        <meta
          name="keywords"
          content="hex calculator, hexadecimal calculator, hex to decimal, decimal to hex, hex math calculator, base 16 calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/hex-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hex Calculator | Convert and Calculate Hexadecimal Numbers"
        />
        <meta
          property="og:description"
          content="Perform conversions and calculations with hexadecimal numbers quickly and easily using our Hex Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/hex-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Hex Calculator",
  "url": "https://www.unitedcalculator.net/math/hex-calculator",
  "description": "Easily convert and calculate hexadecimal numbers with our Hex Calculator designed for programmers and students.",
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
      "name": "What is a hexadecimal number?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A hexadecimal number is a base-16 number system that uses sixteen symbols, 0-9 and A-F, commonly used in computing and digital electronics."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Hex Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Input hexadecimal numbers to perform conversions or arithmetic operations, and get instant results."
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
      "name": "Math Calculators",
      "item": "https://www.unitedcalculator.net/math"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Hex Calculator",
      "item": "https://www.unitedcalculator.net/math/hex-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

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
    </>
  );
};

export default HexCalculator;
