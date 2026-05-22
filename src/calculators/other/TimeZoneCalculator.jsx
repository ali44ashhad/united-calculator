import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/time-zone-calculator";

const TIME_ZONES = [
  "UTC",
  "America/New_York",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Berlin",
  "Asia/Kolkata",
  "Asia/Tokyo",
  "Australia/Sydney",
];

const DEFAULTS = {
  dateTime: "2025-06-15T12:00",
  fromZone: "UTC",
  toZone: "Asia/Kolkata",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const zonedPartsFormatter = (timeZone) =>
  new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

const readZonedParts = (ms, timeZone) => {
  const parts = zonedPartsFormatter(timeZone).formatToParts(new Date(ms));
  const get = (type) =>
    Number(parts.find((p) => p.type === type)?.value ?? "0");
  return {
    year: get("year"),
    month: get("month"),
    day: get("day"),
    hour: get("hour"),
    minute: get("minute"),
  };
};

/** Find UTC instant for a wall-clock time in a given IANA zone */
const instantFromWallClock = (isoLocal, timeZone) => {
  const match = isoLocal.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/);
  if (!match) return null;

  const want = {
    year: Number(match[1]),
    month: Number(match[2]),
    day: Number(match[3]),
    hour: Number(match[4]),
    minute: Number(match[5]),
  };

  let ms = Date.UTC(
    want.year,
    want.month - 1,
    want.day,
    want.hour,
    want.minute
  );

  for (let i = 0; i < 10; i++) {
    const got = readZonedParts(ms, timeZone);
    if (
      got.year === want.year &&
      got.month === want.month &&
      got.day === want.day &&
      got.hour === want.hour &&
      got.minute === want.minute
    ) {
      return ms;
    }

    const deltaMs =
      (want.hour - got.hour) * 3_600_000 +
      (want.minute - got.minute) * 60_000 +
      (want.day - got.d) * 86_400_000;

    ms += deltaMs;
  }

  return ms;
};

const formatZonedDisplay = (ms, timeZone) =>
  new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
    hour12: true,
  }).format(new Date(ms));

const computeTimeZone = (dateTime, fromZone, toZone) => {
  if (!dateTime || dateTime.trim() === "") {
    return null;
  }

  if (!fromZone || !toZone) {
    return { error: "Select source and destination time zones." };
  }

  try {
    const instantMs = instantFromWallClock(dateTime, fromZone);
    if (instantMs == null) {
      return { error: "Enter a valid date and time." };
    }

    const fromDisplay = formatZonedDisplay(instantMs, fromZone);
    const toDisplay = formatZonedDisplay(instantMs, toZone);

    return {
      dateTime,
      fromZone,
      toZone,
      instantMs,
      fromDisplay,
      toDisplay,
      sameZone: fromZone === toZone,
    };
  } catch {
    return { error: "Conversion failed. Check the date/time and time zones." };
  }
};

const TimeZoneCalculator = () => {
  const [dateTime, setDateTime] = useState(DEFAULTS.dateTime);
  const [fromZone, setFromZone] = useState(DEFAULTS.fromZone);
  const [toZone, setToZone] = useState(DEFAULTS.toZone);

  const result = computeTimeZone(dateTime, fromZone, toZone);

  const reset = () => {
    setDateTime(DEFAULTS.dateTime);
    setFromZone(DEFAULTS.fromZone);
    setToZone(DEFAULTS.toZone);
  };

  return (
    <>
      <Helmet>
        <title>
          Time Zone Calculator - Convert Date &amp; Time Between Zones
        </title>
        <meta
          name="description"
          content="Convert a date and time from one IANA time zone to another. Enter local wall time in the source zone; see the equivalent instant in the destination zone."
        />
        <meta
          name="keywords"
          content="time zone converter, UTC to IST calculator, EST to PST time conversion, world clock time zone calculator, convert meeting time between zones"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Time Zone Calculator"
        />
        <meta
          property="og:description"
          content="Wall-clock time in one zone → same moment in another zone."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Time Zone Calculator" />
        <meta
          name="twitter:description"
          content="Convert times between major world time zones."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Time Zone Calculator",
            url: PAGE_URL,
            description:
              "Convert date and time between IANA time zones such as UTC, US Eastern, London, Berlin, India, Tokyo, and Sydney.",
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
            name: "Time Zone Calculator",
            url: PAGE_URL,
            description:
              "Web application to convert a wall-clock time in one time zone to the equivalent time in another.",
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
            headline: "How to Convert Time Between Time Zones",
            description:
              "Interpret the entered date and time as wall clock in the source zone, find the UTC instant, then format that instant in the destination zone.",
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
                name: "How does this time zone calculator work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Enter a date and time as wall clock in the source time zone. The tool finds that instant and displays the same moment formatted in the destination zone.",
                },
              },
              {
                "@type": "Question",
                name: "What is UTC?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Coordinated Universal Time is the global reference. Many zones are expressed as offsets from UTC, though daylight saving shifts offsets seasonally.",
                },
              },
              {
                "@type": "Question",
                name: "Does this handle daylight saving time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, when using IANA zone names like America/New_York, the browser applies current DST rules for the date you enter.",
                },
              },
              {
                "@type": "Question",
                name: "Why does my meeting time look different in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "India uses Asia/Kolkata (IST, UTC+5:30). A noon UTC meeting is 5:30 PM IST on the same calendar date.",
                },
              },
              {
                "@type": "Question",
                name: "Is this the same as a time duration calculator?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Time zone conversion maps one instant between regions. Duration tools measure elapsed time between two clock times on one calendar day.",
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
                name: "Time Zone Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The date and time you enter is treated as <strong>wall clock in the
          source zone</strong>, then shown in the destination zone for the same
          instant.
        </p>

        <div className="space-y-2">
          <label className="font-h3 text-h3 text-on-surface">
            Date &amp; time (in source zone)
          </label>
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            className={inputClassName}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">From zone</label>
            <select
              value={fromZone}
              onChange={(e) => setFromZone(e.target.value)}
              className={inputClassName}
            >
              {TIME_ZONES.map((tz) => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">To zone</label>
            <select
              value={toZone}
              onChange={(e) => setToZone(e.target.value)}
              className={inputClassName}
            >
              {TIME_ZONES.map((tz) => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))}
            </select>
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
            Time zone summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <span className="text-on-surface shrink-0">Source ({fromZone})</span>
              <span className="font-code-num text-code-num text-right">
                {result?.fromDisplay && !result.error
                  ? result.fromDisplay
                  : "—"}
              </span>
            </div>
            <div className="flex items-start justify-between gap-4">
              <span className="text-on-surface shrink-0">Destination ({toZone})</span>
              <span className="font-code-num text-code-num text-primary text-lg text-right">
                {result?.toDisplay && !result.error
                  ? result.toDisplay
                  : "—"}
              </span>
            </div>
            {result?.sameZone && !result.error && (
              <p className="text-sm text-on-surface-variant">
                Source and destination zones are the same—the displayed times match.
              </p>
            )}
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Uses your browser&apos;s IANA time zone database (DST aware). For
              elapsed time on one day, use Time Duration or Hours calculators.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TimeZoneCalculator;
