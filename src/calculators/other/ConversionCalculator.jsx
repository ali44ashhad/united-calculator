import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/conversion-calculator";

const DEFAULTS = {
  inputValue: "100",
  fromUnit: "m",
  toUnit: "ft",
};

const unitOptions = [
  { label: "Meters", value: "m" },
  { label: "Kilometers", value: "km" },
  { label: "Feet", value: "ft" },
  { label: "Miles", value: "mi" },
];

const conversionFactors = {
  m: { m: 1, km: 0.001, ft: 3.28084, mi: 0.000621371 },
  km: { m: 1000, km: 1, ft: 3280.84, mi: 0.621371 },
  ft: { m: 0.3048, km: 0.0003048, ft: 1, mi: 0.000189394 },
  mi: { m: 1609.34, km: 1.60934, ft: 5280, mi: 1 },
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const formatNumber = (n) => {
  const rounded = parseFloat(n.toFixed(6));
  return rounded.toLocaleString(undefined, { maximumFractionDigits: 6 });
};

const computeConversion = (inputValue, fromUnit, toUnit) => {
  if (inputValue.trim() === "") {
    return null;
  }

  const value = parseFloat(inputValue);
  if (isNaN(value)) {
    return { error: "Enter a valid number to convert." };
  }

  const factor = conversionFactors[fromUnit][toUnit];
  const converted = value * factor;

  return {
    value,
    converted,
    factor,
    fromUnit,
    toUnit,
  };
};

const ConversionCalculator = () => {
  const [inputValue, setInputValue] = useState(DEFAULTS.inputValue);
  const [fromUnit, setFromUnit] = useState(DEFAULTS.fromUnit);
  const [toUnit, setToUnit] = useState(DEFAULTS.toUnit);

  const result = computeConversion(inputValue, fromUnit, toUnit);

  const reset = () => {
    setInputValue(DEFAULTS.inputValue);
    setFromUnit(DEFAULTS.fromUnit);
    setToUnit(DEFAULTS.toUnit);
  };

  const fromLabel =
    unitOptions.find((u) => u.value === fromUnit)?.label ?? fromUnit;
  const toLabel =
    unitOptions.find((u) => u.value === toUnit)?.label ?? toUnit;

  return (
    <>
      <Helmet>
        <title>
          Length Conversion Calculator - Meters, km, Feet & Miles
        </title>
        <meta
          name="description"
          content="Convert length between meters, kilometers, feet, and miles. Enter a value, choose from and to units, and see the result instantly."
        />
        <meta
          name="keywords"
          content="length conversion calculator, meters to feet converter, km to miles calculator, unit converter distance, convert m to ft, miles to kilometers calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Length Conversion Calculator - m, km, ft, mi"
        />
        <meta
          property="og:description"
          content="Convert distance units: meters, kilometers, feet, and miles."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Length Unit Converter"
        />
        <meta
          name="twitter:description"
          content="Quick length conversion between m, km, ft, and mi."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Conversion Calculator",
            url: PAGE_URL,
            description:
              "Convert length between meters, kilometers, feet, and miles.",
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
            name: "Conversion Calculator",
            url: PAGE_URL,
            description:
              "Web application to convert length values between meters, kilometers, feet, and miles.",
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
              "How to Convert Length Between Meters, Kilometers, Feet, and Miles",
            description:
              "Guide to using conversion factors for common distance units and checking results with a length unit converter.",
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
                name: "Which units does this converter support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Length only: meters (m), kilometers (km), feet (ft), and miles (mi). It does not convert weight, volume, or temperature.",
                },
              },
              {
                "@type": "Question",
                name: "How is the conversion calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The entered value is multiplied by a fixed factor from the selected from-unit to the to-unit, for example 1 meter = 3.28084 feet.",
                },
              },
              {
                "@type": "Question",
                name: "How many feet are in a meter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "One meter equals approximately 3.28084 feet. Enter 1 in the value field with from Meters and to Feet to verify.",
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
                name: "Conversion Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Value</label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.inputValue}
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">From</label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className={inputClassName}
            >
              {unitOptions.map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">To</label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className={inputClassName}
            >
              {unitOptions.map((unit) => (
                <option key={unit.value} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
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
            Conversion Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Input</span>
              <span className="font-code-num text-code-num">
                {result?.value != null && !result.error
                  ? `${formatNumber(result.value)} ${fromUnit}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                {fromLabel} → {toLabel}
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.converted != null && !result.error
                  ? `${formatNumber(result.converted)} ${toUnit}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Factor</span>
              <span className="font-code-num text-code-num text-sm">
                {result?.factor != null && !result.error
                  ? `1 ${fromUnit} = ${formatNumber(result.factor)} ${toUnit}`
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Length (distance) units only: meters, kilometers, feet, and
              miles. Does not convert weight, volume, or temperature.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConversionCalculator;
