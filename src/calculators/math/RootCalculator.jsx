import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const RootCalculator = () => {
  const [base, setBase] = useState("16");
  const [root, setRoot] = useState("2");
  const [result, setResult] = useState("");

  const calculateRoot = () => {
    const baseValue = parseFloat(base);
    const rootValue = parseFloat(root);

    if (isNaN(baseValue) || isNaN(rootValue) || rootValue === 0) {
      setResult("Invalid input");
      return;
    }

    const rootResult = Math.pow(baseValue, 1 / rootValue);
    setResult(rootResult.toFixed(6));
  };

  return (
    <>
      <Helmet>
        <title>Root Calculator | Calculate Square Roots and Other Roots</title>
        <meta
          name="description"
          content="Use our Root Calculator to quickly find square roots, cube roots, and nth roots of numbers. Perfect for students and professionals."
        />
        <meta
          name="keywords"
          content="root calculator, square root calculator, cube root calculator, nth root calculator, math calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/root-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Root Calculator | Calculate Square Roots and Other Roots"
        />
        <meta
          property="og:description"
          content="Quickly calculate square roots, cube roots, and nth roots of any number using our Root Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/root-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Root Calculator",
  "url": "https://www.unitedcalculator.net/math/root-calculator",
  "description": "Calculate square roots, cube roots, and nth roots quickly and accurately with our Root Calculator.",
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
      "name": "What is a root in mathematics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A root is a number that, when multiplied by itself a certain number of times, gives the original number. For example, the square root of 9 is 3."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Root Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the number and the root degree (like 2 for square root, 3 for cube root), and the calculator will compute the result."
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
      "name": "Root Calculator",
      "item": "https://www.unitedcalculator.net/math/root-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Number (Base)</label>
            <input
              type="number"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter base number"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Root (n)</label>
            <input
              type="number"
              value={root}
              onChange={(e) => setRoot(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter root (e.g., 2 for square root)"
            />
          </div>

          <button
            onClick={calculateRoot}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Calculate Root
          </button>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Result</h2>
            <div className="text-green-600 font-bold text-2xl">{result}</div>
          </section>
        )}
      </div>
    </>
  );
};

export default RootCalculator;
