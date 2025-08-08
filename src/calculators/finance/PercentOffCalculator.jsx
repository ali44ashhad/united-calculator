import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const PercentOffCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState("100");
  const [discountPercent, setDiscountPercent] = useState("20");

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent);

    if (isNaN(price) || isNaN(discount)) return null;

    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;

    return {
      discountAmount: discountAmount.toFixed(2),
      finalPrice: finalPrice.toFixed(2),
    };
  };

  const result = calculateDiscount();

  return (
    <>
      <Helmet>
        <title>Percent Off Calculator</title>
        <meta
          name="description"
          content="Use our Percent Off Calculator to quickly calculate discounts and final prices. Ideal for shopping deals, sales, and price comparisons."
        />
        <meta
          name="keywords"
          content="percent off calculator, discount calculator, sale price calculator, price reduction calculator, calculate percent off, shopping discount calculator, percentage off tool"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/percent-off-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Percent Off Calculator" />
        <meta
          property="og:description"
          content="Calculate discounts instantly using our Percent Off Calculator. Perfect for shopping, budgeting, and saving money during sales."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/percent-off-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Percent Off Calculator",
      "url": "https://unitedcalculator.net/finance/percent-off-calculator",
      "description": "Easily find out how much you save with our Percent Off Calculator. Enter the original price and discount percentage to get the final price instantly.",
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
          "name": "What is a Percent Off Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Percent Off Calculator helps you calculate the discount amount and final price when a percentage is taken off an item's original cost."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate percent off?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter the original price and the discount percentage. The calculator will subtract the discount from the original price to show your savings and final cost."
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
          "name": "Percent Off Calculator",
          "item": "https://unitedcalculator.net/finance/percent-off-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Original Price</label>
            <input
              type="number"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 100"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Discount (%)</label>
            <input
              type="number"
              value={discountPercent}
              onChange={(e) => setDiscountPercent(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 20"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Discount Result Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Discount Amount:</span>
                <span className="text-red-600 font-medium">
                  ₹{result.discountAmount}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Final Price:</span>
                <span className="text-green-600">₹{result.finalPrice}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default PercentOffCalculator;
