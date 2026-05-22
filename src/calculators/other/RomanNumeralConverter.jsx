import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/roman-numeral-converter";

const DEFAULTS = {
  input: "2024",
};

const ROMAN_PAIRS = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

const ROMAN_VALUES = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const arabicToRoman = (num) => {
  let n = num;
  let result = "";
  for (const [symbol, value] of ROMAN_PAIRS) {
    while (n >= value) {
      result += symbol;
      n -= value;
    }
  }
  return result;
};

const romanToArabic = (roman) => {
  const str = roman.toUpperCase().trim();
  if (!/^[IVXLCDM]+$/.test(str)) {
    return { error: "Use only valid Roman letters: I, V, X, L, C, D, M." };
  }

  let total = 0;
  for (let i = 0; i < str.length; i++) {
    const curr = ROMAN_VALUES[str[i]];
    const next = ROMAN_VALUES[str[i + 1]];
    if (curr === undefined) {
      return { error: "Invalid Roman numeral character." };
    }
    if (next && curr < next) {
      total -= curr;
    } else {
      total += curr;
    }
  }

  if (total < 1 || total > 3999) {
    return { error: "Converted value must be between 1 and 3999." };
  }

  const roundTrip = arabicToRoman(total);
  if (roundTrip !== str) {
    return {
      error: `"${str}" is not a standard classical Roman form (e.g. use IV not IIII).`,
    };
  }

  return { arabic: total, roman: str };
};

const isRomanInput = (value) => /^[IVXLCDM]+$/i.test(value.trim());

const computeConversion = (input) => {
  const trimmed = input.trim();
  if (!trimmed) {
    return null;
  }

  if (isRomanInput(trimmed)) {
    const parsed = romanToArabic(trimmed);
    if (parsed.error) return parsed;
    return {
      mode: "roman-to-arabic",
      input: trimmed.toUpperCase(),
      arabic: parsed.arabic,
      roman: parsed.roman,
    };
  }

  if (!/^\d+$/.test(trimmed)) {
    return {
      error: "Enter an integer 1–3999 or a Roman numeral (I, V, X, L, C, D, M).",
    };
  }

  const num = parseInt(trimmed, 10);
  if (num < 1 || num > 3999) {
    return { error: "Arabic numbers must be between 1 and 3999." };
  }

  return {
    mode: "arabic-to-roman",
    input: String(num),
    arabic: num,
    roman: arabicToRoman(num),
  };
};

const RomanNumeralConverter = () => {
  const [input, setInput] = useState(DEFAULTS.input);

  const result = computeConversion(input);

  const reset = () => {
    setInput(DEFAULTS.input);
  };

  return (
    <>
      <Helmet>
        <title>
          Roman Numeral Converter - Arabic 1–3999 ↔ I, V, X, L, C, D, M
        </title>
        <meta
          name="description"
          content="Convert numbers to Roman numerals or decode Roman numerals to Arabic (1–3999). Type 2024 or MMXXIV—auto-detects direction. Free classical converter."
        />
        <meta
          name="keywords"
          content="roman numeral converter, number to roman numerals, roman to arabic converter, MMXXIV converter, 2024 in roman numerals, convert IV to 4, roman numeral chart 1-3999"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Roman Numeral Converter"
        />
        <meta
          property="og:description"
          content="Arabic ↔ Roman for 1–3999 with auto-detect."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Roman Numeral Converter" />
        <meta
          name="twitter:description"
          content="Convert numbers and Roman numerals both ways."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Roman Numeral Converter",
            url: PAGE_URL,
            description:
              "Convert between Arabic integers 1–3999 and classical Roman numerals in either direction.",
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
            name: "Roman Numeral Converter",
            url: PAGE_URL,
            description:
              "Web tool to translate Arabic numbers to Roman numerals and Roman strings back to Arabic.",
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
            headline: "How to Convert Between Arabic Numbers and Roman Numerals",
            description:
              "Subtractive notation with pairs like IV, IX, XL, and CM; standard range 1 through 3999.",
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
                name: "What numbers can this Roman converter handle?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Classical Roman numerals from 1 to 3999 (standard subtractive notation). Zero and numbers above 3999 are not supported on this page.",
                },
              },
              {
                "@type": "Question",
                name: "How do I convert Arabic to Roman?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Type an integer such as 2024. The tool returns MMXXIV using greedy subtraction with pairs like CM, XC, and IV.",
                },
              },
              {
                "@type": "Question",
                name: "How do I convert Roman to Arabic?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Type letters only, for example XIV or MMXXIV. The tool sums values with subtractive pairs and validates the result.",
                },
              },
              {
                "@type": "Question",
                name: "Why is 4 written IV instead of IIII?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Subtractive notation uses a smaller letter before a larger one to mean subtraction. IV means 5 minus 1 equals 4.",
                },
              },
              {
                "@type": "Question",
                name: "Does the converter accept lowercase roman letters?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Input is treated case-insensitively and shown in uppercase in the summary.",
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
                name: "Roman Numeral Converter",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="font-h3 text-h3 text-on-surface">
            Arabic number or Roman numeral
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={inputClassName}
            placeholder={DEFAULTS.input}
            autoComplete="off"
            spellCheck={false}
          />
          <p className="text-sm text-on-surface-variant">
            Examples: <strong>2024</strong>, <strong>MMXXIV</strong>,{" "}
            <strong>IV</strong>, <strong>MCMXC</strong> (1–3999).
          </p>
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
            Conversion summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Direction</span>
              <span className="font-code-num text-code-num text-right">
                {result?.mode === "arabic-to-roman" && !result.error
                  ? "Arabic → Roman"
                  : result?.mode === "roman-to-arabic" && !result.error
                    ? "Roman → Arabic"
                    : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Your input</span>
              <span className="font-code-num text-code-num">
                {result?.input && !result.error ? result.input : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Arabic (decimal)</span>
              <span className="font-code-num text-code-num">
                {result?.arabic != null && !result.error
                  ? result.arabic.toLocaleString()
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Roman</span>
              <span className="font-code-num text-code-num text-primary text-lg tracking-wide">
                {result?.roman && !result.error ? result.roman : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Classical subtractive notation only (no vinculum overlines for
              thousands beyond 3999). Invalid forms like IIII are rejected on
              Roman → Arabic.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RomanNumeralConverter;
