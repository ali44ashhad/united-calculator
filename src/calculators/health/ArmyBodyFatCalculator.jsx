import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const ArmyBodyFatCalculator = () => {
  const [age, setAge] = useState("25");
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("170"); // cm
  const [neck, setNeck] = useState("40"); // cm
  const [waist, setWaist] = useState("80"); // cm
  const [hip, setHip] = useState("90"); // cm, only for females

  const calculateBodyFat = () => {
    const ageNum = parseInt(age, 10);
    const heightNum = parseFloat(height);
    const neckNum = parseFloat(neck);
    const waistNum = parseFloat(waist);
    const hipNum = parseFloat(hip);

    if (
      isNaN(ageNum) ||
      isNaN(heightNum) ||
      isNaN(neckNum) ||
      isNaN(waistNum) ||
      (gender === "female" && isNaN(hipNum))
    )
      return null;

    // Convert cm to inches (1 inch = 2.54 cm)
    const heightIn = heightNum / 2.54;
    const neckIn = neckNum / 2.54;
    const waistIn = waistNum / 2.54;
    const hipIn = hipNum / 2.54;

    let bodyFat = 0;

    if (gender === "male") {
      bodyFat =
        86.01 * Math.log10(waistIn - neckIn) -
        70.041 * Math.log10(heightIn) +
        36.76;
    } else {
      bodyFat =
        163.205 * Math.log10(waistIn + hipIn - neckIn) -
        97.684 * Math.log10(heightIn) -
        78.387;
    }

    return {
      bodyFat: bodyFat.toFixed(2),
    };
  };

  const result = calculateBodyFat();

  return (
    <>
      <Helmet>
        <title>
          Army Body Fat Calculator | Check U.S. Military Body Fat Standards
        </title>
        <meta
          name="description"
          content="Use the Army Body Fat Calculator to determine if you meet the U.S. Army's body fat percentage requirements. Calculate body fat based on official military standards for men and women."
        />
        <meta
          name="keywords"
          content="army body fat calculator, military body fat standards, us army body fat calculator, army body fat percentage, army fitness standards, military calculator, army body composition"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/health/army-body-fat-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Army Body Fat Calculator | Check U.S. Military Body Fat Standards"
        />
        <meta
          property="og:description"
          content="Quickly calculate your body fat percentage using the official U.S. Army formula. Find out if you meet the body composition standards for enlistment and service."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/health/army-body-fat-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Army Body Fat Calculator",
      "url": "https://www.unitedcalculator.net/health/army-body-fat-calculator",
      "description": "Calculate body fat percentage using the U.S. Army standard. This Army Body Fat Calculator helps determine eligibility for military service based on gender, height, neck, and waist measurements.",
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
          "name": "What is the Army Body Fat Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Army Body Fat Calculator uses height, neck, and waist measurements to determine if a person meets the body fat standards required by the U.S. Army. It applies different formulas for men and women."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is the Army Body Fat Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This calculator follows the official U.S. Army method and provides a good estimation, but actual measurements by trained personnel may be slightly different and are considered official for enlistment or active duty."
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
          "name": "Army Body Fat Calculator",
          "item": "https://www.unitedcalculator.net/health/army-body-fat-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Age (years)</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 25"
            />
          </div>

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
              placeholder="e.g. 170"
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
              placeholder="e.g. 40"
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
              placeholder="e.g. 80"
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
                placeholder="e.g. 90"
              />
            </div>
          )}
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Army Body Fat Result
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Body Fat Percentage:</span>
                <span className="text-blue-600">{result.bodyFat}%</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ArmyBodyFatCalculator;
