import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const BigNumberCalculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState("");

  const calculate = () => {
    try {
      const big1 = BigInt(num1);
      const big2 = BigInt(num2);
      let res;

      switch (operation) {
        case "+":
          res = big1 + big2;
          break;
        case "-":
          res = big1 - big2;
          break;
        case "*":
          res = big1 * big2;
          break;
        case "/":
          if (big2 === BigInt(0)) {
            setResult("Cannot divide by 0");
            return;
          }
          res = big1 / big2;
          break;
        default:
          res = "Invalid operation";
      }

      setResult(res.toString());
    } catch {
      setResult("Invalid input");
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Big Number Calculator | Handle Large Number Calculations Online
        </title>
        <meta
          name="description"
          content="Use our Big Number Calculator to perform arithmetic with extremely large numbers without losing accuracy. Ideal for scientists, engineers, and financial analysts."
        />
        <meta
          name="keywords"
          content="big number calculator, large number calculator, high precision calculator, scientific calculator, large value calculator, math calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/big-number-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Big Number Calculator | Handle Large Number Calculations Online"
        />
        <meta
          property="og:description"
          content="Easily perform accurate calculations with extremely large numbers using our Big Number Calculator. Perfect for complex math, science, and finance."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/big-number-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Big Number Calculator",
  "url": "https://www.unitedcalculator.net/math/big-number-calculator",
  "description": "Use the Big Number Calculator to handle very large number calculations with high precision. Ideal for scientific research, finance, and engineering applications.",
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
      "name": "What is a Big Number Calculator used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Big Number Calculator is used to perform calculations with extremely large values that cannot be handled by regular calculators without losing precision."
      }
    },
    {
      "@type": "Question",
      "name": "Can it handle scientific and financial data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Big Number Calculator can accurately process large numbers for scientific research, engineering computations, and financial modeling."
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
      "name": "Big Number Calculator",
      "item": "https://www.unitedcalculator.net/math/big-number-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Big Number Calculator
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Number 1</label>
            <input
              type="text"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter large number"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Number 2</label>
            <input
              type="text"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter large number"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Operation</label>
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="+">Addition (+)</option>
              <option value="-">Subtraction (-)</option>
              <option value="*">Multiplication (*)</option>
              <option value="/">Division (/)</option>
            </select>
          </div>

          <button
            onClick={calculate}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold transition"
          >
            Calculate
          </button>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Result</h3>
            <p className="text-blue-600 break-words">{result}</p>
          </section>
        )}
      </div>
    </>
  );
};

export default BigNumberCalculator;
