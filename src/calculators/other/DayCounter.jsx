import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/day-counter";

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

const computeDays = (startDate, endDate) => {
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

  const diffTime = end.getTime() - start.getTime();
  const days = Math.ceil(diffTime / MS_PER_DAY);

  return { days };
};

const DayCounter = () => {
  const [startDate, setStartDate] = useState(DEFAULTS.startDate);
  const [endDate, setEndDate] = useState(DEFAULTS.endDate);

  const result = computeDays(startDate, endDate);

  const reset = () => {
    setStartDate(DEFAULTS.startDate);
    setEndDate(DEFAULTS.endDate);
  };

  return (
    <>
      <Helmet>
        <title>Day Counter - Count Days Between Two Dates</title>
        <meta
          name="description"
          content="Count the number of calendar days between a start date and end date. Simple day counter for deadlines, trips, and countdowns."
        />
        <meta
          name="keywords"
          content="day counter, count days between two dates, how many days until calculator, days from date to date, day countdown between dates, calendar day counter online"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Day Counter - Days Between Dates"
        />
        <meta
          property="og:description"
          content="Enter start and end dates to count total calendar days between them."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Day Counter - Count Days"
        />
        <meta
          name="twitter:description"
          content="Quick calendar day count between two dates."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Day Counter",
            url: PAGE_URL,
            description:
              "Count calendar days between a start date and end date.",
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
            name: "Day Counter",
            url: PAGE_URL,
            description:
              "Web application to count days between two calendar dates.",
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
            headline: "How to Count Days Between Two Dates",
            description:
              "Guide to using a day counter for calendar-day spans between a start and end date.",
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
                name: "What does the Day Counter do?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It returns the total number of calendar days between a start date and an end date. It does not split results into weeks.",
                },
              },
              {
                "@type": "Question",
                name: "Are weekends counted?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Every calendar day between the dates is included, including weekends and holidays.",
                },
              },
              {
                "@type": "Question",
                name: "How is this different from the Date Calculator?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Day Counter shows total days only. The Date Calculator also breaks the span into full weeks and remaining days.",
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
                name: "Day Counter",
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
            Day Counter Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total days</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.days != null && !result.error
                  ? `${result.days.toLocaleString()} days`
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Calendar-day count only. For weeks and leftover days, use the Date
              Calculator on this site.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DayCounter;
