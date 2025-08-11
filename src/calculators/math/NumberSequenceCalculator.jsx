import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const NumberSequenceCalculator = () => {
  const [startValue, setStartValue] = useState("1");
  const [difference, setDifference] = useState("2");
  const [length, setLength] = useState("10");

  const parsedStart = parseFloat(startValue);
  const parsedDiff = parseFloat(difference);
  const parsedLength = parseInt(length);

  const isValid =
    !isNaN(parsedStart) &&
    !isNaN(parsedDiff) &&
    !isNaN(parsedLength) &&
    parsedLength > 0;

  const generateSequence = () => {
    if (!isValid) return [];

    const sequence = [];
    for (let i = 0; i < parsedLength; i++) {
      sequence.push(parsedStart + i * parsedDiff);
    }
    return sequence;
  };

  const sequence = generateSequence();

  return (
    <>
      <Helmet>
        <title>
          Number Sequence Calculator | Find and Analyze Number Sequences
        </title>
        <meta
          name="description"
          content="Use our Number Sequence Calculator to identify, extend, and analyze arithmetic, geometric, and other number sequences. Perfect for students and math enthusiasts."
        />
        <meta
          name="keywords"
          content="number sequence calculator, arithmetic sequence calculator, geometric sequence calculator, sequence analyzer, math calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/number-sequence-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Number Sequence Calculator | Find and Analyze Number Sequences"
        />
        <meta
          property="og:description"
          content="Identify and analyze arithmetic, geometric, and other sequences easily using our Number Sequence Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/number-sequence-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Number Sequence Calculator",
  "url": "https://www.unitedcalculator.net/math/number-sequence-calculator",
  "description": "Analyze and extend number sequences such as arithmetic and geometric progressions using our Number Sequence Calculator.",
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
      "name": "What types of number sequences can I analyze?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can analyze arithmetic sequences, geometric sequences, and other common numerical patterns."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Number Sequence Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the known terms of your sequence, and the calculator will help identify the pattern and predict subsequent numbers."
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
      "name": "Number Sequence Calculator",
      "item": "https://www.unitedcalculator.net/math/number-sequence-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Start Value</label>
            <input
              type="number"
              value={startValue}
              onChange={(e) => setStartValue(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Common Difference</label>
            <input
              type="number"
              value={difference}
              onChange={(e) => setDifference(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Number of Terms</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {isValid && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Generated Sequence
            </h2>
            <p>{sequence.join(", ")}</p>
          </section>
        )}

        {!isValid && (
          <p className="text-red-600 mt-4">
            Please enter valid input. Number of terms must be greater than 0.
          </p>
        )}
      </div>
    </>
  );
};

export default NumberSequenceCalculator;
