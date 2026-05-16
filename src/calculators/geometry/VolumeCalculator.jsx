import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const SHAPE_DEFAULTS = {
  cube: { side: "5" },
  cuboid: { length: "6", width: "4", height: "3" },
  sphere: { radius: "5" },
  cylinder: { radius: "4", height: "10" },
  cone: { radius: "3", height: "4" },
};

const SHAPE_LABELS = {
  cube: "Cube",
  cuboid: "Cuboid (rectangular prism)",
  sphere: "Sphere",
  cylinder: "Cylinder",
  cone: "Cone",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const parsePositive = (val) => {
  const n = parseFloat(val);
  return val !== undefined && val !== "" && !isNaN(n) && n > 0 ? n : null;
};

const VolumeCalculator = () => {
  const [shape, setShape] = useState("cube");
  const [inputs, setInputs] = useState(SHAPE_DEFAULTS.cube);

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleShapeChange = (e) => {
    const nextShape = e.target.value;
    setShape(nextShape);
    setInputs(SHAPE_DEFAULTS[nextShape]);
  };

  const calculateVolume = () => {
    const { side, length, width, height, radius } = inputs;

    switch (shape) {
      case "cube": {
        const s = parsePositive(side);
        if (s === null) return { error: "Enter a positive side length." };
        return { volume: s ** 3, formula: "V = s³" };
      }
      case "cuboid": {
        const l = parsePositive(length);
        const w = parsePositive(width);
        const h = parsePositive(height);
        if (l === null || w === null || h === null) {
          return { error: "Enter positive length, width, and height." };
        }
        return { volume: l * w * h, formula: "V = l × w × h" };
      }
      case "sphere": {
        const r = parsePositive(radius);
        if (r === null) return { error: "Enter a positive radius." };
        return {
          volume: (4 / 3) * Math.PI * r ** 3,
          formula: "V = (4/3)πr³",
        };
      }
      case "cylinder": {
        const r = parsePositive(radius);
        const h = parsePositive(height);
        if (r === null || h === null) {
          return { error: "Enter positive radius and height." };
        }
        return {
          volume: Math.PI * r ** 2 * h,
          formula: "V = πr²h",
        };
      }
      case "cone": {
        const r = parsePositive(radius);
        const h = parsePositive(height);
        if (r === null || h === null) {
          return { error: "Enter positive radius and vertical height." };
        }
        return {
          volume: (1 / 3) * Math.PI * r ** 2 * h,
          formula: "V = (1/3)πr²h",
        };
      }
      default:
        return null;
    }
  };

  const result = calculateVolume();

  const reset = () => {
    setShape("cube");
    setInputs(SHAPE_DEFAULTS.cube);
  };

  const renderInputs = () => {
    switch (shape) {
      case "cube":
        return (
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Side length</label>
            <input
              type="number"
              name="side"
              value={inputs.side ?? ""}
              onChange={handleInputChange}
              className={inputClassName}
              placeholder={SHAPE_DEFAULTS.cube.side}
              min="0"
              step="any"
            />
          </div>
        );
      case "cuboid":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["length", "Length", SHAPE_DEFAULTS.cuboid.length],
              ["width", "Width", SHAPE_DEFAULTS.cuboid.width],
              ["height", "Height", SHAPE_DEFAULTS.cuboid.height],
            ].map(([name, label, placeholder]) => (
              <div key={name} className="space-y-2">
                <label className="font-h3 text-h3 text-on-surface">{label}</label>
                <input
                  type="number"
                  name={name}
                  value={inputs[name] ?? ""}
                  onChange={handleInputChange}
                  className={inputClassName}
                  placeholder={placeholder}
                  min="0"
                  step="any"
                />
              </div>
            ))}
          </div>
        );
      case "sphere":
        return (
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Radius</label>
            <input
              type="number"
              name="radius"
              value={inputs.radius ?? ""}
              onChange={handleInputChange}
              className={inputClassName}
              placeholder={SHAPE_DEFAULTS.sphere.radius}
              min="0"
              step="any"
            />
          </div>
        );
      case "cylinder":
      case "cone":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-h3 text-h3 text-on-surface">Radius</label>
              <input
                type="number"
                name="radius"
                value={inputs.radius ?? ""}
                onChange={handleInputChange}
                className={inputClassName}
                placeholder={SHAPE_DEFAULTS[shape].radius}
                min="0"
                step="any"
              />
            </div>
            <div className="space-y-2">
              <label className="font-h3 text-h3 text-on-surface">
                {shape === "cone" ? "Vertical height (h)" : "Height"}
              </label>
              <input
                type="number"
                name="height"
                value={inputs.height ?? ""}
                onChange={handleInputChange}
                className={inputClassName}
                placeholder={SHAPE_DEFAULTS[shape].height}
                min="0"
                step="any"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Volume Calculator - Cube, Sphere, Cylinder, Cone & Cuboid
        </title>
        <meta
          name="description"
          content="Calculate volume of 3D shapes: cube, cuboid, sphere, cylinder, and cone. Enter dimensions for instant cubic-unit results with standard geometry formulas."
        />
        <meta
          name="keywords"
          content="volume calculator, cube volume calculator, sphere volume formula calculator, cylinder volume calculator, cone volume calculator, rectangular prism volume, how to find volume of 3d shapes online"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/geometry/volume-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Volume Calculator - 3D Shape Capacity"
        />
        <meta
          property="og:description"
          content="Pick a solid, enter measurements, get volume in cubic units."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/geometry/volume-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Volume Calculator - Cubic Units for 3D Solids"
        />
        <meta
          name="twitter:description"
          content="Free online volume calculator for common 3D geometry shapes."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Volume Calculator",
      "url": "https://www.unitedcalculator.net/geometry/volume-calculator",
      "description": "Volume calculator for cube, cuboid, sphere, cylinder, and cone using standard volume formulas.",
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
          "name": "What shapes does this volume calculator support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cube, cuboid (rectangular prism), sphere, cylinder, and cone. Each uses its standard volume formula."
          }
        },
        {
          "@type": "Question",
          "name": "Does the cone use slant height or vertical height?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vertical height h in V = (1/3)πr²h, measured perpendicular from base to apex—not slant height."
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
          "name": "Volume Calculator",
          "item": "https://www.unitedcalculator.net/geometry/volume-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">3D shape</label>
            <select
              value={shape}
              onChange={handleShapeChange}
              className={inputClassName}
            >
              <option value="cube">Cube</option>
              <option value="cuboid">Cuboid (rectangular prism)</option>
              <option value="sphere">Sphere</option>
              <option value="cylinder">Cylinder</option>
              <option value="cone">Cone</option>
            </select>
          </div>
          {renderInputs()}
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
            Volume Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Shape</span>
              <span className="font-code-num text-code-num">
                {SHAPE_LABELS[shape]}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Formula used</span>
              <span className="font-code-num text-code-num text-sm">
                {result?.formula ?? "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Volume</span>
              <span className="font-code-num text-code-num text-primary">
                {result?.volume != null
                  ? `${result.volume.toFixed(4)} cubic units`
                  : "—"}
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

export default VolumeCalculator;
