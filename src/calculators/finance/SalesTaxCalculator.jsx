import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const SalesTaxCalculator = () => {
  const [amount, setAmount] = useState("100");
  const [taxRate, setTaxRate] = useState("8");

  const calculateTax = () => {
    const price = parseFloat(amount);
    const rate = parseFloat(taxRate);

    if (isNaN(price) || isNaN(rate)) return null;

    const taxAmount = (price * rate) / 100;
    const totalAmount = price + taxAmount;

    return {
      taxAmount: taxAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    };
  };

  const result = calculateTax();

  return (
    <>
      <Helmet>
        <title>Sales Tax Calculator | Calculate Total Price with Tax</title>
        <meta
          name="description"
          content="Use our Sales Tax Calculator to quickly calculate the total price including tax. Just enter the price and tax rate to find out your final cost with tax."
        />
        <meta
          name="keywords"
          content="sales tax calculator, tax calculator, calculate sales tax, price after tax, tax inclusive calculator, tax exclusive calculator, gst calculator, total price calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/sales-tax-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sales Tax Calculator | Calculate Total Price with Tax"
        />
        <meta
          property="og:description"
          content="Easily calculate the price including or excluding sales tax with our Sales Tax Calculator. Ideal for shopping, billing, or business use."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/sales-tax-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Sales Tax Calculator",
      "url": "https://www.unitedcalculator.net/finance/sales-tax-calculator",
      "description": "Use our Sales Tax Calculator to find the total price of an item including or excluding tax. Perfect for consumers, online shoppers, and businesses.",
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
          "name": "What is a sales tax calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A sales tax calculator helps you determine the total price of an item including or excluding the sales tax based on a given rate. It’s useful for quick and accurate tax estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Who should use a sales tax calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Anyone making purchases, running a business, or preparing invoices can use a sales tax calculator to determine final costs or reverse-calculate the base price from a total."
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
          "name": "Sales Tax Calculator",
          "item": "https://www.unitedcalculator.net/finance/sales-tax-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Amount ($)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 100"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Tax Rate (%)</label>
            <input
              type="number"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 8"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Sales Tax Breakdown
            </h2>
            <div className="space-y-2 text-lg font-semibold">
              <div className="flex justify-between">
                <span>Tax Amount:</span>
                <span className="text-red-600">${result.taxAmount}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span className="text-green-600">${result.totalAmount}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default SalesTaxCalculator;
