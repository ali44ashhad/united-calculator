import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DayCounter = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const calculateDays = () => {
    if (!startDate || !endDate) return null;

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (end < start)
      return { days: 0, error: "End date must be after start date." };

    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return { days: diffDays };
  };

  const result = calculateDays();

  return (
    <>
      <Helmet>
        <title>Day Counter | Calculate Number of Days Between Dates</title>
        <meta
          name="description"
          content="Use our Day Counter to quickly calculate the number of days between two dates. Perfect for tracking durations and deadlines."
        />
        <meta
          name="keywords"
          content="day counter, calculate days between dates, date difference calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/day-counter"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Day Counter | Calculate Number of Days Between Dates"
        />
        <meta
          property="og:description"
          content="Quickly find the number of days between two dates using our easy-to-use Day Counter."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/day-counter"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Day Counter",
  "url": "https://www.unitedcalculator.net/other/day-counter",
  "description": "Calculate the number of days between two dates quickly and accurately with our Day Counter tool.",
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
      "name": "What is a Day Counter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Day Counter calculates the number of days between two specified dates."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Day Counter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the start and end dates, and the Day Counter will display the number of days between them."
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
      "name": "Day Counter",
      "item": "https://www.unitedcalculator.net/other/day-counter"
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
              Day Counter Result
            </h2>

            {result.error ? (
              <p className="text-red-600 font-medium">{result.error}</p>
            ) : (
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Days:</span>
                <span className="text-blue-600">{result.days} Days</span>
              </div>
            )}
          </section>
        )}
      </div>
    </>
  );
};

export default DayCounter;
