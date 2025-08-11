import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const AgeCalculator = () => {
  const [dob, setDob] = useState("");
  const [ageResult, setAgeResult] = useState(null);

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAgeResult({ years, months, days });
  };

  return (
    <>
      <Helmet>
        <title>Age Calculator | Calculate Your Exact Age</title>
        <meta
          name="description"
          content="Use our Age Calculator to quickly find your exact age based on your birth date. Perfect for all age-related calculations."
        />
        <meta
          name="keywords"
          content="age calculator, calculate age, birthday calculator, age finder, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/age-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Age Calculator | Calculate Your Exact Age"
        />
        <meta
          property="og:description"
          content="Quickly calculate your exact age using our easy-to-use Age Calculator by entering your birth date."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/age-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Age Calculator",
  "url": "https://www.unitedcalculator.net/other/age-calculator",
  "description": "Calculate your exact age instantly with our Age Calculator by entering your birth date.",
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
      "name": "What is an Age Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Age Calculator determines the exact age of a person based on their birth date and the current date."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Age Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply enter your birth date, and the calculator will instantly show your exact age."
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
      "name": "Age Calculator",
      "item": "https://www.unitedcalculator.net/other/age-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            onClick={calculateAge}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Calculate Age
          </button>
        </div>

        {ageResult && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Your Age
            </h2>
            <p className="text-gray-700 text-lg">
              {ageResult.years} years, {ageResult.months} months,{" "}
              {ageResult.days} days
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default AgeCalculator;
