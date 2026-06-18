import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/slope-calculator";

const DEFAULTS = {
  x1: "0",
  y1: "0",
  x2: "4",
  y2: "2",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const fmtNum = (n) =>
  parseFloat(n.toFixed(6)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  });

const slopeDescription = (m) => {
  if (m === null) return "Vertical (undefined slope)";
  if (m === 0) return "Horizontal (zero slope)";
  if (m > 0) return "Rising left to right";
  return "Falling left to right";
};

const computeSlope = (x1Input, y1Input, x2Input, y2Input) => {
  if (
    x1Input.trim() === "" ||
    y1Input.trim() === "" ||
    x2Input.trim() === "" ||
    y2Input.trim() === ""
  ) {
    return null;
  }

  const x1 = parseFloat(x1Input);
  const y1 = parseFloat(y1Input);
  const x2 = parseFloat(x2Input);
  const y2 = parseFloat(y2Input);

  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
    return { error: "Enter valid numbers for both points." };
  }

  if (x1 === x2 && y1 === y2) {
    return { error: "The two points must be different." };
  }

  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  if (deltaX === 0) {
    return {
      x1,
      y1,
      x2,
      y2,
      deltaX,
      deltaY,
      slope: null,
      slopeText: "Undefined",
      description: slopeDescription(null),
      formula: "m = (y₂ − y₁) / (x₂ − x₁); vertical when x₂ = x₁",
    };
  }

  const slope = deltaY / deltaX;
  const angleDeg = (Math.atan(slope) * 180) / Math.PI;

  return {
    x1,
    y1,
    x2,
    y2,
    deltaX,
    deltaY,
    slope,
    slopeText: fmtNum(slope),
    angleDeg,
    description: slopeDescription(slope),
    formula: "m = rise / run = (y₂ − y₁) / (x₂ − x₁)",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is the slope of a line?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Slope m = (y₂ − y₁) / (x₂ − x₁) measures steepness—rise over run between two points.",
    },
  },
  {
    "@type": "Question",
    name: "When is slope undefined?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "When x₂ = x₁ the line is vertical and slope is undefined (division by zero).",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator use an equation?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No—enter two coordinate points (x₁,y₁) and (x₂,y₂), not a typed y = mx + b alone.",
    },
  },
  {
    "@type": "Question",
    name: "What is a slope of zero?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A horizontal line has m = 0 when y₂ − y₁ = 0 and x₂ ≠ x₁.",
    },
  },
  {
    "@type": "Question",
    name: "Can the two points be the same?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "If both coordinates match, rise and run are 0—slope is not defined as a unique line through one point.",
    },
  },
  {
    "@type": "Question",
    name: "Does this graph the line?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No—numeric slope, rise, run, and angle only.",
    },
  },
];

const SlopeCalculator = () => {
  const [x1, setX1] = useState(DEFAULTS.x1);
  const [y1, setY1] = useState(DEFAULTS.y1);
  const [x2, setX2] = useState(DEFAULTS.x2);
  const [y2, setY2] = useState(DEFAULTS.y2);

  const result = computeSlope(x1, y1, x2, y2);

  const reset = () => {
    setX1(DEFAULTS.x1);
    setY1(DEFAULTS.y1);
    setX2(DEFAULTS.x2);
    setY2(DEFAULTS.y2);
  };

  return (
    <>
      <Helmet>
        <title>Slope Calculator - m from Two Points (x₁,y₁) &amp; (x₂,y₂)</title>
        <meta
          name="description"
          content="Slope m = (y₂−y₁)/(x₂−x₁) from two coordinate points—with rise, run, and angle—not equation entry or graphing."
        />
        <meta
          name="keywords"
          content="slope calculator, rise over run, line slope, coordinate geometry"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Slope Calculator" />
        <meta property="og:description" content="Slope from two points." />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Slope Calculator" />
        <meta name="twitter:description" content="Rise over run between two points." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Slope Calculator",
            url: PAGE_URL,
            description: "Calculate slope from two coordinate points.",
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
            name: "Slope Calculator",
            url: PAGE_URL,
            description: "Web tool for line slope from two points.",
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
            headline: "Slope from Two Points",
            description: "Rise over run formula for line slope.",
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
                name: "Slope Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">x₁</label>
            <input
              type="number"
              step="any"
              value={x1}
              onChange={(e) => setX1(e.target.value)}
              placeholder="0"
              className={inputClassName}
            />
          </div>
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">y₁</label>
            <input
              type="number"
              step="any"
              value={y1}
              onChange={(e) => setY1(e.target.value)}
              placeholder="0"
              className={inputClassName}
            />
          </div>
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">x₂</label>
            <input
              type="number"
              step="any"
              value={x2}
              onChange={(e) => setX2(e.target.value)}
              placeholder="4"
              className={inputClassName}
            />
          </div>
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">y₂</label>
            <input
              type="number"
              step="any"
              value={y2}
              onChange={(e) => setY2(e.target.value)}
              placeholder="2"
              className={inputClassName}
            />
          </div>
        </div>
        <p className="text-sm text-on-surface-variant">
          Point 1: ({DEFAULTS.x1}, {DEFAULTS.y1}) and point 2: ({DEFAULTS.x2},{" "}
          {DEFAULTS.y2}) → slope ½.
        </p>

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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Slope summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Slope m</span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error ? result.slopeText : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Rise (Δy)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.deltaY) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Run (Δx)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.deltaX) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Angle with x-axis</span>
              <span className="font-code-num text-code-num">
                {result && !result.error && result.slope !== null
                  ? `${fmtNum(result.angleDeg)}°`
                  : result && !result.error
                    ? "—"
                    : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Line type</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error ? result.description : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Point 1</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `(${fmtNum(result.x1)}, ${fmtNum(result.y1)})`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Point 2</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `(${fmtNum(result.x2)}, ${fmtNum(result.y2)})`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Two-point slope only—not equation form or graph.`
                : "Enter coordinates for (x₁, y₁) and (x₂, y₂)."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SlopeCalculator;
