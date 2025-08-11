import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const LoveCalculator = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(null);

  const calculateLove = () => {
    if (!name1 || !name2) return;

    const combined = (name1 + name2).toLowerCase();
    let score = 0;
    for (let i = 0; i < combined.length; i++) {
      score += combined.charCodeAt(i);
    }

    const lovePercentage = (score % 100) + 1;
    setResult(lovePercentage);
  };

  const handleReset = () => {
    setName1("");
    setName2("");
    setResult(null);
  };

  return (
    <>
      <Helmet>
        <title>Love Calculator | Calculate Your Love Compatibility</title>
        <meta
          name="description"
          content="Use our Love Calculator to find out the compatibility score between you and your partner."
        />
        <meta
          name="keywords"
          content="love calculator, love compatibility calculator, relationship calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/love-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Love Calculator | Calculate Your Love Compatibility"
        />
        <meta
          property="og:description"
          content="Discover the love compatibility between you and your partner with our fun and easy Love Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/love-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Love Calculator",
  "url": "https://www.unitedcalculator.net/other/love-calculator",
  "description": "Find out the compatibility score between you and your partner using our Love Calculator.",
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
      "name": "What is a Love Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Love Calculator estimates the compatibility between two people based on their names."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Love Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the names of you and your partner, and the calculator will provide a compatibility score."
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
      "name": "Love Calculator",
      "item": "https://www.unitedcalculator.net/other/love-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Partner's Name</label>
            <input
              type="text"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              placeholder="Enter partner's name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={calculateLove}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded w-full"
            >
              Calculate
            </button>
            <button
              onClick={handleReset}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded w-full"
            >
              Reset
            </button>
          </div>
        </div>

        {result !== null && (
          <section className="bg-pink-50 p-4 rounded-lg border border-pink-200 mt-6">
            <h2 className="text-xl font-semibold text-pink-700 mb-3">
              Love Match Result ❤️
            </h2>
            <div className="text-center text-3xl font-bold text-pink-600">
              {result}%
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default LoveCalculator;
