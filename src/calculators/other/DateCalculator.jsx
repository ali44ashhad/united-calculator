import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DateCalculator = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const calculateDateDifference = () => {
    if (!startDate || !endDate) return null;

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start) || isNaN(end)) return null;

    const timeDiff = end.getTime() - start.getTime();
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    const diffInWeeks = Math.floor(dayDiff / 7);
    const remainingDays = dayDiff % 7;

    return {
      totalDays: dayDiff,
      weeks: diffInWeeks,
      remainingDays,
    };
  };

  const result = calculateDateDifference();

  return (
    <>
      <Helmet>
        <title>Date Calculator | Calculate Difference Between Dates</title>
        <meta
          name="description"
          content="Use our Date Calculator to find the difference between two dates or add/subtract days to a date easily."
        />
        <meta
          name="keywords"
          content="date calculator, calculate date difference, add days to date, subtract days from date, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/date-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Date Calculator | Calculate Difference Between Dates"
        />
        <meta
          property="og:description"
          content="Quickly calculate the difference between two dates or add/subtract days using our Date Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/date-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Date Calculator",
  "url": "https://www.unitedcalculator.net/other/date-calculator",
  "description": "Calculate the difference between dates or add/subtract days to a date quickly and easily with our Date Calculator.",
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
      "name": "What is a Date Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Date Calculator helps you calculate the difference between two dates or add/subtract days to a specific date."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Date Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the start and end dates or a date and number of days to add/subtract, and the calculator will provide the result."
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
      "name": "Other Calculators",
      "item": "https://www.unitedcalculator.net/other"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Date Calculator",
      "item": "https://www.unitedcalculator.net/other/date-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Date Difference
            </h2>
            <div className="text-gray-700 text-lg space-y-1">
              <div className="flex justify-between">
                <span>Total Days:</span>
                <span className="font-medium text-blue-600">
                  {result.totalDays} days
                </span>
              </div>
              <div className="flex justify-between">
                <span>Weeks:</span>
                <span>{result.weeks} weeks</span>
              </div>
              <div className="flex justify-between">
                <span>Remaining Days:</span>
                <span>{result.remainingDays} days</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default DateCalculator;
