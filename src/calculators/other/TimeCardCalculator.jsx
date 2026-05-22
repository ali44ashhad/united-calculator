import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/time-card-calculator";

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

const formatClock12 = (value) => {
  const parts = parseTimeParts(value);
  if (!parts) return value;
  const h12 = parts.hours % 12 || 12;
  const ampm = parts.hours < 12 ? "AM" : "PM";
  return `${h12}:${String(parts.minutes).padStart(2, "0")} ${ampm}`;
};

const computeTimeCard = (startTime, endTime) => {
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

const TimeCardCalculator = () => {
  const [startTime, setStartTime] = useState(DEFAULTS.startTime);
  const [endTime, setEndTime] = useState(DEFAULTS.endTime);

  const result = computeTimeCard(startTime, endTime);

  const reset = () => {
    setStartTime(DEFAULTS.startTime);
    setEndTime(DEFAULTS.endTime);
  };

  return (
    <>
      <Helmet>
        <title>
          Time Card Calculator - Hours Worked from Punch In &amp; Out
        </title>
        <meta
          name="description"
          content="Calculate hours worked from start and end clock times on a time card. Handles overnight shifts. Shows total minutes, h/m, and decimal hours."
        />
        <meta
          name="keywords"
          content="time card calculator hours worked, punch in punch out hours, shift hours calculator overnight, timesheet start end time, work hours from clock times"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Time Card Calculator - Shift Hours"
        />
        <meta
          property="og:description"
          content="Worked hours from start and end times, including overnight shifts."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Time Card Calculator" />
        <meta
          name="twitter:description"
          content="Hours worked from punch-in and punch-out times."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Time Card Calculator",
            url: PAGE_URL,
            description:
              "Calculate hours worked from time card start and end clock times with overnight shift support.",
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
            name: "Time Card Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute worked hours from punch-in and punch-out times on a time card.",
            applicationCategory: "BusinessApplication",
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
            headline: "How to Calculate Hours Worked on a Time Card",
            description:
              "Subtract start time from end time in minutes; add 24 hours when the shift crosses midnight.",
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
                name: "How does the time card calculator work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Enter punch-in start time and punch-out end time. The tool finds the difference in minutes and displays hours and minutes worked plus decimal hours.",
                },
              },
              {
                "@type": "Question",
                name: "What if I work past midnight?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "When end time is earlier than start on the clock, the calculator treats it as an overnight shift and adds 24 hours to the span.",
                },
              },
              {
                "@type": "Question",
                name: "What are decimal hours on a time card?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Decimal hours express worked time as one number—for example 8 hours 30 minutes is 8.5 decimal hours, often used for payroll entry.",
                },
              },
              {
                "@type": "Question",
                name: "Does this subtract lunch breaks?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Enter adjusted start/end times if your employer deducts unpaid breaks, or subtract break minutes manually.",
                },
              },
              {
                "@type": "Question",
                name: "Does this calculate pay?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. It reports hours worked only. Multiply decimal hours by your hourly rate for gross pay before taxes and deductions.",
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
                name: "Time Card Calculator",
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
              Start time (punch in)
            </label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              End time (punch out)
            </label>
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
            Time card summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Punch in → out</span>
              <span className="font-code-num text-code-num text-right">
                {result?.startTime && !result.error
                  ? `${formatClock12(result.startTime)} → ${formatClock12(result.endTime)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Hours worked</span>
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
                End is earlier than start on the clock—counted as an{" "}
                <strong>overnight</strong> shift (+24 h).
              </p>
            )}
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Does not deduct unpaid breaks or compute overtime—adjust times or
              multiply decimal hours by your rate for pay.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TimeCardCalculator;
