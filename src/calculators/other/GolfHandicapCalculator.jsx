import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const GolfHandicapCalculator = () => {
  const [score, setScore] = useState("");
  const [courseRating, setCourseRating] = useState("");
  const [slopeRating, setSlopeRating] = useState("");

  const calculateHandicap = () => {
    const s = parseFloat(score);
    const cr = parseFloat(courseRating);
    const sr = parseFloat(slopeRating);

    if (isNaN(s) || isNaN(cr) || isNaN(sr) || sr === 0) return null;

    const handicap = ((s - cr) * 113) / sr;
    return handicap.toFixed(2);
  };

  const result = calculateHandicap();

  return (
    <>
      <Helmet>
        <title>
          Golf Handicap Calculator | Calculate Your Golf Handicap Easily
        </title>
        <meta
          name="description"
          content="Use our Golf Handicap Calculator to accurately calculate your golf handicap based on your scores and course ratings."
        />
        <meta
          name="keywords"
          content="golf handicap calculator, calculate golf handicap, golf score calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/golf-handicap-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Golf Handicap Calculator | Calculate Your Golf Handicap Easily"
        />
        <meta
          property="og:description"
          content="Quickly calculate your golf handicap using our easy-to-use Golf Handicap Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/golf-handicap-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Golf Handicap Calculator",
  "url": "https://www.unitedcalculator.net/other/golf-handicap-calculator",
  "description": "Calculate your golf handicap accurately based on your scores and course ratings with our Golf Handicap Calculator.",
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
      "name": "What is a Golf Handicap Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Golf Handicap Calculator helps you determine your golf handicap based on your recent scores and course difficulty."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Golf Handicap Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter your golf scores and course ratings, and the calculator will provide your handicap index."
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
      "name": "Golf Handicap Calculator",
      "item": "https://www.unitedcalculator.net/other/golf-handicap-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Score</label>
            <input
              type="number"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              placeholder="e.g. 90"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Course Rating</label>
            <input
              type="number"
              value={courseRating}
              onChange={(e) => setCourseRating(e.target.value)}
              placeholder="e.g. 72.5"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Slope Rating</label>
            <input
              type="number"
              value={slopeRating}
              onChange={(e) => setSlopeRating(e.target.value)}
              placeholder="e.g. 113"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Handicap Result
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Handicap Index:</span>
              <span className="text-green-600">{result}</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default GolfHandicapCalculator;
