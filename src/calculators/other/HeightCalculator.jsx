import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const HeightCalculator = () => {
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState("cm");

  const convertHeight = () => {
    const h = parseFloat(height);
    if (isNaN(h)) return null;

    let cm = 0;
    if (unit === "cm") {
      cm = h;
    } else if (unit === "ft") {
      cm = h * 30.48;
    } else if (unit === "in") {
      cm = h * 2.54;
    }

    const feet = Math.floor(cm / 30.48);
    const inches = ((cm / 2.54) % 12).toFixed(2);
    return {
      cm: cm.toFixed(2),
      feet,
      inches,
    };
  };

  const result = convertHeight();

  return (
    <>
      <Helmet>
        <title>Height Calculator | Calculate Your Height Easily</title>
        <meta
          name="description"
          content="Use our Height Calculator to quickly convert and calculate height measurements in various units."
        />
        <meta
          name="keywords"
          content="height calculator, height conversion calculator, height measurement calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/height-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Height Calculator | Calculate Your Height Easily"
        />
        <meta
          property="og:description"
          content="Quickly calculate and convert your height measurements using our easy-to-use Height Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/height-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Height Calculator",
  "url": "https://www.unitedcalculator.net/other/height-calculator",
  "description": "Calculate and convert height measurements easily with our Height Calculator.",
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
      "name": "What is a Height Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Height Calculator helps you convert and calculate height measurements in different units."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Height Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter your height in one unit, and the calculator will convert it to other units or help calculate total height."
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
      "name": "Height Calculator",
      "item": "https://www.unitedcalculator.net/other/height-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Enter Height</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g. 170"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Select Unit</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="cm">Centimeters (cm)</option>
              <option value="ft">Feet (ft)</option>
              <option value="in">Inches (in)</option>
            </select>
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Converted Height
            </h2>
            <div className="text-gray-800 space-y-2">
              <p>
                <strong>Centimeters:</strong> {result.cm} cm
              </p>
              <p>
                <strong>Feet & Inches:</strong> {result.feet} ft {result.inches}{" "}
                in
              </p>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default HeightCalculator;
