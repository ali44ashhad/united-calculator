import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/pregnancy-calculator";

const DEFAULTS = {
  lastPeriodDate: "",
};

const GESTATION_DAYS = 280;

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

const computePregnancy = (lastPeriodDate) => {
  if (lastPeriodDate.trim() === "") {
    return null;
  }

  const lmp = startOfDay(new Date(lastPeriodDate));

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
  let progressPercent = null;

  if (daysSinceLmp >= 0) {
    gestationalWeeks = Math.floor(daysSinceLmp / 7);
    gestationalDaysRemainder = daysSinceLmp % 7;
    progressPercent = Math.min(100, (daysSinceLmp / GESTATION_DAYS) * 100);
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
    progressPercent,
    gestationDaysTotal: GESTATION_DAYS,
    formula: "LMP + 280 days (40 weeks)",
  };
};

const fmtPct = (n) =>
  parseFloat(n.toFixed(1)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "How does the pregnancy calculator work?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter the first day of your last menstrual period (LMP). Due date = LMP + 280 days. Gestational age is counted from LMP to today in weeks and days.",
    },
  },
  {
    "@type": "Question",
    name: "How many weeks pregnant am I?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Count days from LMP to today, divide by 7 for full weeks; the remainder is extra days (e.g. 12 weeks 4 days).",
    },
  },
  {
    "@type": "Question",
    name: "Can I track pregnancy progress with this calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. It shows gestational weeks, trimester, estimated due date, days until due, and approximate progress through 40 weeks from LMP.",
    },
  },
  {
    "@type": "Question",
    name: "Does this use conception date?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No direct input. Dating uses LMP + 280 days. Estimated conception is shown as roughly LMP + 14 days. For conception-based dating, use the Pregnancy Conception Calculator.",
    },
  },
  {
    "@type": "Question",
    name: "Is pregnancy calculator the same as due date calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Both use LMP + 280 days. This page emphasizes how far along you are today; the Due Date Calculator emphasizes EDD wording.",
    },
  },
  {
    "@type": "Question",
    name: "Can my due date change?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Early ultrasound often adjusts official dating. Follow your prenatal provider's EDD.",
    },
  },
  {
    "@type": "Question",
    name: "Is this pregnancy calculator medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Educational tool only. Prenatal care and official dating require a licensed healthcare provider.",
    },
  },
];

const PregnancyCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState(
    DEFAULTS.lastPeriodDate
  );

  const result = computePregnancy(lastPeriodDate);

  const reset = () => {
    setLastPeriodDate(DEFAULTS.lastPeriodDate);
  };

  return (
    <>
      <Helmet>
        <title>
          Pregnancy Calculator - Weeks Pregnant &amp; Due Date from LMP
        </title>
        <meta
          name="description"
          content="Track pregnancy from LMP: gestational weeks, trimester, due date (LMP+280 days), and progress. LMP input only—not conception date."
        />
        <meta
          name="keywords"
          content="pregnancy calculator, how many weeks pregnant, pregnancy week calculator, due date from LMP, gestational age, pregnancy tracker, trimester calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pregnancy Calculator" />
        <meta
          property="og:description"
          content="Gestational age, trimester, and due date from last period."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pregnancy Calculator" />
        <meta
          name="twitter:description"
          content="Weeks pregnant and EDD from LMP."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Pregnancy Calculator",
            url: PAGE_URL,
            description:
              "Track pregnancy weeks, trimester, and due date from LMP.",
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
            name: "Pregnancy Calculator",
            url: PAGE_URL,
            description:
              "Web tool for gestational age and pregnancy progress from LMP.",
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
            headline: "Pregnancy Weeks and Due Date from LMP",
            description:
              "How to estimate gestational age and EDD during pregnancy.",
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
                name: "Pregnancy Calculator",
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
              value={lastPeriodDate}
              onChange={(e) => setLastPeriodDate(e.target.value)}
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Standard start for pregnancy dating and gestational age.
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
            Pregnancy progress summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                How far along today
              </span>
              <span className="font-code-num text-code-num text-lg text-primary">
                {result && !result.error && result.gestationalWeeks !== null
                  ? `${result.gestationalWeeks} wk ${result.gestationalDaysRemainder} d`
                  : result && !result.error
                    ? "LMP is in the future"
                    : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Estimated due date</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error ? fmtDate(result.dueDate) : "—"}
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
              <span className="text-on-surface">Progress (~40 weeks)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error && result.progressPercent != null
                  ? `${fmtPct(result.progressPercent)}%`
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
                {result && !result.error ? result.formula : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Gestational age counts from LMP. Ultrasound may update your official
              dates—follow prenatal care guidance.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PregnancyCalculator;
