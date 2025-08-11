import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const RomanNumeralConverter = () => {
  const [number, setNumber] = useState("");
  const [roman, setRoman] = useState("");

  const convertToRoman = () => {
    let num = parseInt(number);
    if (isNaN(num) || num < 1 || num > 3999) {
      setRoman("Enter a number between 1 and 3999");
      return;
    }

    const romanNumerals = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];

    let result = "";
    for (const [romanChar, value] of romanNumerals) {
      while (num >= value) {
        result += romanChar;
        num -= value;
      }
    }
    setRoman(result);
  };

  return (
    <>
      <Helmet>
        <title>
          Roman Numeral Converter | Convert Numbers to Roman Numerals
        </title>
        <meta
          name="description"
          content="Use our Roman Numeral Converter to easily convert numbers to Roman numerals and vice versa."
        />
        <meta
          name="keywords"
          content="roman numeral converter, number to roman numeral, roman numeral to number, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/roman-numeral-converter"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Roman Numeral Converter | Convert Numbers to Roman Numerals"
        />
        <meta
          property="og:description"
          content="Quickly convert numbers to Roman numerals and vice versa with our easy-to-use Roman Numeral Converter."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/roman-numeral-converter"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Roman Numeral Converter",
  "url": "https://www.unitedcalculator.net/other/roman-numeral-converter",
  "description": "Convert numbers to Roman numerals and vice versa easily using our Roman Numeral Converter tool.",
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
      "name": "What is a Roman Numeral Converter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Roman Numeral Converter allows you to convert numbers to Roman numerals and vice versa quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Roman Numeral Converter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter a number or Roman numeral, and the converter will provide the corresponding Roman numeral or number."
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
      "name": "Roman Numeral Converter",
      "item": "https://www.unitedcalculator.net/other/roman-numeral-converter"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Roman Numeral Converter
        </h2>
        <input
          type="number"
          placeholder="Enter number (1 - 3999)"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={convertToRoman}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Convert
        </button>
        {roman && (
          <div className="mt-4 text-center text-lg font-semibold text-gray-700">
            Roman Numeral: <span className="text-blue-700">{roman}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default RomanNumeralConverter;
