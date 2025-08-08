import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const AreaCalculator = () => {
  const [shape, setShape] = useState("rectangle");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const calculateArea = () => {
    const a = parseFloat(input1);
    const b = parseFloat(input2);

    if (isNaN(a) || (shape !== "circle" && isNaN(b))) return null;

    switch (shape) {
      case "rectangle":
        return a * b;
      case "triangle":
        return 0.5 * a * b;
      case "circle":
        return Math.PI * a * a;
      case "parallelogram":
        return a * b;
      case "trapezoid":
        return 0.5 * (a + b) * parseFloat(input2);
      default:
        return null;
    }
  };

  const result = calculateArea();

  return (
    <>
      <Helmet>
        <title>Area Calculator | Calculate Area of Shapes Instantly</title>
        <meta
          name="description"
          content="Use our Area Calculator to quickly find the area of various shapes including circles, rectangles, triangles, squares, and more. Perfect for students, teachers, and professionals."
        />
        <meta
          name="keywords"
          content="area calculator, circle area calculator, rectangle area calculator, triangle area calculator, square area calculator, math calculator, geometry calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/area-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Area Calculator | Calculate Area of Shapes Instantly"
        />
        <meta
          property="og:description"
          content="Find the area of any shape instantly using our Area Calculator. Calculate circle, rectangle, triangle, and square areas with ease."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/area-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Area Calculator",
  "url": "https://www.unitedcalculator.net/math/area-calculator",
  "description": "Use the Area Calculator to calculate the area of circles, rectangles, triangles, squares, and more. Ideal for students, teachers, engineers, and architects.",
  "publisher": {
    "@type": "Organization",
    "name": "United Calculator",
    "url": "https://www.unitedcalculator.net"
  }
}
    `}
        </script>

        {/* JSON-LD: FAQ */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you calculate the area of a shape?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To calculate the area of a shape, you use its specific formula. For example, for a rectangle: length × width; for a circle: π × radius²; for a triangle: 0.5 × base × height."
      }
    },
    {
      "@type": "Question",
      "name": "Can this Area Calculator handle multiple shapes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Area Calculator supports circles, rectangles, triangles, squares, and more. Simply select the shape and enter its dimensions to get the area instantly."
      }
    }
  ]
}
    `}
        </script>

        {/* JSON-LD: Breadcrumb */}
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
      "name": "Math Calculators",
      "item": "https://www.unitedcalculator.net/math"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Area Calculator",
      "item": "https://www.unitedcalculator.net/math/area-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Select Shape</label>
            <select
              value={shape}
              onChange={(e) => {
                setShape(e.target.value);
                setInput1("");
                setInput2("");
              }}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="rectangle">Rectangle</option>
              <option value="triangle">Triangle</option>
              <option value="circle">Circle</option>
              <option value="parallelogram">Parallelogram</option>
              <option value="trapezoid">Trapezoid</option>
            </select>
          </div>

          {shape === "circle" ? (
            <div>
              <label className="block mb-1 font-medium">Radius</label>
              <input
                type="number"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          ) : (
            <>
              <div>
                <label className="block mb-1 font-medium">
                  {shape === "trapezoid"
                    ? "Base 1"
                    : shape === "triangle"
                    ? "Base"
                    : "Length"}
                </label>
                <input
                  type="number"
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  {shape === "trapezoid"
                    ? "Base 2"
                    : shape === "triangle"
                    ? "Height"
                    : "Width"}
                </label>
                <input
                  type="number"
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            </>
          )}
        </div>

        {result !== null && (
          <section className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
            <h2 className="text-xl font-semibold text-green-700 mb-2">Area</h2>
            <p className="text-gray-800 text-lg">
              📐 <strong>{result.toFixed(2)}</strong> square units
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default AreaCalculator;
