import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const PregnancyWeightGainCalculator = () => {
  const [prePregnancyWeight, setPrePregnancyWeight] = useState("");
  const [height, setHeight] = useState("");
  const [trimester, setTrimester] = useState("1");

  const calculateBMI = () => {
    const weight = parseFloat(prePregnancyWeight);
    const heightInMeters = parseFloat(height) / 100;

    if (!weight || !heightInMeters) return null;

    return weight / (heightInMeters * heightInMeters);
  };

  const getWeightGainRange = () => {
    const bmi = calculateBMI();
    if (bmi === null) return null;

    if (bmi < 18.5) return "28-40 lbs (12.5–18 kg)";
    if (bmi < 25) return "25-35 lbs (11.5–16 kg)";
    if (bmi < 30) return "15-25 lbs (7–11.5 kg)";
    return "11-20 lbs (5–9 kg)";
  };

  const recommended = getWeightGainRange();

  return (
    <>
      <Helmet>
        <title>
          Pregnancy Weight Gain Calculator | Track Healthy Weight Gain During
          Pregnancy
        </title>
        <meta
          name="description"
          content="Use our Pregnancy Weight Gain Calculator to monitor and track healthy weight gain during your pregnancy based on your pre-pregnancy BMI and gestational age."
        />
        <meta
          name="keywords"
          content="pregnancy weight gain calculator, healthy pregnancy weight, weight gain tracker, gestational weight gain calculator, prenatal weight calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/health/pregnancy-weight-gain-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pregnancy Weight Gain Calculator | Track Healthy Weight Gain During Pregnancy"
        />
        <meta
          property="og:description"
          content="Monitor your healthy weight gain throughout pregnancy using the Pregnancy Weight Gain Calculator based on your BMI and pregnancy progress."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/health/pregnancy-weight-gain-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Pregnancy Weight Gain Calculator",
      "url": "https://www.unitedcalculator.net/health/pregnancy-weight-gain-calculator",
      "description": "Track and monitor healthy weight gain during pregnancy with our Pregnancy Weight Gain Calculator. Based on pre-pregnancy BMI and gestational age, this tool helps ensure a safe pregnancy.",
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
          "name": "What is the Pregnancy Weight Gain Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This calculator helps expectant mothers track healthy weight gain throughout pregnancy based on their pre-pregnancy BMI and how far along they are."
          }
        },
        {
          "@type": "Question",
          "name": "Why is monitoring weight gain important during pregnancy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Proper weight gain is important for the health of both mother and baby, reducing risks of complications and ensuring adequate fetal growth."
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
          "name": "Pregnancy Weight Gain Calculator",
          "item": "https://www.unitedcalculator.net/health/pregnancy-weight-gain-calculator"
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
              Pre-pregnancy Weight (kg)
            </label>
            <input
              type="number"
              value={prePregnancyWeight}
              onChange={(e) => setPrePregnancyWeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Trimester</label>
            <select
              value={trimester}
              onChange={(e) => setTrimester(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="1">First Trimester</option>
              <option value="2">Second Trimester</option>
              <option value="3">Third Trimester</option>
            </select>
          </div>
        </div>

        {recommended && (
          <section className="bg-pink-50 p-4 rounded-lg border border-pink-200 mt-6">
            <h2 className="text-xl font-semibold text-pink-700 mb-2">
              Recommended Weight Gain
            </h2>
            <p className="text-gray-800">
              Based on your BMI, the total recommended pregnancy weight gain is:{" "}
              <span className="font-semibold">{recommended}</span>
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default PregnancyWeightGainCalculator;
