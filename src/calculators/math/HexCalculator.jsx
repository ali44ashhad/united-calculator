import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/hex-calculator";

const DEFAULTS = {
  hex: "1F",
};

const HEX_PATTERN = /^[0-9A-F]+$/;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all uppercase";

const normalizeHex = (value) =>
  value.trim().replace(/^0x/i, "").toUpperCase();

const computeHex = (hex) => {
  if (hex.trim() === "") {
    return null;
  }

  const input = normalizeHex(hex);

  if (input === "") {
    return { error: "Enter a hexadecimal value." };
  }

  if (!HEX_PATTERN.test(input)) {
    return {
      error: "Use only hex digits 0–9 and A–F (optional 0x prefix).",
    };
  }

  let decimalBig;
  try {
    decimalBig = BigInt(`0x${input}`);
  } catch {
    return { error: "Invalid hexadecimal input." };
  }

  if (decimalBig < 0n) {
    return { error: "Enter a non-negative hexadecimal value." };
  }

  const decimalString = decimalBig.toString(10);
  const binary = decimalBig.toString(2);
  const octal = decimalBig.toString(8);
  const hexUpper = input;
  const hexDigits = hexUpper.length;
  const bitLength = binary.length;
  const isSafeInteger = decimalBig <= BigInt(Number.MAX_SAFE_INTEGER);
  const decimal = isSafeInteger ? Number(decimalBig) : null;

  return {
    hex: hexUpper,
    hexPrefixed: `0x${hexUpper}`,
    decimal,
    decimalString,
    binary,
    octal,
    hexDigits,
    bitLength,
    isSafeInteger,
    formula: "Parse base-16 → show decimal, binary, and octal",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is a hexadecimal number?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Hexadecimal (base 16) uses digits 0–9 and letters A–F. Each hex digit represents four binary bits—a compact form common in programming and memory addresses.",
    },
  },
  {
    "@type": "Question",
    name: "How do I convert hex to decimal?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Enter a hex string such as 1F. The calculator parses base 16 and shows the decimal value (1F = 31).",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator add or subtract hex numbers?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This page converts one hex input to decimal, binary, and octal. For binary arithmetic, use the Binary Calculator.",
    },
  },
  {
    "@type": "Question",
    name: "Can I enter a 0x prefix?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Prefixes like 0x or 0X are stripped before conversion.",
    },
  },
  {
    "@type": "Question",
    name: "What hex digits are allowed?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "0–9 and A–F (case insensitive). No spaces, signs, or decimal points.",
    },
  },
  {
    "@type": "Question",
    name: "How is hex related to binary?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Each hex digit maps to four bits. Example: F = 1111 and A = 1010, so 1F = 0001 1111 in binary.",
    },
  },
];

const HexCalculator = () => {
  const [hex, setHex] = useState(DEFAULTS.hex);

  const result = computeHex(hex);

  const reset = () => {
    setHex(DEFAULTS.hex);
  };

  return (
    <>
      <Helmet>
        <title>
          Hex Calculator - Hexadecimal to Decimal, Binary &amp; Octal
        </title>
        <meta
          name="description"
          content="Convert one hexadecimal (base-16) value to decimal, binary, and octal. Hex digits 0–9 and A–F—not hex arithmetic or decimal-to-hex input."
        />
        <meta
          name="keywords"
          content="hex calculator, hexadecimal converter, hex to decimal, hex to binary, base 16 calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hex Calculator" />
        <meta
          property="og:description"
          content="Hexadecimal to decimal, binary, and octal."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hex Calculator" />
        <meta
          name="twitter:description"
          content="Base-16 conversion for programmers and students."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Hex Calculator",
            url: PAGE_URL,
            description: "Convert hexadecimal numbers to decimal, binary, and octal.",
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
            name: "Hex Calculator",
            url: PAGE_URL,
            description: "Web tool for hex to decimal/binary/octal conversion.",
            applicationCategory: "EducationalApplication",
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
            headline: "Hexadecimal Conversion",
            description: "How to convert base-16 numbers to other bases.",
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
                name: "Hex Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="font-h3 text-h3 text-on-surface">
            Hexadecimal (0–9, A–F)
          </label>
          <input
            type="text"
            value={hex}
            onChange={(e) => setHex(e.target.value)}
            placeholder="e.g. 1F or 0x1F"
            className={inputClassName}
          />
          <p className="text-sm text-on-surface-variant">
            One hex value → decimal, binary, and octal. Not hex + − × ÷.
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
            Hex conversion summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Decimal</span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[60%] break-all">
                {result && !result.error ? result.decimalString : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Hex input</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.hexPrefixed : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Binary</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[60%] break-all">
                {result && !result.error ? result.binary : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Octal</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.octal : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Hex digits</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.hexDigits : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Bit length</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.bitLength : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Hex input only—not decimal-to-hex typing or hex arithmetic.`
                : "Enter a hexadecimal value to convert."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HexCalculator;
