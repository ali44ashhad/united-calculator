import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/math/random-number-generator";

const DEFAULTS = {
  min: "1",
  max: "100",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const parseWholeNumber = (value) => {
  const trimmed = value.trim();
  if (trimmed === "") return null;
  const num = Number(trimmed);
  if (!Number.isInteger(num)) return NaN;
  return num;
};

const validateRange = (minInput, maxInput) => {
  if (minInput.trim() === "" || maxInput.trim() === "") {
    return null;
  }

  const minimum = parseWholeNumber(minInput);
  const maximum = parseWholeNumber(maxInput);

  if (Number.isNaN(minimum) || Number.isNaN(maximum)) {
    return { error: "Enter whole integers for minimum and maximum." };
  }

  if (minimum > maximum) {
    return { error: "Minimum cannot be greater than maximum." };
  }

  return {
    minimum,
    maximum,
    rangeSize: maximum - minimum + 1,
    rangeText: `[${minimum}, ${maximum}] inclusive`,
  };
};

const generateRandomNumber = (minimum, maximum) => {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What does this random number generator do?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It picks one pseudo-random whole integer from an inclusive range you set (minimum through maximum).",
    },
  },
  {
    "@type": "Question",
    name: "Is the range inclusive?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes—both minimum and maximum can be chosen. Example: 1 to 6 simulates a die roll.",
    },
  },
  {
    "@type": "Question",
    name: "Is this cryptographically secure?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No—it uses Math.random() in the browser for games and casual use, not security or lottery draws.",
    },
  },
  {
    "@type": "Question",
    name: "Can I generate multiple numbers at once?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "This tool returns one number per click. Click Generate again for another value.",
    },
  },
  {
    "@type": "Question",
    name: "Can min and max be negative?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes—any integers work as long as minimum ≤ maximum.",
    },
  },
  {
    "@type": "Question",
    name: "Are decimal values allowed?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No—enter whole integers only. The result is always an integer.",
    },
  },
];

const RandomNumberGenerator = () => {
  const [min, setMin] = useState(DEFAULTS.min);
  const [max, setMax] = useState(DEFAULTS.max);
  const [result, setResult] = useState(null);

  const rangeInfo = validateRange(min, max);

  const generate = () => {
    const validated = validateRange(min, max);
    if (!validated) return;
    if (validated.error) {
      setResult(validated);
      return;
    }

    const value = generateRandomNumber(validated.minimum, validated.maximum);
    setResult({
      value,
      minimum: validated.minimum,
      maximum: validated.maximum,
      rangeSize: validated.rangeSize,
      rangeText: validated.rangeText,
      formula: "Uniform integer in [min, max] via Math.random()",
    });
  };

  const reset = () => {
    setMin(DEFAULTS.min);
    setMax(DEFAULTS.max);
    setResult(null);
  };

  return (
    <>
      <Helmet>
        <title>
          Random Number Generator - Integer in Min–Max Range
        </title>
        <meta
          name="description"
          content="Generate one pseudo-random whole integer from an inclusive min–max range—click to roll; not crypto-secure and not multi-draw lists."
        />
        <meta
          name="keywords"
          content="random number generator, random integer, number picker, dice roll, randomizer"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Random Number Generator" />
        <meta
          property="og:description"
          content="One random integer in your inclusive range."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Random Number Generator" />
        <meta
          name="twitter:description"
          content="Pseudo-random integer picker."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Random Number Generator",
            url: PAGE_URL,
            description: "Generate a random integer in a set range.",
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
            name: "Random Number Generator",
            url: PAGE_URL,
            description: "Web tool for random integers in a range.",
            applicationCategory: "UtilityApplication",
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
            headline: "Random Integer Generator",
            description: "How to pick a random number in a range.",
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
                name: "Math Calculators",
                item: "https://www.unitedcalculator.net/math",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Random Number Generator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Minimum</label>
            <input
              type="number"
              step="1"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              placeholder="e.g. 1"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Lowest integer that can be picked (inclusive).
            </p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Maximum</label>
            <input
              type="number"
              step="1"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              placeholder="e.g. 100"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">
              Highest integer that can be picked (inclusive).
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={generate}
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-lg font-h3 text-h3 shadow-md active:scale-95 transition-all"
            >
              Generate Now
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
            <span className="text-sm">Runs locally in your browser</span>
          </div>
        </div>

        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Random number summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Result</span>
              <span className="font-code-num text-code-num text-primary text-2xl">
                {result && !result.error ? result.value : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Range</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.rangeText
                  : rangeInfo && !rangeInfo.error
                    ? rangeInfo.rangeText
                    : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Possible values</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.rangeSize
                  : rangeInfo && !rangeInfo.error
                    ? rangeInfo.rangeSize
                    : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Minimum</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.minimum
                  : rangeInfo && !rangeInfo.error
                    ? rangeInfo.minimum
                    : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Maximum</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? result.maximum
                  : rangeInfo && !rangeInfo.error
                    ? rangeInfo.maximum
                    : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. One integer per click—not crypto RNG or batch lists.`
                : "Set min and max, then click Generate Now."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RandomNumberGenerator;
