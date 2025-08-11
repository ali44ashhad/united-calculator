import BasicCalculator from "../calculators/math/BasicCalculator";
import { calculators } from "../data/calculators";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const categories = [...new Set(calculators.map((c) => c.category))];

  // Limit to first 6 calculators
  const topCalculators = calculators.slice(0, 6);

  return (
    <>
      <Helmet>
        <title>
          United Calculator | Use Free Online Calculators for Math, Geometry,
          Finance & More
        </title>
        <meta
          name="description"
          content="United Calculator offers free, accurate, and easy-to-use online calculators for math, geometry, finance, health, and everyday needs. Solve problems instantly with step-by-step results."
        />
        <meta
          name="keywords"
          content="online calculator, math calculator, geometry calculator, finance calculator, health calculator, unit converter, free calculator tools, United Calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unitedcalculator.net" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="United Calculator | Free Online Calculators for Math, Geometry, Finance & More"
        />
        <meta
          property="og:description"
          content="Use United Calculator for quick and accurate calculations in math, geometry, finance, health, and more — all free and online."
        />
        <meta property="og:url" content="https://unitedcalculator.net" />
        <meta
          property="og:image"
          content="https://unitedcalculator.net/images/united-calculator-og.jpg"
        />

        {/* JSON-LD: WebSite */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "United Calculator",
  "url": "https://unitedcalculator.net",
  "description": "United Calculator provides free, accurate calculators for math, geometry, finance, health, and everyday calculations.",
  "publisher": {
    "@type": "Organization",
    "name": "United Calculator",
    "url": "https://unitedcalculator.net"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://unitedcalculator.net/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
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
      "name": "What is United Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "United Calculator is a free online platform that offers accurate and easy-to-use calculators for math, geometry, finance, health, and other daily needs."
      }
    },
    {
      "@type": "Question",
      "name": "Are United Calculator tools free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all calculators on United Calculator are completely free to use with no downloads required."
      }
    },
    {
      "@type": "Question",
      "name": "What types of calculators are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "United Calculator offers calculators for math, geometry, finance, health, unit conversions, and many other categories."
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
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        {/* Categories Section */}

        <section>
          <h1 className="text-3xl font-bold mb-4 text-indigo-700">
            All Categories
          </h1>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/${cat.toLowerCase()}`}
                className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded hover:bg-indigo-200 text-sm"
              >
                {cat}
              </Link>
            ))}
          </div>
        </section>
        <BasicCalculator />
        {/* Top Calculators Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Top Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topCalculators.map((calc) => (
              <Link
                key={calc.id}
                to={`/${calc.category.toLowerCase()}/${calc.id}`}
                className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow"
              >
                <h3 className="font-semibold text-indigo-700">{calc.title}</h3>
                <p className="text-sm text-gray-600">{calc.description}</p>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-6 text-center">
            <Link
              to="/all-calculators"
              className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition"
            >
              View All Calculators →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
