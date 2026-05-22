import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/ohms-law-calculator";

const DEFAULTS = {
  voltage: "12",
  current: "2",
  resistance: "",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const parseOptional = (value) => {
  if (value.trim() === "") {
    return { provided: false };
  }
  const n = parseFloat(value);
  if (isNaN(n)) {
    return { provided: true, invalid: true };
  }
  return { provided: true, value: n };
};

const computeOhmsLaw = (voltage, current, resistance) => {
  const v = parseOptional(voltage);
  const i = parseOptional(current);
  const r = parseOptional(resistance);

  if (v.invalid || i.invalid || r.invalid) {
    return { error: "Enter valid numbers or leave a field blank to solve it." };
  }

  const providedCount = [v, i, r].filter((x) => x.provided).length;

  if (providedCount < 2) {
    return null;
  }

  if (providedCount === 3) {
    if (i.value === 0) {
      return { error: "Current cannot be zero when checking Ohm's law." };
    }
    const expectedR = v.value / i.value;
    const mismatch = Math.abs(expectedR - r.value) > 0.01 * Math.max(1, r.value);
    return {
      V: v.value,
      I: i.value,
      R: r.value,
      solved: null,
      consistent: !mismatch,
      expectedR: mismatch ? expectedR : null,
    };
  }

  if (!r.provided && v.provided && i.provided) {
    if (i.value === 0) {
      return { error: "Current cannot be zero when solving for resistance." };
    }
    return { V: v.value, I: i.value, R: v.value / i.value, solved: "R" };
  }

  if (!i.provided && v.provided && r.provided) {
    if (r.value === 0) {
      return { error: "Resistance cannot be zero when solving for current." };
    }
    return { V: v.value, I: v.value / r.value, R: r.value, solved: "I" };
  }

  if (!v.provided && i.provided && r.provided) {
    return { V: i.value * r.value, I: i.value, R: r.value, solved: "V" };
  }

  return { error: "Enter any two of voltage, current, and resistance." };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const OhmsLawCalculator = () => {
  const [voltage, setVoltage] = useState(DEFAULTS.voltage);
  const [current, setCurrent] = useState(DEFAULTS.current);
  const [resistance, setResistance] = useState(DEFAULTS.resistance);

  const result = computeOhmsLaw(voltage, current, resistance);

  const reset = () => {
    setVoltage(DEFAULTS.voltage);
    setCurrent(DEFAULTS.current);
    setResistance(DEFAULTS.resistance);
  };

  return (
    <>
      <Helmet>
        <title>
          Ohm&apos;s Law Calculator - V, I &amp; R (Volts, Amps, Ohms)
        </title>
        <meta
          name="description"
          content="Free Ohm's law calculator: enter any two of voltage (V), current (A), and resistance (Ω) to find the third. V = I × R with clear formulas for DC circuits."
        />
        <meta
          name="keywords"
          content="ohms law calculator, voltage current resistance calculator, V=IR calculator, find resistance from voltage and current, ohms law formula calculator, electrical circuit calculator, volts amps ohms, calculate amperage from watts and volts, series circuit ohms law, DIY electronics calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ohm's Law Calculator - V, I, R"
        />
        <meta
          property="og:description"
          content="Two known values → solve the third with V = I × R."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ohm's Law Calculator" />
        <meta
          name="twitter:description"
          content="Voltage, current, and resistance from Ohm's law."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Ohm's Law Calculator",
            url: PAGE_URL,
            description:
              "Calculate voltage, current, or resistance using Ohm's law when any two values are known.",
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
            name: "Ohm's Law Calculator",
            url: PAGE_URL,
            description:
              "Web tool to solve for voltage, current, or resistance from Ohm's law V = I × R.",
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
            headline:
              "Ohm's Law: How to Calculate Voltage, Current, and Resistance",
            description:
              "Guide to V = I × R, solving for the missing value when two are known, and typical units for DC circuit checks.",
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
                name: "What is Ohm's law?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ohm's law states V = I × R for many simple DC circuits: voltage in volts equals current in amperes times resistance in ohms.",
                },
              },
              {
                "@type": "Question",
                name: "How many values do I need to enter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Enter any two of voltage, current, and resistance; leave the third blank and the calculator solves it. If you enter all three, it checks whether they are consistent.",
                },
              },
              {
                "@type": "Question",
                name: "How do I find resistance from voltage and current?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "R = V ÷ I. Example: 12 V and 2 A give 6 Ω.",
                },
              },
              {
                "@type": "Question",
                name: "Does Ohm's law apply to AC and power?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This page uses the basic DC form V = I × R. AC circuits with inductance or capacitance need impedance; power in watts also involves P = V × I, which is separate from Ohm's law alone.",
                },
              },
              {
                "@type": "Question",
                name: "What if current is zero?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Division by zero is undefined. The calculator returns an error if you try to solve for resistance with zero current.",
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
                name: "Ohm's Law Calculator",
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
              Voltage (V)
            </label>
            <div className="relative">
              <input
                type="number"
                value={voltage}
                onChange={(e) => setVoltage(e.target.value)}
                className={`${inputClassName} pr-12`}
                placeholder={DEFAULTS.voltage}
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                V
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Current (I)
            </label>
            <div className="relative">
              <input
                type="number"
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
                className={`${inputClassName} pr-12`}
                placeholder={DEFAULTS.current}
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                A
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Resistance (R)
            </label>
            <div className="relative">
              <input
                type="number"
                value={resistance}
                onChange={(e) => setResistance(e.target.value)}
                className={`${inputClassName} pr-12`}
                placeholder="leave blank to solve"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium text-sm">
                Ω
              </span>
            </div>
          </div>
        </div>

        <p className="text-sm text-on-surface-variant">
          Enter any <strong>two</strong> values; leave the third empty to
          calculate it.
        </p>

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
            Ohm&apos;s law summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Voltage</span>
              <span
                className={`font-code-num text-code-num ${
                  result?.solved === "V" ? "text-primary text-lg" : ""
                }`}
              >
                {result?.V != null && !result.error
                  ? `${fmt2(result.V)} V`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Current</span>
              <span
                className={`font-code-num text-code-num ${
                  result?.solved === "I" ? "text-primary text-lg" : ""
                }`}
              >
                {result?.I != null && !result.error
                  ? `${fmt2(result.I)} A`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Resistance</span>
              <span
                className={`font-code-num text-code-num ${
                  result?.solved === "R" ? "text-primary text-lg" : ""
                }`}
              >
                {result?.R != null && !result.error
                  ? `${fmt2(result.R)} Ω`
                  : "—"}
              </span>
            </div>
            {result?.solved && !result.error && (
              <p className="text-sm text-on-surface-variant">
                Solved for <strong>{result.solved}</strong> using{" "}
                <strong>V = I × R</strong>.
              </p>
            )}
            {result?.consistent === true && !result.error && (
              <p className="text-sm text-on-surface-variant">
                All three values are consistent with Ohm&apos;s law.
              </p>
            )}
            {result?.consistent === false && result.expectedR != null && (
              <p className="text-sm text-on-surface-variant">
                Values disagree: from V and I, R would be about{" "}
                <strong>{fmt2(result.expectedR)} Ω</strong>, not the R you
                entered.
              </p>
            )}
            <div className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant space-y-1">
              <p>
                <strong>R = V ÷ I</strong> · <strong>I = V ÷ R</strong> ·{" "}
                <strong>V = I × R</strong>
              </p>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Assumes simple DC resistive loads. Temperature, wire length, and
              component tolerance change real-world readings.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default OhmsLawCalculator;
