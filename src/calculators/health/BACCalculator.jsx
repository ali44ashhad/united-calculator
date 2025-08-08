import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const BACCalculator = () => {
  const [weight, setWeight] = useState("70"); // in kg
  const [gender, setGender] = useState("male"); // 'male' or 'female'
  const [alcoholConsumed, setAlcoholConsumed] = useState("40"); // in grams
  const [hours, setHours] = useState("1"); // hours since drinking started

  // Widmark formula constants
  // r = body water constant (0.68 men, 0.55 women)
  const calculateBAC = () => {
    const w = parseFloat(weight);
    const a = parseFloat(alcoholConsumed);
    const h = parseFloat(hours);
    if (isNaN(w) || isNaN(a) || isNaN(h) || w === 0) return null;

    const r = gender === "male" ? 0.68 : 0.55;
    // BAC = (Alcohol in grams / (Body weight in grams * r)) * 100 - (0.015 * hours)
    // Convert weight to grams (kg * 1000)
    const bacRaw = (a / (w * 1000 * r)) * 100 - 0.015 * h;
    const bac = bacRaw < 0 ? 0 : bacRaw;

    return bac.toFixed(4);
  };

  const result = calculateBAC();

  return (
    <>
      <Helmet>
        <title>
          BAC Calculator | Estimate Blood Alcohol Content Accurately
        </title>
        <meta
          name="description"
          content="Use our BAC Calculator to estimate your Blood Alcohol Content level based on your weight, gender, drinks consumed, and time. Check your sobriety and alcohol limits responsibly."
        />
        <meta
          name="keywords"
          content="bac calculator, blood alcohol content calculator, alcohol level calculator, blood alcohol level, how drunk am I, sobriety calculator, drink calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/health/bac-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="BAC Calculator | Estimate Blood Alcohol Content Accurately"
        />
        <meta
          property="og:description"
          content="Estimate your blood alcohol level with our easy-to-use BAC Calculator. Enter weight, drinks, and time to get a quick idea of your alcohol content and legal driving status."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/health/bac-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "BAC Calculator",
      "url": "https://www.unitedcalculator.net/health/bac-calculator",
      "description": "Use the BAC Calculator to estimate Blood Alcohol Content (BAC) based on body weight, gender, drink quantity, and time passed. Know your limits before driving or making decisions.",
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
          "name": "What is BAC (Blood Alcohol Content)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BAC stands for Blood Alcohol Content and refers to the percentage of alcohol in a person's bloodstream. It's used to measure levels of intoxication and legality for driving."
          }
        },
        {
          "@type": "Question",
          "name": "How does the BAC Calculator work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The calculator estimates your BAC by using your weight, gender, number of drinks, and the time over which they were consumed. It uses a standard formula to provide an approximate BAC level."
          }
        },
        {
          "@type": "Question",
          "name": "Is the BAC Calculator accurate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The BAC Calculator provides an estimate and should not be used to determine legal sobriety. Individual factors such as metabolism and health conditions can affect actual BAC levels."
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
          "name": "BAC Calculator",
          "item": "https://www.unitedcalculator.net/health/bac-calculator"
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
              min="1"
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
            <label className="block mb-1 font-medium">
              Alcohol Consumed (grams)
            </label>
            <input
              type="number"
              value={alcoholConsumed}
              onChange={(e) => setAlcoholConsumed(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 40"
              min="0"
            />
            <small className="text-gray-500">
              E.g., 40 grams = approx 3 standard drinks
            </small>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Hours Since Drinking Began
            </label>
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1"
              min="0"
            />
          </div>
        </div>

        {result !== null && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Blood Alcohol Content (BAC) Result
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Estimated BAC:</span>
                <span className="text-red-600">{result}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BACCalculator;
