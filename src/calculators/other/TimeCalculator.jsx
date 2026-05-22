import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/time-calculator";

const DEFAULTS = {
  hours: "2",
  minutes: "30",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeTime = (hours, minutes) => {
  if (hours.trim() === "" && minutes.trim() === "") {
    return null;
  }

  const h = hours.trim() === "" ? 0 : parseFloat(hours);
  const m = minutes.trim() === "" ? 0 : parseFloat(minutes);

  if (isNaN(h) || isNaN(m)) {
    return { error: "Enter valid numbers for hours and minutes." };
  }

  if (h < 0 || m < 0) {
    return { error: "Hours and minutes cannot be negative." };
  }

  const totalMinutes = Math.round(h * 60 + m);
  const normalizedHours = Math.floor(totalMinutes / 60);
  const normalizedMinutes = totalMinutes % 60;
  const decimalHours = totalMinutes / 60;

  return {
    h,
    m,
    totalMinutes,
    normalizedHours,
    normalizedMinutes,
    decimalHours,
  };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const TimeCalculator = () => {
  const [hours, setHours] = useState(DEFAULTS.hours);
  const [minutes, setMinutes] = useState(DEFAULTS.minutes);

  const result = computeTime(hours, minutes);

  const reset = () => {
    setHours(DEFAULTS.hours);
    setMinutes(DEFAULTS.minutes);
  };

  return (
    <>
      <Helmet>
        <title>
          Time Calculator - Total Minutes &amp; Decimal Hours
        </title>
        <meta
          name="description"
          content="Add hours and minutes into one duration. See total minutes, normalized hours and minutes, and decimal hours for timesheets and scheduling."
        />
        <meta
          name="keywords"
          content="hours and minutes to minutes calculator, time duration calculator, decimal hours from minutes, add hours and minutes, convert 2 hours 30 minutes to minutes"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Time Calculator - Hours + Minutes"
        />
        <meta
          property="og:description"
          content="Combine hours and minutes into total minutes and decimal hours."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Time Calculator" />
        <meta
          name="twitter:description"
          content="Total minutes from hours and minutes."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Time Calculator",
            url: PAGE_URL,
            description:
              "Add hours and minutes into total minutes and decimal hours for durations and time tracking.",
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
            name: "Time Calculator",
            url: PAGE_URL,
            description:
              "Web tool to convert hours and minutes to total minutes and decimal hours.",
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
            headline: "How to Add Hours and Minutes into One Duration",
            description:
              "Multiply hours by 60, add minutes, and optionally express the result as decimal hours for payroll or planning.",
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
                name: "How do I convert hours and minutes to total minutes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Multiply hours by 60 and add minutes. Example: 2 hours 30 minutes = 150 minutes.",
                },
              },
              {
                "@type": "Question",
                name: "What are decimal hours?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Decimal hours express the same duration as a decimal number of hours. 2 hours 30 minutes equals 2.5 decimal hours.",
                },
              },
              {
                "@type": "Question",
                name: "Can I leave hours or minutes empty?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. An empty field is treated as zero. Enter at least one value to see a result.",
                },
              },
              {
                "@type": "Question",
                name: "What if I enter more than 59 minutes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The calculator still adds correctly and shows a normalized hours and minutes breakdown in the summary.",
                },
              },
              {
                "@type": "Question",
                name: "Is this the same as clock start and end times?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. This tool adds a duration in hours and minutes. For start and end clock times, use the Hours Calculator or Time Card Calculator.",
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
                name: "Time Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Hours</label>
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.hours}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Minutes</label>
            <input
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.minutes}
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
            Duration summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Input</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmt2(result.h)} h ${fmt2(result.m)} min`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Total minutes</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.totalMinutes != null && !result.error
                  ? `${result.totalMinutes.toLocaleString()} min`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Normalized</span>
              <span className="font-code-num text-code-num">
                {result?.totalMinutes != null && !result.error
                  ? `${result.normalizedHours} h ${result.normalizedMinutes} min`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Decimal hours</span>
              <span className="font-code-num text-code-num">
                {result?.decimalHours != null && !result.error
                  ? `${fmt2(result.decimalHours)} h`
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              <strong>Total min = hours × 60 + minutes</strong>. Shows{" "}
              <strong>0</strong> when both fields are zero. For clock start/end
              times, use Hours or Time Card calculators.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TimeCalculator;
