import React, { useState } from "react";
import Mexp from "math-expression-evaluator";
import { Helmet } from "react-helmet-async";
const ScientificCalculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const appendToExpression = (value) => {
    setExpression((prev) => prev + value);
  };

  const clearExpression = () => {
    setExpression("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      let replacedExpr = expression
        .replace(/π/g, "PI")
        .replace(/e/g, "E")
        .replace(/\^/g, "^");

      const mexp = new Mexp();
      const evalResult = mexp.eval(replacedExpr);
      setResult(evalResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "sin(",
    "4",
    "5",
    "6",
    "*",
    "cos(",
    "1",
    "2",
    "3",
    "-",
    "tan(",
    "0",
    ".",
    "+",
    "(",
    ")",
    "log(",
    "ln(",
    "sqrt(",
    "^",
    "π",
    "e",
    "C",
    "=",
  ];

  const handleButtonClick = (btn) => {
    if (btn === "C") {
      clearExpression();
    } else if (btn === "=") {
      calculateResult();
    } else {
      appendToExpression(btn);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Scientific Calculator | Perform Advanced Math Calculations
        </title>
        <meta
          name="description"
          content="Use our Scientific Calculator to perform advanced math calculations including trigonometry, logarithms, exponents, and more. Ideal for students and professionals."
        />
        <meta
          name="keywords"
          content="scientific calculator, advanced calculator, math calculator, trigonometry calculator, logarithm calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/scientific-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Scientific Calculator | Perform Advanced Math Calculations"
        />
        <meta
          property="og:description"
          content="Perform complex mathematical calculations including trigonometry, logarithms, and exponents easily with our Scientific Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/scientific-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Scientific Calculator",
  "url": "https://www.unitedcalculator.net/math/scientific-calculator",
  "description": "Perform advanced mathematical calculations easily with our Scientific Calculator.",
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
      "name": "What is a scientific calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A scientific calculator is a calculator capable of performing advanced mathematical functions like trigonometry, logarithms, and exponents."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Scientific Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the calculator interface to input mathematical expressions and perform advanced calculations."
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
      "name": "Scientific Calculator",
      "item": "https://www.unitedcalculator.net/math/scientific-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 max-w-md p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
          Scientific Calculator
        </h2>

        <input
          type="text"
          value={expression}
          className="w-full text-right text-xl border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          readOnly
        />
        <div className="text-right text-green-600 font-semibold mt-1 text-lg min-h-[24px]">
          {result}
        </div>

        <div className="grid grid-cols-5 gap-2 mt-4">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className={`text-sm font-medium p-3 rounded shadow transition ${
                btn === "C"
                  ? "bg-red-100 hover:bg-red-200 text-red-600"
                  : btn === "="
                  ? "bg-indigo-500 hover:bg-indigo-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScientificCalculator;
