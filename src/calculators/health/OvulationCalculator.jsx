import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const OvulationCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [cycleLength, setCycleLength] = useState("28");

  const calculateOvulation = () => {
    const cycle = parseInt(cycleLength);
    if (!lastPeriodDate || isNaN(cycle) || cycle < 20 || cycle > 45)
      return null;

    const startDate = new Date(lastPeriodDate);
    const ovulationDate = new Date(startDate);
    ovulationDate.setDate(startDate.getDate() + cycle - 14);

    const fertileStart = new Date(ovulationDate);
    fertileStart.setDate(ovulationDate.getDate() - 5);

    const fertileEnd = new Date(ovulationDate);
    fertileEnd.setDate(ovulationDate.getDate() + 1);

    return {
      ovulationDate: ovulationDate.toDateString(),
      fertileWindow: `${fertileStart.toDateString()} to ${fertileEnd.toDateString()}`,
    };
  };

  const result = calculateOvulation();

  return (
    <>
      <Helmet>
        <title>
          Ovulation Calculator | Track Your Fertile Window & Ovulation Days
        </title>
        <meta
          name="description"
          content="Use our Ovulation Calculator to predict your fertile days and ovulation window. Helps women track fertility for conception or family planning."
        />
        <meta
          name="keywords"
          content="ovulation calculator, fertile window calculator, ovulation days, fertility tracker, menstrual cycle calculator, pregnancy planning calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/ovulation-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ovulation Calculator | Track Your Fertile Window & Ovulation Days"
        />
        <meta
          property="og:description"
          content="Predict your ovulation days and fertile window with our Ovulation Calculator. A helpful tool for women planning pregnancy or tracking menstrual cycles."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/ovulation-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Ovulation Calculator",
      "url": "https://unitedcalculator.net/health/ovulation-calculator",
      "description": "Use the Ovulation Calculator to estimate your fertile window and ovulation days based on your menstrual cycle. Ideal for conception planning and fertility awareness.",
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
          "name": "What is an ovulation calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An ovulation calculator helps estimate the days when a woman is most fertile by calculating her ovulation window based on her menstrual cycle data."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is the ovulation calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The calculator provides an estimate based on average cycle lengths. Individual variations may affect accuracy, so it should be used as a guide, not a guarantee."
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
          "name": "Ovulation Calculator",
          "item": "https://unitedcalculator.net/health/ovulation-calculator"
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
              Last Period Start Date
            </label>
            <input
              type="date"
              value={lastPeriodDate}
              onChange={(e) => setLastPeriodDate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
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
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-pink-50 p-4 rounded-lg border border-pink-200 mt-6">
            <h2 className="text-xl font-semibold text-pink-700 mb-3">
              Ovulation Result
            </h2>
            <div className="text-gray-800 space-y-2">
              <p>
                <span className="font-medium">Estimated Ovulation Date:</span>{" "}
                {result.ovulationDate}
              </p>
              <p>
                <span className="font-medium">Fertile Window:</span>{" "}
                {result.fertileWindow}
              </p>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default OvulationCalculator;
