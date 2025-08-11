import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const LeastCommonMultipleCalculator = () => {
  const [numbers, setNumbers] = useState("12, 18");

  const parseInput = () => {
    return numbers
      .split(",")
      .map((num) => parseInt(num.trim()))
      .filter((n) => !isNaN(n) && n > 0);
  };

  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const lcmTwo = (a, b) => (a * b) / gcd(a, b);

  const calculateLCM = (arr) => {
    return arr.reduce((acc, val) => lcmTwo(acc, val));
  };

  const inputNumbers = parseInput();
  const lcm = inputNumbers.length >= 2 ? calculateLCM(inputNumbers) : null;

  return (
    <>
      <Helmet>
        <title>Least Common Multiple Calculator | Find LCM of Numbers</title>
        <meta
          name="description"
          content="Use our Least Common Multiple Calculator to quickly find the smallest common multiple of two or more numbers. Perfect for students and math professionals."
        />
        <meta
          name="keywords"
          content="least common multiple calculator, LCM calculator, smallest common multiple, math calculator, number calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/least-common-multiple-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Least Common Multiple Calculator | Find LCM of Numbers"
        />
        <meta
          property="og:description"
          content="Instantly calculate the Least Common Multiple (LCM) of two or more numbers with our easy-to-use LCM Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/least-common-multiple-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Least Common Multiple Calculator",
  "url": "https://www.unitedcalculator.net/math/least-common-multiple-calculator",
  "description": "Find the Least Common Multiple (LCM) of two or more numbers instantly using our calculator.",
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
      "name": "What is the Least Common Multiple (LCM)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Least Common Multiple is the smallest number that is a multiple of two or more numbers."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Least Common Multiple Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter two or more numbers, and the calculator will instantly provide their least common multiple."
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
      "name": "Least Common Multiple Calculator",
      "item": "https://www.unitedcalculator.net/math/least-common-multiple-calculator"
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
              Enter Numbers (comma-separated)
            </label>
            <input
              type="text"
              value={numbers}
              onChange={(e) => setNumbers(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 12, 18"
            />
          </div>
        </div>

        {lcm !== null && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              LCM Result
            </h2>
            <p>
              <strong>Numbers:</strong> {inputNumbers.join(", ")}
            </p>
            <p>
              <strong>Least Common Multiple (LCM):</strong> {lcm}
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default LeastCommonMultipleCalculator;
