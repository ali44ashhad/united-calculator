import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DayOfTheWeekCalculator = () => {
  const [inputDate, setInputDate] = useState("");

  const calculateDayOfWeek = () => {
    if (!inputDate) return null;

    const date = new Date(inputDate);
    const options = { weekday: "long" };
    const dayOfWeek = date.toLocaleDateString("en-US", options);

    return dayOfWeek;
  };

  const result = calculateDayOfWeek();

  return (
    <>
      <Helmet>
        <title>Day Of The Week Calculator | Find the Day for Any Date</title>
        <meta
          name="description"
          content="Use our Day Of The Week Calculator to find out which day of the week falls on any given date quickly and easily."
        />
        <meta
          name="keywords"
          content="day of the week calculator, find day for date, weekday calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/day-of-the-week-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Day Of The Week Calculator | Find the Day for Any Date"
        />
        <meta
          property="og:description"
          content="Quickly find the day of the week for any date using our easy-to-use Day Of The Week Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/day-of-the-week-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Day Of The Week Calculator",
  "url": "https://www.unitedcalculator.net/other/day-of-the-week-calculator",
  "description": "Find out the day of the week for any given date quickly and easily with our Day Of The Week Calculator.",
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
      "name": "What is a Day Of The Week Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Day Of The Week Calculator helps you determine the weekday for any given date."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Day Of The Week Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter any date, and the calculator will instantly show the day of the week it falls on."
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
      "name": "Day Of The Week Calculator",
      "item": "https://www.unitedcalculator.net/other/day-of-the-week-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Select a Date</label>
            <input
              type="date"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Day of the Week
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">It falls on:</span>
              <span className="text-blue-600">{result}</span>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default DayOfTheWeekCalculator;
