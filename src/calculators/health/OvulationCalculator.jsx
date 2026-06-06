import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/health/ovulation-calculator";

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

const computeOvulation = (lastPeriodDate, cycleLength) => {
  if (lastPeriodDate.trim() === "" || cycleLength.trim() === "") {
    return null;
  }

  const periodDate = new Date(lastPeriodDate);
  const cycle = parseInt(cycleLength, 10);

  if (isNaN(periodDate.getTime())) {
    return { error: "Enter a valid last period start date." };
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
  const nextPeriod = addDays(periodDate, cycle);
  const today = startOfDay(new Date());
  const inFertileWindow =
    today >= startOfDay(fertileStart) && today <= startOfDay(fertileEnd);

  return {
    lastPeriod: periodDate,
    cycleLength: cycle,
    ovulationDate,
    fertileStart,
    fertileEnd,
    nextPeriod,
    ovulationOffset,
    daysUntilOvulation: daysFromToday(ovulationDate),
    daysUntilFertileStart: daysFromToday(fertileStart),
    daysUntilNextPeriod: daysFromToday(nextPeriod),
    inFertileWindow,
    formula: "Ovulation ≈ LMP + (cycle length − 14)",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is an ovulation calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "An ovulation calculator estimates when you likely ovulate and your fertile window from the first day of your last period and average cycle length using the calendar method.",
    },
  },
  {
    "@type": "Question",
    name: "How is ovulation calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Ovulation day ≈ last period start + (cycle length − 14 days), assuming a roughly 14-day luteal phase. Fertile window is about five days before ovulation through one day after.",
    },
  },
  {
    "@type": "Question",
    name: "When is the fertile window?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Sperm can survive several days; eggs about 12–24 hours after release. This tool shows fertile window as ovulation minus 5 days through ovulation plus 1 day.",
    },
  },
  {
    "@type": "Question",
    name: "How accurate is an ovulation calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Calendar estimates work best with regular cycles. Irregular periods, stress, PCOS, and perimenopause can shift ovulation. Confirm with LH tests or medical advice when needed.",
    },
  },
  {
    "@type": "Question",
    name: "How do I calculate ovulation on a 28-day cycle?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Ovulation is often about day 14: enter LMP and cycle length 28. Ovulation ≈ LMP + 14 days.",
    },
  },
  {
    "@type": "Question",
    name: "Is this ovulation calculator medical advice?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. It is an educational fertility awareness tool. Medical fertility evaluation requires a qualified healthcare provider.",
    },
  },
];

const OvulationCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState(
    DEFAULTS.lastPeriodDate
  );
  const [cycleLength, setCycleLength] = useState(DEFAULTS.cycleLength);

  const result = computeOvulation(lastPeriodDate, cycleLength);

  const reset = () => {
    setLastPeriodDate(DEFAULTS.lastPeriodDate);
    setCycleLength(DEFAULTS.cycleLength);
  };

  const formatCountdown = (days) => {
    if (days === 0) return "Today";
    if (days > 0) return `In ${days} day${days === 1 ? "" : "s"}`;
    return `${Math.abs(days)} day${Math.abs(days) === 1 ? "" : "s"} ago`;
  };

  return (
    <>
      <Helmet>
        <title>
          Ovulation Calculator - Fertile Window &amp; Ovulation Date
        </title>
        <meta
          name="description"
          content="Estimate ovulation date and fertile window (5 days before through 1 day after) from LMP and cycle length. Calendar method—not medical advice."
        />
        <meta
          name="keywords"
          content="ovulation calculator, fertile window calculator, ovulation date, fertile days, menstrual cycle ovulation, when do I ovulate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ovulation Calculator" />
        <meta
          property="og:description"
          content="Ovulation and fertile window from last period and cycle length."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ovulation Calculator" />
        <meta
          name="twitter:description"
          content="Fertile days and ovulation estimate from LMP."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Ovulation Calculator",
            url: PAGE_URL,
            description:
              "Estimate ovulation date and fertile window from menstrual cycle inputs.",
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
            name: "Ovulation Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute ovulation and fertile window dates.",
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
            headline: "Ovulation and the Fertile Window",
            description:
              "How cycle length and LMP estimate ovulation timing.",
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
                name: "Ovulation Calculator",
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
            Ovulation summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Estimated ovulation
              </span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[55%]">
                {result && !result.error
                  ? fmtDate(result.ovulationDate)
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
              <span className="text-on-surface">In fertile window today?</span>
              <span
                className={`font-code-num text-code-num ${
                  result && !result.error && result.inFertileWindow
                    ? "text-primary"
                    : ""
                }`}
              >
                {result && !result.error
                  ? result.inFertileWindow
                    ? "Yes"
                    : "No"
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Ovulation countdown</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? formatCountdown(result.daysUntilOvulation)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Next period (estimate)</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error
                  ? fmtDate(result.nextPeriod)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Cycle length · ovulation day</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.cycleLength} days · day ${result.ovulationOffset + 1} from LMP`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Fertile window ≈ 5 days before through 1 day after ovulation. Educational estimate only.`
                : "Calendar-method ovulation from LMP and cycle length."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default OvulationCalculator;
