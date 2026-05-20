import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/horsepower-calculator";

const DEFAULTS = {
  torque: "400",
  rpm: "5000",
};

const HP_CONSTANT = 5252;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeHorsepower = (torque, rpm) => {
  if (torque.trim() === "" || rpm.trim() === "") {
    return null;
  }

  const T = parseFloat(torque);
  const R = parseFloat(rpm);

  if (isNaN(T) || isNaN(R)) {
    return { error: "Enter valid numbers for torque and RPM." };
  }

  if (R <= 0) {
    return { error: "RPM must be greater than zero." };
  }

  const horsepower = (T * R) / HP_CONSTANT;

  return {
    torque: T,
    rpm: R,
    horsepower,
  };
};

const formatHp = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const HorsepowerCalculator = () => {
  const [torque, setTorque] = useState(DEFAULTS.torque);
  const [rpm, setRpm] = useState(DEFAULTS.rpm);

  const result = computeHorsepower(torque, rpm);

  const reset = () => {
    setTorque(DEFAULTS.torque);
    setRpm(DEFAULTS.rpm);
  };

  return (
    <>
      <Helmet>
        <title>
          Horsepower Calculator - HP from Torque (lb-ft) & RPM
        </title>
        <meta
          name="description"
          content="Estimate mechanical horsepower from torque in pound-feet and engine RPM using HP = (T × RPM) ÷ 5252."
        />
        <meta
          name="keywords"
          content="horsepower calculator torque rpm, hp formula 5252, lb-ft to horsepower, engine power calculator, mechanical horsepower estimate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Horsepower Calculator - Torque & RPM"
        />
        <meta
          property="og:description"
          content="Classic HP = (torque × RPM) / 5252 with lb-ft and RPM."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Horsepower Calculator" />
        <meta
          name="twitter:description"
          content="HP from torque in lb-ft and RPM."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Horsepower Calculator",
            url: PAGE_URL,
            description:
              "Calculate mechanical horsepower from torque in pound-feet and revolutions per minute using the standard 5252 relation.",
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
            name: "Horsepower Calculator",
            url: PAGE_URL,
            description:
              "Web application to estimate horsepower from torque (lb-ft) and RPM.",
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
            headline: "Horsepower from Torque and RPM Using the 5252 Constant",
            description:
              "How torque in pound-feet and engine speed in RPM combine into mechanical horsepower.",
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
                name: "What is the horsepower formula?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Horsepower equals torque in pound-feet times RPM, divided by 5252.",
                },
              },
              {
                "@type": "Question",
                name: "Why is the number 5252 used?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "5252 is the constant that converts lb-ft torque and RPM into mechanical horsepower in this standard relationship.",
                },
              },
              {
                "@type": "Question",
                name: "What units does this calculator expect?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Torque in pound-feet (lb-ft) and rotational speed in revolutions per minute (RPM).",
                },
              },
              {
                "@type": "Question",
                name: "Is this wheel horsepower?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. It is the idealized relation from torque and RPM. Wheel horsepower on a chassis dyno is lower after drivetrain losses.",
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
                name: "Horsepower Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Torque</label>
            <div className="relative">
              <input
                type="number"
                value={torque}
                onChange={(e) => setTorque(e.target.value)}
                className={`${inputClassName} pr-16`}
                placeholder={DEFAULTS.torque}
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                lb-ft
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">RPM</label>
            <input
              type="number"
              value={rpm}
              onChange={(e) => setRpm(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.rpm}
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
            Horsepower summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Torque</span>
              <span className="font-code-num text-code-num">
                {result?.torque != null && !result.error
                  ? `${result.torque.toLocaleString()} lb-ft`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">RPM</span>
              <span className="font-code-num text-code-num">
                {result?.rpm != null && !result.error
                  ? `${result.rpm.toLocaleString()} RPM`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Horsepower (T × RPM ÷ {HP_CONSTANT})
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.horsepower != null && !result.error
                  ? `${formatHp(result.horsepower)} HP`
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Peak torque and peak horsepower usually occur at different RPM on
              a real engine; this line is for the pair of numbers you enter, not
              a full map.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HorsepowerCalculator;
