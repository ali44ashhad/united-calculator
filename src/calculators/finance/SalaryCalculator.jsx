import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const SalaryCalculator = () => {
  const [hourlyRate, setHourlyRate] = useState("25");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [weeksPerYear, setWeeksPerYear] = useState("52");

  const calculateSalary = () => {
    const rate = parseFloat(hourlyRate);
    const hours = parseFloat(hoursPerWeek);
    const weeks = parseFloat(weeksPerYear);

    if (isNaN(rate) || isNaN(hours) || isNaN(weeks)) return null;

    const weekly = rate * hours;
    const monthly = (weekly * weeks) / 12;
    const annual = weekly * weeks;

    return {
      weekly: weekly.toFixed(2),
      monthly: monthly.toFixed(2),
      annual: annual.toFixed(2),
    };
  };

  const result = calculateSalary();

  return (
    <>
      <Helmet>
        <title>Salary Calculator | Monthly & Annual Income Estimator</title>
        <meta
          name="description"
          content="Use our Salary Calculator to convert your hourly, daily, weekly, or monthly pay into an annual salary. Estimate income, tax, and take-home pay accurately."
        />
        <meta
          name="keywords"
          content="salary calculator, monthly salary calculator, annual income calculator, hourly to salary calculator, paycheck calculator, gross salary calculator, income estimator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/salary-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Salary Calculator | Monthly & Annual Income Estimator"
        />
        <meta
          property="og:description"
          content="Convert your hourly, weekly, or monthly pay to yearly income with our Salary Calculator. Quickly estimate gross salary, deductions, and take-home pay."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/salary-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Salary Calculator",
      "url": "https://www.unitedcalculator.net/finance/salary-calculator",
      "description": "Our Salary Calculator helps you estimate your monthly and annual income from hourly, daily, weekly, or monthly wages. Great for employees, freelancers, and job seekers.",
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
          "name": "What is a salary calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A salary calculator helps you estimate your income over different time periods—hourly, weekly, monthly, and annually—based on your pay rate and hours worked."
          }
        },
        {
          "@type": "Question",
          "name": "Who should use a salary calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Employees, freelancers, and job seekers can use a salary calculator to understand how their wages translate into monthly and yearly earnings."
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
          "name": "Salary Calculator",
          "item": "https://www.unitedcalculator.net/finance/salary-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Hourly Rate ($)</label>
            <input
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 25"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Hours per Week</label>
            <input
              type="number"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 40"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Weeks per Year</label>
            <input
              type="number"
              value={weeksPerYear}
              onChange={(e) => setWeeksPerYear(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 52"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Salary Breakdown
            </h2>
            <div className="space-y-2 text-lg font-semibold">
              <div className="flex justify-between">
                <span>Weekly Salary:</span>
                <span className="text-blue-600">${result.weekly}</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly Salary:</span>
                <span className="text-green-600">${result.monthly}</span>
              </div>
              <div className="flex justify-between">
                <span>Annual Salary:</span>
                <span className="text-purple-600">${result.annual}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default SalaryCalculator;
