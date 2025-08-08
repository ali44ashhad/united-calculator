import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const PregnancyConceptionCalculator = () => {
  const [dueDate, setDueDate] = useState("");

  const calculateConceptionDate = () => {
    if (!dueDate) return null;

    const due = new Date(dueDate);
    const conception = new Date(due);
    conception.setDate(conception.getDate() - 266); // Average conception is 266 days before due date

    return conception.toDateString();
  };

  const result = calculateConceptionDate();

  return (
    <>
      <Helmet>
        <title>
          Pregnancy Conception Calculator | Estimate Conception Date & Fertile
          Window
        </title>
        <meta
          name="description"
          content="Use our Pregnancy Conception Calculator to estimate your conception date and fertile window based on your menstrual cycle and ovulation data."
        />
        <meta
          name="keywords"
          content="pregnancy conception calculator, conception date calculator, fertile window calculator, ovulation calculator, pregnancy planning, fertility tracker"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/health/pregnancy-conception-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pregnancy Conception Calculator | Estimate Conception Date & Fertile Window"
        />
        <meta
          property="og:description"
          content="Estimate your conception date and fertile window with our Pregnancy Conception Calculator. Ideal for pregnancy planning and fertility tracking."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/health/pregnancy-conception-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Pregnancy Conception Calculator",
      "url": "https://www.unitedcalculator.net/health/pregnancy-conception-calculator",
      "description": "Use the Pregnancy Conception Calculator to estimate your conception date and fertile window based on your menstrual cycle and ovulation. Helpful for pregnancy planning and fertility awareness.",
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
          "name": "What is a pregnancy conception calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A pregnancy conception calculator estimates the likely date of conception and your fertile window based on menstrual cycle and ovulation data."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is the conception date estimate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The estimate is based on average cycle lengths and ovulation patterns, so individual variations may affect accuracy. Use it as a general guide."
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
          "name": "Pregnancy Conception Calculator",
          "item": "https://www.unitedcalculator.net/health/pregnancy-conception-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Estimated Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-pink-50 p-4 rounded-lg border border-pink-200 mt-6">
            <h2 className="text-xl font-semibold text-pink-700 mb-2">
              Estimated Conception Date
            </h2>
            <p className="text-gray-800">
              <span className="font-medium">Conception Date:</span> {result}
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default PregnancyConceptionCalculator;
