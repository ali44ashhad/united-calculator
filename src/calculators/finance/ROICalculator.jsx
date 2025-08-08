import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const ROICalculator = () => {
  const [gainFromInvestment, setGainFromInvestment] = useState("120000");
  const [costOfInvestment, setCostOfInvestment] = useState("100000");

  const calculateROI = () => {
    const gain = parseFloat(gainFromInvestment);
    const cost = parseFloat(costOfInvestment);

    if (isNaN(gain) || isNaN(cost) || cost === 0) return null;

    const roi = ((gain - cost) / cost) * 100;

    return {
      roi: roi.toFixed(2),
    };
  };

  const result = calculateROI();

  return (
    <>
      <Helmet>
        <title>ROI Calculator | Return on Investment</title>
        <meta
          name="description"
          content="Use our ROI Calculator to calculate Return on Investment for your business or investments. Find out how profitable your investment is based on gain and cost inputs."
        />
        <meta
          name="keywords"
          content="roi calculator, return on investment calculator, investment calculator, business ROI calculator, investment return calculator, calculate ROI, roi formula"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/roi-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="ROI Calculator | Return on Investment"
        />
        <meta
          property="og:description"
          content="Calculate your return on investment easily with our ROI Calculator. Input your investment cost and gain to get accurate ROI results for personal or business use."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/roi-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "ROI Calculator",
      "url": "https://unitedcalculator.net/finance/roi-calculator",
      "description": "This ROI Calculator helps you estimate your Return on Investment by analyzing the gain or loss from an investment relative to its cost. Useful for businesses, startups, and investors.",
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
          "name": "What is ROI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ROI stands for Return on Investment and measures the gain or loss generated on an investment relative to the amount of money invested."
          }
        },
        {
          "@type": "Question",
          "name": "How is ROI calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ROI is calculated using the formula: (Net Profit / Investment Cost) × 100. Our calculator does this for you automatically."
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
          "name": "Finance Calculators",
          "item": "https://unitedcalculator.net/finance"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ROI Calculator",
          "item": "https://unitedcalculator.net/finance/roi-calculator"
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
              Gain from Investment
            </label>
            <input
              type="number"
              value={gainFromInvestment}
              onChange={(e) => setGainFromInvestment(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 120000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Cost of Investment</label>
            <input
              type="number"
              value={costOfInvestment}
              onChange={(e) => setCostOfInvestment(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 100000"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              ROI Summary
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Return on Investment (ROI):</span>
              <span className="text-green-600">{result.roi}%</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ROICalculator;
