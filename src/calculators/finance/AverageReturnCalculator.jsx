import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const AverageReturnCalculator = () => {
  const [returns, setReturns] = useState(["10", "12", "-5"]);
  const [newReturn, setNewReturn] = useState("");

  const addReturn = () => {
    if (newReturn !== "" && !isNaN(newReturn)) {
      setReturns([...returns, newReturn]);
      setNewReturn("");
    }
  };

  const removeReturn = (index) => {
    const updated = [...returns];
    updated.splice(index, 1);
    setReturns(updated);
  };

  const calculateAverageReturn = () => {
    const numericReturns = returns
      .map((r) => parseFloat(r))
      .filter((r) => !isNaN(r));
    const sum = numericReturns.reduce((acc, curr) => acc + curr, 0);
    const avg = numericReturns.length > 0 ? sum / numericReturns.length : 0;
    return avg.toFixed(2);
  };

  const result = calculateAverageReturn();

  return (
    <>
      <Helmet>
        <title>
          Average Return Calculator - Calculate Average Investment Returns
        </title>
        <meta
          name="description"
          content="Use our Average Return Calculator to determine the mean return on your investments over multiple years. Ideal for evaluating past performance and making informed investment decisions."
        />
        <meta
          name="keywords"
          content="average return calculator, investment return calculator, calculate average returns, mean return calculator, annual return calculator, average return formula, average rate of return calculator, stock return calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/average-return-calculator"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Average Return Calculator - Calculate Average Investment Returns"
        />
        <meta
          property="og:description"
          content="Calculate your average investment return over time using our Average Return Calculator. Useful for analyzing long-term performance of mutual funds, stocks, and portfolios."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/average-return-calculator"
        />
        {/* Twitter */}
        <meta
          name="twitter:title"
          content="Average Return Calculator - Investment Performance Tool"
        />
        <meta
          name="twitter:description"
          content="Quickly find the average annual return of your investments with this easy-to-use calculator. Ideal for tracking portfolio performance."
        />
        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Average Return Calculator",
      "url": "https://unitedcalculator.net/finance/average-return-calculator",
      "description": "Use the Average Return Calculator to measure the average rate of return on your investments over a specific time period. Ideal for mutual funds, stocks, and portfolios.",
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
          "name": "What is an average return calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An average return calculator helps you calculate the mean return of an investment over a period of years, allowing you to analyze past performance."
          }
        },
        {
          "@type": "Question",
          "name": "When should I use an average return calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use it when evaluating historical returns on investments like mutual funds, stocks, or portfolios to assess long-term performance."
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
          "name": "Average Return Calculator",
          "item": "https://unitedcalculator.net/finance/average-return-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Add Return (%)</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={newReturn}
                onChange={(e) => setNewReturn(e.target.value)}
                placeholder="e.g. 15"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                onClick={addReturn}
                className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
              >
                Add
              </button>
            </div>
          </div>

          {returns.length > 0 && (
            <div>
              <label className="block mb-1 font-medium">Returns List</label>
              <ul className="space-y-1">
                {returns.map((r, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center text-gray-700 bg-gray-100 px-3 py-1 rounded"
                  >
                    {r}%
                    <button
                      onClick={() => removeReturn(i)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {returns.length > 0 && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Average Return Summary
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Total Periods:</span>
                <span className="font-medium text-gray-900">
                  {returns.length}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Average Return:</span>
                <span className="text-blue-600">{result}%</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default AverageReturnCalculator;
