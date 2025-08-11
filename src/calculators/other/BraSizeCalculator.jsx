import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const BraSizeCalculator = () => {
  const [bandSize, setBandSize] = useState("");
  const [bustSize, setBustSize] = useState("");

  const calculateBraSize = () => {
    const band = parseInt(bandSize);
    const bust = parseInt(bustSize);

    if (isNaN(band) || isNaN(bust) || band <= 0 || bust <= 0) return null;

    const bandAdjusted = band % 2 === 0 ? band : band + 1; // round up to nearest even number

    const difference = bust - bandAdjusted;

    const cupSizes = [
      "AA",
      "A",
      "B",
      "C",
      "D",
      "DD",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
    ];

    const cupIndex = Math.max(0, Math.min(difference, cupSizes.length - 1));
    const cupSize = cupSizes[cupIndex];

    return {
      band: bandAdjusted,
      cupSize,
    };
  };

  const result = calculateBraSize();

  return (
    <>
      <Helmet>
        <title>Bra Size Calculator | Find Your Perfect Bra Size Easily</title>
        <meta
          name="description"
          content="Use our Bra Size Calculator to accurately determine your perfect bra size based on your measurements. Comfortable fit guaranteed."
        />
        <meta
          name="keywords"
          content="bra size calculator, find bra size, bra fitting calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/bra-size-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bra Size Calculator | Find Your Perfect Bra Size Easily"
        />
        <meta
          property="og:description"
          content="Determine your perfect bra size with ease using our accurate Bra Size Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/bra-size-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Bra Size Calculator",
  "url": "https://www.unitedcalculator.net/other/bra-size-calculator",
  "description": "Find your perfect bra size quickly and accurately with our Bra Size Calculator based on your measurements.",
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
      "name": "What is a Bra Size Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Bra Size Calculator helps you find your perfect bra size by using your bust and band measurements."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Bra Size Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter your bust and band measurements, and the calculator will determine your bra size for a comfortable fit."
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
      "name": "Bra Size Calculator",
      "item": "https://www.unitedcalculator.net/other/bra-size-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              Band Size (under bust in inches)
            </label>
            <input
              type="number"
              value={bandSize}
              onChange={(e) => setBandSize(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 32"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Bust Size (full bust in inches)
            </label>
            <input
              type="number"
              value={bustSize}
              onChange={(e) => setBustSize(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 34"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Your Bra Size
            </h2>
            <div className="text-gray-700 text-lg">
              <span className="font-medium text-blue-600">
                {result.band}
                {result.cupSize}
              </span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BraSizeCalculator;
