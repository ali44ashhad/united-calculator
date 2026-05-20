import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/love-calculator";

const DEFAULTS = {
  name1: "Alex",
  name2: "Jordan",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const loveLabelFromPercent = (pct) => {
  if (pct >= 90) return "Excellent match";
  if (pct >= 75) return "Strong connection";
  if (pct >= 60) return "Good chemistry";
  if (pct >= 45) return "Worth exploring";
  if (pct >= 30) return "Mixed signals";
  return "Challenging pairing";
};

/** Fun name-based score 1–100%; not scientific. */
const computeLove = (name1, name2) => {
  const n1 = name1.trim();
  const n2 = name2.trim();

  if (!n1 || !n2) {
    return null;
  }

  if (n1.length > 80 || n2.length > 80) {
    return { error: "Please use shorter names (80 characters or fewer each)." };
  }

  const combined = (n1 + n2).toLowerCase();
  let score = 0;
  for (let i = 0; i < combined.length; i++) {
    score += combined.charCodeAt(i);
  }

  const percentage = (score % 100) + 1;
  const label = loveLabelFromPercent(percentage);

  return {
    name1: n1,
    name2: n2,
    percentage,
    label,
  };
};

const LoveCalculator = () => {
  const [name1, setName1] = useState(DEFAULTS.name1);
  const [name2, setName2] = useState(DEFAULTS.name2);

  const result = computeLove(name1, name2);

  const reset = () => {
    setName1(DEFAULTS.name1);
    setName2(DEFAULTS.name2);
  };

  return (
    <>
      <Helmet>
        <title>
          Love Calculator by Name - Free Love Percentage & Compatibility Test
        </title>
        <meta
          name="description"
          content="Free love calculator online: enter two names for a fun love percentage, crush compatibility score, and relationship match label. Name love test for couples, friends, and flirting—entertainment only."
        />
        <meta
          name="keywords"
          content="love calculator, love test, name love calculator, love percentage calculator, love compatibility calculator, love match calculator, relationship calculator by name, crush calculator name, true love calculator, couple name compatibility, name compatibility test, love meter online free, how much do you love me calculator, partner name love score, boyfriend girlfriend love test, girlfriend boyfriend compatibility percent, soulmate name calculator, flirting love score, school love calculator, romantic compatibility by names only, free love calculator no signup, love calculator for two names, calculate love percentage with name, name combination love test, love score generator, relationship percentage test, dating compatibility calculator fun, name chemistry calculator, love forecast by name, heart calculator names, valentine love test online, whats our love percentage, does he love me name test, does she love me calculator, love calculator game online"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Love Calculator by Name - Free Love %"
        />
        <meta
          property="og:description"
          content="Two names → love percentage and match label. Fun name love test, not scientific advice."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Love Calculator by Name" />
        <meta
          name="twitter:description"
          content="Free name-based love percentage and compatibility label."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Love Calculator by Name",
            url: PAGE_URL,
            description:
              "Free online love calculator and name compatibility test that shows a love percentage between two names for fun.",
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
            name: "Love Calculator",
            url: PAGE_URL,
            description:
              "Enter two names to get a playful love percentage and compatibility-style label.",
            applicationCategory: "GameApplication",
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
              "Love Calculator by Name: Love Percentage, Crush Test & Match Labels",
            description:
              "How a fun name-based love meter works, what the percentage means, and why it is entertainment—not relationship science.",
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
                name: "How does the love calculator by name work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The tool combines both names (case-insensitive), sums character codes, and maps that total to a love percentage from 1% to 100% with a short match label. It is a playful algorithm, not astrology or psychology.",
                },
              },
              {
                "@type": "Question",
                name: "Is this love percentage accurate for real relationships?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. It is a fun love test and crush calculator for entertainment. Real compatibility depends on communication, values, and time—not names alone.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use nicknames or full names?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Any spelling you enter changes the score, so use the same nicknames you want compared. First names only is the most common approach.",
                },
              },
              {
                "@type": "Question",
                name: "Does swapping name order change the love score?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. The same two names produce the same combined string length and character sum regardless of which box you use first.",
                },
              },
              {
                "@type": "Question",
                name: "What is a good love percentage on this calculator?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The page labels 90%+ as excellent match, 75–89% strong connection, 60–74% good chemistry, and lower bands as mixed or challenging—all for fun, not advice.",
                },
              },
              {
                "@type": "Question",
                name: "Is the love calculator free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. It runs in your browser with no signup. Names are not sent to a server for calculation.",
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
                name: "Love Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Your name</label>
            <input
              type="text"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.name1}
              autoComplete="name"
              maxLength={80}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Partner&apos;s name
            </label>
            <input
              type="text"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.name2}
              autoComplete="off"
              maxLength={80}
            />
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
            Love match summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Names</span>
              <span className="font-code-num text-code-num text-right">
                {result?.name1 && !result.error
                  ? `${result.name1} + ${result.name2}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Love percentage</span>
              <span className="font-code-num text-code-num text-primary text-2xl">
                {result?.percentage != null && !result.error
                  ? `${result.percentage}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Match label</span>
              <span className="font-code-num text-code-num text-right">
                {result?.label && !result.error ? result.label : "—"}
              </span>
            </div>
            <div className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant space-y-1">
              <p>
                Bands: <strong>90%+</strong> excellent · <strong>75–89%</strong>{" "}
                strong · <strong>60–74%</strong> good · <strong>45–59%</strong>{" "}
                worth exploring · below <strong>45%</strong> mixed or
                challenging.
              </p>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              For laughs, group chats, and Valentine&apos;s Day—not marriage
              counseling. Same two names always give the same score.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoveCalculator;
