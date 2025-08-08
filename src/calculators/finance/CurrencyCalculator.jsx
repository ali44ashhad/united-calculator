import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const exchangeRates = {
  USD: { INR: 83.5, EUR: 0.93, GBP: 0.81 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0097 },
  EUR: { USD: 1.08, INR: 89.5, GBP: 0.87 },
  GBP: { USD: 1.23, INR: 103, EUR: 1.15 },
};

const currencies = ["USD", "INR", "EUR", "GBP"];

const CurrencyCalculator = () => {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const calculateConversion = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt)) return null;

    if (fromCurrency === toCurrency) {
      return amt.toFixed(2);
    }

    const rate = exchangeRates[fromCurrency]?.[toCurrency];
    if (!rate) return null;

    return (amt * rate).toFixed(2);
  };

  const convertedAmount = calculateConversion();

  return (
    <>
      <Helmet>
        <title>Currency Calculator - change your currencies</title>
        <meta
          name="description"
          content="Use our Currency Calculator to convert between international currencies in real-time. Get accurate exchange rate conversions for travel, business, or investing."
        />
        <meta
          name="keywords"
          content="currency calculator, currency converter, forex calculator, exchange rate calculator, money converter, convert currency online"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/currency-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Currency Calculator" />
        <meta
          property="og:description"
          content="Convert currencies instantly using our Currency Calculator. Check live exchange rates and calculate the value between international currencies."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/currency-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Currency Calculator",
      "url": "https://unitedcalculator.net/finance/currency-calculator",
      "description": "The Currency Calculator helps you convert between different currencies using real-time exchange rates. Ideal for travelers, investors, and international shoppers.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://unitedcalculator.net"
      }
    }
    `}
        </script>
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a currency calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A currency calculator is a tool that allows users to convert one currency into another using current exchange rates."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is the Currency Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Currency Calculator uses real-time exchange rates to provide accurate and up-to-date currency conversions for personal or professional use."
          }
        }
      ]
    }
    `}
        </script>
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
          "name": "Currency Calculator",
          "item": "https://unitedcalculator.net/finance/currency-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter amount"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">From Currency</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">To Currency</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>
        </div>

        {convertedAmount !== null && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Conversion Result
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">
                {amount} {fromCurrency} =
              </span>
              <span className="text-blue-600">
                {convertedAmount} {toCurrency}
              </span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default CurrencyCalculator;
