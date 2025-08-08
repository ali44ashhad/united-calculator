import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const LeaseCalculator = () => {
  const [monthlyPayment, setMonthlyPayment] = useState("300");
  const [leaseTerm, setLeaseTerm] = useState("36");
  const [downPayment, setDownPayment] = useState("2000");

  const totalLeaseCost =
    parseFloat(monthlyPayment || 0) * parseInt(leaseTerm || 0) +
    parseFloat(downPayment || 0);

  return (
    <>
      <Helmet>
        <title>Lease Calculator</title>
        <meta
          name="description"
          content="Use our Lease Calculator to estimate your monthly lease payments based on vehicle price, down payment, residual value, interest rate, and lease term."
        />
        <meta
          name="keywords"
          content="lease calculator, car lease calculator, vehicle lease estimator, monthly lease payment calculator, auto lease calculator, lease payment tool, leasing cost calculator, car financing"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/lease-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lease Calculator" />
        <meta
          property="og:description"
          content="Estimate your monthly vehicle lease payments with our Lease Calculator. Helps you compare leasing options and plan your car financing smartly."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/lease-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Lease Calculator",
      "url": "https://unitedcalculator.net/finance/lease-calculator",
      "description": "Use the Lease Calculator to determine your estimated monthly car lease payments based on cost, interest rate, down payment, and lease duration. Ideal for comparing lease offers.",
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
          "name": "What is a lease calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A lease calculator helps you estimate monthly payments for leasing a car or vehicle based on key inputs like price, interest rate, residual value, and lease term."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a lease calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a lease calculator lets you compare different lease offers and understand the financial commitment before signing a lease agreement."
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
          "name": "Lease Calculator",
          "item": "https://unitedcalculator.net/finance/lease-calculator"
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
              Monthly Lease Payment ($)
            </label>
            <input
              type="number"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Lease Term (months)
            </label>
            <input
              type="number"
              value={leaseTerm}
              onChange={(e) => setLeaseTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="36"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Down Payment ($)</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="2000"
            />
          </div>
        </div>

        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Lease Summary
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Total Lease Cost:</span>
            <span className="text-blue-600">${totalLeaseCost.toFixed(2)}</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default LeaseCalculator;
