import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/pregnancy-conception-calculator";

const DEFAULTS = {
  dueDate: "",
};

const DAYS_CONCEPTION_TO_DUE = 266; // 38 weeks
const DAYS_LMP_TO_DUE = 280; // 40 weeks

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

const computeConceptionFromDueDate = (dueDate) => {
  if (dueDate.trim() === "") {
    return null;
  }

  const due = startOfDay(new Date(dueDate));

  if (isNaN(due.getTime())) {
    return { error: "Enter a valid estimated due date." };
  }

  const conception = addDays(due, -DAYS_CONCEPTION_TO_DUE);
  const impliedLmp = addDays(due, -DAYS_LMP_TO_DUE);
  const fertileStart = addDays(conception, -5);
  const fertileEnd = addDays(conception, 1);
  const today = startOfDay(new Date());
  const daysSinceLmp = diffDays(today, impliedLmp);
  let gestationalWeeks = null;
  let gestationalDaysRemainder = null;

  if (daysSinceLmp >= 0) {
    gestationalWeeks = Math.floor(daysSinceLmp / 7);
    gestationalDaysRemainder = daysSinceLmp % 7;
  }

  return {
    dueDate: due,
    conceptionDate: conception,
    impliedLmp,
    fertileStart,
    fertileEnd,
    gestationalWeeks,
    gestationalDaysRemainder,
    daysUntilDue: diffDays(due, today),
    formula: "Conception ≈ due date − 266 days (38 weeks)",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is a pregnancy conception calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It estimates when conception likely occurred by subtracting 266 days (38 weeks) from your estimated due date, and shows a fertile window around that date.",
    },
  },
  {
    "@type": "Question",
    name: "How is conception date calculated from due date?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Estimated conception ≈ due date − 266 days. This assumes about 38 weeks from fertilization to due date, paired with 40 weeks from LMP dating.",
    },
  },
  {
    "@type": "Question",
    name: "Why 266 days from conception to due date?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Clinical dating uses 280 days from LMP (40 weeks). Conception is often about 14 days after LMP, so 280 − 14 = 266 days from conception to the same EDD.",
    },
  },
  {
    "@type": "Question",
    name: "Does this use menstrual cycle length?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No direct cycle input. You enter an estimated due date (often from ultrasound or LMP + 280). For forward dating from last period, use the Conception or Ovulation calculators.",
    },
  },
  {
    "@type": "Question",
    name: "How accurate is conception date from due date?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It is an average estimate. Actual conception can vary by several days depending on ovulation timing, cycle length, and when ultrasound adjusted your EDD.",
    },
  },
  {
    "@type": "Question",
    name: "What is the fertile window shown?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "About five days before estimated conception through one day after—aligned with common calendar fertile-window rules when conception day approximates ovulation.",
    },
  },
  {
    "@type": "Question",
    name: "Is this pregnancy conception calculator medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Educational dating only. Prenatal care and paternity or legal questions require professional guidance.",
    },
  },
];

const PregnancyConceptionCalculator = () => {
  const [dueDate, setDueDate] = useState(DEFAULTS.dueDate);

  const result = computeConceptionFromDueDate(dueDate);

  const reset = () => {
    setDueDate(DEFAULTS.dueDate);
  };

  return (
    <>
      <Helmet>
        <title>
          Pregnancy Conception Calculator - Date from Due Date (EDD)
        </title>
        <meta
          name="description"
          content="Estimate conception date from due date: EDD − 266 days. Fertile window & implied LMP—not cycle or ovulation test input."
        />
        <meta
          name="keywords"
          content="pregnancy conception calculator, conception date from due date, when did I conceive, reverse due date calculator, fertile window from EDD"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pregnancy Conception Calculator" />
        <meta
          property="og:description"
          content="Conception date and fertile window from estimated due date."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pregnancy Conception Calculator" />
        <meta
          name="twitter:description"
          content="When did I conceive? Estimate from EDD."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Pregnancy Conception Calculator",
            url: PAGE_URL,
            description:
              "Estimate conception date from estimated due date using 266-day rule.",
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
            name: "Pregnancy Conception Calculator",
            url: PAGE_URL,
            description:
              "Web tool to reverse-estimate conception from due date.",
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
            headline: "Conception Date from Estimated Due Date",
            description:
              "How to work backward from EDD to likely conception timing.",
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
                name: "Pregnancy Conception Calculator",
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
              Estimated due date (EDD)
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Use your clinician or ultrasound EDD, or one from LMP + 280 days.
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
            Conception estimate summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Estimated conception
              </span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[55%]">
                {result && !result.error
                  ? fmtDate(result.conceptionDate)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Fertile window start</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error
                  ? fmtDate(result.fertileStart)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Fertile window end</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error ? fmtDate(result.fertileEnd) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Implied LMP (EDD − 280 d)</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error
                  ? fmtDate(result.impliedLmp)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Gestational age today</span>
              <span className="font-code-num text-code-num">
                {result && !result.error && result.gestationalWeeks !== null
                  ? `${result.gestationalWeeks} wk ${result.gestationalDaysRemainder} d`
                  : result && !result.error
                    ? "Before implied LMP"
                    : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Due date used</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error ? fmtDate(result.dueDate) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Days until due date</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.daysUntilDue >= 0
                    ? `${result.daysUntilDue} days`
                    : `${Math.abs(result.daysUntilDue)} days past EDD`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Average estimate—actual conception may differ by several days.`
                : "Enter EDD to reverse-estimate conception (38 weeks before due)."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PregnancyConceptionCalculator;
