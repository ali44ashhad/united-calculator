import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const QuadraticFormulaCalculator = () => {
  const [a, setA] = useState("1");
  const [b, setB] = useState("-3");
  const [c, setC] = useState("2");

  const calculateRoots = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum) || aNum === 0) return null;

    const discriminant = bNum * bNum - 4 * aNum * cNum;

    if (discriminant > 0) {
      const root1 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
      const root2 = (-bNum - Math.sqrt(discriminant)) / (2 * aNum);
      return {
        type: "Real and Distinct",
        root1: root1.toFixed(4),
        root2: root2.toFixed(4),
      };
    } else if (discriminant === 0) {
      const root = -bNum / (2 * aNum);
      return {
        type: "Real and Equal",
        root1: root.toFixed(4),
        root2: root.toFixed(4),
      };
    } else {
      const realPart = (-bNum / (2 * aNum)).toFixed(4);
      const imagPart = (Math.sqrt(-discriminant) / (2 * aNum)).toFixed(4);
      return {
        type: "Complex Roots",
        root1: `${realPart} + ${imagPart}i`,
        root2: `${realPart} - ${imagPart}i`,
      };
    }
  };

  const result = calculateRoots();

  return (
    <>
      <Helmet>
        <title>
          Quadratic Formula Calculator | Solve Quadratic Equations Easily
        </title>
        <meta
          name="description"
          content="Use our Quadratic Formula Calculator to quickly solve quadratic equations and find their roots. Perfect for students and math enthusiasts."
        />
        <meta
          name="keywords"
          content="quadratic formula calculator, solve quadratic equations, quadratic equation solver, math calculator, roots of quadratic"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/quadratic-formula-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Quadratic Formula Calculator | Solve Quadratic Equations Easily"
        />
        <meta
          property="og:description"
          content="Quickly solve quadratic equations and find their roots using our easy-to-use Quadratic Formula Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/quadratic-formula-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Quadratic Formula Calculator",
  "url": "https://www.unitedcalculator.net/math/quadratic-formula-calculator",
  "description": "Solve quadratic equations and find roots quickly using our Quadratic Formula Calculator.",
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
      "name": "What is the quadratic formula?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The quadratic formula is used to find the roots of quadratic equations of the form ax² + bx + c = 0."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Quadratic Formula Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the coefficients a, b, and c of the quadratic equation, and the calculator will compute the roots."
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
      "name": "Quadratic Formula Calculator",
      "item": "https://www.unitedcalculator.net/math/quadratic-formula-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Coefficient a</label>
            <input
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="e.g. 1"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Coefficient b</label>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="e.g. -3"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Coefficient c</label>
            <input
              type="number"
              value={c}
              onChange={(e) => setC(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="e.g. 2"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Quadratic Equation Roots
            </h2>
            <div className="space-y-2">
              <div className="text-gray-700">
                Root Type:{" "}
                <span className="text-indigo-600 font-medium">
                  {result.type}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Root 1:</span>
                <span className="text-blue-600 font-medium">
                  {result.root1}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Root 2:</span>
                <span className="text-blue-600 font-medium">
                  {result.root2}
                </span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default QuadraticFormulaCalculator;
