import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/password-generator";

const DEFAULTS = {
  length: 12,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: false,
};

const CHARSETS = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:',.<>?",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const buildCharset = (opts) => {
  let charset = "";
  if (opts.includeUppercase) charset += CHARSETS.upper;
  if (opts.includeLowercase) charset += CHARSETS.lower;
  if (opts.includeNumbers) charset += CHARSETS.numbers;
  if (opts.includeSymbols) charset += CHARSETS.symbols;
  return charset;
};

const generatePassword = (length, opts) => {
  const charset = buildCharset(opts);
  if (!charset) {
    return { error: "Select at least one character type." };
  }
  if (length < 4 || length > 128) {
    return { error: "Length must be between 4 and 128 characters." };
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  const entropyBits = Math.round(length * Math.log2(charset.length));

  return {
    password,
    length,
    charsetSize: charset.length,
    entropyBits,
    types: [
      opts.includeUppercase && "A–Z",
      opts.includeLowercase && "a–z",
      opts.includeNumbers && "0–9",
      opts.includeSymbols && "symbols",
    ].filter(Boolean),
  };
};

const PasswordGenerator = () => {
  const [length, setLength] = useState(DEFAULTS.length);
  const [includeUppercase, setIncludeUppercase] = useState(
    DEFAULTS.includeUppercase
  );
  const [includeLowercase, setIncludeLowercase] = useState(
    DEFAULTS.includeLowercase
  );
  const [includeNumbers, setIncludeNumbers] = useState(
    DEFAULTS.includeNumbers
  );
  const [includeSymbols, setIncludeSymbols] = useState(
    DEFAULTS.includeSymbols
  );
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const runGenerate = useCallback(() => {
    const len = Number(length);
    setResult(
      generatePassword(len, {
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSymbols,
      })
    );
    setCopied(false);
  }, [
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ]);

  useEffect(() => {
    runGenerate();
  }, [runGenerate]);

  const reset = () => {
    setLength(DEFAULTS.length);
    setIncludeUppercase(DEFAULTS.includeUppercase);
    setIncludeLowercase(DEFAULTS.includeLowercase);
    setIncludeNumbers(DEFAULTS.includeNumbers);
    setIncludeSymbols(DEFAULTS.includeSymbols);
    setCopied(false);
  };

  const handleLengthChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setLength(isNaN(val) ? "" : val);
  };

  const copyPassword = async () => {
    if (!result?.password || result.error) return;
    try {
      await navigator.clipboard.writeText(result.password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const checkboxClass =
    "w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20";

  return (
    <>
      <Helmet>
        <title>
          Password Generator - Strong Random Passwords (Length &amp; Symbols)
        </title>
        <meta
          name="description"
          content="Free password generator: pick length 4–128, uppercase, lowercase, numbers, and symbols. Random passwords in your browser with approximate entropy estimate."
        />
        <meta
          name="keywords"
          content="password generator, strong password generator, random password creator, secure password generator online, password generator with symbols, long password generator 16 characters, alphanumeric password generator free"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Password Generator - Random &amp; Strong"
        />
        <meta
          property="og:description"
          content="Custom length and character sets for random passwords."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Password Generator" />
        <meta
          name="twitter:description"
          content="Generate random passwords with chosen character types."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Password Generator",
            url: PAGE_URL,
            description:
              "Generate strong random passwords with configurable length and character sets in the browser.",
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
            name: "Password Generator",
            url: PAGE_URL,
            description:
              "Web tool to create random passwords from selected uppercase, lowercase, numeric, and symbol character sets.",
            applicationCategory: "SecurityApplication",
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
            headline: "How to Generate a Strong Random Password",
            description:
              "Use length and character variety to increase password entropy; store secrets in a password manager.",
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
                name: "How long should a generated password be?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many sites recommend at least 12–16 characters with mixed character types. This tool allows 4–128 characters.",
                },
              },
              {
                "@type": "Question",
                name: "Are passwords stored on a server?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Passwords are created locally in your browser with Math.random and are not sent to United Calculator.",
                },
              },
              {
                "@type": "Question",
                name: "Should I include symbols?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Symbols increase the character pool and entropy, but some websites reject certain symbols. Enable symbols if your login form allows them.",
                },
              },
              {
                "@type": "Question",
                name: "Is Math.random secure enough for banking?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For high-threat accounts, use a dedicated password manager with a cryptographically secure generator. This page is fine for quick strong passwords and demos.",
                },
              },
              {
                "@type": "Question",
                name: "What does the entropy estimate mean?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It approximates password strength as length times log2 of the charset size in bits. Higher is harder to guess by brute force in theory.",
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
                name: "Password Generator",
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
              Password length
            </label>
            <input
              type="number"
              value={length}
              onChange={handleLengthChange}
              className={inputClassName}
              min={4}
              max={128}
              step={1}
            />
          </div>

          <div className="md:col-span-2 space-y-3">
            <p className="font-h3 text-h3 text-on-surface">Character types</p>
            <label className="flex items-center gap-3 text-on-surface cursor-pointer">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                className={checkboxClass}
              />
              Uppercase (A–Z)
            </label>
            <label className="flex items-center gap-3 text-on-surface cursor-pointer">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
                className={checkboxClass}
              />
              Lowercase (a–z)
            </label>
            <label className="flex items-center gap-3 text-on-surface cursor-pointer">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className={checkboxClass}
              />
              Numbers (0–9)
            </label>
            <label className="flex items-center gap-3 text-on-surface cursor-pointer">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className={checkboxClass}
              />
              Symbols (!@#$…)
            </label>
          </div>
        </div>

        <div className="pt-2 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={runGenerate}
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
            Generated password
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start gap-3">
              <p className="font-code text-code-num text-on-surface break-all flex-1 p-3 bg-white border border-outline-variant rounded-lg min-h-[3rem]">
                {result?.password && !result.error ? result.password : "—"}
              </p>
              {result?.password && !result.error && (
                <button
                  type="button"
                  onClick={copyPassword}
                  className="shrink-0 px-4 py-2 bg-surface-container hover:bg-surface-container-high border border-outline-variant rounded-lg text-on-surface font-medium text-sm transition-colors"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              )}
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Length</span>
              <span className="font-code-num text-code-num">
                {result?.length != null && !result.error
                  ? `${result.length} characters`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Character pool</span>
              <span className="font-code-num text-code-num text-right">
                {result?.charsetSize != null && !result.error
                  ? `${result.charsetSize} symbols (${result.types?.join(", ")})`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Approx. entropy</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.entropyBits != null && !result.error
                  ? `~${result.entropyBits} bits`
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Generated in your browser only. Use a password manager for
              storage and unique logins per site—do not reuse one password
              everywhere.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default PasswordGenerator;
