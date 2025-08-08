import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const IRRCalculator = () => {
  const [cashFlowsInput, setCashFlowsInput] = useState(
    "-10000, 2000, 3000, 4000, 5000"
  );

  const calculateIRR = (cashFlows, guess = 0.1) => {
    const maxIterations = 1000;
    const precision = 1e-6;
    let rate = guess;

    for (let i = 0; i < maxIterations; i++) {
      let npv = 0;
      let derivative = 0;

      for (let t = 0; t < cashFlows.length; t++) {
        npv += cashFlows[t] / Math.pow(1 + rate, t);
        derivative -= (t * cashFlows[t]) / Math.pow(1 + rate, t + 1);
      }

      const newRate = rate - npv / derivative;
      if (Math.abs(newRate - rate) < precision) {
        return newRate * 100;
      }

      rate = newRate;
    }

    return null;
  };

  const parseCashFlows = () => {
    return cashFlowsInput
      .split(",")
      .map((val) => parseFloat(val.trim()))
      .filter((val) => !isNaN(val));
  };

  const cashFlows = parseCashFlows();
  const irr = cashFlows.length > 1 ? calculateIRR(cashFlows) : null;

  return (
    <>
      <Helmet>
        <title>IRR Calculator</title>
        <meta
          name="description"
          content="Use our IRR Calculator to determine the internal rate of return on your investments or projects. Ideal for evaluating profitability and comparing investment opportunities."
        />
        <meta
          name="keywords"
          content="IRR calculator, internal rate of return calculator, investment IRR, project IRR calculator, calculate IRR, financial analysis tool, IRR formula, rate of return calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/irr-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IRR Calculator" />
        <meta
          property="og:description"
          content="Calculate internal rate of return (IRR) for your investment or project with our IRR Calculator. Useful for financial planning and investment decision-making."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/irr-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "IRR Calculator",
      "url": "https://unitedcalculator.net/finance/irr-calculator",
      "description": "Use the IRR Calculator to determine the internal rate of return for any investment or cash flow project. Ideal for evaluating financial feasibility and investment performance.",
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
          "name": "What is an IRR calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An IRR calculator helps calculate the internal rate of return of an investment or project by analyzing cash inflows and outflows over time."
          }
        },
        {
          "@type": "Question",
          "name": "Why is IRR important in investment analysis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IRR is a key metric used to evaluate the profitability of investments. It helps compare multiple projects by calculating the expected rate of return."
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
          "name": "IRR Calculator",
          "item": "https://unitedcalculator.net/finance/irr-calculator"
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
              Enter Cash Flows (comma separated)
            </label>
            <input
              type="text"
              value={cashFlowsInput}
              onChange={(e) => setCashFlowsInput(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="-10000, 2000, 3000, 4000, 5000"
            />
          </div>
        </div>

        {irr !== null ? (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Internal Rate of Return (IRR)
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">IRR:</span>
              <span className="text-green-600">{irr.toFixed(2)}%</span>
            </div>
          </section>
        ) : (
          <p className="text-red-600 mt-4">
            Please enter at least two valid numeric cash flows to calculate IRR.
          </p>
        )}
      </div>
    </>
  );
};

export default IRRCalculator;
