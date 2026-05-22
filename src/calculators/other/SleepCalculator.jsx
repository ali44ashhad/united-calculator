import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/sleep-calculator";

const DEFAULTS = {
  wakeUpTime: "07:00",
};

const CYCLES_MAX = 6;
const CYCLE_MINUTES = 90;
const FALL_ASLEEP_BUFFER = 14;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const parseTimeParts = (value) => {
  if (!value || !value.includes(":")) return null;
  const [h, m] = value.split(":").map(Number);
  if (isNaN(h) || isNaN(m) || h < 0 || h > 23 || m < 0 || m > 59) {
    return null;
  }
  return { hours: h, minutes: m };
};

const formatClock12 = (hours, minutes) => {
  const h12 = hours % 12 || 12;
  const ampm = hours < 12 ? "AM" : "PM";
  return `${h12}:${String(minutes).padStart(2, "0")} ${ampm}`;
};

const formatDuration = (totalMinutes) => {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} h`;
  return `${h} h ${m} min`;
};

const computeSleepTimes = (wakeUpTime) => {
  if (!wakeUpTime || wakeUpTime.trim() === "") {
    return null;
  }

  const parts = parseTimeParts(wakeUpTime);
  if (!parts) {
    return { error: "Enter a valid wake-up time." };
  }

  const wake = new Date();
  wake.setHours(parts.hours, parts.minutes, 0, 0);

  const suggestions = [];
  for (let cycles = CYCLES_MAX; cycles >= 1; cycles--) {
    const totalMinutes = cycles * CYCLE_MINUTES + FALL_ASLEEP_BUFFER;
    const sleepDate = new Date(wake.getTime() - totalMinutes * 60000);
    const h = sleepDate.getHours();
    const m = sleepDate.getMinutes();
    suggestions.push({
      cycles,
      time12: formatClock12(h, m),
      time24: `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`,
      totalMinutes,
      durationLabel: formatDuration(totalMinutes),
    });
  }

  return {
    wakeUpTime,
    wakeFormatted: formatClock12(parts.hours, parts.minutes),
    fallAsleepBuffer: FALL_ASLEEP_BUFFER,
    cycleMinutes: CYCLE_MINUTES,
    suggestions,
  };
};

const SleepCalculator = () => {
  const [wakeUpTime, setWakeUpTime] = useState(DEFAULTS.wakeUpTime);

  const result = computeSleepTimes(wakeUpTime);

  const reset = () => setWakeUpTime(DEFAULTS.wakeUpTime);

  return (
    <>
      <Helmet>
        <title>
          Sleep Calculator - Bedtimes for 90-Minute Cycles Before Wake-Up
        </title>
        <meta
          name="description"
          content="Enter your wake-up time and get six suggested bedtimes based on 90-minute sleep cycles plus ~14 minutes to fall asleep. Wake up between cycles, not during deep sleep."
        />
        <meta
          name="keywords"
          content="sleep calculator wake up time, 90 minute sleep cycle calculator, what time should I go to bed, bedtime calculator by wake time, sleep cycle bedtime chart"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sleep Calculator - Bedtimes by Wake Time"
        />
        <meta
          property="og:description"
          content="Six bedtimes aligned to 90-minute sleep cycles before your alarm."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sleep Calculator" />
        <meta
          name="twitter:description"
          content="Bedtime suggestions from wake-up time and sleep cycles."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Sleep Calculator",
            url: PAGE_URL,
            description:
              "Calculate suggested bedtimes from a wake-up time using 90-minute sleep cycles.",
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
            name: "Sleep Calculator",
            url: PAGE_URL,
            description:
              "Web tool to suggest bedtimes aligned with sleep cycles before a chosen wake-up time.",
            applicationCategory: "HealthApplication",
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
              "How to Pick a Bedtime Using 90-Minute Sleep Cycles",
            description:
              "Subtract full 90-minute cycles plus a short fall-asleep buffer from your wake-up time to land between cycles instead of in deep sleep.",
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
                name: "How does this sleep calculator work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Enter your wake-up time. The tool subtracts 90-minute sleep cycles plus about 14 minutes to fall asleep and lists six bedtimes—from one cycle up to six cycles of sleep.",
                },
              },
              {
                "@type": "Question",
                name: "Why 90-minute sleep cycles?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A full sleep cycle is often quoted as roughly 90 minutes. Waking between cycles may feel easier than waking mid-cycle, though individual sleep varies.",
                },
              },
              {
                "@type": "Question",
                name: "What is the 14-minute buffer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many people need a few minutes to fall asleep after getting into bed. This calculator adds 14 minutes before counting full 90-minute cycles backward from wake-up.",
                },
              },
              {
                "@type": "Question",
                name: "Which bedtime should I pick?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Choose the latest bedtime you can still afford for enough total sleep. Six cycles is the longest option shown; one cycle is the shortest nap-like window.",
                },
              },
              {
                "@type": "Question",
                name: "Is this medical sleep advice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. It is a simple cycle math helper. Talk to a clinician about insomnia, sleep apnea, or chronic fatigue.",
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
                name: "Sleep Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-2 max-w-md">
          <label className="font-h3 text-h3 text-on-surface">
            When do you want to wake up?
          </label>
          <input
            type="time"
            value={wakeUpTime}
            onChange={(e) => setWakeUpTime(e.target.value)}
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
            Bedtime summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Wake-up time</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.wakeFormatted && !result.error
                  ? result.wakeFormatted
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Cycle length</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${CYCLE_MINUTES} min`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Fall-asleep buffer</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${FALL_ASLEEP_BUFFER} min`
                  : "—"}
              </span>
            </div>

            <div className="pt-2 border-t border-outline-variant">
              <p className="text-on-surface font-medium mb-3">
                Try to fall asleep at:
              </p>
              {result?.suggestions?.length && !result.error ? (
                <ul className="space-y-2">
                  {result.suggestions.map((row) => (
                    <li
                      key={row.cycles}
                      className="flex items-center justify-between gap-4 text-body-lg"
                    >
                      <span className="text-on-surface-variant">
                        {row.cycles} cycle{row.cycles !== 1 ? "s" : ""} (
                        {row.durationLabel})
                      </span>
                      <span className="font-code-num text-code-num">
                        {row.time12}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-code-num text-code-num">—</p>
              )}
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Bedtime = wake time − (cycles × 90 min) − 14 min to fall asleep.
              Not a substitute for medical sleep guidance.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default SleepCalculator;
