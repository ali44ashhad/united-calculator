import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const ConceptionCalculator = () => {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState("28");

  const calculateConceptionDate = () => {
    if (!lastPeriod || isNaN(cycleLength)) return null;

    const periodDate = new Date(lastPeriod);
    const ovulationOffset = parseInt(cycleLength, 10) - 14;

    if (isNaN(ovulationOffset)) return null;

    const conceptionDate = new Date(periodDate);
    conceptionDate.setDate(conceptionDate.getDate() + ovulationOffset);

    return conceptionDate.toDateString();
  };

  const result = calculateConceptionDate();

  return (
    <>
      <Helmet>
        <title>
          Conception Calculator | Estimate Ovulation and Fertile Window
        </title>
        <meta
          name="description"
          content="Use our Conception Calculator to estimate your most fertile days, ovulation date, and the best time to conceive. Ideal for women planning pregnancy."
        />
        <meta
          name="keywords"
          content="conception calculator, ovulation calculator, fertility calculator, pregnancy planner, fertile days calculator, best time to conceive, menstrual cycle calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/health/conception-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Conception Calculator | Estimate Ovulation & Fertile Window"
        />
        <meta
          property="og:description"
          content="Find your most fertile days and ovulation period using our Conception Calculator. Perfect for couples trying to conceive naturally."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/health/conception-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Conception Calculator",
      "url": "https://www.unitedcalculator.net/health/conception-calculator",
      "description": "Use the Conception Calculator to calculate ovulation dates, fertile windows, and the best days to conceive based on your menstrual cycle. Ideal for pregnancy planning and fertility awareness.",
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
          "name": "How does a conception calculator work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A conception calculator uses the date of your last menstrual period and average cycle length to estimate ovulation and the most fertile days in your cycle."
          }
        },
        {
          "@type": "Question",
          "name": "When is the best time to conceive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best time to conceive is during your fertile window, which includes the five days leading up to ovulation and the day of ovulation itself. This calculator helps identify those days."
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
          "name": "Conception Calculator",
          "item": "https://www.unitedcalculator.net/health/conception-calculator"
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
              First Day of Last Period
            </label>
            <input
              type="date"
              value={lastPeriod}
              onChange={(e) => setLastPeriod(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Average Cycle Length (days)
            </label>
            <input
              type="number"
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 28"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Estimated Conception Date
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Likely Date:</span>
              <span className="text-pink-600">{result}</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ConceptionCalculator;
