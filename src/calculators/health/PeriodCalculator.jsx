import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/health/period-calculator";

const DEFAULTS = {
  lastPeriodDate: "",
  cycleLength: "28",
};

const CYCLE_PRESETS = ["21", "24", "28", "30", "35"];

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const addDays = (date, days) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

const startOfDay = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

const fmtDate = (date) =>
  date.toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const daysFromToday = (date) => {
  const today = startOfDay(new Date());
  const target = startOfDay(date);
  return Math.round((target - today) / 86400000);
};

const computePeriod = (lastPeriodDate, cycleLength) => {
  if (lastPeriodDate.trim() === "" || cycleLength.trim() === "") {
    return null;
  }

  const lastPeriod = new Date(lastPeriodDate);
  const cycle = parseInt(cycleLength, 10);

  if (isNaN(lastPeriod.getTime())) {
    return { error: "Enter a valid last period start date." };
  }

  if (isNaN(cycle)) {
    return { error: "Enter a valid cycle length." };
  }

  if (cycle < 21 || cycle > 45) {
    return { error: "Cycle length is usually between 21 and 45 days." };
  }

  const nextPeriod = addDays(lastPeriod, cycle);
  const secondPeriod = addDays(lastPeriod, cycle * 2);
  const thirdPeriod = addDays(lastPeriod, cycle * 3);

  const daysSinceLmp = daysFromToday(lastPeriod);
  const cycleDay =
    daysSinceLmp >= 0
      ? (daysSinceLmp % cycle) + 1
      : null;

  return {
    lastPeriod,
    cycleLength: cycle,
    nextPeriod,
    upcomingPeriods: [nextPeriod, secondPeriod, thirdPeriod],
    daysUntilNextPeriod: daysFromToday(nextPeriod),
    cycleDay,
    daysSinceLmp,
    formula: "Next period ≈ last period start + cycle length (days)",
  };
};

const formatCountdown = (days) => {
  if (days === 0) return "Today";
  if (days > 0) return `In ${days} day${days === 1 ? "" : "s"}`;
  return `${Math.abs(days)} day${Math.abs(days) === 1 ? "" : "s"} ago`;
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is a period calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A period calculator estimates when your next menstrual period may start based on the first day of your last period and your average cycle length in days.",
    },
  },
  {
    "@type": "Question",
    name: "How is the next period date calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Next period start ≈ last period start date + cycle length. Cycle length is counted from day 1 of one period to day 1 of the next.",
    },
  },
  {
    "@type": "Question",
    name: "How accurate is a period calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Calendar predictions work best with regular cycles. Stress, travel, hormones, PCOS, and perimenopause can shift dates—use estimates as a guide.",
    },
  },
  {
    "@type": "Question",
    name: "What is a normal cycle length?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Many cycles fall between 21 and 35 days. This tool accepts 21–45 days. Track several months for your personal average.",
    },
  },
  {
    "@type": "Question",
    name: "Does this track ovulation?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This page focuses on next period dates. For ovulation and fertile window estimates, use the Ovulation Calculator on this site.",
    },
  },
  {
    "@type": "Question",
    name: "Is this period calculator medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It is an educational menstrual cycle tool. Irregular bleeding or missed periods should be evaluated by a healthcare provider.",
    },
  },
];

const PeriodCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState(
    DEFAULTS.lastPeriodDate
  );
  const [cycleLength, setCycleLength] = useState(DEFAULTS.cycleLength);

  const result = computePeriod(lastPeriodDate, cycleLength);

  const reset = () => {
    setLastPeriodDate(DEFAULTS.lastPeriodDate);
    setCycleLength(DEFAULTS.cycleLength);
  };

  return (
    <>
      <Helmet>
        <title>
          Period Calculator - Next Period Date &amp; Cycle Tracker
        </title>
        <meta
          name="description"
          content="Predict next period date from last period start and cycle length (days). Upcoming cycles and countdown—not medical advice."
        />
        <meta
          name="keywords"
          content="period calculator, next period calculator, menstrual cycle calculator, period tracker, when is my next period, cycle calendar"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Period Calculator" />
        <meta
          property="og:description"
          content="Estimate your next menstrual period from cycle length and LMP."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Period Calculator" />
        <meta
          name="twitter:description"
          content="Next period date and cycle day countdown."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Period Calculator",
            url: PAGE_URL,
            description:
              "Predict next menstrual period from last period and cycle length.",
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
            name: "Period Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate upcoming menstrual period dates.",
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
            headline: "Next Period Date from Menstrual Cycle Length",
            description:
              "How to predict upcoming periods using LMP and cycle days.",
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
                name: "Period Calculator",
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
              value={lastPeriodDate}
              onChange={(e) => setLastPeriodDate(e.target.value)}
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
            <div className="flex flex-wrap gap-2 pt-1">
              {CYCLE_PRESETS.map((days) => (
                <button
                  key={days}
                  type="button"
                  onClick={() => setCycleLength(days)}
                  className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                    cycleLength === days
                      ? "bg-primary text-white border-primary"
                      : "border-outline-variant text-on-surface-variant hover:bg-surface-container"
                  }`}
                >
                  {days} days
                </button>
              ))}
            </div>
            <p className="text-sm text-on-surface-variant">
              Day 1 to day 1 of the next period (often 28 days).
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
            Period cycle summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Next period</span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[55%]">
                {result && !result.error
                  ? fmtDate(result.nextPeriod)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Countdown to next period</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? formatCountdown(result.daysUntilNextPeriod)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Current cycle day</span>
              <span className="font-code-num text-code-num">
                {result && !result.error && result.cycleDay != null
                  ? `Day ${result.cycleDay} of ${result.cycleLength}`
                  : result && !result.error
                    ? "Before last period date"
                    : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Last period used</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error
                  ? fmtDate(result.lastPeriod)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Cycle length</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.cycleLength} days`
                  : "—"}
              </span>
            </div>

            {result && !result.error && (
              <div className="pt-2 border-t border-outline-variant space-y-2">
                <p className="text-on-surface font-medium">
                  Next 3 predicted periods
                </p>
                <ul className="space-y-1 text-body-lg font-body-lg text-on-surface-variant">
                  {result.upcomingPeriods.map((date, i) => (
                    <li key={i} className="flex justify-between gap-4">
                      <span>Period {i + 1}</span>
                      <span className="font-code-num text-code-num text-sm">
                        {fmtDate(date)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Update LMP when your period starts for best accuracy.`
                : "Next period ≈ last period + cycle days."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PeriodCalculator;
