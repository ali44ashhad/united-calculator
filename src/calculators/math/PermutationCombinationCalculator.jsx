import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const PermutationCombinationCalculator = () => {
  const [n, setN] = useState("");
  const [r, setR] = useState("");

  const factorial = (num) => {
    if (num < 0) return 0;
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) result *= i;
    return result;
  };

  const isValid = () => {
    const N = parseInt(n);
    const R = parseInt(r);
    return !isNaN(N) && !isNaN(R) && N >= R && N >= 0 && R >= 0;
  };

  const calculatePermutation = () => {
    const N = parseInt(n);
    const R = parseInt(r);
    return factorial(N) / factorial(N - R);
  };

  const calculateCombination = () => {
    const N = parseInt(n);
    const R = parseInt(r);
    return factorial(N) / (factorial(R) * factorial(N - R));
  };

  return (
    <>
      <Helmet>
        <title>
          Permutation Combination Calculator | Calculate Permutations &
          Combinations
        </title>
        <meta
          name="description"
          content="Use our Permutation Combination Calculator to quickly compute permutations and combinations for given values. Ideal for students and professionals."
        />
        <meta
          name="keywords"
          content="permutation calculator, combination calculator, permutations and combinations, math calculator, probability calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/permutation-combination-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Permutation Combination Calculator | Calculate Permutations & Combinations"
        />
        <meta
          property="og:description"
          content="Quickly calculate permutations and combinations for any set of values using our easy-to-use Permutation Combination Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/permutation-combination-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Permutation Combination Calculator",
  "url": "https://www.unitedcalculator.net/math/permutation-combination-calculator",
  "description": "Calculate permutations and combinations easily with our Permutation Combination Calculator.",
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
      "name": "What is a permutation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A permutation is an arrangement of objects in a specific order."
      }
    },
    {
      "@type": "Question",
      "name": "What is a combination?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A combination is a selection of objects without regard to order."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Permutation Combination Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the total number of items and the number to choose, and the calculator will compute permutations and combinations."
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
      "name": "Permutation Combination Calculator",
      "item": "https://www.unitedcalculator.net/math/permutation-combination-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Permutation & Combination Calculator
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">n (total items)</label>
            <input
              type="number"
              value={n}
              onChange={(e) => setN(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter value of n"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">r (items chosen)</label>
            <input
              type="number"
              value={r}
              onChange={(e) => setR(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter value of r"
            />
          </div>
        </div>

        {isValid() && (
          <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-200 space-y-2">
            <p>
              <strong>Permutation (nPr):</strong>{" "}
              {calculatePermutation().toLocaleString()}
            </p>
            <p>
              <strong>Combination (nCr):</strong>{" "}
              {calculateCombination().toLocaleString()}
            </p>
          </div>
        )}

        {!isValid() && n !== "" && r !== "" && (
          <p className="text-red-600 mt-4">
            Please enter valid values where n ≥ r ≥ 0
          </p>
        )}
      </div>
    </>
  );
};

export default PermutationCombinationCalculator;
