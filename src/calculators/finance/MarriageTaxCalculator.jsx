import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const MarriageTaxCalculator = () => {
  const [singleIncome, setSingleIncome] = useState("50000");
  const [spouseIncome, setSpouseIncome] = useState("40000");

  const totalIncome =
    parseFloat(singleIncome || 0) + parseFloat(spouseIncome || 0);

  const taxSingle =
    parseFloat(singleIncome || 0) * 0.22 + parseFloat(spouseIncome || 0) * 0.22;
  const taxMarried = totalIncome * 0.22;

  const marriageBonus = taxSingle - taxMarried;

  return (
    <>
      <Helmet>
        <title>Marriage Tax Calculator</title>
        <meta
          name="description"
          content="Use our Marriage Tax Calculator to estimate how getting married affects your tax liability. Compare tax scenarios for single vs. joint filers and maximize your savings."
        />
        <meta
          name="keywords"
          content="marriage tax calculator, tax savings after marriage, single vs married tax, joint filing calculator, income tax calculator, tax benefits of marriage, married couple tax tool"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/marriage-tax-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Marriage Tax Calculator" />
        <meta
          property="og:description"
          content="Estimate your tax savings or increase when switching from single to married filing status using our Marriage Tax Calculator. Ideal for couples planning finances."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/marriage-tax-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Marriage Tax Calculator",
      "url": "https://unitedcalculator.net/finance/marriage-tax-calculator",
      "description": "Use the Marriage Tax Calculator to understand the financial impact of getting married on your income taxes. Compare filing statuses and tax brackets easily.",
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
          "name": "What is a Marriage Tax Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Marriage Tax Calculator helps estimate the tax difference between filing as single individuals and as a married couple. It shows how your total tax liability changes after marriage."
          }
        },
        {
          "@type": "Question",
          "name": "When should I use a Marriage Tax Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use it before or after getting married to evaluate whether filing jointly or separately is more beneficial for your financial situation."
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
          "name": "Marriage Tax Calculator",
          "item": "https://unitedcalculator.net/finance/marriage-tax-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Your Income ($)</label>
            <input
              type="number"
              value={singleIncome}
              onChange={(e) => setSingleIncome(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="50000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Spouse's Income ($)
            </label>
            <input
              type="number"
              value={spouseIncome}
              onChange={(e) => setSpouseIncome(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="40000"
            />
          </div>
        </div>

        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Tax Comparison
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Tax (If Filing Separately):</span>
            <span className="text-red-600">${taxSingle.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-2">
            <span className="text-gray-800">
              Tax (If Married Filing Jointly):
            </span>
            <span className="text-green-600">${taxMarried.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-2">
            <span className="text-gray-800">Marriage Bonus/Penalty:</span>
            <span
              className={marriageBonus >= 0 ? "text-blue-600" : "text-red-600"}
            >
              {marriageBonus >= 0 ? "+" : "-"}$
              {Math.abs(marriageBonus).toFixed(2)}
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default MarriageTaxCalculator;
