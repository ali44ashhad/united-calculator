import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const VATCalculator = () => {
  const [amount, setAmount] = useState("1000");
  const [vatRate, setVatRate] = useState("20");
  const [includeVAT, setIncludeVAT] = useState(false);

  const calculateVAT = () => {
    const price = parseFloat(amount);
    const rate = parseFloat(vatRate) / 100;

    if (isNaN(price) || isNaN(rate)) return null;

    let vatAmount = 0;
    let netPrice = 0;
    let grossPrice = 0;

    if (includeVAT) {
      grossPrice = price;
      netPrice = price / (1 + rate);
      vatAmount = grossPrice - netPrice;
    } else {
      netPrice = price;
      vatAmount = netPrice * rate;
      grossPrice = netPrice + vatAmount;
    }

    return {
      netPrice: netPrice.toFixed(2),
      vatAmount: vatAmount.toFixed(2),
      grossPrice: grossPrice.toFixed(2),
    };
  };

  const result = calculateVAT();

  return (
    <>
      <Helmet>
        <title>VAT Calculator | Add or Remove Value Added Tax Easily</title>
        <meta
          name="description"
          content="Use our VAT Calculator to calculate VAT-inclusive and VAT-exclusive prices. Quickly add or remove Value Added Tax from any amount based on your country’s VAT rate."
        />
        <meta
          name="keywords"
          content="VAT calculator, value added tax calculator, add VAT, remove VAT, VAT inclusive calculator, VAT exclusive calculator, tax calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/vat-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="VAT Calculator | Add or Remove Value Added Tax Easily"
        />
        <meta
          property="og:description"
          content="Easily calculate VAT-inclusive or VAT-exclusive prices using our VAT Calculator. Supports multiple tax rates and helps you handle Value Added Tax calculations for business or personal use."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/vat-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "VAT Calculator",
      "url": "https://www.unitedcalculator.net/finance/vat-calculator",
      "description": "Our VAT Calculator helps you calculate VAT-inclusive and VAT-exclusive prices quickly. Add or remove Value Added Tax based on any percentage rate for accurate pricing.",
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
          "name": "What is a VAT calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A VAT calculator helps you calculate the amount of Value Added Tax on a given price, allowing you to find VAT-inclusive or VAT-exclusive amounts easily."
          }
        },
        {
          "@type": "Question",
          "name": "How do I remove VAT from a price?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To remove VAT, divide the VAT-inclusive price by 1 plus the VAT rate (e.g., 1.20 for 20%). Our calculator does this instantly for you."
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
          "name": "Finance Calculators",
          "item": "https://www.unitedcalculator.net/finance"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "VAT Calculator",
          "item": "https://www.unitedcalculator.net/finance/vat-calculator"
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
              {includeVAT ? "Gross Price ($)" : "Net Price ($)"}
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">VAT Rate (%)</label>
            <input
              type="number"
              value={vatRate}
              onChange={(e) => setVatRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 20"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeVAT}
              onChange={() => setIncludeVAT(!includeVAT)}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-400"
            />
            <label className="text-sm text-gray-700">Amount includes VAT</label>
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              VAT Calculation Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Net Price:</span>
                <span className="text-yellow-600 font-medium">
                  ${result.netPrice}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">VAT Amount:</span>
                <span className="text-green-600 font-medium">
                  ${result.vatAmount}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Gross Price:</span>
                <span className="text-blue-600">${result.grossPrice}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default VATCalculator;
