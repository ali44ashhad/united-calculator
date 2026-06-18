import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/math/quadratic-formula-calculator";

const DEFAULTS = {
  a: "1",
  b: "-3",
  c: "2",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const fmtNum = (n) =>
  parseFloat(n.toFixed(6)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  });

const formatEquation = (a, b, c) => {
  const bSign = b >= 0 ? ` + ${fmtNum(b)}x` : ` − ${fmtNum(Math.abs(b))}x`;
  const cSign = c >= 0 ? ` + ${fmtNum(c)}` : ` − ${fmtNum(Math.abs(c))}`;
  const aPart = a === 1 ? "x²" : a === -1 ? "−x²" : `${fmtNum(a)}x²`;
  return `${aPart}${bSign}${cSign} = 0`;
};

const computeQuadraticRoots = (aInput, bInput, cInput) => {
  if (aInput.trim() === "" || bInput.trim() === "" || cInput.trim() === "") {
    return null;
  }

  const aNum = parseFloat(aInput);
  const bNum = parseFloat(bInput);
  const cNum = parseFloat(cInput);

  if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
    return { error: "Enter valid numbers for a, b, and c." };
  }

  if (aNum === 0) {
    return { error: "Coefficient a cannot be 0 (not a quadratic equation)." };
  }

  const discriminant = bNum * bNum - 4 * aNum * cNum;
  const equation = formatEquation(aNum, bNum, cNum);

  if (discriminant > 0) {
    const root1 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
    const root2 = (-bNum - Math.sqrt(discriminant)) / (2 * aNum);
    return {
      a: aNum,
      b: bNum,
      c: cNum,
      discriminant,
      rootType: "Two real distinct roots",
      root1: fmtNum(root1),
      root2: fmtNum(root2),
      root1Text: `x₁ = ${fmtNum(root1)}`,
      root2Text: `x₂ = ${fmtNum(root2)}`,
      equation,
      formula: "x = (−b ± √(b² − 4ac)) / (2a)",
    };
  }

  if (discriminant === 0) {
    const root = -bNum / (2 * aNum);
    return {
      a: aNum,
      b: bNum,
      c: cNum,
      discriminant,
      rootType: "One real repeated root",
      root1: fmtNum(root),
      root2: fmtNum(root),
      root1Text: `x = ${fmtNum(root)} (double root)`,
      root2Text: `x = ${fmtNum(root)} (double root)`,
      equation,
      formula: "x = (−b ± √(b² − 4ac)) / (2a)",
    };
  }

  const realPart = -bNum / (2 * aNum);
  const imagPart = Math.sqrt(-discriminant) / (2 * aNum);
  return {
    a: aNum,
    b: bNum,
    c: cNum,
    discriminant,
    rootType: "Two complex conjugate roots",
    root1: `${fmtNum(realPart)} + ${fmtNum(imagPart)}i`,
    root2: `${fmtNum(realPart)} − ${fmtNum(imagPart)}i`,
    root1Text: `x₁ = ${fmtNum(realPart)} + ${fmtNum(imagPart)}i`,
    root2Text: `x₂ = ${fmtNum(realPart)} − ${fmtNum(imagPart)}i`,
    equation,
    formula: "x = (−b ± √(b² − 4ac)) / (2a)",
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What is the quadratic formula?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "For ax² + bx + c = 0 with a ≠ 0, x = (−b ± √(b² − 4ac)) / (2a).",
    },
  },
  {
    "@type": "Question",
    name: "What is the discriminant?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "b² − 4ac. Positive: two real roots. Zero: one repeated real root. Negative: two complex roots.",
    },
  },
  {
    "@type": "Question",
    name: "Why must a not be zero?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "If a = 0, the equation is linear (bx + c = 0), not quadratic.",
    },
  },
  {
    "@type": "Question",
    name: "Does this calculator graph parabolas?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No—it returns roots from the quadratic formula only, not a graph or vertex form.",
    },
  },
  {
    "@type": "Question",
    name: "Can the roots be complex?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes—when the discriminant is negative, roots are complex conjugates a ± bi.",
    },
  },
  {
    "@type": "Question",
    name: "What equation does this solve?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Standard form ax² + bx + c = 0. Enter coefficients a, b, and c.",
    },
  },
];

const QuadraticFormulaCalculator = () => {
  const [a, setA] = useState(DEFAULTS.a);
  const [b, setB] = useState(DEFAULTS.b);
  const [c, setC] = useState(DEFAULTS.c);

  const result = computeQuadraticRoots(a, b, c);

  const reset = () => {
    setA(DEFAULTS.a);
    setB(DEFAULTS.b);
    setC(DEFAULTS.c);
  };

  return (
    <>
      <Helmet>
        <title>
          Quadratic Formula Calculator - Solve ax² + bx + c = 0
        </title>
        <meta
          name="description"
          content="Solve ax² + bx + c = 0 with the quadratic formula—real or complex roots and discriminant—not graphing or cubic equations."
        />
        <meta
          name="keywords"
          content="quadratic formula calculator, quadratic equation solver, discriminant, roots"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Quadratic Formula Calculator" />
        <meta
          property="og:description"
          content="Roots of ax² + bx + c = 0."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quadratic Formula Calculator" />
        <meta
          name="twitter:description"
          content="Quadratic formula roots and discriminant."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Quadratic Formula Calculator",
            url: PAGE_URL,
            description: "Solve quadratic equations using the quadratic formula.",
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
            name: "Quadratic Formula Calculator",
            url: PAGE_URL,
            description: "Web tool for quadratic equation roots.",
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
            headline: "Quadratic Formula",
            description: "How to find roots of ax² + bx + c = 0.",
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
                name: "Quadratic Formula Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Solve <strong>ax² + bx + c = 0</strong> using coefficients a, b, and c.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Coefficient a
            </label>
            <input
              type="number"
              step="any"
              value={a}
              onChange={(e) => setA(e.target.value)}
              placeholder="e.g. 1"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">x² term (cannot be 0).</p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Coefficient b
            </label>
            <input
              type="number"
              step="any"
              value={b}
              onChange={(e) => setB(e.target.value)}
              placeholder="e.g. -3"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">x term.</p>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Coefficient c
            </label>
            <input
              type="number"
              step="any"
              value={c}
              onChange={(e) => setC(e.target.value)}
              placeholder="e.g. 2"
              className={inputClassName}
            />
            <p className="text-sm text-on-surface-variant">Constant term.</p>
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
            Quadratic roots summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Equation</span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[60%] break-words">
                {result && !result.error ? result.equation : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Discriminant (b² − 4ac)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? fmtNum(result.discriminant) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Root type</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%] break-words">
                {result && !result.error ? result.rootType : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Root 1</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%] break-words">
                {result && !result.error ? result.root1Text : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Root 2</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%] break-words">
                {result && !result.error ? result.root2Text : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. Quadratic formula only—not graph, vertex form, or cubic solver.`
                : "Enter coefficients a, b, and c."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuadraticFormulaCalculator;
