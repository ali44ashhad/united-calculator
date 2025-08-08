import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const BodyTypeCalculator = () => {
  const [weight, setWeight] = useState("70"); // in kg
  const [height, setHeight] = useState("175"); // in cm
  const [frame, setFrame] = useState("medium"); // small, medium, large

  const calculateBodyType = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;

    if (isNaN(w) || isNaN(h) || h <= 0) return null;

    const bmi = w / (h * h);

    let bodyType = "";

    if (bmi < 18.5) {
      bodyType = "Ectomorph";
    } else if (bmi < 25) {
      if (frame === "small") bodyType = "Ectomorph";
      else if (frame === "medium") bodyType = "Mesomorph";
      else bodyType = "Endomorph";
    } else {
      if (frame === "small") bodyType = "Mesomorph";
      else bodyType = "Endomorph";
    }

    return { bmi: bmi.toFixed(1), bodyType };
  };

  const result = calculateBodyType();

  return (
    <>
      <Helmet>
        <title>
          Body Type Calculator | Find Your Somatotype (Ectomorph, Mesomorph,
          Endomorph)
        </title>
        <meta
          name="description"
          content="Use our Body Type Calculator to determine your somatotype — Ectomorph, Mesomorph, or Endomorph — based on your body structure, weight, and fitness profile. Ideal for personalized fitness planning."
        />
        <meta
          name="keywords"
          content="body type calculator, somatotype calculator, ectomorph mesomorph endomorph, find body type, body structure calculator, fitness body type, health calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/health/body-type-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Body Type Calculator | Find Your Somatotype (Ectomorph, Mesomorph, Endomorph)"
        />
        <meta
          property="og:description"
          content="Determine your body type easily with our Body Type Calculator. Identify if you're an ectomorph, mesomorph, or endomorph and tailor your fitness and nutrition goals accordingly."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/health/body-type-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Body Type Calculator",
      "url": "https://www.unitedcalculator.net/health/body-type-calculator",
      "description": "Use the Body Type Calculator to find your somatotype: ectomorph, mesomorph, or endomorph. Understand your body's natural structure to optimize your workout and nutrition plans.",
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
          "name": "What are the 3 main body types?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The three primary body types, or somatotypes, are Ectomorph (slim and lean), Mesomorph (muscular and athletic), and Endomorph (rounder and softer)."
          }
        },
        {
          "@type": "Question",
          "name": "How can I calculate my body type?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can calculate your body type by evaluating your body measurements, bone structure, and overall physique. Our Body Type Calculator simplifies this process and gives you a quick result."
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
          "name": "Health Calculators",
          "item": "https://www.unitedcalculator.net/health"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Body Type Calculator",
          "item": "https://www.unitedcalculator.net/health/body-type-calculator"
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

          <div>
            <label className="block mb-1 font-medium">Body Frame Size</label>
            <select
              value={frame}
              onChange={(e) => setFrame(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="small">Small Frame</option>
              <option value="medium">Medium Frame</option>
              <option value="large">Large Frame</option>
            </select>
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Body Type Result
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Your BMI:</span>
                <span className="text-yellow-600 font-medium">
                  {result.bmi}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Estimated Body Type:</span>
                <span className="text-blue-600">{result.bodyType}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BodyTypeCalculator;
