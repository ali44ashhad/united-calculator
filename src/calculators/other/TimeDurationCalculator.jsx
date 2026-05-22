import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/time-duration-calculator";

const DEFAULTS = {
  startTime: "14:00",
  endTime: "16:30",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const parseTimeParts = (value) => {
  if (!value || !value.includes(":")) return null;
  const [h, m] = value.split(":").map(Number);
  if (isNaN(h) || isNaN(m) || h < 0 || h > 23 || m < 0 || m > 59) {
    return null;
  }
  return { hours: h, minutes: m };
};

const formatClock12 = (value) => {
  const parts = parseTimeParts(value);
  if (!parts) return value;
  const h12 = parts.hours % 12 || 12;
  const ampm = parts.hours < 12 ? "AM" : "PM";
  return `${h12}:${String(parts.minutes).padStart(2, "0")} ${ampm}`;
};

const computeDuration = (startTime, endTime) => {
  if (!startTime || !endTime) {
    return null;
  }

  const startParts = parseTimeParts(startTime);
  const endParts = parseTimeParts(endTime);

  if (!startParts || !endParts) {
    return { error: "Enter valid start and end times." };
  }

  const start = new Date();
  const end = new Date();
  start.setHours(startParts.hours, startParts.minutes, 0, 0);
  end.setHours(endParts.hours, endParts.minutes, 0, 0);

  const overnight = end < start;
  if (overnight) {
    end.setDate(end.getDate() + 1);
  }

  const totalMinutes = Math.round((end - start) / (1000 * 60));
  const wholeHours = Math.floor(totalMinutes / 60);
  const remainderMinutes = totalMinutes % 60;
  const decimalHours = totalMinutes / 60;

  return {
    startTime,
    endTime,
    overnight,
    totalMinutes,
    wholeHours,
    remainderMinutes,
    decimalHours,
  };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const TimeDurationCalculator = () => {
  const [startTime, setStartTime] = useState(DEFAULTS.startTime);
  const [endTime, setEndTime] = useState(DEFAULTS.endTime);

  const result = computeDuration(startTime, endTime);

  const reset = () => {
    setStartTime(DEFAULTS.startTime);
    setEndTime(DEFAULTS.endTime);
  };

  return (
    <>
      <Helmet>
        <title>
          Time Duration Calculator - Span Between Two Clock Times
        </title>
        <meta
          name="description"
          content="Find how long between a start time and end time today. Overnight spans supported. Shows hours, minutes, total minutes, and decimal hours."
        />
        <meta
          name="keywords"
          content="time duration calculator between two times, how long from 2pm to 430pm, elapsed time calculator clock, overnight duration calculator, time span hours minutes"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Time Duration Calculator"
        />
        <meta
          property="og:description"
          content="Duration between start and end clock times with overnight handling."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Time Duration Calculator" />
        <meta
          name="twitter:description"
          content="Elapsed time between two times on the clock."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Time Duration Calculator",
            url: PAGE_URL,
            description:
              "Calculate elapsed duration between two clock times in hours and minutes, including overnight spans.",
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
            name: "Time Duration Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute time duration between start and end clock times.",
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
            headline: "How to Find Duration Between Two Times on the Same Day",
            description:
              "Convert start and end times to minutes, subtract, and add 24 hours when the span crosses midnight.",
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
                name: "How do I calculate duration between two times?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Enter start and end clock times. The calculator finds the difference in minutes and shows hours, minutes, total minutes, and decimal hours.",
                },
              },
              {
                "@type": "Question",
                name: "Does this work past midnight?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. If end time is earlier than start on the clock, 24 hours is added for an overnight duration.",
                },
              },
              {
                "@type": "Question",
                name: "How long is 2:00 PM to 4:30 PM?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Two and a half hours: 150 minutes, or 2.5 decimal hours.",
                },
              },
              {
                "@type": "Question",
                name: "Is this the same as the time card calculator?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The math is similar. Time Card is framed for punch-in payroll hours; Time Duration is for general elapsed time between clock times.",
                },
              },
              {
                "@type": "Question",
                name: "Can I calculate duration across calendar dates?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This tool assumes the same calendar day unless the span crosses midnight (overnight). Multi-day date ranges need a date-based tool.",
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
                name: "Time Duration Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Start time</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">End time</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className={inputClassName}
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
              <span className="text-on-surface">Start → end</span>
              <span className="font-code-num text-code-num text-right">
                {result?.startTime && !result.error
                  ? `${formatClock12(result.startTime)} → ${formatClock12(result.endTime)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Duration</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.totalMinutes != null && !result.error
                  ? `${result.wholeHours} h ${result.remainderMinutes} min`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Total minutes</span>
              <span className="font-code-num text-code-num">
                {result?.totalMinutes != null && !result.error
                  ? `${result.totalMinutes.toLocaleString()} min`
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
            {result?.overnight && !result.error && (
              <p className="text-sm text-on-surface-variant">
                End is earlier than start on the clock—duration includes{" "}
                <strong>overnight</strong> (+24 h).
              </p>
            )}
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Same-day clock times only (plus midnight crossover). For calendar
              date ranges, use a date calculator—not built here.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TimeDurationCalculator;
