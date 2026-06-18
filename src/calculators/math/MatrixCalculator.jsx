import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/matrix-calculator";

const DEFAULTS = {
  matrixA: [
    [1, 2],
    [3, 4],
  ],
  matrixB: [
    [5, 6],
    [7, 8],
  ],
  operation: "add",
};

const OPERATION_LABELS = {
  add: "Addition (A + B)",
  subtract: "Subtraction (A − B)",
  multiply: "Multiplication (A × B)",
};

const OPERATION_SYMBOLS = {
  add: "+",
  subtract: "−",
  multiply: "×",
};

const selectClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const cellInputClassName =
  "w-full px-3 py-2 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg text-center transition-all";

const cloneMatrix = (matrix) => matrix.map((row) => [...row]);

const formatMatrix = (matrix) =>
  matrix.map((row) => `[${row.join(", ")}]`).join("; ");

const determinant2x2 = (matrix) =>
  matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

const addMatrices = (a, b) =>
  a.map((row, i) => row.map((val, j) => val + b[i][j]));

const subtractMatrices = (a, b) =>
  a.map((row, i) => row.map((val, j) => val - b[i][j]));

const multiplyMatrices2x2 = (a, b) => {
  const result = [
    [0, 0],
    [0, 0],
  ];

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      result[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
    }
  }

  return result;
};

const computeMatrix = (matrixA, matrixB, operation) => {
  const detA = determinant2x2(matrixA);
  const detB = determinant2x2(matrixB);
  let result;
  let formula;

  switch (operation) {
    case "add":
      result = addMatrices(matrixA, matrixB);
      formula = "C[i,j] = A[i,j] + B[i,j]";
      break;
    case "subtract":
      result = subtractMatrices(matrixA, matrixB);
      formula = "C[i,j] = A[i,j] − B[i,j]";
      break;
    case "multiply":
      result = multiplyMatrices2x2(matrixA, matrixB);
      formula = "C[i,j] = Σ A[i,k] × B[k,j] (2×2)";
      break;
    default:
      return { error: "Select a valid operation." };
  }

  return {
    matrixA,
    matrixB,
    operation,
    operationLabel: OPERATION_LABELS[operation],
    operationSymbol: OPERATION_SYMBOLS[operation],
    result,
    resultText: formatMatrix(result),
    matrixAText: formatMatrix(matrixA),
    matrixBText: formatMatrix(matrixB),
    detA,
    detB,
    dimensions: "2 × 2",
    formula,
  };
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What operations does this matrix calculator support?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Addition, subtraction, and multiplication of two 2×2 matrices. Determinants of A and B are shown as reference—not matrix inverse.",
    },
  },
  {
    "@type": "Question",
    name: "What matrix size is supported?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "2×2 only on this page—not 3×3 or larger matrices.",
    },
  },
  {
    "@type": "Question",
    name: "How do you multiply two 2×2 matrices?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Row-by-column: C[i,j] = A[i,0]×B[0,j] + A[i,1]×B[1,j]. Matrix multiplication is not commutative.",
    },
  },
  {
    "@type": "Question",
    name: "What is the determinant of a 2×2 matrix?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "For [[a,b],[c,d]], det = ad − bc. This calculator displays det(A) and det(B) but does not compute inverses.",
    },
  },
  {
    "@type": "Question",
    name: "Can I find the inverse of a matrix here?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. This tool adds, subtracts, and multiplies two 2×2 matrices only.",
    },
  },
  {
    "@type": "Question",
    name: "Is matrix multiplication commutative?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. In general A × B ≠ B × A. Try both orders to compare results.",
    },
  },
];

const MatrixCalculator = () => {
  const [matrixA, setMatrixA] = useState(cloneMatrix(DEFAULTS.matrixA));
  const [matrixB, setMatrixB] = useState(cloneMatrix(DEFAULTS.matrixB));
  const [operation, setOperation] = useState(DEFAULTS.operation);

  const result = computeMatrix(matrixA, matrixB, operation);

  const updateCell = (matrix, setMatrix, row, col, value) => {
    const next = cloneMatrix(matrix);
    next[row][col] = value === "" ? 0 : parseFloat(value) || 0;
    setMatrix(next);
  };

  const reset = () => {
    setMatrixA(cloneMatrix(DEFAULTS.matrixA));
    setMatrixB(cloneMatrix(DEFAULTS.matrixB));
    setOperation(DEFAULTS.operation);
  };

  const renderMatrixInputs = (matrix, setMatrix, label) => (
    <div className="space-y-2">
      <label className="font-h3 text-h3 text-on-surface">{label}</label>
      <div className="space-y-2">
        {matrix.map((row, i) => (
          <div key={i} className="grid grid-cols-2 gap-2">
            {row.map((cell, j) => (
              <input
                key={j}
                type="number"
                step="any"
                value={cell}
                onChange={(e) =>
                  updateCell(matrix, setMatrix, i, j, e.target.value)
                }
                className={cellInputClassName}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  const renderMatrixDisplay = (matrix) => (
    <div className="space-y-2">
      {matrix.map((row, i) => (
        <div key={i} className="grid grid-cols-2 gap-2">
          {row.map((value, j) => (
            <div
              key={j}
              className="px-3 py-2 bg-surface-container border border-outline-variant rounded-lg text-center font-code-num text-code-num"
            >
              {Number.isFinite(value)
                ? parseFloat(value.toPrecision(10))
                : value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>
          Matrix Calculator - 2×2 Add, Subtract &amp; Multiply
        </title>
        <meta
          name="description"
          content="Add, subtract, or multiply two 2×2 matrices. Shows result plus det(A) and det(B)—not 3×3, inverse, or transpose."
        />
        <meta
          name="keywords"
          content="matrix calculator, 2x2 matrix multiplication, matrix addition, matrix subtraction, determinant 2x2"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Matrix Calculator" />
        <meta
          property="og:description"
          content="2×2 matrix + − × with determinant readouts."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Matrix Calculator" />
        <meta
          name="twitter:description"
          content="Two 2×2 matrices: add, subtract, multiply."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Matrix Calculator",
            url: PAGE_URL,
            description: "2×2 matrix addition, subtraction, and multiplication.",
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Matrix Calculator",
            url: PAGE_URL,
            description: "Web tool for 2×2 matrix operations.",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "2×2 Matrix Operations",
            description: "How to add, subtract, and multiply 2×2 matrices.",
            author: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
            inLanguage: "en",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_SCHEMA,
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.unitedcalculator.net",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Math Calculators",
                item: "https://www.unitedcalculator.net/math",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Matrix Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderMatrixInputs(matrixA, setMatrixA, "Matrix A")}
          {renderMatrixInputs(matrixB, setMatrixB, "Matrix B")}
        </div>

        <div className="space-y-2">
          <label className="font-h3 text-h3 text-on-surface">Operation</label>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className={selectClassName}
          >
            <option value="add">Addition (A + B)</option>
            <option value="subtract">Subtraction (A − B)</option>
            <option value="multiply">Multiplication (A × B)</option>
          </select>
          <p className="text-sm text-on-surface-variant">
            Two 2×2 matrices only—+ − ×, not inverse or 3×3.
          </p>
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
            Matrix result summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Result matrix</span>
              <span className="font-code-num text-code-num text-primary text-sm text-right max-w-[60%] break-words">
                {result && !result.error ? result.resultText : "—"}
              </span>
            </div>
            <div>
              <span className="text-on-surface block mb-2">Result grid</span>
              {result && !result.error ? renderMatrixDisplay(result.result) : "—"}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Operation</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.operationLabel : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Expression</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `A ${result.operationSymbol} B`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Dimensions</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.dimensions : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">det(A)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.detA : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">det(B)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.detB : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {result && !result.error
                ? `${result.formula}. 2×2 only—not inverse, transpose, or larger sizes.`
                : "Enter two 2×2 matrices and choose an operation."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MatrixCalculator;
