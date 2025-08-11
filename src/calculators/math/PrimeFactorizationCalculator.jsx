import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const PrimeFactorizationCalculator = () => {
  const [number, setNumber] = useState("");
  const [factors, setFactors] = useState([]);

  const getPrimeFactors = (num) => {
    const result = [];
    let n = num;

    // Divide by 2 until odd
    while (n % 2 === 0) {
      result.push(2);
      n = n / 2;
    }

    // Check odd divisors
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      while (n % i === 0) {
        result.push(i);
        n = n / i;
      }
    }

    // If n becomes a prime number greater than 2
    if (n > 2) {
      result.push(n);
    }

    return result;
  };

  const handleCalculate = () => {
    const num = parseInt(number);
    if (!isNaN(num) && num > 1) {
      const primeFactors = getPrimeFactors(num);
      setFactors(primeFactors);
    } else {
      setFactors([]);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Prime Factorization Calculator | Find Prime Factors Easily
        </title>
        <meta
          name="description"
          content="Use our Prime Factorization Calculator to quickly find the prime factors of any number. Perfect for students and math enthusiasts."
        />
        <meta
          name="keywords"
          content="prime factorization calculator, prime factors, factorization calculator, math calculator, number factors"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/prime-factorization-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Prime Factorization Calculator | Find Prime Factors Easily"
        />
        <meta
          property="og:description"
          content="Quickly find the prime factors of any number using our easy-to-use Prime Factorization Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/prime-factorization-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Prime Factorization Calculator",
  "url": "https://www.unitedcalculator.net/math/prime-factorization-calculator",
  "description": "Find the prime factors of any number quickly and accurately with our Prime Factorization Calculator.",
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
      "name": "What is prime factorization?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prime factorization is the process of expressing a number as a product of its prime factors."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Prime Factorization Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter any positive integer, and the calculator will display its prime factors."
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
      "name": "Prime Factorization Calculator",
      "item": "https://www.unitedcalculator.net/math/prime-factorization-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Prime Factorization Calculator
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Enter a number</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g., 60"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Calculate
        </button>

        {factors.length > 0 && (
          <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-200">
            <p>
              <strong>Prime Factors:</strong> {factors.join(" × ")}
            </p>
          </div>
        )}

        {number !== "" && parseInt(number) <= 1 && (
          <p className="text-red-600 mt-4">
            Please enter a number greater than 1
          </p>
        )}
      </div>
    </>
  );
};

export default PrimeFactorizationCalculator;
