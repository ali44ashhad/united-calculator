import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/stair-calculator";

const DEFAULTS = {
  totalRise: "96",
  riserHeight: "7.5",
  treadDepth: "10",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeStairs = (totalRise, riserHeight, treadDepth) => {
  if (
    totalRise.trim() === "" ||
    riserHeight.trim() === "" ||
    treadDepth.trim() === ""
  ) {
    return null;
  }

  const rise = parseFloat(totalRise);
  const riser = parseFloat(riserHeight);
  const tread = parseFloat(treadDepth);

  if (isNaN(rise) || isNaN(riser) || isNaN(tread)) {
    return { error: "Enter valid numbers for rise, riser, and tread." };
  }

  if (rise <= 0 || riser <= 0 || tread <= 0) {
    return { error: "Total rise, riser height, and tread depth must be greater than zero." };
  }

  const numberOfSteps = Math.ceil(rise / riser);
  const actualRiser = rise / numberOfSteps;
  const totalRun = (numberOfSteps - 1) * tread;
  const twoRPlusT = 2 * actualRiser + tread;
  const comfortOk = twoRPlusT >= 24 && twoRPlusT <= 25.5;

  return {
    rise,
    riser,
    tread,
    numberOfSteps,
    actualRiser,
    totalRun,
    twoRPlusT,
    comfortOk,
  };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const StairCalculator = () => {
  const [totalRise, setTotalRise] = useState(DEFAULTS.totalRise);
  const [riserHeight, setRiserHeight] = useState(DEFAULTS.riserHeight);
  const [treadDepth, setTreadDepth] = useState(DEFAULTS.treadDepth);

  const result = computeStairs(totalRise, riserHeight, treadDepth);

  const reset = () => {
    setTotalRise(DEFAULTS.totalRise);
    setRiserHeight(DEFAULTS.riserHeight);
    setTreadDepth(DEFAULTS.treadDepth);
  };

  return (
    <>
      <Helmet>
        <title>
          Stair Calculator - Steps, Run &amp; Riser from Total Rise (inches)
        </title>
        <meta
          name="description"
          content="Calculate number of stair steps, total horizontal run, and actual riser height from total rise in inches, target riser, and tread depth."
        />
        <meta
          name="keywords"
          content="stair calculator rise and run, number of steps calculator, riser tread stair formula, stair stringer layout calculator, 2R plus T stair rule"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Stair Calculator - Steps &amp; Run"
        />
        <meta
          property="og:description"
          content="Steps = ceil(rise ÷ riser); run = (steps − 1) × tread depth."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stair Calculator" />
        <meta
          name="twitter:description"
          content="Stair steps and run from rise, riser, and tread."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Stair Calculator",
            url: PAGE_URL,
            description:
              "Calculate stair step count, total run, and actual riser height from total vertical rise and tread dimensions in inches.",
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
            name: "Stair Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate stair steps and horizontal run from rise, riser, and tread in inches.",
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
            headline: "How to Lay Out Stairs from Total Rise and Tread Depth",
            description:
              "Divide total rise by target riser height (round up for step count), then multiply tread depth by one less than the step count for total run.",
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
                name: "How many steps do I need for a stair?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Divide total rise in inches by your target riser height and round up to a whole number of steps. Actual riser height equals total rise divided by that step count.",
                },
              },
              {
                "@type": "Question",
                name: "How is total stair run calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Total run equals (number of steps minus one) times tread depth in inches. There is one fewer tread than risers on a typical straight flight.",
                },
              },
              {
                "@type": "Question",
                name: "What is the 2R + T rule?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A common comfort guideline is two times riser height plus tread depth should be about 24 to 25 inches. Building codes vary by jurisdiction.",
                },
              },
              {
                "@type": "Question",
                name: "What is a typical riser height?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Residential stairs often use about 7 to 7.75 inches per riser, but you must meet local code maximums and minimums.",
                },
              },
              {
                "@type": "Question",
                name: "Does this replace a building inspector?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Use this for layout estimates only. Verify headroom, handrails, landings, and code limits with your local authority.",
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
                name: "Stair Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Total rise (in)
            </label>
            <input
              type="number"
              value={totalRise}
              onChange={(e) => setTotalRise(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.totalRise}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Target riser height (in)
            </label>
            <input
              type="number"
              value={riserHeight}
              onChange={(e) => setRiserHeight(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.riserHeight}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Tread depth (in)
            </label>
            <input
              type="number"
              value={treadDepth}
              onChange={(e) => setTreadDepth(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.treadDepth}
              min="0"
              step="any"
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
            Stair layout summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Number of steps</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.numberOfSteps != null && !result.error
                  ? result.numberOfSteps
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Actual riser (rise ÷ steps)</span>
              <span className="font-code-num text-code-num">
                {result?.actualRiser != null && !result.error
                  ? `${fmt2(result.actualRiser)} in`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Total run</span>
              <span className="font-code-num text-code-num">
                {result?.totalRun != null && !result.error
                  ? `${fmt2(result.totalRun)} in (${fmt2(result.totalRun / 12)} ft)`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">2R + T (comfort check)</span>
              <span className="font-code-num text-code-num">
                {result?.twoRPlusT != null && !result.error
                  ? `${fmt2(result.twoRPlusT)} in`
                  : "—"}
              </span>
            </div>
            {result?.twoRPlusT != null && !result.error && (
              <p className="text-sm text-on-surface-variant">
                Guideline 24–25 in:{" "}
                {result.comfortOk ? (
                  <strong>within typical range</strong>
                ) : (
                  <strong>outside 24–25 in—adjust riser or tread</strong>
                )}
                . Codes vary locally.
              </p>
            )}
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              <strong>Steps = ⌈rise ÷ target riser⌉</strong>;{" "}
              <strong>run = (steps − 1) × tread</strong>. Verify headroom,
              landings, and building code where you build.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default StairCalculator;
