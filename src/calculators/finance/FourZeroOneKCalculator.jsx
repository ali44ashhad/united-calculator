import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const FourZeroOneKCalculator = () => {
  const [annualContribution, setAnnualContribution] = useState("19500");
  const [employerMatch, setEmployerMatch] = useState("50"); // in percentage
  const [salary, setSalary] = useState("60000");
  const [annualReturn, setAnnualReturn] = useState("7");
  const [years, setYears] = useState("30");

  const calculate401k = () => {
    const contribution = parseFloat(annualContribution);
    const matchPercent = parseFloat(employerMatch) / 100;
    const salaryAmt = parseFloat(salary);
    const returnRate = parseFloat(annualReturn) / 100;
    const time = parseFloat(years);

    if (
      isNaN(contribution) ||
      isNaN(matchPercent) ||
      isNaN(salaryAmt) ||
      isNaN(returnRate) ||
      isNaN(time)
    )
      return null;

    const employerMatchAmount =
      Math.min(contribution, salaryAmt * 0.06) * matchPercent;

    let total = 0;
    for (let i = 0; i < time; i++) {
      total = (total + contribution + employerMatchAmount) * (1 + returnRate);
    }

    const totalContribution = (contribution + employerMatchAmount) * time;
    const totalGrowth = total - totalContribution;

    return {
      total: total.toFixed(2),
      totalContribution: totalContribution.toFixed(2),
      totalGrowth: totalGrowth.toFixed(2),
    };
  };

  const result = calculate401k();

  return (
    <>
      <Helmet>
        <title>401(k) Calculator - Estimate Your Retirement Savings</title>
        <meta
          name="description"
          content="Use our 401(k) Calculator to estimate how much you’ll have saved for retirement. Customize your contribution, employer match, and growth rate for accurate projections."
        />
        <meta
          name="keywords"
          content="401k calculator, four zero one k calculator, retirement calculator, 401k retirement savings, investment calculator, employer match calculator, retirement planning tool"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/four-zero-one-k-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="401(k) Calculator - Estimate Your Retirement Savings"
        />
        <meta
          property="og:description"
          content="Plan your retirement with our 401(k) Calculator. Calculate how contributions and employer matches grow your savings over time."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/four-zero-one-k-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "401(k) Calculator",
      "url": "https://www.unitedcalculator.net/finance/four-zero-one-k-calculator",
      "description": "Use this 401(k) Calculator to forecast your retirement savings based on contribution rate, employer match, and expected investment returns.",
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
          "name": "What is a 401(k) calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 401(k) calculator helps you estimate your retirement savings by calculating future value based on contributions, employer match, and investment growth."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is a 401(k) calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It provides a useful estimate based on the inputs you provide, but actual outcomes depend on market performance, contribution consistency, and employer policies."
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
          "name": "401(k) Calculator",
          "item": "https://www.unitedcalculator.net/finance/four-zero-one-k-calculator"
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
              Annual Contribution ($)
            </label>
            <input
              type="number"
              value={annualContribution}
              onChange={(e) => setAnnualContribution(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 19500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Employer Match (%)</label>
            <input
              type="number"
              value={employerMatch}
              onChange={(e) => setEmployerMatch(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 50"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Annual Salary ($)</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 60000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Expected Annual Return (%)
            </label>
            <input
              type="number"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 7"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Years of Investment
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 30"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              401(k) Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Total Contributions:</span>
                <span className="text-yellow-600 font-medium">
                  ${result.totalContribution}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Estimated Growth:</span>
                <span className="text-green-600 font-medium">
                  ${result.totalGrowth}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">
                  Total Value at Retirement:
                </span>
                <span className="text-blue-600">${result.total}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default FourZeroOneKCalculator;
