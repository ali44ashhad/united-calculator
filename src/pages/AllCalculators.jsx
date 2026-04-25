import { useEffect, useMemo, useState } from "react";
import { calculators } from "../data/calculators";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const AllCalculators = () => {
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q") || "";
    setQuery(q);
  }, [location.search]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return calculators;
    return calculators.filter(
      (calc) =>
        calc.title.toLowerCase().includes(q) ||
        calc.description.toLowerCase().includes(q) ||
        calc.category.toLowerCase().includes(q)
    );
  }, [query]);

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
      <main className="max-w-[1280px] mx-auto w-full px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-2">
            All Calculators
          </h1>
          <p className="text-on-surface-variant">
            Browse and search across every tool in the directory.
          </p>
        </div>

        <div className="relative mb-6">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            search
          </span>
          <input
            type="text"
            placeholder="Search calculators..."
            value={query}
            onChange={(e) => {
              const v = e.target.value;
              setQuery(v);
              const params = new URLSearchParams(location.search);
              if (v.trim()) params.set("q", v);
              else params.delete("q");
              navigate(`?${params.toString()}`, { replace: true });
            }}
            className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((calc) => (
            <Link
              key={calc.id}
              to={`/${calc.category.toLowerCase()}/${calc.id}`}
              className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <h3 className="font-semibold text-on-surface group-hover:text-primary transition-colors mb-2">
                {calc.title}
              </h3>
              <p className="text-on-surface-variant mb-4 flex-grow">
                {calc.description}
              </p>
              <span className="text-xs font-semibold bg-surface-container px-2 py-1 rounded text-primary w-fit">
                {calc.category.toUpperCase()}
              </span>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-on-surface-variant mt-6">No calculators found.</p>
        )}
      </main>
    </>
  );
};

export default AllCalculators;
