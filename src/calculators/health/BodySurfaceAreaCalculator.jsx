import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const BodySurfaceAreaCalculator = () => {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("175");

  const calculateBSA = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h)) return null;

    const bsa = Math.sqrt((w * h) / 3600);
    return bsa.toFixed(2);
  };

  const result = calculateBSA();

  return (
    <>
      <Helmet>
        <title>
          Body Surface Area (BSA) Calculator | Calculate BSA for Medical Use
        </title>
        <meta
          name="description"
          content="Use our Body Surface Area (BSA) Calculator to quickly estimate your BSA using height and weight. Ideal for medical dosing, clinical assessments, and health evaluations."
        />
        <meta
          name="keywords"
          content="body surface area calculator, BSA calculator, calculate BSA, Du Bois formula, medical dosage calculator, BSA medical tool, health calculators"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/body-surface-area-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Body Surface Area (BSA) Calculator | Calculate BSA for Medical Use"
        />
        <meta
          property="og:description"
          content="Estimate your Body Surface Area (BSA) accurately using our online BSA Calculator. Commonly used in clinical and medical settings for drug dosing and health analysis."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/body-surface-area-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Body Surface Area Calculator",
      "url": "https://unitedcalculator.net/health/body-surface-area-calculator",
      "description": "Use the Body Surface Area (BSA) Calculator to estimate BSA using standard formulas such as Du Bois or Mosteller. Suitable for medical professionals and individuals monitoring health.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://unitedcalculator.net"
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
          "name": "What is Body Surface Area (BSA)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Body Surface Area (BSA) is the total surface area of the human body, often used in medicine to calculate drug dosages, especially in chemotherapy and critical care."
          }
        },
        {
          "@type": "Question",
          "name": "How is BSA calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BSA is calculated using formulas such as Du Bois, Mosteller, or Haycock, which typically require your height and weight to provide an accurate surface area estimate in square meters (m²)."
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
          "item": "https://unitedcalculator.net"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Health Calculators",
          "item": "https://unitedcalculator.net/health"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Body Surface Area Calculator",
          "item": "https://unitedcalculator.net/health/body-surface-area-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 70"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 175"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Body Surface Area Result
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Your BSA:</span>
              <span className="text-blue-600">{result} m²</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BodySurfaceAreaCalculator;
