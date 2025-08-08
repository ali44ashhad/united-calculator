import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const MarginCalculator = () => {
  const [cost, setCost] = useState("100");
  const [price, setPrice] = useState("150");

  const costVal = parseFloat(cost || 0);
  const priceVal = parseFloat(price || 0);

  const profit = priceVal - costVal;
  const margin = priceVal === 0 ? 0 : (profit / priceVal) * 100;
  const markup = costVal === 0 ? 0 : (profit / costVal) * 100;

  return (
    <>
      <Helmet>
        <title>Margin Calculator</title>
        <meta
          name="description"
          content="Use our Margin Calculator to determine the profit margin, markup, or gross margin percentage based on cost and revenue. Ideal for businesses, retailers, and pricing strategies."
        />
        <meta
          name="keywords"
          content="margin calculator, profit margin calculator, gross margin calculator, markup calculator, cost and revenue calculator, business margin calculator, calculate profit margin, pricing calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/margin-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Margin Calculator" />
        <meta
          property="og:description"
          content="Quickly calculate profit margin, markup, or gross margin percentage using this simple Margin Calculator. Great for business owners and pricing decisions."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/margin-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Margin Calculator",
      "url": "https://unitedcalculator.net/finance/margin-calculator",
      "description": "Use the Margin Calculator to calculate profit margin, markup, and gross margin based on cost and revenue. Essential tool for financial planning and business pricing.",
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
          "name": "What is a margin calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A margin calculator helps determine the profit margin, markup, or gross margin percentage using cost and selling price. It's useful for business pricing strategies."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate profit margin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Profit margin is calculated using the formula: (Selling Price - Cost) / Selling Price × 100. The calculator simplifies this process for you instantly."
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
          "name": "Margin Calculator",
          "item": "https://unitedcalculator.net/finance/margin-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Cost Price ($)</label>
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="100"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Selling Price ($)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="150"
            />
          </div>
        </div>

        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Margin Summary
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Profit:</span>
            <span className="text-green-600">${profit.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-2">
            <span className="text-gray-800">Margin (%):</span>
            <span className="text-blue-600">{margin.toFixed(2)}%</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-2">
            <span className="text-gray-800">Markup (%):</span>
            <span className="text-purple-600">{markup.toFixed(2)}%</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default MarginCalculator;
