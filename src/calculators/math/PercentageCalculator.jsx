import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const PercentageCalculator = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const parseVal1 = parseFloat(value1);
  const parseVal2 = parseFloat(value2);

  const isValid = !isNaN(parseVal1) && !isNaN(parseVal2) && parseVal2 !== 0;

  const percentOf = ((parseVal1 * parseVal2) / 100).toFixed(2);
  const isWhatPercent = ((parseVal1 / parseVal2) * 100).toFixed(2);
  const percentChange = (((parseVal2 - parseVal1) / parseVal1) * 100).toFixed(
    2
  );

  return (
    <>
      <Helmet>
        <title>Percentage Calculator | Calculate Percentages Quickly</title>
        <meta
          name="description"
          content="Use our Percentage Calculator to easily calculate percentages, percentage increase/decrease, and related values. Perfect for students, professionals, and everyday use."
        />
        <meta
          name="keywords"
          content="percentage calculator, calculate percentage, percentage increase calculator, percentage decrease calculator, math calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/percentage-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Percentage Calculator | Calculate Percentages Quickly"
        />
        <meta
          property="og:description"
          content="Quickly calculate percentages, percentage increases, decreases, and other related values using our easy-to-use Percentage Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/percentage-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Percentage Calculator",
  "url": "https://www.unitedcalculator.net/math/percentage-calculator",
  "description": "Calculate percentages, percentage increase, and decrease instantly with our Percentage Calculator.",
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
      "name": "What is a percentage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A percentage is a way of expressing a number as a fraction of 100."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Percentage Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the values you want to calculate the percentage for, and the calculator will provide the result instantly."
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
      "name": "Percentage Calculator",
      "item": "https://www.unitedcalculator.net/math/percentage-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Value 1</label>
            <input
              type="number"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter value 1"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Value 2</label>
            <input
              type="number"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter value 2"
            />
          </div>
        </div>

        {isValid && (
          <div className="mt-6 space-y-4 bg-gray-50 p-4 rounded border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Results:</h2>
            <p>
              <strong>{value1}%</strong> of <strong>{value2}</strong> is{" "}
              <strong>{percentOf}</strong>
            </p>
            <p>
              <strong>{value1}</strong> is <strong>{isWhatPercent}%</strong> of{" "}
              <strong>{value2}</strong>
            </p>
            <p>
              Percentage change from <strong>{value1}</strong> to{" "}
              <strong>{value2}</strong> is <strong>{percentChange}%</strong>
            </p>
          </div>
        )}

        {!isValid && value1 && value2 && (
          <p className="text-red-600 mt-4">
            Please enter valid non-zero values.
          </p>
        )}
      </div>
    </>
  );
};

export default PercentageCalculator;
