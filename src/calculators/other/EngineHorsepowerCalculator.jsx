import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/engine-horsepower-calculator";

const DEFAULTS = {
  torque: "350",
  rpm: "6000",
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

const EngineHorsepowerCalculator = () => {
  const [torque, setTorque] = useState(DEFAULTS.torque);
  const [rpm, setRPM] = useState(DEFAULTS.rpm);

  const result = computeHorsepower(torque, rpm);

  const reset = () => {
    setTorque(DEFAULTS.torque);
    setRPM(DEFAULTS.rpm);
  };

  return (
    <>
      <Helmet>
        <title>
          Engine Horsepower Calculator - HP from Torque & RPM
        </title>
        <meta
          name="description"
          content="Calculate engine horsepower from torque (lb-ft) and RPM using HP = (T × RPM) ÷ 5252. Free online horsepower calculator."
        />
        <meta
          name="keywords"
          content="engine horsepower calculator, hp from torque and rpm calculator, horsepower formula 5252, lb-ft to horsepower calculator, engine power calculator automotive"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Engine Horsepower Calculator"
        />
        <meta
          property="og:description"
          content="Enter torque in lb-ft and engine RPM to estimate horsepower."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="HP from Torque & RPM"
        />
        <meta
          name="twitter:description"
          content="Standard 5252 formula for engine horsepower."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Engine Horsepower Calculator",
            url: PAGE_URL,
            description:
              "Estimate engine horsepower from torque in pound-feet and revolutions per minute.",
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
            name: "Engine Horsepower Calculator",
            url: PAGE_URL,
            description:
              "Web application to compute horsepower using torque and RPM.",
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
            headline: "How to Calculate Horsepower from Torque and RPM",
            description:
              "Guide to the standard engine formula HP = (torque × RPM) / 5252 with lb-ft units.",
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
                  text: "Horsepower = (torque in lb-ft × RPM) / 5252. This calculator uses that relationship.",
                },
              },
              {
                "@type": "Question",
                name: "Why is 5252 used?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "5252 is the constant that converts torque and rotational speed into mechanical horsepower when torque is in pound-feet and speed is in RPM.",
                },
              },
              {
                "@type": "Question",
                name: "What units do I need?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Torque in pound-feet (lb-ft) and engine speed in revolutions per minute (RPM).",
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
                name: "Engine Horsepower Calculator",
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
              onChange={(e) => setRPM(e.target.value)}
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
            Horsepower Summary
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
              Standard mechanical HP from torque and speed. Brake horsepower on a
              dyno may differ; this is the classic 5252 relation only.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default EngineHorsepowerCalculator;
