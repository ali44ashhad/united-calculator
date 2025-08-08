import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const AverageCalculator = () => {
  const [numbers, setNumbers] = useState("");
  const [average, setAverage] = useState(null);

  const calculateAverage = () => {
    const nums = numbers
      .split(",")
      .map((n) => parseFloat(n.trim()))
      .filter((n) => !isNaN(n));

    if (nums.length === 0) {
      setAverage(null);
      return;
    }

    const total = nums.reduce((acc, curr) => acc + curr, 0);
    const avg = total / nums.length;
    setAverage(avg.toFixed(2));
  };

  return (
    <>
      <Helmet>
        <title>Average Calculator | Calculate Mean, Median & Mode</title>
        <meta
          name="description"
          content="Use our Average Calculator to quickly find the mean, median, and mode of any data set. Perfect for students, teachers, and professionals needing fast and accurate average calculations."
        />
        <meta
          name="keywords"
          content="average calculator, mean calculator, median calculator, mode calculator, math calculator, statistics calculator, calculate average"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/average-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Average Calculator | Calculate Mean, Median & Mode"
        />
        <meta
          property="og:description"
          content="Easily calculate the mean, median, and mode of any number set using our Average Calculator. Ideal for statistics, schoolwork, and data analysis."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/average-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Average Calculator",
  "url": "https://www.unitedcalculator.net/math/average-calculator",
  "description": "Use the Average Calculator to quickly calculate the mean, median, and mode of a set of numbers. Perfect for students, teachers, and professionals working with data.",
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
      "name": "How do you calculate the average of numbers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To calculate the average (mean), add up all the numbers in a set and divide the total by the number of values in the set."
      }
    },
    {
      "@type": "Question",
      "name": "Does the Average Calculator find median and mode too?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Average Calculator can compute the mean, median, and mode, providing a complete summary of your dataset."
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
      "name": "Average Calculator",
      "item": "https://www.unitedcalculator.net/math/average-calculator"
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
              Enter numbers (comma separated)
            </label>
            <input
              type="text"
              value={numbers}
              onChange={(e) => setNumbers(e.target.value)}
              placeholder="e.g. 10, 20, 30"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <button
            onClick={calculateAverage}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
          >
            Calculate Average
          </button>
        </div>

        {average !== null && (
          <div className="mt-6 bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h2 className="text-lg font-semibold text-purple-700 mb-2">
              Result
            </h2>
            <p className="text-gray-800">
              📊 Average: <strong>{average}</strong>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default AverageCalculator;
