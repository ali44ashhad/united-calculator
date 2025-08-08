import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const IdealWeightCalculator = () => {
  const [height, setHeight] = useState("170"); // cm
  const [gender, setGender] = useState("male");

  const calculateIdealWeight = () => {
    const h = parseFloat(height);
    if (isNaN(h) || h < 152) return null;

    const heightInInches = h / 2.54;
    const baseHeight = 60; // inches
    const extraInches = heightInInches - baseHeight;

    if (gender === "male") {
      return (50 + 2.3 * extraInches).toFixed(1);
    } else {
      return (45.5 + 2.3 * extraInches).toFixed(1);
    }
  };

  const result = calculateIdealWeight();

  return (
    <>
      <Helmet>
        <title>
          Ideal Weight Calculator | Calculate Your Perfect Weight by Height &
          Gender
        </title>
        <meta
          name="description"
          content="Use our Ideal Weight Calculator to determine your perfect body weight based on height, gender, and body frame. Find out what weight is best for your health and fitness goals."
        />
        <meta
          name="keywords"
          content="ideal weight calculator, perfect weight by height, weight chart, body weight calculator, healthy weight, ideal bmi weight, body frame weight calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/health/ideal-weight-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ideal Weight Calculator | Calculate Your Perfect Weight by Height & Gender"
        />
        <meta
          property="og:description"
          content="Find your ideal weight based on your height, gender, and body frame using our Ideal Weight Calculator. Maintain a healthy weight range and achieve your wellness goals."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/health/ideal-weight-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Ideal Weight Calculator",
      "url": "https://www.unitedcalculator.net/health/ideal-weight-calculator",
      "description": "The Ideal Weight Calculator helps you determine your perfect weight based on your height, gender, and body frame size. Use it to track your fitness journey and stay within a healthy weight range.",
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
          "name": "How is ideal weight calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ideal weight is typically calculated using formulas like Devine, Robinson, or Miller, based on your height and gender. Some methods also account for body frame size for a more accurate estimate."
          }
        },
        {
          "@type": "Question",
          "name": "Is ideal weight the same for everyone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, ideal weight varies based on individual factors such as height, gender, age, and body frame. Our calculator personalizes your result to help you understand your healthy weight range."
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
          "name": "Ideal Weight Calculator",
          "item": "https://www.unitedcalculator.net/health/ideal-weight-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Height (in cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Ideal Body Weight
            </h2>
            <div className="text-lg font-semibold text-gray-700">
              {result} kg
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default IdealWeightCalculator;
