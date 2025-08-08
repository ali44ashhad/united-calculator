import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState("1000");
  const [discountPercentage, setDiscountPercentage] = useState("10");

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

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
        <title>Discount Calculator</title>
        <meta
          name="description"
          content="Use our Discount Calculator to quickly find the final price after discount. Perfect for shopping, budgeting, and comparing offers during sales or promotions."
        />
        <meta
          name="keywords"
          content="discount calculator, percentage discount calculator, sale price calculator, price after discount, shopping discount calculator, savings calculator, retail calculator, calculate discount"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/discount-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Discount Calculator" />
        <meta
          property="og:description"
          content="Easily calculate how much you save during sales using our Discount Calculator. Enter original price and discount percentage to find the final price."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/discount-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Discount Calculator",
      "url": "https://unitedcalculator.net/finance/discount-calculator",
      "description": "The Discount Calculator helps you determine the sale price after applying a discount. Ideal for shopping, comparing deals, and calculating total savings.",
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
          "name": "What is a discount calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A discount calculator helps you find the final price of a product after applying a percentage discount. It also shows how much money you save."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate the sale price?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter the original price and the discount percentage into the calculator. It will automatically compute the discounted price and total savings."
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
          "name": "Discount Calculator",
          "item": "https://unitedcalculator.net/finance/discount-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Original Price (₹)</label>
            <input
              type="number"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Discount (%)</label>
            <input
              type="number"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Discount Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Discount Amount:</span>
                <span className="text-green-600 font-medium">
                  ₹{result.discountAmount}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">
                  Final Price After Discount:
                </span>
                <span className="text-blue-600">₹{result.finalPrice}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default DiscountCalculator;
