import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/electricity-calculator";

const DEFAULTS = {
  power: "1.5",
  hours: "5",
  rate: "6",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeElectricity = (power, hours, rate) => {
  if ([power, hours, rate].some((v) => v.trim() === "")) {
    return null;
  }

  const P = parseFloat(power);
  const T = parseFloat(hours);
  const R = parseFloat(rate);

  if ([P, T, R].some((n) => isNaN(n))) {
    return { error: "Enter valid numbers for power, hours, and rate." };
  }

  if (P < 0 || T < 0 || R < 0) {
    return { error: "Power, hours, and rate cannot be negative." };
  }

  const energyKwh = P * T;
  const cost = energyKwh * R;

  return {
    power: P,
    hours: T,
    rate: R,
    energyKwh,
    cost,
  };
};

const formatMoney = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const formatEnergy = (n) =>
  parseFloat(n.toFixed(3)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  });

const ElectricityCalculator = () => {
  const [power, setPower] = useState(DEFAULTS.power);
  const [hours, setHours] = useState(DEFAULTS.hours);
  const [rate, setRate] = useState(DEFAULTS.rate);

  const result = computeElectricity(power, hours, rate);

  const reset = () => {
    setPower(DEFAULTS.power);
    setHours(DEFAULTS.hours);
    setRate(DEFAULTS.rate);
  };

  return (
    <>
      <Helmet>
        <title>
          Electricity Cost Calculator - kW, Hours & ₹/kWh
        </title>
        <meta
          name="description"
          content="Estimate electricity use in kWh and cost from power (kW), run time (hours), and rate per kWh (₹). Formula: cost = kW × hours × rate."
        />
        <meta
          name="keywords"
          content="electricity cost calculator kWh, power consumption calculator rupees, appliance electricity bill calculator, kW hours electricity cost, energy usage cost calculator India per kWh"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Electricity Calculator - Usage & Cost"
        />
        <meta
          property="og:description"
          content="Calculate kWh and electricity cost from kW, hours, and rate per kWh."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Electricity Cost Calculator"
        />
        <meta
          name="twitter:description"
          content="kWh and bill estimate from power and run time."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Electricity Calculator",
            url: PAGE_URL,
            description:
              "Estimate electricity consumption in kWh and cost from kilowatts, hours, and rate per kWh.",
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
            name: "Electricity Calculator",
            url: PAGE_URL,
            description:
              "Web application to compute kWh and electricity cost from power, hours, and per-kWh rate.",
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
            headline: "How to Calculate Electricity Cost from kW and Hours",
            description:
              "Guide to converting power and run time into kWh and multiplying by your utility rate.",
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
                name: "How is electricity cost calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Energy in kWh equals power in kW times hours. Cost equals kWh times your rate per kWh.",
                },
              },
              {
                "@type": "Question",
                name: "What units does this calculator use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Power in kilowatts (kW), time in hours, rate in currency per kWh (shown as ₹/kWh in the form).",
                },
              },
              {
                "@type": "Question",
                name: "Does this include taxes and fixed charges?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. It is a simple energy charge estimate (kW × hours × rate). Real bills may add fixed fees, tiers, and taxes.",
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
                name: "Electricity Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Power</label>
            <div className="relative">
              <input
                type="number"
                value={power}
                onChange={(e) => setPower(e.target.value)}
                className={`${inputClassName} pr-14`}
                placeholder={DEFAULTS.power}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                kW
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Time</label>
            <div className="relative">
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className={`${inputClassName} pr-16`}
                placeholder={DEFAULTS.hours}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                hr
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Rate</label>
            <div className="relative">
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className={`${inputClassName} pr-20`}
                placeholder={DEFAULTS.rate}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                ₹/kWh
              </span>
            </div>
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
            Electricity Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Energy used</span>
              <span className="font-code-num text-code-num">
                {result?.energyKwh != null && !result.error
                  ? `${formatEnergy(result.energyKwh)} kWh`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Calculation (kW × hr × ₹/kWh)
              </span>
              <span className="font-code-num text-code-num text-sm text-on-surface-variant">
                {result?.power != null && !result.error
                  ? `${result.power} × ${result.hours} × ${result.rate}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total cost</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.cost != null && !result.error
                  ? `₹${formatMoney(result.cost)}`
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Simple estimate only—no demand charges, slab tariffs, or taxes. Rate
              is per kWh in rupees (₹); use your local tariff.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ElectricityCalculator;
