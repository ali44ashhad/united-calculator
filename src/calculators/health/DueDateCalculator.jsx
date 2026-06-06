import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/due-date-calculator";

const DEFAULTS = {
  lastPeriod: "",
};

const GESTATION_DAYS = 280; // 40 weeks from LMP (Naegele's rule)

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const startOfDay = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

const addDays = (date, days) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

const diffDays = (later, earlier) =>
  Math.round((startOfDay(later) - startOfDay(earlier)) / (1000 * 60 * 60 * 24));

const fmtDate = (date) =>
  date.toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const getTrimester = (weeks) => {
  if (weeks < 13) return "First trimester (weeks 1–12)";
  if (weeks < 27) return "Second trimester (weeks 13–26)";
  if (weeks < 40) return "Third trimester (weeks 27–40)";
  return "At or past 40 weeks—consult your provider";
};

const computeDueDate = (lastPeriod) => {
  if (lastPeriod.trim() === "") {
    return null;
  }

  const lmp = startOfDay(new Date(lastPeriod));

  if (isNaN(lmp.getTime())) {
    return { error: "Enter a valid first day of last period." };
  }

  const today = startOfDay(new Date());
  const dueDate = addDays(lmp, GESTATION_DAYS);
  const estimatedConception = addDays(lmp, 14);
  const daysUntilDue = diffDays(dueDate, today);
  const daysSinceLmp = diffDays(today, lmp);

  let gestationalWeeks = null;
  let gestationalDaysRemainder = null;

  if (daysSinceLmp >= 0) {
    gestationalWeeks = Math.floor(daysSinceLmp / 7);
    gestationalDaysRemainder = daysSinceLmp % 7;
  }

  return {
    lmp,
    dueDate,
    estimatedConception,
    daysUntilDue,
    daysSinceLmp,
    gestationalWeeks,
    gestationalDaysRemainder,
    trimester:
      gestationalWeeks !== null ? getTrimester(gestationalWeeks) : null,
    gestationDaysTotal: GESTATION_DAYS,
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "How is pregnancy due date calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "From the first day of the last menstrual period (LMP), add 280 days (40 weeks). This is Naegele's rule used for estimated due date (EDD).",
    },
  },
  {
    "@type": "Question",
    name: "When is my baby due based on last period?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter LMP in this due date calculator. EDD = LMP + 280 days. Only about 4–5% of babies arrive on the exact EDD.",
    },
  },
  {
    "@type": "Question",
    name: "Can my due date change during pregnancy?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Early ultrasound dating often adjusts EDD if it differs from LMP-based dates. Follow your clinician's updated estimate.",
    },
  },
  {
    "@type": "Question",
    name: "What is gestational age?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Gestational age counts from LMP, not conception. At LMP day 1 you are 0 weeks; 280 days later is 40 weeks 0 days.",
    },
  },
  {
    "@type": "Question",
    name: "Is due date the same as delivery date?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "EDD is an estimate. Normal delivery often occurs between about 37 and 42 weeks gestation.",
    },
  },
  {
    "@type": "Question",
    name: "How many weeks pregnant am I from LMP?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Count days from LMP to today, divide by 7 for full weeks; remainder is extra days (e.g. 8 weeks 3 days).",
    },
  },
  {
    "@type": "Question",
    name: "Does this use conception date instead of LMP?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This tool uses LMP + 280 days. Conception is often about 14 days after LMP; ultrasound or conception-based dating may differ.",
    },
  },
  {
    "@type": "Question",
    name: "Is this due date calculator medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It is an educational EDD estimate. Prenatal care and official dating come from your healthcare provider.",
    },
  },
];

const DueDateCalculator = () => {
  const [lastPeriod, setLastPeriod] = useState(DEFAULTS.lastPeriod);

  const result = computeDueDate(lastPeriod);

  const reset = () => {
    setLastPeriod(DEFAULTS.lastPeriod);
  };

  return (
    <>
      <Helmet>
        <title>
          Due Date Calculator - Pregnancy EDD from Last Period (40 Weeks)
        </title>
        <meta
          name="description"
          content="Free due date calculator: estimated delivery date (EDD) from LMP + 280 days. Gestational weeks, trimester, and days until due—not a substitute for ultrasound dating."
        />
        <meta
          name="keywords"
          content="due date calculator, pregnancy due date, EDD calculator, when is my baby due, gestational age calculator, expected delivery date, LMP due date, 40 weeks pregnant, pregnancy week calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Due Date Calculator" />
        <meta
          property="og:description"
          content="Estimate your baby's due date from the first day of your last period."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Due Date Calculator" />
        <meta
          name="twitter:description"
          content="EDD and gestational age from LMP using Naegele's rule."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Due Date Calculator",
            url: PAGE_URL,
            description:
              "Calculate estimated pregnancy due date from last menstrual period.",
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
            name: "Due Date Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate EDD and gestational age from LMP.",
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
            headline: "Pregnancy Due Date and Gestational Age",
            description:
              "How EDD is estimated from LMP using 280 days / 40 weeks.",
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
                name: "Due Date Calculator",
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
              First day of last period (LMP)
            </label>
            <input
              type="date"
              value={lastPeriod}
              onChange={(e) => setLastPeriod(e.target.value)}
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Day 1 of bleeding from your last menstrual period—the standard start
              for pregnancy dating.
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Due date summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Estimated due date (EDD)
              </span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[55%]">
                {result && !result.error ? fmtDate(result.dueDate) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Gestational age today</span>
              <span className="font-code-num text-code-num">
                {result && !result.error && result.gestationalWeeks !== null
                  ? `${result.gestationalWeeks} wk ${result.gestationalDaysRemainder} d`
                  : result && !result.error
                    ? "LMP is in the future"
                    : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Trimester (approx.)</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error && result.trimester
                  ? result.trimester
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Days until due date</span>
              <span className="font-code-num text-code-num">
                {result && !result.error && result.daysSinceLmp >= 0
                  ? result.daysUntilDue >= 0
                    ? `${result.daysUntilDue} days`
                    : `${Math.abs(result.daysUntilDue)} days past EDD`
                  : result && !result.error
                    ? "—"
                    : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Est. conception (~LMP+14)</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error
                  ? fmtDate(result.estimatedConception)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Method</span>
              <span className="font-code-num text-code-num text-sm">
                {result && !result.error
                  ? `LMP + ${result.gestationDaysTotal} days (40 wk)`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Naegele&apos;s rule (LMP + 280 days). Ultrasound may change your
              official EDD—always follow prenatal care guidance.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DueDateCalculator;
