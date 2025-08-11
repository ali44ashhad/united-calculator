import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const LogCalculator = () => {
  const [number, setNumber] = useState("100");
  const [base, setBase] = useState("10");

  const parsedNumber = parseFloat(number);
  const parsedBase = parseFloat(base);

  const isValid =
    !isNaN(parsedNumber) &&
    parsedNumber > 0 &&
    !isNaN(parsedBase) &&
    parsedBase > 0 &&
    parsedBase !== 1;

  const logResult = isValid
    ? Math.log(parsedNumber) / Math.log(parsedBase)
    : null;

  return (
    <>
      <Helmet>
        <title>Log Calculator | Calculate Logarithms Easily</title>
        <meta
          name="description"
          content="Use our Log Calculator to quickly compute logarithms with any base. Perfect for students, engineers, and scientists."
        />
        <meta
          name="keywords"
          content="log calculator, logarithm calculator, calculate logs, math calculator, logarithms, base log calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/log-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Log Calculator | Calculate Logarithms Easily"
        />
        <meta
          property="og:description"
          content="Quickly calculate logarithms with any base using our easy-to-use Log Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/log-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Log Calculator",
  "url": "https://www.unitedcalculator.net/math/log-calculator",
  "description": "Calculate logarithms with any base quickly and accurately using our Log Calculator.",
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
      "name": "What is a logarithm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A logarithm is the inverse operation to exponentiation, representing the power to which a base number is raised to obtain a given number."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Log Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the number and the base for the logarithm, then get the calculated result instantly."
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
      "name": "Log Calculator",
      "item": "https://www.unitedcalculator.net/math/log-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Enter Number</label>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 100"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Enter Base</label>
            <input
              type="number"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {isValid && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Logarithm Result
            </h2>
            <p>
              <strong>
                log<sub>{parsedBase}</sub>({parsedNumber})
              </strong>{" "}
              = {logResult.toFixed(6)}
            </p>
          </section>
        )}

        {!isValid && (
          <p className="text-red-600 mt-4">
            Please enter a positive number and a valid base (base must be
            greater than 0 and ≠ 1).
          </p>
        )}
      </div>
    </>
  );
};

export default LogCalculator;
