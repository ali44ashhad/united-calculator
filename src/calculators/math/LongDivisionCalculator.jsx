import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const LongDivisionCalculator = () => {
  const [dividend, setDividend] = useState("100");
  const [divisor, setDivisor] = useState("7");

  const parsedDividend = parseFloat(dividend);
  const parsedDivisor = parseFloat(divisor);

  const isValid =
    !isNaN(parsedDividend) && !isNaN(parsedDivisor) && parsedDivisor !== 0;

  const quotient = isValid ? Math.floor(parsedDividend / parsedDivisor) : null;
  const remainder = isValid ? parsedDividend % parsedDivisor : null;

  return (
    <>
      <Helmet>
        <title>Long Division Calculator | Perform Long Division Easily</title>
        <meta
          name="description"
          content="Use our Long Division Calculator to quickly and accurately perform long division for any numbers. Perfect for students and educators."
        />
        <meta
          name="keywords"
          content="long division calculator, division calculator, math calculator, long division steps, divide numbers"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/long-division-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Long Division Calculator | Perform Long Division Easily"
        />
        <meta
          property="og:description"
          content="Quickly and easily perform long division calculations with our Long Division Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/long-division-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Long Division Calculator",
  "url": "https://www.unitedcalculator.net/math/long-division-calculator",
  "description": "Easily perform long division on any numbers using our step-by-step Long Division Calculator.",
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
      "name": "What is long division?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Long division is a method for dividing two numbers to get the quotient and remainder using a step-by-step approach."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Long Division Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the dividend and divisor, then the calculator will provide the quotient and remainder with detailed steps."
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
      "name": "Long Division Calculator",
      "item": "https://www.unitedcalculator.net/math/long-division-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Dividend</label>
            <input
              type="number"
              value={dividend}
              onChange={(e) => setDividend(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 100"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Divisor</label>
            <input
              type="number"
              value={divisor}
              onChange={(e) => setDivisor(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 7"
            />
          </div>
        </div>

        {isValid && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Long Division Result
            </h2>
            <p>
              <strong>{parsedDividend}</strong> ÷{" "}
              <strong>{parsedDivisor}</strong> = <strong>{quotient}</strong>{" "}
              with a remainder of <strong>{remainder}</strong>
            </p>
          </section>
        )}

        {!isValid && (
          <p className="text-red-600 mt-4">
            Please enter valid numbers. Divisor must not be zero.
          </p>
        )}
      </div>
    </>
  );
};

export default LongDivisionCalculator;
