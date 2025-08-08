import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const BinaryCalculator = () => {
  const [bin1, setBin1] = useState("");
  const [bin2, setBin2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState("");

  const isValidBinary = (str) => /^[01]+$/.test(str);

  const calculate = () => {
    if (!isValidBinary(bin1) || !isValidBinary(bin2)) {
      setResult("Invalid binary input");
      return;
    }

    const num1 = parseInt(bin1, 2);
    const num2 = parseInt(bin2, 2);
    let res;

    switch (operation) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          setResult("Cannot divide by 0");
          return;
        }
        res = Math.floor(num1 / num2);
        break;
      default:
        setResult("Invalid operation");
        return;
    }

    setResult(res.toString(2)); // convert result back to binary
  };

  return (
    <>
      <Helmet>
        <title>Binary Calculator | Convert & Perform Binary Math Online</title>
        <meta
          name="description"
          content="Use our Binary Calculator to perform binary addition, subtraction, multiplication, and division. Convert between binary, decimal, and hexadecimal easily."
        />
        <meta
          name="keywords"
          content="binary calculator, binary math calculator, binary converter, decimal to binary, binary to decimal, binary arithmetic, math calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/math/binary-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Binary Calculator | Convert & Perform Binary Math Online"
        />
        <meta
          property="og:description"
          content="Easily perform binary arithmetic and conversions between binary, decimal, and hexadecimal using our Binary Calculator."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/math/binary-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Binary Calculator",
  "url": "https://unitedcalculator.net/math/binary-calculator",
  "description": "Use the Binary Calculator to perform binary addition, subtraction, multiplication, and division, as well as convert between binary, decimal, and hexadecimal formats.",
  "publisher": {
    "@type": "Organization",
    "name": "United Calculator",
    "url": "https://unitedcalculator.net"
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
      "name": "What is a Binary Calculator used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Binary Calculator is used to perform binary arithmetic operations like addition, subtraction, multiplication, and division, as well as conversions between binary, decimal, and hexadecimal."
      }
    },
    {
      "@type": "Question",
      "name": "Can I convert binary to decimal using this calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Binary Calculator can easily convert binary to decimal, decimal to binary, and even binary to hexadecimal."
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
      "item": "https://unitedcalculator.net"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Math Calculators",
      "item": "https://unitedcalculator.net/math"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Binary Calculator",
      "item": "https://unitedcalculator.net/math/binary-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>
      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Binary Calculator
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Binary Number 1</label>
            <input
              type="text"
              value={bin1}
              onChange={(e) => setBin1(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1010"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Binary Number 2</label>
            <input
              type="text"
              value={bin2}
              onChange={(e) => setBin2(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 0110"
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
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Result (Binary)
            </h3>
            <p className="text-blue-600 break-words">{result}</p>
          </section>
        )}
      </div>
    </>
  );
};

export default BinaryCalculator;
