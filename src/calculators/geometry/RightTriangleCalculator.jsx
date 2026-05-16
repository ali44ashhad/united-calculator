import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const RightTriangleCalculator = () => {
  const DEFAULTS = { legA: "3", legB: "4", hypotenuse: "" };

  const [legA, setLegA] = useState(DEFAULTS.legA);
  const [legB, setLegB] = useState(DEFAULTS.legB);
  const [hypotenuse, setHypotenuse] = useState(DEFAULTS.hypotenuse);

  const isEmpty = (val) => val.trim() === "";

  const solveRightTriangle = () => {
    const emptyA = isEmpty(legA);
    const emptyB = isEmpty(legB);
    const emptyC = isEmpty(hypotenuse);
    const emptyCount = [emptyA, emptyB, emptyC].filter(Boolean).length;

    if (emptyCount !== 1) {
      return {
        error:
          emptyCount === 0
            ? "Leave exactly one side blank to solve for it."
            : "Enter two known sides and leave one blank.",
      };
    }

    const a = parseFloat(legA);
    const b = parseFloat(legB);
    const c = parseFloat(hypotenuse);

    let sideA;
    let sideB;
    let sideC;
    let label;

    if (emptyC) {
      if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        return { error: "Enter positive valid values for both legs." };
      }
      sideA = a;
      sideB = b;
      sideC = Math.sqrt(a ** 2 + b ** 2);
      label = "Hypotenuse (c)";
    } else if (emptyA) {
      if (isNaN(c) || isNaN(b) || c <= 0 || b <= 0) {
        return { error: "Enter positive valid values for hypotenuse and leg b." };
      }
      if (c <= b) {
        return { error: "Hypotenuse must be greater than leg b." };
      }
      sideA = Math.sqrt(c ** 2 - b ** 2);
      sideB = b;
      sideC = c;
      label = "Leg a";
    } else if (emptyB) {
      if (isNaN(c) || isNaN(a) || c <= 0 || a <= 0) {
        return { error: "Enter positive valid values for hypotenuse and leg a." };
      }
      if (c <= a) {
        return { error: "Hypotenuse must be greater than leg a." };
      }
      sideA = a;
      sideB = Math.sqrt(c ** 2 - a ** 2);
      sideC = c;
      label = "Leg b";
    } else {
      return null;
    }

    const missingValue =
      label === "Hypotenuse (c)" ? sideC : label === "Leg a" ? sideA : sideB;

    return {
      label,
      value: missingValue,
      area: 0.5 * sideA * sideB,
      perimeter: sideA + sideB + sideC,
    };
  };

  const result = solveRightTriangle();

  const reset = () => {
    setLegA(DEFAULTS.legA);
    setLegB(DEFAULTS.legB);
    setHypotenuse(DEFAULTS.hypotenuse);
  };

  return (
    <>
      <Helmet>
        <title>
          Right Triangle Calculator - Sides, Area & Perimeter
        </title>
        <meta
          name="description"
          content="Solve a right triangle with a² + b² = c². Enter two sides, leave one blank, and get the missing side plus area and perimeter."
        />
        <meta
          name="keywords"
          content="right triangle calculator, hypotenuse calculator, right triangle area, triangle perimeter, pythagorean theorem triangle"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/geometry/right-triangle-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Right Triangle Calculator - Missing Side & Area"
        />
        <meta
          property="og:description"
          content="Find the missing side of a right triangle and see area and perimeter from your inputs."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/geometry/right-triangle-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Right Triangle Calculator - Legs & Hypotenuse"
        />
        <meta
          name="twitter:description"
          content="Pythagorean solver for right triangles with area and perimeter summary."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Right Triangle Calculator",
      "url": "https://www.unitedcalculator.net/geometry/right-triangle-calculator",
      "description": "Right triangle calculator to find a missing side using the Pythagorean theorem, plus area and perimeter when two sides are known.",
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
          "name": "What is a right triangle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A right triangle has one 90° angle. The longest side opposite that angle is the hypotenuse; the other two sides are legs."
          }
        },
        {
          "@type": "Question",
          "name": "Does this calculator find angles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This tool focuses on side lengths via a² + b² = c², plus area and perimeter. It does not compute angles."
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
          "name": "Right Triangle Calculator",
          "item": "https://www.unitedcalculator.net/geometry/right-triangle-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Leg a</label>
            <input
              type="number"
              value={legA}
              onChange={(e) => setLegA(e.target.value)}
              placeholder="Leave blank if unknown"
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Leg b</label>
            <input
              type="number"
              value={legB}
              onChange={(e) => setLegB(e.target.value)}
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
              value={hypotenuse}
              onChange={(e) => setHypotenuse(e.target.value)}
              placeholder="Leave blank if unknown"
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
              min="0"
              step="any"
            />
            <p className="text-sm text-on-surface-variant">
              Leave exactly one field empty. Hypotenuse must be the longest
              side.
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
            Right Triangle Summary
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
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Area</span>
              <span className="font-code-num text-code-num">
                {result?.area != null ? result.area.toFixed(4) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Perimeter</span>
              <span className="font-code-num text-code-num">
                {result?.perimeter != null ? result.perimeter.toFixed(4) : "—"}
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

export default RightTriangleCalculator;
