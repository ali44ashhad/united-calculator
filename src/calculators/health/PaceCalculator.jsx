import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/health/pace-calculator";

const DEFAULTS = {
  distance: "5",
  hours: "0",
  minutes: "30",
  seconds: "0",
};

const KM_PER_MILE = 1.609344;

const DISTANCE_PRESETS = [
  { label: "5K", km: "5" },
  { label: "10K", km: "10" },
  { label: "Half marathon", km: "21.0975" },
  { label: "Marathon", km: "42.195" },
];

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const parseTimeParts = (hours, minutes, seconds) => {
  const h = parseInt(hours, 10) || 0;
  const m = parseInt(minutes, 10) || 0;
  const s = parseInt(seconds, 10) || 0;
  return { h, m, s, totalSeconds: h * 3600 + m * 60 + s };
};

const formatDuration = (totalSeconds) => {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.round(totalSeconds % 60);
  if (h > 0) return `${h}h ${m}m ${s}s`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
};

const splitPace = (decimalMinutes) => {
  let min = Math.floor(decimalMinutes);
  let sec = Math.round((decimalMinutes - min) * 60);
  if (sec === 60) {
    min += 1;
    sec = 0;
  }
  return { min, sec };
};

const formatPace = (decimalMinutes) => {
  const { min, sec } = splitPace(decimalMinutes);
  return `${min}:${sec.toString().padStart(2, "0")}`;
};

const computePace = (distance, hours, minutes, seconds) => {
  if (
    distance.trim() === "" ||
    hours.trim() === "" ||
    minutes.trim() === "" ||
    seconds.trim() === ""
  ) {
    return null;
  }

  const d = parseFloat(distance);
  const time = parseTimeParts(hours, minutes, seconds);

  if (isNaN(d)) {
    return { error: "Enter a valid distance." };
  }

  if (d <= 0) {
    return { error: "Distance must be greater than zero." };
  }

  if (time.h < 0 || time.m < 0 || time.s < 0) {
    return { error: "Time values cannot be negative." };
  }

  if (time.totalSeconds <= 0) {
    return { error: "Total time must be greater than zero." };
  }

  const totalMinutes = time.totalSeconds / 60;
  const paceMinPerKm = totalMinutes / d;
  const paceMinPerMi = paceMinPerKm * KM_PER_MILE;
  const speedKmh = d / (time.totalSeconds / 3600);
  const speedMph = speedKmh / KM_PER_MILE;

  return {
    distanceKm: d,
    totalSeconds: time.totalSeconds,
    totalMinutes,
    paceMinPerKm,
    paceMinPerMi,
    speedKmh,
    speedMph,
    formula: "Pace (min/km) = total time (min) ÷ distance (km)",
  };
};

const fmtSpeed = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is running pace?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Running pace is how long it takes to cover one unit of distance—usually minutes per kilometer or minutes per mile. Lower pace times mean faster running.",
    },
  },
  {
    "@type": "Question",
    name: "How do I calculate pace from time and distance?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Divide total time in minutes by distance in kilometers for min/km. This calculator also converts to min/mile and speed in km/h and mph.",
    },
  },
  {
    "@type": "Question",
    name: "Does this pace calculator use km or miles?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter distance in kilometers and time as h:m:s. Results show pace per km and per mile plus speed.",
    },
  },
  {
    "@type": "Question",
    name: "What is a good 5K pace?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It varies by fitness. Recreational runners often finish 5K between about 25–35 minutes (5:00–7:00 min/km). Enter your own time and distance for your average pace.",
    },
  },
  {
    "@type": "Question",
    name: "How is pace different from speed?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Pace is time per distance (min/km). Speed is distance per time (km/h). They are inverses: faster speed means lower pace minutes.",
    },
  },
  {
    "@type": "Question",
    name: "Is this pace calculator for treadmill runs?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Enter treadmill distance and elapsed time the same way. Note that treadmill distance may differ slightly from GPS outdoors.",
    },
  },
  {
    "@type": "Question",
    name: "Is this medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It is a fitness math tool. Training plans and health clearance for exercise should come from qualified coaches and clinicians.",
    },
  },
];

const PaceCalculator = () => {
  const [distance, setDistance] = useState(DEFAULTS.distance);
  const [hours, setHours] = useState(DEFAULTS.hours);
  const [minutes, setMinutes] = useState(DEFAULTS.minutes);
  const [seconds, setSeconds] = useState(DEFAULTS.seconds);

  const result = computePace(distance, hours, minutes, seconds);

  const reset = () => {
    setDistance(DEFAULTS.distance);
    setHours(DEFAULTS.hours);
    setMinutes(DEFAULTS.minutes);
    setSeconds(DEFAULTS.seconds);
  };

  return (
    <>
      <Helmet>
        <title>
          Pace Calculator - Running Pace min/km &amp; min/mile
        </title>
        <meta
          name="description"
          content="Running pace from distance (km) and time: min/km, min/mile, km/h & mph. Enter h:m:s—not GPS tracking."
        />
        <meta
          name="keywords"
          content="pace calculator, running pace calculator, min per km, mile pace calculator, running speed km/h, race pace calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pace Calculator" />
        <meta
          property="og:description"
          content="Average running pace and speed from distance and time."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pace Calculator" />
        <meta
          name="twitter:description"
          content="Min/km, min/mile, and speed from your run."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Pace Calculator",
            url: PAGE_URL,
            description:
              "Calculate running pace per km and mile from distance and time.",
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
            name: "Pace Calculator",
            url: PAGE_URL,
            description: "Web tool to compute running pace and speed.",
            applicationCategory: "HealthApplication",
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
            headline: "Running Pace from Time and Distance",
            description:
              "How to convert finish time and distance into pace and speed.",
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
                name: "Health Calculators",
                item: "https://www.unitedcalculator.net/health",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Pace Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Distance</label>
            <div className="relative">
              <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.distance}
                min="0.01"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                km
              </span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {DISTANCE_PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setDistance(preset.km)}
                  className="px-3 py-1.5 rounded-lg text-sm border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Time</label>
            <div className="grid grid-cols-3 gap-3">
              <div className="relative">
                <input
                  type="number"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className={inputClassName}
                  placeholder="0"
                  min="0"
                  step="1"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                  hr
                </span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  className={inputClassName}
                  placeholder="30"
                  min="0"
                  step="1"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                  min
                </span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  value={seconds}
                  onChange={(e) => setSeconds(e.target.value)}
                  className={inputClassName}
                  placeholder="0"
                  min="0"
                  max="59"
                  step="1"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
                  sec
                </span>
              </div>
            </div>
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Pace summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Pace (min/km)</span>
              <span className="font-code-num text-code-num text-lg text-primary">
                {result && !result.error
                  ? `${formatPace(result.paceMinPerKm)} /km`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Pace (min/mile)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${formatPace(result.paceMinPerMi)} /mi`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Speed</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtSpeed(result.speedKmh)} km/h · ${fmtSpeed(result.speedMph)} mph`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total time</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? formatDuration(result.totalSeconds)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Distance</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.distanceKm} km (${fmtSpeed(result.distanceKm / KM_PER_MILE)} mi)`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Average pace assumes even effort across the distance.`
                : "Pace = time ÷ distance. Distance in km."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PaceCalculator;
