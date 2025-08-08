import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DueDateCalculator = () => {
  const [lastPeriod, setLastPeriod] = useState("");

  const calculateDueDate = () => {
    if (!lastPeriod) return null;
    const periodDate = new Date(lastPeriod);
    periodDate.setDate(periodDate.getDate() + 280); // 40 weeks
    return periodDate.toDateString();
  };

  const result = calculateDueDate();

  return (
    <>
      <Helmet>
        <title>Due Date Calculator | Calculate Your Pregnancy Due Date</title>
        <meta
          name="description"
          content="Use our Due Date Calculator to estimate your baby's expected delivery date. Enter the first day of your last period or conception date to know your pregnancy timeline instantly."
        />
        <meta
          name="keywords"
          content="due date calculator, pregnancy calculator, delivery date estimator, when is my baby due, gestational age calculator, expected delivery date, edd calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/health/due-date-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Due Date Calculator | Calculate Your Pregnancy Due Date"
        />
        <meta
          property="og:description"
          content="Easily estimate your baby’s due date with our accurate Due Date Calculator. Enter your LMP or conception date to know your pregnancy week and delivery timeline."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/health/due-date-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Due Date Calculator",
      "url": "https://unitedcalculator.net/health/due-date-calculator",
      "description": "Use the Due Date Calculator to estimate your pregnancy due date based on the first day of your last menstrual period or conception date. Perfect for expectant parents planning their pregnancy journey.",
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
          "name": "How is the due date calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The due date is usually calculated by adding 280 days (40 weeks) to the first day of your last menstrual period (LMP). Alternatively, it can be estimated from the date of conception."
          }
        },
        {
          "@type": "Question",
          "name": "Can the due date change during pregnancy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, your due date may be adjusted based on ultrasound measurements and fetal development, especially during the first trimester. Always consult your healthcare provider for updates."
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
          "name": "Due Date Calculator",
          "item": "https://unitedcalculator.net/health/due-date-calculator"
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
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Estimated Due Date
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Your Baby's Due:</span>
              <span className="text-green-600">{result}</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default DueDateCalculator;
