import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/area-calculator";

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const SHAPES = {
  rectangle: {
    label: "Rectangle",
    inputs: [
      { key: "input1", label: "Length" },
      { key: "input2", label: "Width" },
    ],
    defaults: { input1: "10", input2: "6", input3: "" },
    formula: "A = length × width",
    compute: (a, b) => a * b,
  },
  triangle: {
    label: "Triangle",
    inputs: [
      { key: "input1", label: "Base" },
      { key: "input2", label: "Height" },
    ],
    defaults: { input1: "8", input2: "5", input3: "" },
    formula: "A = ½ × base × height",
    compute: (a, b) => 0.5 * a * b,
  },
  circle: {
    label: "Circle",
    inputs: [{ key: "input1", label: "Radius" }],
    defaults: { input1: "5", input2: "", input3: "" },
    formula: "A = π × r²",
    compute: (a) => Math.PI * a * a,
  },
  parallelogram: {
    label: "Parallelogram",
    inputs: [
      { key: "input1", label: "Base" },
      { key: "input2", label: "Height" },
    ],
    defaults: { input1: "10", input2: "4", input3: "" },
    formula: "A = base × height",
    compute: (a, b) => a * b,
  },
  trapezoid: {
    label: "Trapezoid",
    inputs: [
      { key: "input1", label: "Base 1" },
      { key: "input2", label: "Base 2" },
      { key: "input3", label: "Height" },
    ],
    defaults: { input1: "8", input2: "12", input3: "5" },
    formula: "A = ½ × (base₁ + base₂) × height",
    compute: (a, b, c) => 0.5 * (a + b) * c,
  },
};

const DEFAULT_SHAPE = "rectangle";

const getShapeDefaults = (shape) =>
  SHAPES[shape]?.defaults ?? SHAPES[DEFAULT_SHAPE].defaults;

const computeArea = (shape, input1, input2, input3) => {
  const config = SHAPES[shape];
  if (!config) {
    return { error: "Select a valid shape." };
  }

  const required = config.inputs.map((i) => i.key);
  const values = { input1, input2, input3 };

  for (const key of required) {
    if (values[key].trim() === "") {
      return null;
    }
  }

  const nums = required.map((key) => parseFloat(values[key]));

  if (nums.some((n) => isNaN(n))) {
    return { error: "Enter valid numbers for all dimensions." };
  }

  if (nums.some((n) => n <= 0)) {
    return { error: "All dimensions must be greater than zero." };
  }

  const area = config.compute(...nums);

  if (!Number.isFinite(area) || area <= 0) {
    return { error: "Could not compute area from these values." };
  }

  const extras = {};

  if (shape === "circle") {
    const r = nums[0];
    extras.diameter = 2 * r;
    extras.circumference = 2 * Math.PI * r;
  }

  if (shape === "rectangle" && nums[0] === nums[1]) {
    extras.note = "Equal length and width — this is also a square.";
  }

  return {
    shape,
    shapeLabel: config.label,
    formula: config.formula,
    area,
    inputs: config.inputs.map((inp, i) => ({
      label: inp.label,
      value: nums[i],
    })),
    ...extras,
  };
};

const fmtArea = (n) =>
  parseFloat(n.toFixed(4)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });

const fmtLen = (n) =>
  parseFloat(n.toFixed(4)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "How do you calculate the area of a shape?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Each shape has its own formula. Rectangle: length × width. Triangle: ½ × base × height. Circle: π × radius². Parallelogram: base × height. Trapezoid: ½ × (base₁ + base₂) × height.",
    },
  },
  {
    "@type": "Question",
    name: "Which shapes does this area calculator support?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Rectangle, triangle, circle, parallelogram, and trapezoid. Select the shape and enter the labeled dimensions in the same units.",
    },
  },
  {
    "@type": "Question",
    name: "What units does the area result use?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Area is in square units of whatever you enter (e.g. meters → square meters, feet → square feet). Keep all inputs in the same unit.",
    },
  },
  {
    "@type": "Question",
    name: "How is trapezoid area calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A = ½ × (base₁ + base₂) × height, where height is the perpendicular distance between the two parallel bases.",
    },
  },
  {
    "@type": "Question",
    name: "Is a square different from a rectangle here?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Use Rectangle and enter equal length and width for a square. The formula is the same: side × side.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator find surface area of 3D solids?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This page is for flat 2D shapes. For 3D surface area, use a dedicated surface area or volume calculator.",
    },
  },
];

const AreaCalculator = () => {
  const [shape, setShape] = useState(DEFAULT_SHAPE);
  const [input1, setInput1] = useState(getShapeDefaults(DEFAULT_SHAPE).input1);
  const [input2, setInput2] = useState(getShapeDefaults(DEFAULT_SHAPE).input2);
  const [input3, setInput3] = useState(getShapeDefaults(DEFAULT_SHAPE).input3);

  const setters = { input1: setInput1, input2: setInput2, input3: setInput3 };
  const values = { input1, input2, input3 };

  const handleShapeChange = (nextShape) => {
    setShape(nextShape);
    const d = getShapeDefaults(nextShape);
    setInput1(d.input1);
    setInput2(d.input2);
    setInput3(d.input3);
  };

  const result = computeArea(shape, input1, input2, input3);

  const reset = () => {
    handleShapeChange(shape);
  };

  const shapeConfig = SHAPES[shape];

  return (
    <>
      <Helmet>
        <title>
          Area Calculator - Rectangle, Triangle, Circle, Trapezoid &amp; More
        </title>
        <meta
          name="description"
          content="Calculate area of rectangle, triangle, circle, parallelogram, or trapezoid. Enter dimensions in the same units—result in square units."
        />
        <meta
          name="keywords"
          content="area calculator, rectangle area, triangle area, circle area formula, trapezoid area, parallelogram area, geometry calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Area Calculator" />
        <meta
          property="og:description"
          content="2D shape area from length, width, radius, bases, and height."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Area Calculator" />
        <meta
          name="twitter:description"
          content="Area formulas for common plane shapes."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Area Calculator",
            url: PAGE_URL,
            description:
              "Calculate area of rectangle, triangle, circle, parallelogram, and trapezoid.",
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
            name: "Area Calculator",
            url: PAGE_URL,
            description: "Web tool for 2D shape area from dimensions.",
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
            headline: "Area Formulas for Common 2D Shapes",
            description:
              "How to compute plane figure area from base, height, radius, and sides.",
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
                name: "Area Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Shape</label>
            <select
              value={shape}
              onChange={(e) => handleShapeChange(e.target.value)}
              className={inputClassName}
            >
              {Object.entries(SHAPES).map(([key, cfg]) => (
                <option key={key} value={key}>
                  {cfg.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shapeConfig.inputs.map((inp) => (
              <div key={inp.key} className="space-y-2">
                <label className="font-h3 text-h3 text-on-surface">
                  {inp.label}
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={values[inp.key]}
                  onChange={(e) => setters[inp.key](e.target.value)}
                  className={inputClassName}
                />
              </div>
            ))}
          </div>

          <p className="text-sm text-on-surface-variant">
            Use the same unit for every dimension (e.g. all cm → area in cm²).
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Area summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Area</span>
              <span className="font-code-num text-code-num text-primary">
                {result && !result.error
                  ? `${fmtArea(result.area)} square units`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Shape</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.shapeLabel : shapeConfig.label}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Formula</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                {result && !result.error ? result.formula : shapeConfig.formula}
              </span>
            </div>

            {result &&
              !result.error &&
              result.inputs.map((inp) => (
                <div
                  key={inp.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-on-surface">{inp.label}</span>
                  <span className="font-code-num text-code-num">
                    {fmtLen(inp.value)}
                  </span>
                </div>
              ))}

            {result && !result.error && result.diameter != null && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-on-surface">Diameter</span>
                  <span className="font-code-num text-code-num">
                    {fmtLen(result.diameter)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-on-surface">Circumference</span>
                  <span className="font-code-num text-code-num">
                    {fmtLen(result.circumference)}
                  </span>
                </div>
              </>
            )}

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. ${result.note ?? "Plane figure area in square units of your input."}`
                : "Select a shape and enter dimensions to compute area."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AreaCalculator;
