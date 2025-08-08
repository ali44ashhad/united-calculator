import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const BodyFatCalculator = () => {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("175");
  const [neck, setNeck] = useState("38");
  const [waist, setWaist] = useState("85");
  const [hip, setHip] = useState("95"); // Only used for females

  const calculateBodyFat = () => {
    const h = parseFloat(height);
    const n = parseFloat(neck);
    const w = parseFloat(waist);
    const hp = parseFloat(hip);

    if (isNaN(h) || isNaN(n) || isNaN(w)) return null;

    let bodyFat;
    if (gender === "male") {
      bodyFat = 86.01 * Math.log10(w - n) - 70.041 * Math.log10(h) + 36.76;
    } else {
      if (isNaN(hp)) return null;
      bodyFat =
        163.205 * Math.log10(w + hp - n) - 97.684 * Math.log10(h) - 78.387;
    }

    return bodyFat.toFixed(2);
  };

  const result = calculateBodyFat();

  return (
    <>
      <Helmet>
        <title>
          Body Fat Calculator | Calculate Your Body Fat Percentage Accurately
        </title>
        <meta
          name="description"
          content="Use our Body Fat Calculator to estimate your body fat percentage based on your height, weight, age, and gender. Get instant results and improve your fitness journey."
        />
        <meta
          name="keywords"
          content="body fat calculator, body fat percentage calculator, fitness calculator, fat measurement tool, bmi and body fat, calculate body fat, health calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/body-fat-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Body Fat Calculator | Calculate Your Body Fat Percentage Accurately"
        />
        <meta
          property="og:description"
          content="Estimate your body fat percentage quickly using our Body Fat Calculator. Enter your details to get accurate fitness metrics instantly."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/body-fat-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Body Fat Calculator",
      "url": "https://unitedcalculator.net/health/body-fat-calculator",
      "description": "The Body Fat Calculator provides an estimate of your body fat percentage using your age, gender, height, weight, and waist measurements. Ideal for fitness tracking and health monitoring.",
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
          "name": "What is body fat percentage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Body fat percentage is the proportion of fat in your body compared to total body mass. It’s a key indicator of overall health and fitness."
          }
        },
        {
          "@type": "Question",
          "name": "How is body fat calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Body fat can be estimated using various formulas based on weight, height, age, gender, and waist circumference. Our calculator uses proven methods like the Navy or YMCA formula."
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
          "name": "Body Fat Calculator",
          "item": "https://unitedcalculator.net/health/body-fat-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
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
            <label className="block mb-1 font-medium">
              Neck Circumference (cm)
            </label>
            <input
              type="number"
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 38"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Waist Circumference (cm)
            </label>
            <input
              type="number"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 85"
            />
          </div>

          {gender === "female" && (
            <div>
              <label className="block mb-1 font-medium">
                Hip Circumference (cm)
              </label>
              <input
                type="number"
                value={hip}
                onChange={(e) => setHip(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="e.g. 95"
              />
            </div>
          )}
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Body Fat Result Summary
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Body Fat Percentage:</span>
              <span className="text-blue-600">{result}%</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BodyFatCalculator;
