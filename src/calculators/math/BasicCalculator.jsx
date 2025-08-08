import React, { useState } from "react";
import Mexp from "math-expression-evaluator";
import { Helmet } from "react-helmet-async";
const BasicCalculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const result = new Mexp().eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Basic Calculator | Simple Online Calculator for Everyday Use
        </title>
        <meta
          name="description"
          content="Use our Basic Calculator to perform simple arithmetic operations like addition, subtraction, multiplication, and division instantly. Perfect for quick and easy calculations."
        />
        <meta
          name="keywords"
          content="basic calculator, online calculator, simple calculator, addition calculator, subtraction calculator, multiplication calculator, division calculator, math calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/math/basic-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Basic Calculator | Simple Online Calculator for Everyday Use"
        />
        <meta
          property="og:description"
          content="Perform quick and easy addition, subtraction, multiplication, and division using our Basic Calculator. Accessible from any device."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/math/basic-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Basic Calculator",
  "url": "https://unitedcalculator.net/math/basic-calculator",
  "description": "Use the Basic Calculator to quickly perform addition, subtraction, multiplication, and division. Ideal for students, professionals, and everyday use.",
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
      "name": "What can I calculate with the Basic Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Basic Calculator can perform simple arithmetic operations including addition, subtraction, multiplication, and division."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Basic Calculator free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Basic Calculator is completely free and can be accessed online from any device without registration."
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
      "name": "Basic Calculator",
      "item": "https://unitedcalculator.net/math/basic-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Basic Calculator
        </h2>
        <div className="mb-4">
          <input
            type="text"
            value={input}
            className="w-full text-right text-xl border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            readOnly
          />
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map((item) => (
            <button
              key={item}
              onClick={() =>
                item === "=" ? calculateResult() : handleClick(item)
              }
              className="bg-gray-100 hover:bg-gray-200 text-xl font-medium p-4 rounded shadow text-gray-800"
            >
              {item}
            </button>
          ))}

          <button
            onClick={handleClear}
            className="col-span-2 bg-red-100 hover:bg-red-200 text-red-600 font-medium p-4 rounded shadow"
          >
            Clear
          </button>
          <button
            onClick={handleDelete}
            className="col-span-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-medium p-4 rounded shadow"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default BasicCalculator;
