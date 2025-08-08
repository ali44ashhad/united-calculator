import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const SocialSecurityCalculator = () => {
  const [currentAge, setCurrentAge] = useState("30");
  const [retirementAge, setRetirementAge] = useState("67");
  const [monthlyBenefit, setMonthlyBenefit] = useState("1500");

  const calculate = () => {
    const ageNow = parseInt(currentAge);
    const ageRetire = parseInt(retirementAge);
    const benefit = parseFloat(monthlyBenefit);

    if (
      isNaN(ageNow) ||
      isNaN(ageRetire) ||
      isNaN(benefit) ||
      ageNow >= ageRetire
    )
      return null;

    const yearsToCollect = 85 - ageRetire; // Assuming life expectancy of 85
    const totalBenefit = yearsToCollect * 12 * benefit;

    return {
      yearsToCollect,
      totalBenefit: totalBenefit.toFixed(2),
    };
  };

  const result = calculate();

  return (
    <>
      <Helmet>
        <title>
          Social Security Calculator | Estimate Your Retirement Benefits
        </title>
        <meta
          name="description"
          content="Use our Social Security Calculator to estimate your monthly retirement benefits based on age, income, and filing year. Plan your retirement with confidence and clarity."
        />
        <meta
          name="keywords"
          content="social security calculator, social security benefits calculator, retirement benefits estimator, social security estimate, SSA calculator, social security retirement calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/social-security-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Social Security Calculator | Estimate Your Retirement Benefits"
        />
        <meta
          property="og:description"
          content="Estimate your Social Security retirement benefits using our accurate calculator. Enter your earnings and age to get your projected monthly income from SSA."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/social-security-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Social Security Calculator",
      "url": "https://www.unitedcalculator.net/finance/social-security-calculator",
      "description": "This Social Security Calculator helps estimate your monthly retirement benefits based on your lifetime earnings and retirement age. Plan for your future with more confidence.",
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
          "name": "What is a Social Security Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Social Security Calculator estimates the retirement benefits you may receive from the Social Security Administration (SSA) based on your income history and retirement age."
          }
        },
        {
          "@type": "Question",
          "name": "When should I claim Social Security benefits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can begin claiming Social Security benefits as early as age 62, but the amount increases the longer you wait, up to age 70. Use the calculator to see how timing affects your benefits."
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
          "name": "Social Security Calculator",
          "item": "https://www.unitedcalculator.net/finance/social-security-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Current Age</label>
            <input
              type="number"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 30"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Retirement Age</label>
            <input
              type="number"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 67"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Expected Monthly Benefit ($)
            </label>
            <input
              type="number"
              value={monthlyBenefit}
              onChange={(e) => setMonthlyBenefit(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1500"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Estimated Social Security
            </h2>
            <div className="space-y-2 text-lg font-semibold">
              <div className="flex justify-between">
                <span>Years Receiving Benefits:</span>
                <span className="text-blue-600">
                  {result.yearsToCollect} years
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total Estimated Benefit:</span>
                <span className="text-green-600">${result.totalBenefit}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default SocialSecurityCalculator;
