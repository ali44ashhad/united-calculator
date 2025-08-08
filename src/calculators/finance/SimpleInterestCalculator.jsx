import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState("1000");
  const [rate, setRate] = useState("5");
  const [time, setTime] = useState("2");

  const calculateInterest = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);

    if (isNaN(P) || isNaN(R) || isNaN(T)) return null;

    const interest = (P * R * T) / 100;
    const total = P + interest;

    return {
      interest: interest.toFixed(2),
      total: total.toFixed(2),
    };
  };

  const result = calculateInterest();

  return (
    <>
      <Helmet>
        <title>
          Simple Interest Calculator | Calculate Interest on Principal
        </title>
        <meta
          name="description"
          content="Use our Simple Interest Calculator to calculate interest on your principal amount over time. Just enter principal, rate, and time to get quick and accurate results."
        />
        <meta
          name="keywords"
          content="simple interest calculator, interest calculator, principal interest calculator, SI calculator, loan interest calculator, bank interest calculator, simple interest formula"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/simple-interest-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Simple Interest Calculator | Calculate Interest on Principal"
        />
        <meta
          property="og:description"
          content="Quickly calculate simple interest using our easy-to-use Simple Interest Calculator. Input the principal, rate of interest, and time period to get your result instantly."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/simple-interest-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Simple Interest Calculator",
      "url": "https://unitedcalculator.net/finance/simple-interest-calculator",
      "description": "This Simple Interest Calculator allows users to compute the interest on a principal amount using the basic SI formula: (P × R × T)/100. Perfect for students, borrowers, and savers.",
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
          "name": "What is simple interest?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simple interest is a way of calculating interest on a principal amount using the formula (P × R × T)/100, where P is the principal, R is the rate of interest, and T is the time."
          }
        },
        {
          "@type": "Question",
          "name": "How does a simple interest calculator work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A simple interest calculator takes your principal amount, interest rate, and time period as input and uses the SI formula to compute the total interest earned or payable."
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
          "name": "Simple Interest Calculator",
          "item": "https://unitedcalculator.net/finance/simple-interest-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Principal Amount</label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Rate of Interest (%)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Time Period (years)
            </label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 2"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Result</h2>
            <div className="space-y-2 text-lg font-semibold">
              <div className="flex justify-between">
                <span>Simple Interest:</span>
                <span className="text-blue-600">₹{result.interest}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span className="text-green-600">₹{result.total}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default SimpleInterestCalculator;
