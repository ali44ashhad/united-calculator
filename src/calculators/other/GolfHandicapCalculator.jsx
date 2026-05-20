import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/golf-handicap-calculator";

const DEFAULTS = {
  score: "90",
  courseRating: "72.5",
  slopeRating: "113",
};

const STANDARD_SLOPE = 113;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeScoreDifferential = (score, courseRating, slopeRating) => {
  if (
    score.trim() === "" ||
    courseRating.trim() === "" ||
    slopeRating.trim() === ""
  ) {
    return null;
  }

  const s = parseFloat(score);
  const cr = parseFloat(courseRating);
  const sr = parseFloat(slopeRating);

  if (isNaN(s) || isNaN(cr) || isNaN(sr)) {
    return { error: "Enter valid numbers for score, course rating, and slope." };
  }

  if (sr <= 0) {
    return { error: "Slope rating must be greater than zero." };
  }

  const grossOverCr = s - cr;
  const differential = (grossOverCr * STANDARD_SLOPE) / sr;

  return {
    score: s,
    courseRating: cr,
    slopeRating: sr,
    grossOverCr,
    differential,
  };
};

const formatNum = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const GolfHandicapCalculator = () => {
  const [score, setScore] = useState(DEFAULTS.score);
  const [courseRating, setCourseRating] = useState(DEFAULTS.courseRating);
  const [slopeRating, setSlopeRating] = useState(DEFAULTS.slopeRating);

  const result = computeScoreDifferential(score, courseRating, slopeRating);

  const reset = () => {
    setScore(DEFAULTS.score);
    setCourseRating(DEFAULTS.courseRating);
    setSlopeRating(DEFAULTS.slopeRating);
  };

  return (
    <>
      <Helmet>
        <title>
          Golf Handicap Calculator - Score Differential (WHS-style formula)
        </title>
        <meta
          name="description"
          content="Compute a single-round score differential from gross score, course rating, and slope rating: (Score − Course Rating) × 113 ÷ Slope. Not a full official Handicap Index."
        />
        <meta
          name="keywords"
          content="golf handicap calculator, score differential calculator golf, course rating slope rating 113 formula, USGA WHS differential estimate, golf handicap from one round"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Golf Score Differential Calculator"
        />
        <meta
          property="og:description"
          content="Enter score, course rating, and slope to get a score differential."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Golf Handicap / Differential Calculator"
        />
        <meta
          name="twitter:description"
          content="113 ÷ slope × (score − course rating) in one step."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Golf Handicap Calculator",
            url: PAGE_URL,
            description:
              "Calculate a single-round score differential from gross score, course rating, and slope rating.",
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
            name: "Golf Handicap Calculator",
            url: PAGE_URL,
            description:
              "Web application to compute score differential using score, course rating, and slope rating.",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
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
            headline:
              "How to Calculate a Golf Score Differential from Course Rating and Slope",
            description:
              "Guide to the 113-based score differential formula used in World Handicap System math for one adjusted gross score.",
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
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": PAGE_URL,
            },
            inLanguage: "en",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What formula does this golf calculator use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Score differential ≈ (Gross score − Course rating) × 113 ÷ Slope rating, omitting playing conditions calculation and handicap authority rounding used for an official index.",
                },
              },
              {
                "@type": "Question",
                name: "Is this my official Handicap Index?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. An official Handicap Index combines multiple score differentials, rules for maximum hole scores, and updates from your golf association or app.",
                },
              },
              {
                "@type": "Question",
                name: "What is slope rating 113?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "113 is the standard slope rating reference. Courses harder than average have slope above 113; easier courses have slope below 113.",
                },
              },
              {
                "@type": "Question",
                name: "Where do I find course rating and slope?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "They are printed on scorecards and listed in GHIN, USGA, or your national union’s course database for each tee set.",
                },
              },
            ],
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
                name: "Other Calculators",
                item: "https://www.unitedcalculator.net/other",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Golf Handicap Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Gross score
            </label>
            <input
              type="number"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.score}
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Course rating
            </label>
            <input
              type="number"
              value={courseRating}
              onChange={(e) => setCourseRating(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.courseRating}
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Slope rating
            </label>
            <input
              type="number"
              value={slopeRating}
              onChange={(e) => setSlopeRating(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.slopeRating}
              min="1"
              step="any"
            />
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
            Score differential summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Score − course rating</span>
              <span className="font-code-num text-code-num">
                {result?.grossOverCr != null && !result.error
                  ? formatNum(result.grossOverCr)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Slope rating</span>
              <span className="font-code-num text-code-num">
                {result?.slopeRating != null && !result.error
                  ? result.slopeRating.toLocaleString()
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Score differential ((S − CR) × 113 ÷ slope)
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.differential != null && !result.error
                  ? formatNum(result.differential)
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Single-round math only—no Playing Conditions Calculation (PCC),
              net double bogey cap, or handicap authority rounding. Use GHIN or
              your union for an official Handicap Index.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default GolfHandicapCalculator;
