import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/dice-roller";

const DEFAULTS = {
  diceCount: "2",
  sides: "6",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const rollDiceValues = (count, side) => {
  const results = [];
  for (let i = 0; i < count; i++) {
    results.push(Math.floor(Math.random() * side) + 1);
  }
  return results;
};

const DiceRoller = () => {
  const [diceCount, setDiceCount] = useState(DEFAULTS.diceCount);
  const [sides, setSides] = useState(DEFAULTS.sides);
  const [rollResult, setRollResult] = useState(null);

  const rollDice = () => {
    const count = parseInt(diceCount, 10);
    const side = parseInt(sides, 10);

    if (isNaN(count) || isNaN(side)) {
      setRollResult({ error: "Enter whole numbers for dice count and sides." });
      return;
    }

    if (count <= 0 || side <= 0) {
      setRollResult({
        error: "Dice count and sides per die must be greater than zero.",
      });
      return;
    }

    if (count > 100) {
      setRollResult({ error: "Maximum 100 dice per roll." });
      return;
    }

    const results = rollDiceValues(count, side);
    const total = results.reduce((sum, n) => sum + n, 0);

    setRollResult({
      results,
      total,
      notation: `${count}d${side}`,
      count,
      sides: side,
    });
  };

  const reset = () => {
    setDiceCount(DEFAULTS.diceCount);
    setSides(DEFAULTS.sides);
    setRollResult(null);
  };

  return (
    <>
      <Helmet>
        <title>
          Dice Roller - Roll d6, d20 & Custom Dice Online
        </title>
        <meta
          name="description"
          content="Roll virtual dice online. Choose how many dice and sides per die (e.g. 2d6). See each result and the total. Free browser-based dice roller."
        />
        <meta
          name="keywords"
          content="dice roller online, roll d20 dice roller, virtual dice roller 2d6, custom dice roller how many sides, RPG dice roller d6 d8 d10, random dice roll simulator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dice Roller - Virtual Dice Online"
        />
        <meta
          property="og:description"
          content="Roll any number of dice with custom sides. Results and total shown instantly."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Online Dice Roller"
        />
        <meta
          name="twitter:description"
          content="Roll d6, d20, or custom dice in your browser."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Dice Roller",
            url: PAGE_URL,
            description:
              "Roll virtual dice with a custom count and sides per die.",
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
            name: "Dice Roller",
            url: PAGE_URL,
            description:
              "Web application to simulate rolling dice with uniform random faces.",
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
            headline: "How Online Dice Rollers Work",
            description:
              "Guide to dice notation, uniform random rolls, and common polyhedral dice used in tabletop games.",
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
                name: "How does this dice roller work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For each die, it picks a random integer from 1 through the number of sides using your browser’s Math.random(), then shows every die and the sum.",
                },
              },
              {
                "@type": "Question",
                name: "What does 2d6 mean?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "2d6 means roll two six-sided dice and usually add the results. Enter 2 dice and 6 sides for the same setup.",
                },
              },
              {
                "@type": "Question",
                name: "Is this fair for tournament play?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It uses pseudo-random browser output, not certified casino hardware. Fine for casual games and demos; serious tournaments may require physical dice.",
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
                name: "Dice Roller",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Number of dice
            </label>
            <input
              type="number"
              value={diceCount}
              onChange={(e) => setDiceCount(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.diceCount}
              min="1"
              step="1"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Sides per die
            </label>
            <input
              type="number"
              value={sides}
              onChange={(e) => setSides(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.sides}
              min="1"
              step="1"
            />
          </div>
        </div>

        <div className="pt-2 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={rollDice}
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-lg font-h3 text-h3 shadow-md active:scale-95 transition-all"
            >
              Roll Dice
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
              casino
            </span>
            <span className="text-sm">Random rolls in your browser only</span>
          </div>
        </div>

        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Roll Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Notation</span>
              <span className="font-code-num text-code-num">
                {rollResult?.notation && !rollResult.error
                  ? rollResult.notation
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {rollResult?.total != null && !rollResult.error
                  ? rollResult.total.toLocaleString()
                  : "—"}
              </span>
            </div>
            <div className="space-y-2">
              <span className="text-on-surface block">Individual rolls</span>
              {rollResult?.results?.length > 0 && !rollResult.error ? (
                <div className="flex flex-wrap gap-2">
                  {rollResult.results.map((val, idx) => (
                    <span
                      key={`${idx}-${val}`}
                      className="px-3 py-1.5 bg-surface-container border border-outline-variant rounded-lg font-code-num text-code-num text-on-surface"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="font-code-num text-code-num text-on-surface-variant">
                  —
                </span>
              )}
            </div>
            {rollResult?.error && (
              <p className="text-sm text-error">{rollResult.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Each die: random integer from 1 to N (uniform). Click Roll Dice to
              generate a new set; changing inputs does not re-roll until you click.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DiceRoller;
