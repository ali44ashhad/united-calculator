import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PythagoreanTheoremCalculator = () => {
  const DEFAULTS = { a: "3", b: "4", c: "" };

  const [a, setA] = useState(DEFAULTS.a);
  const [b, setB] = useState(DEFAULTS.b);
  const [c, setC] = useState(DEFAULTS.c);

  const isEmpty = (val) => val.trim() === "";

  const calculateMissingSide = () => {
    const emptyA = isEmpty(a);
    const emptyB = isEmpty(b);
    const emptyC = isEmpty(c);
    const emptyCount = [emptyA, emptyB, emptyC].filter(Boolean).length;

    if (emptyCount !== 1) {
      return {
        error:
          emptyCount === 0
            ? "Leave exactly one side blank to solve for it."
            : "Enter two known sides and leave one blank.",
      };
    }

    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);

    if (emptyC) {
      if (isNaN(numA) || isNaN(numB) || numA <= 0 || numB <= 0) {
        return { error: "Enter positive valid values for sides a and b." };
      }
      return {
        label: "Hypotenuse (c)",
        value: Math.sqrt(numA ** 2 + numB ** 2),
      };
    }

    if (emptyA) {
      if (isNaN(numC) || isNaN(numB) || numC <= 0 || numB <= 0) {
        return { error: "Enter positive valid values for c and b." };
      }
      if (numC <= numB) {
        return { error: "Hypotenuse c must be greater than side b." };
      }
      return {
        label: "Side a",
        value: Math.sqrt(numC ** 2 - numB ** 2),
      };
    }

    if (emptyB) {
      if (isNaN(numC) || isNaN(numA) || numC <= 0 || numA <= 0) {
        return { error: "Enter positive valid values for c and a." };
      }
      if (numC <= numA) {
        return { error: "Hypotenuse c must be greater than side a." };
      }
      return {
        label: "Side b",
        value: Math.sqrt(numC ** 2 - numA ** 2),
      };
    }

    return null;
  };

  const result = calculateMissingSide();

  const reset = () => {
    setA(DEFAULTS.a);
    setB(DEFAULTS.b);
    setC(DEFAULTS.c);
  };

  return (
    <>
      <Helmet>
        <title>
          Pythagorean Theorem Calculator - Hypotenuse & Right Triangle Sides
        </title>
        <meta
          name="description"
          content="Solve a² + b² = c² for the missing side of a right triangle. Enter any two sides and leave one blank to find the hypotenuse or a leg."
        />
        <meta
          name="keywords"
          content="pythagorean theorem calculator, hypotenuse calculator, right triangle calculator, a squared plus b squared, missing triangle side calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/geometry/pythagorean-theorem-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pythagorean Theorem Calculator - a² + b² = c²"
        />
        <meta
          property="og:description"
          content="Find the missing side of a right triangle when you know the other two."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/geometry/pythagorean-theorem-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Pythagorean Theorem Calculator - Right Triangle Sides"
        />
        <meta
          name="twitter:description"
          content="Calculate hypotenuse or leg length from two known sides."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Pythagorean Theorem Calculator",
      "url": "https://www.unitedcalculator.net/geometry/pythagorean-theorem-calculator",
      "description": "Pythagorean theorem calculator to find the missing side of a right triangle using a² + b² = c² when two sides are known.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://www.unitedcalculator.net"
      }
    }
    `}
        </script>
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Pythagorean Theorem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a right triangle, a² + b² = c², where c is the hypotenuse (longest side) and a and b are the legs."
          }
        },
        {
          "@type": "Question",
          "name": "How many sides do I enter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter exactly two known sides and leave the third blank. The calculator solves for the missing value."
          }
        }
      ]
    }
    `}
        </script>
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.unitedcalculator.net"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Geometry Calculators",
          "item": "https://www.unitedcalculator.net/geometry"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Pythagorean Theorem Calculator",
          "item": "https://www.unitedcalculator.net/geometry/pythagorean-theorem-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Side a</label>
            <input
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
              placeholder="Leave blank if unknown"
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Side b</label>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
              placeholder="Leave blank if unknown"
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Hypotenuse (c)
            </label>
            <input
              type="number"
              value={c}
              onChange={(e) => setC(e.target.value)}
              placeholder="Leave blank if unknown"
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
              min="0"
              step="any"
            />
            <p className="text-sm text-on-surface-variant">
              Leave exactly one field empty. c must be the longest side when
              solving for a leg.
            </p>
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
            Pythagorean Theorem Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Missing side</span>
              <span className="font-code-num text-code-num">
                {result?.label ?? "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Length</span>
              <span className="font-code-num text-code-num text-primary">
                {result?.value != null ? result.value.toFixed(4) : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default PythagoreanTheoremCalculator;
