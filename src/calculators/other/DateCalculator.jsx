import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/date-calculator";

const DEFAULTS = {
  startDate: "2024-01-01",
  endDate: "2024-06-15",
};

const MS_PER_DAY = 1000 * 60 * 60 * 24;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const parseLocalDate = (dateStr) => {
  if (!dateStr || dateStr.trim() === "") return null;

  const parts = dateStr.split("-").map(Number);
  if (parts.length !== 3 || parts.some((n) => isNaN(n))) return null;

  const [y, m, d] = parts;
  const date = new Date(y, m - 1, d);
  if (
    date.getFullYear() !== y ||
    date.getMonth() !== m - 1 ||
    date.getDate() !== d
  ) {
    return null;
  }

  date.setHours(0, 0, 0, 0);
  return date;
};

const computeDateDifference = (startDate, endDate) => {
  if (!startDate.trim() || !endDate.trim()) {
    return null;
  }

  const start = parseLocalDate(startDate);
  const end = parseLocalDate(endDate);

  if (!start || !end) {
    return { error: "Enter valid start and end dates." };
  }

  if (end < start) {
    return { error: "End date must be on or after the start date." };
  }

  const timeDiff = end.getTime() - start.getTime();
  const totalDays = Math.ceil(timeDiff / MS_PER_DAY);
  const weeks = Math.floor(totalDays / 7);
  const remainingDays = totalDays % 7;

  return {
    totalDays,
    weeks,
    remainingDays,
  };
};

const DateCalculator = () => {
  const [startDate, setStartDate] = useState(DEFAULTS.startDate);
  const [endDate, setEndDate] = useState(DEFAULTS.endDate);

  const result = computeDateDifference(startDate, endDate);

  const reset = () => {
    setStartDate(DEFAULTS.startDate);
    setEndDate(DEFAULTS.endDate);
  };

  return (
    <>
      <Helmet>
        <title>
          Date Calculator - Days & Weeks Between Two Dates
        </title>
        <meta
          name="description"
          content="Calculate the number of days and weeks between a start date and end date. See total days, full weeks, and remaining days."
        />
        <meta
          name="keywords"
          content="date calculator days between dates, how many days between two dates calculator, date difference calculator weeks and days, count days from date to date, days until calculator between dates"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Date Calculator - Days Between Dates"
        />
        <meta
          property="og:description"
          content="Enter a start and end date to see total days, weeks, and remaining days."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Date Difference Calculator"
        />
        <meta
          name="twitter:description"
          content="Find how many days and weeks are between two calendar dates."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Date Calculator",
            url: PAGE_URL,
            description:
              "Calculate days and weeks between a start date and end date.",
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
            name: "Date Calculator",
            url: PAGE_URL,
            description:
              "Web application to compute the span between two dates in days and weeks.",
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
            headline: "How to Calculate Days and Weeks Between Two Dates",
            description:
              "Guide to finding date spans in total days, full weeks, and leftover days using a start and end date.",
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
                name: "What does this date calculator do?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It finds how many days lie between a start date and an end date, then splits that into full weeks and remaining days. It does not add or subtract days from a single date.",
                },
              },
              {
                "@type": "Question",
                name: "Are weekends included?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The count is calendar days between the two dates, including weekends and holidays.",
                },
              },
              {
                "@type": "Question",
                name: "Can the end date be before the start date?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. The end date must be on or after the start date for a result to display.",
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
                name: "Date Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Start date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={inputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">End date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
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
            Date Difference Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total days</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.totalDays != null && !result.error
                  ? `${result.totalDays.toLocaleString()} days`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Full weeks</span>
              <span className="font-code-num text-code-num">
                {result?.weeks != null && !result.error
                  ? `${result.weeks.toLocaleString()} weeks`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Remaining days</span>
              <span className="font-code-num text-code-num">
                {result?.remainingDays != null && !result.error
                  ? `${result.remainingDays.toLocaleString()} days`
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Calendar days between start and end; weekends included. Does not
              add or subtract days from a single date.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DateCalculator;
