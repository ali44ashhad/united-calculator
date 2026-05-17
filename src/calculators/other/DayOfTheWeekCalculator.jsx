import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/day-of-the-week-calculator";

const DEFAULT_DATE = "2024-07-04";

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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

const computeDayOfWeek = (inputDate) => {
  if (!inputDate.trim()) {
    return null;
  }

  const date = parseLocalDate(inputDate);
  if (!date) {
    return { error: "Enter a valid date." };
  }

  const dayOfWeek = WEEKDAYS[date.getDay()];
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return { dayOfWeek, formattedDate };
};

const DayOfTheWeekCalculator = () => {
  const [inputDate, setInputDate] = useState(DEFAULT_DATE);

  const result = computeDayOfWeek(inputDate);

  const reset = () => setInputDate(DEFAULT_DATE);

  return (
    <>
      <Helmet>
        <title>
          Day of the Week Calculator - What Day Is Any Date?
        </title>
        <meta
          name="description"
          content="Find the day of the week for any date. Enter a calendar date to see whether it falls on Monday, Tuesday, and so on."
        />
        <meta
          name="keywords"
          content="day of the week calculator, what day was I born, find weekday for any date, what day is this date, birthday day of week finder, calendar weekday lookup"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Day of the Week Calculator"
        />
        <meta
          property="og:description"
          content="Pick a date to see which day of the week it falls on."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="What Day of the Week Is It?"
        />
        <meta
          name="twitter:description"
          content="Instant weekday lookup for any calendar date."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Day Of The Week Calculator",
            url: PAGE_URL,
            description:
              "Find the weekday name for any calendar date.",
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
            name: "Day Of The Week Calculator",
            url: PAGE_URL,
            description:
              "Web application to look up the day of the week for a given date.",
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
            headline: "How to Find the Day of the Week for Any Date",
            description:
              "Guide to looking up weekdays for birthdays, holidays, and historical dates using a calendar date picker.",
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
                name: "How does the day of the week calculator work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You enter a calendar date. The tool reads it as a local date and returns the weekday name, such as Monday or Friday.",
                },
              },
              {
                "@type": "Question",
                name: "Can I find what day I was born?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Enter your birth date to see the weekday. The result uses the Gregorian calendar for modern dates.",
                },
              },
              {
                "@type": "Question",
                name: "Does it use my time zone?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The date is interpreted in your browser’s local calendar (year, month, day). Time of day is not used.",
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
                name: "Day Of The Week Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-2 max-w-md">
          <label className="font-h3 text-h3 text-on-surface">Date</label>
          <input
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
            className={inputClassName}
          />
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
            Day of the Week Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Date</span>
              <span className="font-code-num text-code-num text-sm md:text-base text-right max-w-[60%]">
                {result?.formattedDate && !result.error
                  ? result.formattedDate
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Day of the week</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.dayOfWeek && !result.error ? result.dayOfWeek : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Gregorian calendar weekday in English. For spans between two dates,
              use the Day Counter or Date Calculator.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DayOfTheWeekCalculator;
