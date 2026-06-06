import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/conception-calculator";

const DEFAULTS = {
  lastPeriod: "",
  cycleLength: "28",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const addDays = (date, days) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

const fmtDate = (date) =>
  date.toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const computeConception = (lastPeriod, cycleLength) => {
  if (lastPeriod.trim() === "" || cycleLength.trim() === "") {
    return null;
  }

  const periodDate = new Date(lastPeriod);
  const cycle = parseInt(cycleLength, 10);

  if (isNaN(periodDate.getTime())) {
    return { error: "Enter a valid last period date." };
  }

  if (isNaN(cycle)) {
    return { error: "Enter a valid cycle length." };
  }

  if (cycle < 21 || cycle > 45) {
    return { error: "Cycle length is usually between 21 and 45 days." };
  }

  const ovulationOffset = cycle - 14;
  const ovulationDate = addDays(periodDate, ovulationOffset);
  const fertileStart = addDays(ovulationDate, -5);
  const fertileEnd = addDays(ovulationDate, 1);

  return {
    lastPeriod: periodDate,
    cycleLength: cycle,
    ovulationDate,
    conceptionDate: ovulationDate,
    fertileStart,
    fertileEnd,
    ovulationOffset,
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "How does a conception calculator work?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It uses the first day of your last menstrual period (LMP) and average cycle length. Ovulation is estimated at cycle length minus 14 days, with a fertile window from five days before ovulation through one day after.",
    },
  },
  {
    "@type": "Question",
    name: "When is the best time to conceive?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The best days to get pregnant are usually the five days before ovulation plus ovulation day and the day after—the fertile window this calculator displays.",
    },
  },
  {
    "@type": "Question",
    name: "How accurate is an ovulation calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Calendar estimates work best with regular cycles. Irregular periods, stress, illness, PCOS, and perimenopause can shift ovulation. Confirm with ovulation tests or medical advice when needed.",
    },
  },
  {
    "@type": "Question",
    name: "How do I calculate ovulation for a 28-day cycle?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "On a typical 28-day cycle, ovulation is often about 14 days after the first day of your last period. Enter LMP and cycle length 28 for instant fertile dates.",
    },
  },
  {
    "@type": "Question",
    name: "Why subtract 14 from cycle length?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The luteal phase after ovulation is often about 14 days, so ovulation moves when total cycle length changes. Ovulation day ≈ LMP + (cycle length − 14).",
    },
  },
  {
    "@type": "Question",
    name: "What if I have irregular periods?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Use your best average from several months or track ovulation with LH tests or basal body temperature. Wide variation reduces calendar-only accuracy.",
    },
  },
  {
    "@type": "Question",
    name: "What is the difference between conception and ovulation?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Ovulation is egg release; conception is fertilization by sperm, often on ovulation day or within the prior fertile days when sperm were present.",
    },
  },
  {
    "@type": "Question",
    name: "Is this conception calculator medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It is an educational pregnancy planning and fertility awareness tool. Medical diagnosis and fertility treatment require a qualified healthcare provider.",
    },
  },
];

const ConceptionCalculator = () => {
  const [lastPeriod, setLastPeriod] = useState(DEFAULTS.lastPeriod);
  const [cycleLength, setCycleLength] = useState(DEFAULTS.cycleLength);

  const result = computeConception(lastPeriod, cycleLength);

  const reset = () => {
    setLastPeriod(DEFAULTS.lastPeriod);
    setCycleLength(DEFAULTS.cycleLength);
  };

  return (
    <>
      <Helmet>
        <title>
          Conception Calculator - Ovulation and Fertile Window
        </title>
        <meta
          name="description"
          content="Free conception calculator: ovulation date, fertile window & best days to conceive from LMP and cycle length. Ovulation calculator for pregnancy planning."
        />
        <meta
          name="keywords"
          content="conception calculator, ovulation calculator, fertility calculator, fertile window calculator, fertile days calculator, best time to conceive, pregnancy planner, menstrual cycle calculator, conception date calculator, trying to conceive, most fertile days, LMP ovulation"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Conception Calculator" />
        <meta
          property="og:description"
          content="Ovulation and fertile window from LMP and average cycle length."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Conception Calculator" />
        <meta
          name="twitter:description"
          content="Estimate conception timing and fertile days."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Conception Calculator",
            url: PAGE_URL,
            description:
              "Estimate ovulation, conception date, and fertile window from menstrual cycle inputs.",
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
            name: "Conception Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate ovulation and fertile window for pregnancy planning.",
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
            headline: "Conception Timing and the Fertile Window",
            description:
              "How last menstrual period and cycle length estimate ovulation.",
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
                name: "Conception Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              First day of last period
            </label>
            <input
              type="date"
              value={lastPeriod}
              onChange={(e) => setLastPeriod(e.target.value)}
              className={inputClassName}
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Average cycle length
            </label>
            <div className="relative">
              <input
                type="number"
                value={cycleLength}
                onChange={(e) => setCycleLength(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.cycleLength}
                min="21"
                max="45"
                step="1"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                days
              </span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Count from day 1 of one period to day 1 of the next (often 28 days).
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
            Conception summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Estimated ovulation / conception
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
              <span className="text-on-surface">Cycle length used</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.cycleLength} days`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Days after LMP to ovulation</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.ovulationOffset} days`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Ovulation ≈ LMP + (cycle length − 14). Fertile window ≈ 5 days
              before through 1 day after ovulation. Not a substitute for medical
              fertility care.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConceptionCalculator;
