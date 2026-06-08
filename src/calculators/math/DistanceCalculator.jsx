import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/distance-calculator";

const DEFAULTS = {
  speed: "60",
  time: "2",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeDistance = (speed, time) => {
  if (speed.trim() === "" || time.trim() === "") {
    return null;
  }

  const s = parseFloat(speed);
  const t = parseFloat(time);

  if (isNaN(s) || isNaN(t)) {
    return { error: "Enter valid numbers for speed and time." };
  }

  if (s < 0 || t < 0) {
    return { error: "Speed and time cannot be negative." };
  }

  const distanceKm = s * t;
  const distanceM = distanceKm * 1000;
  const timeMinutes = t * 60;
  const speedMs = s / 3.6;

  return {
    speedKmh: s,
    timeHours: t,
    distanceKm,
    distanceM,
    timeMinutes,
    speedMs,
    formula: "Distance = speed × time",
  };
};

const fmtNum = (n, max = 4) =>
  parseFloat(n.toFixed(max)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: max,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "How do you calculate distance from speed and time?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Distance = speed × time. With speed in km/h and time in hours, distance is in kilometers.",
    },
  },
  {
    "@type": "Question",
    name: "What units does this distance calculator use?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Speed in km/h and time in hours. Result distance is in kilometers, with meters shown in the summary.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the distance between two coordinate points?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This page uses speed × time for travel distance, not the 2D or 3D distance formula between (x,y) or (x,y,z) points.",
    },
  },
  {
    "@type": "Question",
    name: "Can I use minutes instead of hours?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter time in hours (e.g. 30 minutes = 0.5). The summary also shows time converted to minutes.",
    },
  },
  {
    "@type": "Question",
    name: "What if speed is zero?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Distance = 0 × time = 0. Valid input; you travel no distance at zero speed.",
    },
  },
  {
    "@type": "Question",
    name: "How is this related to pace calculators?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Pace tools link running distance and time. This page is the classic physics form d = v × t with km/h and hours.",
    },
  },
];

const DistanceCalculator = () => {
  const [speed, setSpeed] = useState(DEFAULTS.speed);
  const [time, setTime] = useState(DEFAULTS.time);

  const result = computeDistance(speed, time);

  const reset = () => {
    setSpeed(DEFAULTS.speed);
    setTime(DEFAULTS.time);
  };

  return (
    <>
      <Helmet>
        <title>
          Distance Calculator - Speed × Time (km/h &amp; Hours)
        </title>
        <meta
          name="description"
          content="Distance = speed (km/h) × time (hours). Travel distance in km and meters—not coordinate geometry between two points."
        />
        <meta
          name="keywords"
          content="distance calculator, speed time distance formula, d equals vt, km/h hours to km, travel distance calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Distance Calculator" />
        <meta
          property="og:description"
          content="Distance from speed and time in km/h and hours."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Distance Calculator" />
        <meta
          name="twitter:description"
          content="d = speed × time for km travel."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Distance Calculator",
            url: PAGE_URL,
            description:
              "Calculate travel distance from speed and time using d = v × t.",
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
            name: "Distance Calculator",
            url: PAGE_URL,
            description: "Web tool for distance from speed and time.",
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
            headline: "Distance from Speed and Time",
            description: "The d = v × t formula for uniform motion.",
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
                name: "Distance Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Speed (km/h)
            </label>
            <input
              type="number"
              min="0"
              step="any"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              placeholder="e.g. 60"
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Time (hours)
            </label>
            <input
              type="number"
              min="0"
              step="any"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="e.g. 2"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Use decimal hours (30 min = 0.5, 15 min = 0.25).
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
            Distance summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Distance</span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error
                  ? `${fmtNum(result.distanceKm)} km`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Distance (meters)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtNum(result.distanceM, 0)} m`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Speed used</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtNum(result.speedKmh)} km/h`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Time used</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtNum(result.timeHours)} hours`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Time (minutes)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtNum(result.timeMinutes)} min`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Speed (m/s)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtNum(result.speedMs)} m/s`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Assumes constant speed—not distance between map coordinates.`
                : "Enter speed (km/h) and time (hours) for travel distance."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DistanceCalculator;
