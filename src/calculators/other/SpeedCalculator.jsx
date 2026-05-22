import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/speed-calculator";

const DEFAULTS = {
  distance: "100",
  time: "2",
  speed: "",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const parseOptional = (value) => {
  if (value.trim() === "") {
    return { provided: false };
  }
  const n = parseFloat(value);
  if (isNaN(n)) {
    return { provided: true, invalid: true };
  }
  return { provided: true, value: n };
};

const computeSpeed = (distance, time, speed) => {
  const d = parseOptional(distance);
  const t = parseOptional(time);
  const s = parseOptional(speed);

  if (d.invalid || t.invalid || s.invalid) {
    return { error: "Enter valid numbers or leave a field blank to solve it." };
  }

  const providedCount = [d, t, s].filter((x) => x.provided).length;

  if (providedCount < 2) {
    return null;
  }

  if (providedCount === 3) {
    if (t.value === 0) {
      return { error: "Time cannot be zero when checking speed = distance ÷ time." };
    }
    const expectedS = d.value / t.value;
    const mismatch =
      Math.abs(expectedS - s.value) > 0.01 * Math.max(1, Math.abs(s.value));
    return {
      distance: d.value,
      time: t.value,
      speed: s.value,
      solved: null,
      consistent: !mismatch,
      expectedSpeed: mismatch ? expectedS : null,
    };
  }

  if (!s.provided && d.provided && t.provided) {
    if (t.value === 0) {
      return { error: "Time must be greater than zero to solve for speed." };
    }
    if (d.value < 0 || t.value < 0) {
      return { error: "Distance and time should be positive for travel speed." };
    }
    return {
      distance: d.value,
      time: t.value,
      speed: d.value / t.value,
      solved: "speed",
    };
  }

  if (!t.provided && d.provided && s.provided) {
    if (s.value === 0) {
      return { error: "Speed must be greater than zero to solve for time." };
    }
    if (d.value < 0 || s.value < 0) {
      return { error: "Distance and speed should be positive." };
    }
    return {
      distance: d.value,
      time: d.value / s.value,
      speed: s.value,
      solved: "time",
    };
  }

  if (!d.provided && t.provided && s.provided) {
    if (t.value < 0 || s.value < 0) {
      return { error: "Time and speed should be positive." };
    }
    return {
      distance: s.value * t.value,
      time: t.value,
      speed: s.value,
      solved: "distance",
    };
  }

  return { error: "Enter any two of distance, time, and speed." };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const SpeedCalculator = () => {
  const [distance, setDistance] = useState(DEFAULTS.distance);
  const [time, setTime] = useState(DEFAULTS.time);
  const [speed, setSpeed] = useState(DEFAULTS.speed);

  const result = computeSpeed(distance, time, speed);

  const reset = () => {
    setDistance(DEFAULTS.distance);
    setTime(DEFAULTS.time);
    setSpeed(DEFAULTS.speed);
  };

  return (
    <>
      <Helmet>
        <title>
          Speed Calculator - km/h from Distance (km) &amp; Time (hours)
        </title>
        <meta
          name="description"
          content="Solve speed, distance, or time in km and hours. Enter any two values (km, hours, km/h) and get the third—speed = distance ÷ time."
        />
        <meta
          name="keywords"
          content="speed calculator km/h, distance time speed formula, average speed calculator, travel time from distance and speed, km per hour calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Speed Calculator - Distance, Time, Speed"
        />
        <meta
          property="og:description"
          content="Any two of distance (km), time (h), speed (km/h)—solve the third."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Speed Calculator" />
        <meta
          name="twitter:description"
          content="Speed = distance ÷ time in km and hours."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Speed Calculator",
            url: PAGE_URL,
            description:
              "Calculate speed in km/h, distance in km, or time in hours from any two of the three motion variables.",
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
            name: "Speed Calculator",
            url: PAGE_URL,
            description:
              "Web tool to solve speed, distance, or time using speed equals distance divided by time.",
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
            headline: "Speed, Distance, and Time: The km/h Formula",
            description:
              "Average speed in kilometers per hour equals distance in kilometers divided by time in hours. Leave one field blank to solve it.",
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
                name: "What is the speed formula?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Average speed = distance ÷ time. With kilometers and hours, speed is in km/h.",
                },
              },
              {
                "@type": "Question",
                name: "How do I use this speed calculator?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Enter any two of distance (km), time (hours), and speed (km/h). Leave the third blank to solve it.",
                },
              },
              {
                "@type": "Question",
                name: "How fast is 100 km in 2 hours?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "100 ÷ 2 = 50 km/h average speed over that trip segment.",
                },
              },
              {
                "@type": "Question",
                name: "Can I enter all three values?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The summary checks whether speed ≈ distance ÷ time within a small tolerance.",
                },
              },
              {
                "@type": "Question",
                name: "Does this use miles or mph?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This page uses kilometers, hours, and km/h. Convert miles to km first if needed.",
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
                name: "Speed Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Enter <strong>any two</strong> of distance (km), time (hours), and speed
          (km/h). Leave the third blank to solve it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Distance (km)
            </label>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.distance}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Time (hours)
            </label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.time}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Speed (km/h)
            </label>
            <input
              type="number"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              className={inputClassName}
              placeholder="leave blank to solve"
              min="0"
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
            Motion summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Distance</span>
              <span className="font-code-num text-code-num">
                {result?.distance != null && !result.error
                  ? `${fmt2(result.distance)} km`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Time</span>
              <span className="font-code-num text-code-num">
                {result?.time != null && !result.error
                  ? `${fmt2(result.time)} h`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Speed</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.speed != null && !result.error
                  ? `${fmt2(result.speed)} km/h`
                  : "—"}
              </span>
            </div>
            {result?.solved && !result.error && (
              <p className="text-sm text-on-surface-variant">
                Solved for <strong>{result.solved}</strong> from the other two
                values.
              </p>
            )}
            {result?.solved === null &&
              result?.consistent === false &&
              !result.error && (
                <p className="text-sm text-error">
                  Values do not match speed = distance ÷ time (expected speed ≈{" "}
                  {fmt2(result.expectedSpeed)} km/h).
                </p>
              )}
            {result?.solved === null &&
              result?.consistent === true &&
              !result.error && (
              <p className="text-sm text-on-surface-variant">
                All three values are consistent with{" "}
                <strong>speed = distance ÷ time</strong>.
              </p>
            )}
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Average speed only—stops and traffic change real-world trip time.
              Units: km, hours, km/h.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SpeedCalculator;
