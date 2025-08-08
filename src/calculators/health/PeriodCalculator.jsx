import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const PeriodCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [cycleLength, setCycleLength] = useState("28");

  const calculateNextPeriod = () => {
    const cycle = parseInt(cycleLength);
    const lastDate = new Date(lastPeriodDate);
    if (!lastPeriodDate || isNaN(cycle)) return null;

    const nextPeriodDate = new Date(lastDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + cycle);

    return nextPeriodDate.toDateString();
  };

  const result = calculateNextPeriod();

  return (
    <>
      <Helmet>
        <title>
          Period Calculator | Track Your Menstrual Cycle & Next Period Date
        </title>
        <meta
          name="description"
          content="Use our Period Calculator to predict your next menstrual period and track your cycle. Helpful for managing menstrual health and planning."
        />
        <meta
          name="keywords"
          content="period calculator, menstrual cycle tracker, next period calculator, cycle calendar, menstrual cycle calculator, fertility tracker"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/period-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Period Calculator | Track Your Menstrual Cycle & Next Period Date"
        />
        <meta
          property="og:description"
          content="Predict your next period date and track your menstrual cycle with our Period Calculator. A useful tool for menstrual health awareness and family planning."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/period-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Period Calculator",
      "url": "https://unitedcalculator.net/health/period-calculator",
      "description": "The Period Calculator helps you estimate your next menstrual period based on your cycle length and last period date. Ideal for menstrual health management and planning.",
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
          "name": "What is a period calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A period calculator helps predict the start date of your next menstrual period based on your last period and average cycle length."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is the period calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The calculator provides estimates based on average cycle lengths. Variations in cycles can affect accuracy, so use it as a general guide."
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
          "name": "Period Calculator",
          "item": "https://unitedcalculator.net/health/period-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Last Period Date</label>
            <input
              type="date"
              value={lastPeriodDate}
              onChange={(e) => setLastPeriodDate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Cycle Length (days)
            </label>
            <input
              type="number"
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-pink-50 p-4 rounded-lg border border-pink-200 mt-6">
            <h2 className="text-xl font-semibold text-pink-700 mb-2">
              Next Period Date
            </h2>
            <p className="text-gray-800">
              <span className="font-medium">Expected:</span> {result}
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default PeriodCalculator;
