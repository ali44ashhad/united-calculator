import { useState } from "react";
import { calculators } from "../data/calculators";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const AllCalculators = () => {
  const [query, setQuery] = useState("");

  const filtered = calculators.filter((calc) =>
    calc.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>
          All Calculators | Browse Free Online Math, Geometry, Finance & More
        </title>
        <meta
          name="description"
          content="Browse and search all free calculators on United Calculator. Explore tools for math, geometry, finance, health, unit conversions, and more — all in one place."
        />
        <meta
          name="keywords"
          content="all calculators, online calculators, math calculators, geometry calculators, finance calculators, health calculators, unit converters, free calculator tools"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/all-calculators"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="All Calculators | Browse Free Online Math, Geometry, Finance & More"
        />
        <meta
          property="og:description"
          content="Explore our complete list of free calculators for math, geometry, finance, health, and more on United Calculator."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/all-calculators"
        />
        <meta
          property="og:image"
          content="https://unitedcalculator.net/images/united-calculator-og.jpg"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "All Calculators",
  "url": "https://unitedcalculator.net/all-calculators",
  "description": "Browse all calculators on United Calculator including math, geometry, finance, health, and more.",
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
      "name": "What types of calculators are available on United Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "United Calculator offers calculators for math, geometry, finance, health, conversions, and more."
      }
    },
    {
      "@type": "Question",
      "name": "Are all the calculators free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all calculators are free to use without any downloads or sign-ups."
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
      "name": "All Calculators",
      "item": "https://unitedcalculator.net/all-calculators"
    }
  ]
}
          `}
        </script>
      </Helmet>
      <div>
        <h1 className="text-3xl font-bold mb-4 text-indigo-700">
          All Calculators
        </h1>

        <input
          type="text"
          placeholder="Search calculators..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((calc) => (
            <Link
              key={calc.id}
              to={`/${calc.category.toLowerCase()}/${calc.id}`}
              className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow"
            >
              <h3 className="font-semibold text-indigo-700">{calc.title}</h3>
              <p className="text-sm text-gray-600">{calc.description}</p>
              <p className="text-xs text-gray-400 mt-1">
                Category: {calc.category}
              </p>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-gray-500 mt-6">No calculators found.</p>
        )}
      </div>
    </>
  );
};

export default AllCalculators;
