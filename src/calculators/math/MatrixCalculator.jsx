import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const MatrixCalculator = () => {
  const [matrixA, setMatrixA] = useState([
    [1, 2],
    [3, 4],
  ]);
  const [matrixB, setMatrixB] = useState([
    [5, 6],
    [7, 8],
  ]);
  const [operation, setOperation] = useState("add");

  const handleInput = (matrix, i, j, value) => {
    const newMatrix = [...matrix];
    newMatrix[i][j] = parseFloat(value) || 0;
    return newMatrix;
  };

  const calculateResult = () => {
    const result = [
      [0, 0],
      [0, 0],
    ];

    if (operation === "add" || operation === "subtract") {
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          result[i][j] =
            operation === "add"
              ? matrixA[i][j] + matrixB[i][j]
              : matrixA[i][j] - matrixB[i][j];
        }
      }
    } else if (operation === "multiply") {
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          result[i][j] =
            matrixA[i][0] * matrixB[0][j] + matrixA[i][1] * matrixB[1][j];
        }
      }
    }

    return result;
  };

  const result = calculateResult();

  return (
    <>
      <Helmet>
        <title>Matrix Calculator | Perform Matrix Operations Easily</title>
        <meta
          name="description"
          content="Use our Matrix Calculator to perform addition, subtraction, multiplication, determinant, inverse, and other matrix operations. Perfect for students and professionals."
        />
        <meta
          name="keywords"
          content="matrix calculator, matrix operations, matrix addition, matrix multiplication, determinant calculator, inverse matrix calculator, math calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/math/matrix-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Matrix Calculator | Perform Matrix Operations Easily"
        />
        <meta
          property="og:description"
          content="Easily calculate matrix operations such as addition, multiplication, determinant, and inverse with our Matrix Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/math/matrix-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Matrix Calculator",
  "url": "https://www.unitedcalculator.net/math/matrix-calculator",
  "description": "Perform matrix calculations including addition, multiplication, determinant, and inverse quickly using our Matrix Calculator.",
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
      "name": "What operations can I perform with the Matrix Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can perform matrix addition, subtraction, multiplication, find determinants, inverses, and more."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Matrix Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Input matrices according to the required operation and the calculator will compute the result instantly."
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
      "name": "Matrix Calculator",
      "item": "https://www.unitedcalculator.net/math/matrix-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">
          Matrix Calculator (2x2)
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {/* Matrix A */}
          <div>
            <h3 className="font-semibold mb-2">Matrix A</h3>
            {[0, 1].map((i) => (
              <div key={i} className="flex gap-2 mb-2">
                {[0, 1].map((j) => (
                  <input
                    key={j}
                    type="number"
                    value={matrixA[i][j]}
                    onChange={(e) =>
                      setMatrixA(handleInput(matrixA, i, j, e.target.value))
                    }
                    className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Matrix B */}
          <div>
            <h3 className="font-semibold mb-2">Matrix B</h3>
            {[0, 1].map((i) => (
              <div key={i} className="flex gap-2 mb-2">
                {[0, 1].map((j) => (
                  <input
                    key={j}
                    type="number"
                    value={matrixB[i][j]}
                    onChange={(e) =>
                      setMatrixB(handleInput(matrixB, i, j, e.target.value))
                    }
                    className="w-16 px-2 py-1 border border-gray-300 rounded text-center"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Operation */}
        <div className="mt-6">
          <label className="block mb-1 font-medium">Select Operation</label>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="add">Addition (A + B)</option>
            <option value="subtract">Subtraction (A - B)</option>
            <option value="multiply">Multiplication (A × B)</option>
          </select>
        </div>

        {/* Result */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Result</h3>
          {result.map((row, i) => (
            <div key={i} className="flex gap-2 mb-2">
              {row.map((value, j) => (
                <div
                  key={j}
                  className="w-16 px-2 py-1 border border-gray-300 bg-gray-50 text-center rounded"
                >
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MatrixCalculator;
