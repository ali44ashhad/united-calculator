import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/age-calculator";
const DEFAULT_DOB = "2000-06-15";

const computeAge = (dobString) => {
  if (!dobString || dobString.trim() === "") return null;

  const parts = dobString.split("-").map(Number);
  if (parts.length !== 3 || parts.some((n) => isNaN(n))) {
    return { error: "Enter a valid date of birth." };
  }

  const [y, m, d] = parts;
  const birthDate = new Date(y, m - 1, d);
  if (
    birthDate.getFullYear() !== y ||
    birthDate.getMonth() !== m - 1 ||
    birthDate.getDate() !== d
  ) {
    return { error: "Enter a valid date of birth." };
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  birthDate.setHours(0, 0, 0, 0);

  if (birthDate > today) {
    return { error: "Date of birth cannot be in the future." };
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

  return { years, months, days, totalDays };
};

const AgeCalculator = () => {
  const [dob, setDob] = useState(DEFAULT_DOB);

  const result = computeAge(dob);

  const reset = () => setDob(DEFAULT_DOB);

  const inputClassName =
    "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

  return (
    <>
      <Helmet>
        <title>
          Age Calculator - Exact Age in Years, Months & Days
        </title>
        <meta
          name="description"
          content="Calculate your exact age from date of birth to today in years, months, days, and total days lived. Free online age calculator."
        />
        <meta
          name="keywords"
          content="age calculator, calculate my age from date of birth, how old am I calculator, exact age in years months days, birthday age finder, chronological age calculator online"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Age Calculator - Years, Months, Days"
        />
        <meta
          property="og:description"
          content="Enter your birth date to see your exact age and total days lived."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Age Calculator - How Old Am I?"
        />
        <meta
          name="twitter:description"
          content="Free age calculator from date of birth to today."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Age Calculator",
            url: PAGE_URL,
            description:
              "Calculate exact age in years, months, and days from a date of birth.",
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
            name: "Age Calculator",
            url: PAGE_URL,
            description:
              "Web-based age calculator that computes years, months, days, and total days from date of birth to today.",
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
            headline:
              "Age Calculator: Find Your Exact Age in Years, Months, and Days",
            description:
              "Learn how to calculate chronological age from date of birth, understand years-months-days breakdown, and use our free online age calculator.",
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
                name: "How does the age calculator work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Enter your date of birth. The tool compares it to today's date and returns years, months, days, and total days lived using calendar month lengths.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use a future birth date?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. A date of birth in the future is rejected because age cannot be negative.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between age in Y-M-D and total days?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Years, months, and days follow everyday birthday counting. Total days is the straight day count from birth date to today.",
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
                name: "Age Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Date of birth
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className={inputClassName}
              max={new Date().toISOString().split("T")[0]}
            />
            <p className="text-sm text-on-surface-variant">
              Uses today&apos;s date on your device. Future dates are not
              allowed.
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Age Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Years</span>
              <span className="font-code-num text-code-num text-primary">
                {result?.years != null ? result.years : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Months</span>
              <span className="font-code-num text-code-num">
                {result?.months != null ? result.months : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Days</span>
              <span className="font-code-num text-code-num">
                {result?.days != null ? result.days : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total days lived</span>
              <span className="font-code-num text-code-num">
                {result?.totalDays != null
                  ? result.totalDays.toLocaleString()
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default AgeCalculator;
