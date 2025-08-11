import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const ShoeSizeConverter = () => {
  const [usSize, setUsSize] = useState("");
  const [euSize, setEuSize] = useState("");
  const [ukSize, setUkSize] = useState("");

  const convertSize = () => {
    const us = parseFloat(usSize);
    if (isNaN(us)) {
      setEuSize("Enter valid US size");
      setUkSize("");
      return;
    }

    const eu = (us + 30).toFixed(1); // Approximation
    const uk = (us - 0.5).toFixed(1); // Approximation

    setEuSize(eu);
    setUkSize(uk);
  };

  return (
    <>
      <Helmet>
        <title>
          Shoe Size Converter | Convert Shoe Sizes Across Different Regions
        </title>
        <meta
          name="description"
          content="Use our Shoe Size Converter to easily convert shoe sizes between US, UK, EU, and other international sizing systems."
        />
        <meta
          name="keywords"
          content="shoe size converter, shoe size conversion, US to UK shoe size, EU shoe size, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/shoe-size-converter"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Shoe Size Converter | Convert Shoe Sizes Across Different Regions"
        />
        <meta
          property="og:description"
          content="Quickly convert shoe sizes between various international standards with our easy-to-use Shoe Size Converter."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/shoe-size-converter"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Shoe Size Converter",
  "url": "https://www.unitedcalculator.net/other/shoe-size-converter",
  "description": "Convert shoe sizes easily between US, UK, EU, and other international shoe size standards using our Shoe Size Converter.",
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
      "name": "What is a Shoe Size Converter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Shoe Size Converter helps you convert shoe sizes between different international sizing systems like US, UK, and EU."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Shoe Size Converter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Select the original shoe size and region, then convert it to your desired sizing standard."
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
      "name": "Shoe Size Converter",
      "item": "https://www.unitedcalculator.net/other/shoe-size-converter"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Shoe Size Converter
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">US Shoe Size</label>
          <input
            type="number"
            value={usSize}
            onChange={(e) => setUsSize(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter US size"
          />
        </div>

        <button
          onClick={convertSize}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Convert
        </button>

        {euSize && (
          <div className="mt-4 text-center">
            <p className="text-lg">
              EU Size:{" "}
              <span className="font-semibold text-blue-700">{euSize}</span>
            </p>
            <p className="text-lg">
              UK Size:{" "}
              <span className="font-semibold text-blue-700">{ukSize}</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoeSizeConverter;
