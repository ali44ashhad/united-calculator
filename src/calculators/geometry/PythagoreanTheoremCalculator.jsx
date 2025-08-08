import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const PythagoreanTheoremCalculator = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState("");

  const calculateMissingSide = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);

    if (c === "") {
      if (!isNaN(numA) && !isNaN(numB)) {
        const hypotenuse = Math.sqrt(numA ** 2 + numB ** 2);
        setResult(`Hypotenuse (c) = ${hypotenuse.toFixed(4)}`);
      } else {
        setResult("Enter valid values for a and b");
      }
    } else if (a === "") {
      if (!isNaN(numC) && !isNaN(numB) && numC > numB) {
        const sideA = Math.sqrt(numC ** 2 - numB ** 2);
        setResult(`Side a = ${sideA.toFixed(4)}`);
      } else {
        setResult("Enter valid values for c and b (c > b)");
      }
    } else if (b === "") {
      if (!isNaN(numC) && !isNaN(numA) && numC > numA) {
        const sideB = Math.sqrt(numC ** 2 - numA ** 2);
        setResult(`Side b = ${sideB.toFixed(4)}`);
      } else {
        setResult("Enter valid values for c and a (c > a)");
      }
    } else {
      setResult("Leave one field empty to calculate it");
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Pythagorean Theorem Calculator | Calculate Hypotenuse & Triangle Sides
        </title>
        <meta
          name="description"
          content="Use our Pythagorean Theorem Calculator to find the hypotenuse or any side of a right-angled triangle. Apply the Pythagorean formula with ease and solve geometry problems instantly."
        />
        <meta
          name="keywords"
          content="pythagorean theorem calculator, hypotenuse calculator, right triangle calculator, triangle side calculator, geometry calculator, a squared plus b squared equals c squared"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/geometry/pythagorean-theorem-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pythagorean Theorem Calculator | Calculate Hypotenuse & Triangle Sides"
        />
        <meta
          property="og:description"
          content="Find any side of a right-angled triangle using the Pythagorean Theorem Calculator. Calculate hypotenuse or legs easily using the a² + b² = c² formula."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/geometry/pythagorean-theorem-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Pythagorean Theorem Calculator",
      "url": "https://www.unitedcalculator.net/geometry/pythagorean-theorem-calculator",
      "description": "Use the Pythagorean Theorem Calculator to calculate the hypotenuse or any missing side of a right triangle using the a² + b² = c² formula. Ideal for students, teachers, and geometry enthusiasts.",
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
          "name": "What is the Pythagorean Theorem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Pythagorean Theorem is a fundamental principle in geometry that states: a² + b² = c², where c is the hypotenuse of a right-angled triangle, and a and b are the lengths of the other two sides."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use a Pythagorean Theorem Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To use the calculator, enter the lengths of any two sides of a right triangle. The calculator will use the Pythagorean formula to find the missing third side instantly."
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

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Pythagorean Theorem Calculator
        </h2>

        <div className="mb-3">
          <label className="block font-medium mb-1">Side a</label>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            placeholder="Leave blank if unknown"
            className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="mb-3">
          <label className="block font-medium mb-1">Side b</label>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
            placeholder="Leave blank if unknown"
            className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="mb-3">
          <label className="block font-medium mb-1">Hypotenuse (c)</label>
          <input
            type="number"
            value={c}
            onChange={(e) => setC(e.target.value)}
            placeholder="Leave blank if unknown"
            className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          onClick={calculateMissingSide}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Calculate
        </button>

        {result && (
          <div className="mt-4 bg-gray-50 p-4 border rounded text-gray-800">
            {result}
          </div>
        )}
      </div>
    </>
  );
};

export default PythagoreanTheoremCalculator;
