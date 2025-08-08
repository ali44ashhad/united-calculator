import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const PregnancyCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState("");

  const calculateDueDate = () => {
    if (!lastPeriodDate) return null;

    const lastDate = new Date(lastPeriodDate);
    const dueDate = new Date(lastDate);
    dueDate.setDate(dueDate.getDate() + 280); // 40 weeks

    return dueDate.toDateString();
  };

  const result = calculateDueDate();

  return (
    <>
      <Helmet>
        <title>
          Pregnancy Calculator | Estimate Due Date & Track Pregnancy Progress
        </title>
        <meta
          name="description"
          content="Use our Pregnancy Calculator to estimate your baby’s due date and track pregnancy progress based on your last menstrual period or conception date."
        />
        <meta
          name="keywords"
          content="pregnancy calculator, due date calculator, pregnancy due date, pregnancy tracker, conception date calculator, pregnancy week calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/health/pregnancy-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pregnancy Calculator | Estimate Due Date & Track Pregnancy Progress"
        />
        <meta
          property="og:description"
          content="Estimate your baby’s due date and monitor pregnancy progress with our Pregnancy Calculator. Based on last menstrual period or conception date."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/health/pregnancy-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Pregnancy Calculator",
      "url": "https://www.unitedcalculator.net/health/pregnancy-calculator",
      "description": "Use the Pregnancy Calculator to estimate your baby’s due date and track pregnancy progress based on your last menstrual period or conception date. Ideal for expectant mothers and healthcare planning.",
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
          "name": "How does the pregnancy calculator work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The calculator estimates your due date by adding 280 days (40 weeks) to the first day of your last menstrual period or by calculating from the conception date."
          }
        },
        {
          "@type": "Question",
          "name": "Can I track my pregnancy progress with this calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the calculator helps you track pregnancy progress week by week based on the estimated due date."
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
          "name": "Pregnancy Calculator",
          "item": "https://www.unitedcalculator.net/health/pregnancy-calculator"
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
              Last Menstrual Period (LMP)
            </label>
            <input
              type="date"
              value={lastPeriodDate}
              onChange={(e) => setLastPeriodDate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-pink-50 p-4 rounded-lg border border-pink-200 mt-6">
            <h2 className="text-xl font-semibold text-pink-700 mb-2">
              Estimated Due Date
            </h2>
            <p className="text-gray-800">
              <span className="font-medium">Due Date:</span> {result}
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default PregnancyCalculator;
