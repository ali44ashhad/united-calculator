import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/circle-calculator";

const DEFAULTS = {
  radius: "5",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeCircle = (radius) => {
  if (radius.trim() === "") {
    return null;
  }

  const r = parseFloat(radius);

  if (isNaN(r)) {
    return { error: "Enter a valid number for radius." };
  }

  if (r < 0) {
    return { error: "Radius cannot be negative." };
  }

  const diameter = 2 * r;
  const circumference = 2 * Math.PI * r;
  const area = Math.PI * r * r;

  return {
    radius: r,
    diameter,
    circumference,
    area,
    formulaArea: "A = π × r²",
    formulaCircumference: "C = 2π × r",
    formulaDiameter: "d = 2r",
  };
};

const fmtLen = (n) =>
  parseFloat(n.toFixed(6)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "How do you calculate the area of a circle?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Area = π × radius². Enter radius r; the calculator returns area in square units of r.",
    },
  },
  {
    "@type": "Question",
    name: "How do you find circumference from radius?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Circumference C = 2π × r, the distance around the circle. Diameter d = 2r is also shown.",
    },
  },
  {
    "@type": "Question",
    name: "What input does this circle calculator need?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Radius only (distance from center to edge). Diameter, circumference, and area are computed from r.",
    },
  },
  {
    "@type": "Question",
    name: "What units does the circle calculator use?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Use any linear unit for radius (cm, m, in, ft). Area is square units; circumference matches the radius unit.",
    },
  },
  {
    "@type": "Question",
    name: "Can I enter diameter instead of radius?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This page takes radius. Divide diameter by 2 first, or use the result diameter row to check d = 2r.",
    },
  },
  {
    "@type": "Question",
    name: "What value of π is used?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "JavaScript Math.PI (π ≈ 3.141592653589793) for area and circumference.",
    },
  },
];

const CircleCalculator = () => {
  const [radius, setRadius] = useState(DEFAULTS.radius);

  const result = computeCircle(radius);

  const reset = () => {
    setRadius(DEFAULTS.radius);
  };

  return (
    <>
      <Helmet>
        <title>
          Circle Calculator - Area, Circumference &amp; Diameter from Radius
        </title>
        <meta
          name="description"
          content="Circle area (πr²), circumference (2πr), and diameter (2r) from radius. One input—results in matching linear and square units."
        />
        <meta
          name="keywords"
          content="circle calculator, area of a circle, circumference calculator, diameter from radius, πr squared, circle formulas"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Circle Calculator" />
        <meta
          property="og:description"
          content="Area, circumference, and diameter from radius."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Circle Calculator" />
        <meta
          name="twitter:description"
          content="πr² area and 2πr circumference online."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Circle Calculator",
            url: PAGE_URL,
            description:
              "Calculate circle area, circumference, and diameter from radius.",
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Circle Calculator",
            url: PAGE_URL,
            description: "Web tool for circle measurements from radius.",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Circle Formulas: Area, Circumference, Diameter",
            description: "How to compute circle properties from radius.",
            author: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
            inLanguage: "en",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_SCHEMA,
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.unitedcalculator.net",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Math Calculators",
                item: "https://www.unitedcalculator.net/math",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Circle Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Radius (r)
            </label>
            <input
              type="number"
              min="0"
              step="any"
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              placeholder="e.g. 5"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Distance from center to edge. Diameter, circumference, and area
              are derived from r.
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-lg font-h3 text-h3 shadow-md active:scale-95 transition-all"
            >
              Calculate Now
            </button>
            <button
              type="button"
              onClick={reset}
              className="text-secondary font-medium px-4 py-2 hover:bg-surface-container transition-colors rounded-lg"
            >
              Reset
            </button>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              lock
            </span>
            <span className="text-sm">Secure and private calculation</span>
          </div>
        </div>

        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Circle properties summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Area</span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error
                  ? `${fmtLen(result.area)} sq units`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Circumference</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtLen(result.circumference)} units`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Diameter</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtLen(result.diameter)} units`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Radius used</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtLen(result.radius)} units`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Area formula</span>
              <span className="font-code-num text-code-num text-sm">
                {result && !result.error ? result.formulaArea : "A = π × r²"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Circumference formula</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error
                  ? result.formulaCircumference
                  : "C = 2π × r"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formulaDiameter}. Linear units match radius; area is square units.`
                : "Enter radius to compute circle area, circumference, and diameter."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CircleCalculator;
