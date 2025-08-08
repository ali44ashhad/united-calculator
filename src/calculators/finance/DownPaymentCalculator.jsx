import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DownPaymentCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState("500000");
  const [downPaymentPercentage, setDownPaymentPercentage] = useState("20");

  const calculateDownPayment = () => {
    const price = parseFloat(purchasePrice);
    const percentage = parseFloat(downPaymentPercentage);

    if (isNaN(price) || isNaN(percentage)) return null;

    const downPayment = (price * percentage) / 100;
    const loanAmount = price - downPayment;

    return {
      downPayment: downPayment.toFixed(2),
      loanAmount: loanAmount.toFixed(2),
    };
  };

  const result = calculateDownPayment();

  return (
    <>
      <Helmet>
        <title>Down Payment Calculator</title>
        <meta
          name="description"
          content="Use our Down Payment Calculator to estimate how much you need to pay upfront for a home, car, or any major purchase. Adjust purchase price and percentage to calculate easily."
        />
        <meta
          name="keywords"
          content="down payment calculator, home down payment, car down payment, calculate down payment, mortgage calculator, upfront cost calculator, real estate calculator, loan calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/down-payment-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Down Payment Calculator" />
        <meta
          property="og:description"
          content="Calculate your required down payment amount with ease. Perfect for estimating upfront costs for home or car loans based on purchase price and payment percentage."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/down-payment-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Down Payment Calculator",
      "url": "https://unitedcalculator.net/finance/down-payment-calculator",
      "description": "The Down Payment Calculator helps you determine how much money you'll need upfront for a major purchase like a home or car, based on a percentage of the total cost.",
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
          "name": "What is a down payment calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A down payment calculator helps you estimate the upfront amount you need to pay when purchasing a home, car, or other large asset based on the total price and chosen down payment percentage."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use a down payment calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter the purchase price and desired down payment percentage. The calculator will show the amount you need to pay upfront."
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
          "name": "Down Payment Calculator",
          "item": "https://unitedcalculator.net/finance/down-payment-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Purchase Price (₹)</label>
            <input
              type="number"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 500000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Down Payment (%)</label>
            <input
              type="number"
              value={downPaymentPercentage}
              onChange={(e) => setDownPaymentPercentage(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 20"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Down Payment Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Down Payment Amount:</span>
                <span className="text-green-600 font-medium">
                  ₹{result.downPayment}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Loan Amount Required:</span>
                <span className="text-blue-600">₹{result.loanAmount}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default DownPaymentCalculator;
