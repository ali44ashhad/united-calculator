import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const SHAPE_DEFAULTS = {
  cube: { side: "5" },
  cuboid: { length: "6", width: "4", height: "3" },
  sphere: { radius: "5" },
  cylinder: { radius: "4", height: "10" },
  cone: { radius: "3", slantHeight: "5" },
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

const SurfaceAreaCalculator = () => {
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

  const calculateSurfaceArea = () => {
    const { side, length, width, height, radius, slantHeight } = inputs;

    switch (shape) {
      case "cube": {
        const s = parsePositive(side);
        if (s === null) return { error: "Enter a positive side length." };
        return {
          area: 6 * s * s,
          formula: "SA = 6s²",
        };
      }
      case "cuboid": {
        const l = parsePositive(length);
        const w = parsePositive(width);
        const h = parsePositive(height);
        if (l === null || w === null || h === null) {
          return { error: "Enter positive length, width, and height." };
        }
        return {
          area: 2 * (l * w + l * h + w * h),
          formula: "SA = 2(lw + lh + wh)",
        };
      }
      case "sphere": {
        const r = parsePositive(radius);
        if (r === null) return { error: "Enter a positive radius." };
        return {
          area: 4 * Math.PI * r * r,
          formula: "SA = 4πr²",
        };
      }
      case "cylinder": {
        const r = parsePositive(radius);
        const h = parsePositive(height);
        if (r === null || h === null) {
          return { error: "Enter positive radius and height." };
        }
        return {
          area: 2 * Math.PI * r * (r + h),
          formula: "SA = 2πr(r + h)",
        };
      }
      case "cone": {
        const r = parsePositive(radius);
        const l = parsePositive(slantHeight);
        if (r === null || l === null) {
          return { error: "Enter positive radius and slant height." };
        }
        return {
          area: Math.PI * r * (r + l),
          formula: "SA = πr(r + l)",
        };
      }
      default:
        return null;
    }
  };

  const result = calculateSurfaceArea();

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
                placeholder={SHAPE_DEFAULTS.cylinder.radius}
                min="0"
                step="any"
              />
            </div>
            <div className="space-y-2">
              <label className="font-h3 text-h3 text-on-surface">Height</label>
              <input
                type="number"
                name="height"
                value={inputs.height ?? ""}
                onChange={handleInputChange}
                className={inputClassName}
                placeholder={SHAPE_DEFAULTS.cylinder.height}
                min="0"
                step="any"
              />
            </div>
          </div>
        );
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
                placeholder={SHAPE_DEFAULTS.cone.radius}
                min="0"
                step="any"
              />
            </div>
            <div className="space-y-2">
              <label className="font-h3 text-h3 text-on-surface">
                Slant height (l)
              </label>
              <input
                type="number"
                name="slantHeight"
                value={inputs.slantHeight ?? ""}
                onChange={handleInputChange}
                className={inputClassName}
                placeholder={SHAPE_DEFAULTS.cone.slantHeight}
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
          Surface Area Calculator - Cube, Sphere, Cylinder, Cone & Cuboid
        </title>
        <meta
          name="description"
          content="Free surface area calculator for 3D shapes: cube, cuboid, sphere, cylinder, and cone. Enter dimensions to get total surface area in square units with standard geometry formulas."
        />
        <meta
          name="keywords"
          content="surface area calculator, cube surface area calculator, sphere surface area formula calculator, cylinder total surface area, cone surface area slant height, cuboid surface area rectangular prism, 3d shape surface area online"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/geometry/surface-area-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Surface Area Calculator - 3D Shapes"
        />
        <meta
          property="og:description"
          content="Calculate surface area of cubes, spheres, cylinders, cones, and cuboids from your measurements."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/geometry/surface-area-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Surface Area Calculator - Geometry 3D Tool"
        />
        <meta
          name="twitter:description"
          content="Pick a shape, enter dimensions, get total surface area instantly."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Surface Area Calculator",
      "url": "https://www.unitedcalculator.net/geometry/surface-area-calculator",
      "description": "Surface area calculator for cube, cuboid, sphere, cylinder, and cone using standard total surface area formulas.",
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
          "name": "What shapes does this surface area calculator support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cube, cuboid (rectangular prism), sphere, cylinder, and cone. Each shape uses its standard total surface area formula."
          }
        },
        {
          "@type": "Question",
          "name": "Does the cone calculator use slant height?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The cone option uses radius and slant height in SA = πr(r + l), which is the total surface area including the circular base and curved side."
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
          "name": "Surface Area Calculator",
          "item": "https://www.unitedcalculator.net/geometry/surface-area-calculator"
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
            Surface Area Summary
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
              <span className="text-on-surface">Total surface area</span>
              <span className="font-code-num text-code-num text-primary">
                {result?.area != null
                  ? `${result.area.toFixed(4)} sq units`
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

export default SurfaceAreaCalculator;
