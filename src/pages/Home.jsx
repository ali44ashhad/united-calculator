import { calculators } from "../data/calculators";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    const counts = new Map();
    for (const c of calculators) {
      counts.set(c.category, (counts.get(c.category) || 0) + 1);
    }
    return Array.from(counts.entries())
      .map(([name, count]) => ({
        name,
        count,
        href: `/${name.toLowerCase()}`,
      }))
      .sort((a, b) => b.count - a.count);
  }, []);

  const trending = useMemo(() => {
    const picks = [
      "Percentage Calculator",
      "Compound Interest Calculator",
      "BMI Calculator",
      "Scientific Calculator",
    ];
    const out = [];
    for (const t of picks) {
      const match = calculators.find(
        (c) => c.title.toLowerCase() === t.toLowerCase()
      );
      if (match) out.push(match);
    }
    return out.slice(0, 4);
  }, []);

  const popular = useMemo(() => {
    const want = ["mortgage", "bmi", "scientific"];
    const out = [];
    for (const w of want) {
      const match = calculators.find((c) =>
        c.title.toLowerCase().includes(w)
      );
      if (match) out.push(match);
    }
    return out;
  }, []);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return calculators
      .filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query]);

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

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white pt-24 pb-16 px-6">
          <div className="max-w-[1280px] mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-6">
              200+ Specialized Tools at Your Fingertips
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
              Precision-engineered calculators for finance, science, and
              everyday life. Fast, accurate, and completely free.
            </p>

            <div className="max-w-3xl mx-auto relative">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-400 text-3xl">
                  search
                </span>
              </div>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-6 rounded-full border-2 border-gray-100 shadow-xl focus:border-primary focus:ring-0 text-xl outline-none transition-all duration-300"
                placeholder="Find your calculator (e.g., Mortgage, BMI, Square Root)"
                type="text"
              />

              {searchResults.length > 0 && (
                <div className="mt-4 text-left bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                  {searchResults.map((c) => (
                    <Link
                      key={`${c.category}-${c.id}`}
                      to={`/${c.category.toLowerCase()}/${c.id}`}
                      className="block px-5 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-semibold text-gray-900">
                        {c.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {c.category} · {c.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest block w-full mb-2">
                Trending Searches
              </span>
              {trending.map((c) => (
                <Link
                  key={c.id}
                  to={`/${c.category.toLowerCase()}/${c.id}`}
                  className="px-4 py-1.5 rounded-full border border-outline-variant text-sm font-medium hover:bg-surface-container transition-colors"
                >
                  {c.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Categories Bento Grid */}
        <section className="py-16 px-6 max-w-[1280px] mx-auto">
          <div className="flex justify-between items-end mb-8 gap-6 flex-wrap">
            <div>
              <h2 className="text-2xl font-semibold text-on-surface">
                Explore Categories
              </h2>
              <p className="text-on-surface-variant mt-1">
                Specialized tools organized for efficiency.
              </p>
            </div>
            <Link
              to="/all-calculators"
              className="text-primary font-semibold hover:underline underline-offset-4 flex items-center gap-1"
            >
              View All Calculators{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {categories.slice(0, 2).map((cat, idx) => (
              <Link
                key={cat.name}
                to={cat.href}
                className={[
                  "col-span-12 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all cursor-pointer group",
                  idx === 0
                    ? "md:col-span-8 bg-surface-container-low"
                    : "md:col-span-4 bg-surface-container-highest",
                ].join(" ")}
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {cat.name === "Finance"
                        ? "account_balance"
                        : cat.name === "Health"
                        ? "monitor_heart"
                        : "functions"}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-primary">
                    {cat.count} Tools
                  </span>
                </div>
                <div className="mt-12">
                  <h3 className="text-lg font-semibold mb-2">{cat.name}</h3>
                  <p className="text-on-surface-variant mb-6 max-w-md">
                    Browse {cat.name.toLowerCase()} calculators curated for
                    speed and accuracy.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {calculators
                      .filter((c) => c.category === cat.name)
                      .slice(0, 3)
                      .map((c) => (
                        <span
                          key={c.id}
                          className="bg-white/50 px-3 py-1 rounded text-sm border border-outline-variant"
                        >
                          {c.title.replace(" Calculator", "")}
                        </span>
                      ))}
                  </div>
                </div>
              </Link>
            ))}

            <div className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all">
              <span className="material-symbols-outlined text-secondary text-3xl">
                architecture
              </span>
              <h3 className="text-lg font-semibold mt-4">Geometry</h3>
              <p className="text-on-surface-variant text-sm mt-2">
                Angles, shapes, areas, and geometry formulas.
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-6">
              <Link
                to="/math"
                className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-secondary text-3xl">
                  functions
                </span>
                <h3 className="text-lg font-semibold mt-4">Math</h3>
                <p className="text-on-surface-variant text-sm mt-2">
                  From basics to advanced equations.
                </p>
              </Link>
              <Link
                to="/other"
                className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-secondary text-3xl">
                  straighten
                </span>
                <h3 className="text-lg font-semibold mt-4">Other</h3>
                <p className="text-on-surface-variant text-sm mt-2">
                  Everyday utilities and conversions.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Tools Section */}
        <section className="py-16 px-6 bg-surface-container-lowest">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-semibold text-on-surface">
                Popular Tools
              </h2>
              <p className="text-on-surface-variant">
                The most frequently used calculators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {popular.map((c) => (
                <Link
                  key={c.id}
                  to={`/${c.category.toLowerCase()}/${c.id}`}
                  className="bg-white border border-outline-variant p-8 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform group cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded">
                      <span className="material-symbols-outlined">
                        {c.title.toLowerCase().includes("mortgage")
                          ? "house"
                          : c.title.toLowerCase().includes("bmi")
                          ? "person"
                          : "calculate"}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {c.title}
                    </h4>
                  </div>
                  <p className="text-on-surface-variant mb-6">
                    {c.description}
                  </p>
                  <div className="flex items-center text-primary font-semibold text-sm uppercase tracking-wider">
                    Calculate Now{" "}
                    <span className="material-symbols-outlined ml-2 text-sm">
                      chevron_right
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 px-6">
          <div className="max-w-[1280px] mx-auto bg-primary rounded-2xl overflow-hidden relative">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10 p-12 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Calculations You Can Trust
                </h2>
                <p className="text-blue-100 text-lg">
                  Fast, accurate, and free calculators across every major
                  category.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <Link
                  to="/all-calculators"
                  className="inline-block bg-white text-primary px-10 py-4 rounded font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
                >
                  Explore All Tools
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
