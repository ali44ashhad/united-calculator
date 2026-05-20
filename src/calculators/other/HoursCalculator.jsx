import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/hours-calculator";

const DEFAULTS = {
  startTime: "09:00",
  endTime: "17:00",
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

const formatClock = (value) => {
  const parts = parseTimeParts(value);
  if (!parts) return value;
  const h12 = parts.hours % 12 || 12;
  const ampm = parts.hours < 12 ? "AM" : "PM";
  return `${h12}:${String(parts.minutes).padStart(2, "0")} ${ampm}`;
};

const computeHours = (startTime, endTime) => {
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

  const diffMs = end - start;
  const totalMinutes = Math.round(diffMs / (1000 * 60));
  const hours = totalMinutes / 60;
  const wholeHours = Math.floor(totalMinutes / 60);
  const remainderMinutes = totalMinutes % 60;

  return {
    startTime,
    endTime,
    overnight,
    hours,
    totalMinutes,
    wholeHours,
    remainderMinutes,
  };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const HoursCalculator = () => {
  const [startTime, setStartTime] = useState(DEFAULTS.startTime);
  const [endTime, setEndTime] = useState(DEFAULTS.endTime);

  const result = computeHours(startTime, endTime);

  const reset = () => {
    setStartTime(DEFAULTS.startTime);
    setEndTime(DEFAULTS.endTime);
  };

  return (
    <>
      <Helmet>
        <title>
          Hours Calculator - Time Between Two Clock Times (Overnight OK)
        </title>
        <meta
          name="description"
          content="Find hours and minutes between a start time and end time. Handles overnight shifts when end is earlier than start on the clock."
        />
        <meta
          name="keywords"
          content="hours calculator between two times, work hours calculator start end time, time duration calculator hours minutes, shift length calculator overnight, timesheet hours calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hours Calculator - Start & End Time"
        />
        <meta
          property="og:description"
          content="Duration in hours and minutes from two clock times, including overnight."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hours Calculator" />
        <meta
          name="twitter:description"
          content="Hours between start and end time."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Hours Calculator",
            url: PAGE_URL,
            description:
              "Calculate elapsed hours and minutes between a start time and end time, with overnight shifts supported.",
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
            name: "Hours Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute time duration in hours between two times of day.",
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
            headline: "How to Calculate Hours Between Two Times on a Clock",
            description:
              "Subtract start from end on a 24-hour timeline; when end is earlier than start, add one calendar day for overnight spans.",
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
                name: "How does the hours calculator handle overnight shifts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If the end time is earlier than the start time on the same clock face, the tool assumes the end is on the next calendar day and adds 24 hours to the span.",
                },
              },
              {
                "@type": "Question",
                name: "What format should I use for times?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use the browser time picker (24-hour HH:MM). The summary also shows a 12-hour AM/PM readout for convenience.",
                },
              },
              {
                "@type": "Question",
                name: "Does this subtract lunch breaks automatically?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Enter adjusted start and end times if you need unpaid break time removed from the total.",
                },
              },
              {
                "@type": "Question",
                name: "Can I add hours to a time on this page?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This calculator finds the span between two clock times only. For date-based day counts, use the Day Counter or Date Calculator.",
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
                name: "Hours Calculator",
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
                  ? `${formatClock(result.startTime)} → ${formatClock(result.endTime)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Total hours (decimal)</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.hours != null && !result.error
                  ? `${fmt2(result.hours)} h`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Hours and minutes</span>
              <span className="font-code-num text-code-num">
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
            {result?.overnight && !result.error && (
              <p className="text-sm text-on-surface-variant">
                End time is earlier than start on the clock—counted as{" "}
                <strong>next-day</strong> end (overnight span).
              </p>
            )}
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              For payroll, confirm break rules and rounding with your employer.
              Same start and end yields <strong>0 hours</strong>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HoursCalculator;
