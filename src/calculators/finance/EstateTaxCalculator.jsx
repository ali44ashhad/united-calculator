import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const EstateTaxCalculator = () => {
  const [estateValue, setEstateValue] = useState("2000000"); // in ₹
  const [exemptionLimit, setExemptionLimit] = useState("1000000"); // in ₹
  const [taxRate, setTaxRate] = useState("40"); // in %

  const calculateEstateTax = () => {
    const value = parseFloat(estateValue);
    const exemption = parseFloat(exemptionLimit);
    const rate = parseFloat(taxRate) / 100;

    if (isNaN(value) || isNaN(exemption) || isNaN(rate)) return null;

    const taxableAmount = Math.max(0, value - exemption);
    const taxDue = taxableAmount * rate;

    return {
      taxableAmount: taxableAmount.toFixed(2),
      taxDue: taxDue.toFixed(2),
    };
  };

  const result = calculateEstateTax();

  return (
    <>
      <Helmet>
        <title>Estate Tax Calculator</title>
        <meta
          name="description"
          content="Use our Estate Tax Calculator to estimate the federal estate taxes owed based on the total value of an estate. Ideal for estate planning and financial analysis."
        />
        <meta
          name="keywords"
          content="estate tax calculator, inheritance tax calculator, federal estate tax, estate planning tool, estate tax estimate, taxable estate value, estate tax threshold, estate tax 2025"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/estate-tax-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Estate Tax Calculator" />
        <meta
          property="og:description"
          content="Estimate federal estate taxes with our Estate Tax Calculator. Plan your estate effectively by understanding how much may be owed based on current tax laws."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/estate-tax-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Estate Tax Calculator",
      "url": "https://unitedcalculator.net/finance/estate-tax-calculator",
      "description": "Use the Estate Tax Calculator to estimate taxes owed on a deceased person’s estate. Learn about the federal estate tax threshold, taxable estate value, and planning strategies.",
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
          "name": "What is an estate tax calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An estate tax calculator estimates the amount of federal estate tax that may be owed based on the value of a deceased person’s estate and applicable exemptions."
          }
        },
        {
          "@type": "Question",
          "name": "Who needs to pay estate tax?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Estate tax is generally owed by estates that exceed the federal exemption threshold. The estate itself is responsible for paying the tax before assets are distributed to heirs."
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
          "name": "Estate Tax Calculator",
          "item": "https://unitedcalculator.net/finance/estate-tax-calculator"
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
              Total Estate Value (₹)
            </label>
            <input
              type="number"
              value={estateValue}
              onChange={(e) => setEstateValue(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 2000000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Exemption Limit (₹)
            </label>
            <input
              type="number"
              value={exemptionLimit}
              onChange={(e) => setExemptionLimit(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1000000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Estate Tax Rate (%)
            </label>
            <input
              type="number"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 40"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Estate Tax Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Taxable Estate:</span>
                <span className="text-yellow-600 font-medium">
                  ₹{result.taxableAmount}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Estate Tax Due:</span>
                <span className="text-red-600">₹{result.taxDue}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default EstateTaxCalculator;
