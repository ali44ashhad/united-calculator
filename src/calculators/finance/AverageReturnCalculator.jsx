import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const AverageReturnCalculator = () => {
  const DEFAULTS = {
    returns: ["10", "12", "-5"],
    newReturn: "",
  };

  const [returns, setReturns] = useState(DEFAULTS.returns);
  const [newReturn, setNewReturn] = useState(DEFAULTS.newReturn);

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
          href="https://www.unitedcalculator.net/finance/average-return-calculator"
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
          content="https://www.unitedcalculator.net/finance/average-return-calculator"
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
      "url": "https://www.unitedcalculator.net/finance/average-return-calculator",
      "description": "Use the Average Return Calculator to measure the average rate of return on your investments over a specific time period. Ideal for mutual funds, stocks, and portfolios.",
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
          "name": "Average Return Calculator",
          "item": "https://www.unitedcalculator.net/finance/average-return-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Add Return</label>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="number"
                  value={newReturn}
                  onChange={(e) => setNewReturn(e.target.value)}
                  placeholder="e.g. 15"
                  className="w-full px-4 py-3 pr-12 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                  %
                </span>
              </div>
              <button
                type="button"
                onClick={addReturn}
                className="bg-primary hover:bg-primary-container text-white px-8 py-3 rounded-lg font-h3 text-h3 shadow-md active:scale-95 transition-all"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-lg font-h3 text-h3 shadow-md active:scale-95 transition-all"
            >
              Calculate Now
            </button>
            <button
              type="button"
              onClick={() => {
                setReturns(DEFAULTS.returns);
                setNewReturn(DEFAULTS.newReturn);
              }}
              className="text-secondary font-medium px-4 py-2 hover:bg-surface-container transition-colors rounded-lg"
            >
              Reset
            </button>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              lock
            </span>
            <span className="text-sm">Secure and private calculation</span>
          </div>
        </div>

        {returns.length > 0 && (
          <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
            <h2 className="font-h3 text-h3 text-on-surface mb-6">Returns</h2>
            <div className="flex flex-wrap gap-3">
              {returns.map((r, i) => (
                <div
                  key={`${r}-${i}`}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-outline-variant bg-white"
                >
                  <span className="text-on-surface font-medium">{r}%</span>
                  <button
                    type="button"
                    onClick={() => removeReturn(i)}
                    className="text-on-surface-variant hover:text-error transition-colors"
                    aria-label={`Remove return ${r}%`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      close
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Average Return Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total Periods</span>
              <span className="font-code-num text-code-num">{returns.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Average Return</span>
              <span className="font-code-num text-code-num text-primary">
                {returns.length > 0 ? `${result}%` : "—"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AverageReturnCalculator;
