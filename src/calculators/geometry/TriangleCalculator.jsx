import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const DEFAULTS = {
  base: "10",
  height: "5",
  sideA: "10",
  sideB: "6",
  sideC: "8",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const TriangleCalculator = () => {
  const [base, setBase] = useState(DEFAULTS.base);
  const [height, setHeight] = useState(DEFAULTS.height);
  const [sideA, setSideA] = useState(DEFAULTS.sideA);
  const [sideB, setSideB] = useState(DEFAULTS.sideB);
  const [sideC, setSideC] = useState(DEFAULTS.sideC);

  const calculateTriangle = () => {
    const b = parseFloat(base);
    const h = parseFloat(height);
    const a = parseFloat(sideA);
    const sb = parseFloat(sideB);
    const c = parseFloat(sideC);

    if (
      [b, h, a, sb, c].some((n) => isNaN(n) || n <= 0) ||
      [base, height, sideA, sideB, sideC].some((v) => v.trim() === "")
    ) {
      return { error: "Enter positive values for base, height, and all three sides." };
    }

    const validTriangle =
      a + sb > c && a + c > sb && sb + c > a;

    if (!validTriangle) {
      return {
        error:
          "Side lengths must satisfy the triangle inequality (each pair must sum to more than the third side).",
      };
    }

    return {
      area: 0.5 * b * h,
      perimeter: a + sb + c,
    };
  };

  const result = calculateTriangle();

  const reset = () => {
    setBase(DEFAULTS.base);
    setHeight(DEFAULTS.height);
    setSideA(DEFAULTS.sideA);
    setSideB(DEFAULTS.sideB);
    setSideC(DEFAULTS.sideC);
  };

  return (
    <>
      <Helmet>
        <title>
          Triangle Calculator - Area (Base × Height) & Perimeter
        </title>
        <meta
          name="description"
          content="Calculate triangle area with ½ × base × height and perimeter from three side lengths. Free online triangle area and perimeter calculator for geometry homework."
        />
        <meta
          name="keywords"
          content="triangle calculator, triangle area calculator base and height, triangle perimeter calculator three sides, find area of triangle online, calculate perimeter of triangle, geometry triangle tool"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/geometry/triangle-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Triangle Calculator - Area & Perimeter"
        />
        <meta
          property="og:description"
          content="Enter base, height, and three sides to get triangle area and perimeter."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/geometry/triangle-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Triangle Area & Perimeter Calculator"
        />
        <meta
          name="twitter:description"
          content="½ × base × height for area; sum of sides for perimeter."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Triangle Calculator",
      "url": "https://www.unitedcalculator.net/geometry/triangle-calculator",
      "description": "Triangle calculator for area using base and height and perimeter from three side lengths.",
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
          "name": "How does this triangle calculator find area?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Area uses the formula ½ × base × height. Enter the base length and the perpendicular height from that base to the opposite vertex."
          }
        },
        {
          "@type": "Question",
          "name": "How is perimeter calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Perimeter is the sum of side A, side B, and side C. The three sides must form a valid triangle (triangle inequality)."
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
          "name": "Triangle Calculator",
          "item": "https://www.unitedcalculator.net/geometry/triangle-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <p className="text-sm font-medium text-on-surface-variant uppercase tracking-wide">
              For area (½ × b × h)
            </p>
          </div>
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Base</label>
            <input
              type="number"
              value={base}
              onChange={(e) => setBase(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.base}
              min="0"
              step="any"
            />
          </div>
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Height</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.height}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2 md:col-span-2 pt-2 border-t border-outline-variant">
            <p className="text-sm font-medium text-on-surface-variant uppercase tracking-wide">
              For perimeter (a + b + c)
            </p>
          </div>
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Side A</label>
            <input
              type="number"
              value={sideA}
              onChange={(e) => setSideA(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.sideA}
              min="0"
              step="any"
            />
          </div>
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Side B</label>
            <input
              type="number"
              value={sideB}
              onChange={(e) => setSideB(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.sideB}
              min="0"
              step="any"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Side C</label>
            <input
              type="number"
              value={sideC}
              onChange={(e) => setSideC(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.sideC}
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
            Triangle Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Area</span>
              <span className="font-code-num text-code-num text-primary">
                {result?.area != null
                  ? `${result.area.toFixed(4)} sq units`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Perimeter</span>
              <span className="font-code-num text-code-num">
                {result?.perimeter != null
                  ? `${result.perimeter.toFixed(4)} units`
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Area uses base and height only. Perimeter sums the three side
              lengths (they must satisfy the triangle inequality).
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TriangleCalculator;
