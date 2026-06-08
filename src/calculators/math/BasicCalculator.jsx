import React, { useState } from "react";
import Mexp from "math-expression-evaluator";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/math/basic-calculator";

const DEFAULTS = {
  expression: "",
};

const mexp = new Mexp();

const keyClassName =
  "text-xl font-medium p-4 rounded-lg border border-outline-variant bg-surface-container-lowest hover:bg-surface-container text-on-surface transition-colors active:scale-95";

const opClassName =
  "text-xl font-medium p-4 rounded-lg border border-outline-variant bg-primary/10 hover:bg-primary/20 text-primary transition-colors active:scale-95";

const actionClassName =
  "text-base font-medium p-4 rounded-lg border border-outline-variant bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors active:scale-95";

const KEYPAD_ROWS = [
  ["7", "8", "9", "/"],
  ["4", "5", "6", "*"],
  ["1", "2", "3", "-"],
  ["0", ".", "(", ")"],
  ["+", "=", "C", "⌫"],
];

const evaluateExpression = (expression) => {
  if (expression.trim() === "") {
    return null;
  }

  try {
    const value = mexp.eval(expression);

    if (typeof value !== "number" || !Number.isFinite(value)) {
      return { error: "Could not evaluate this expression." };
    }

    return {
      expression,
      result: value,
      resultText: Number.isInteger(value) ? String(value) : String(value),
    };
  } catch {
    return { error: "Invalid expression. Check operators and parentheses." };
  }
};

const fmtResult = (n) => {
  if (Number.isInteger(n)) {
    return n.toLocaleString(undefined, { maximumFractionDigits: 0 });
  }
  return parseFloat(n.toPrecision(12)).toLocaleString(undefined, {
    maximumFractionDigits: 10,
  });
};

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What can I calculate with the basic calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Addition, subtraction, multiplication, and division with decimals and parentheses for order of operations. Press = to evaluate the expression.",
    },
  },
  {
    "@type": "Question",
    name: "How do I use the online basic calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Tap numbers and operators to build an expression, then press =. Use C to clear, ⌫ to delete the last character, and ( ) for grouped calculations.",
    },
  },
  {
    "@type": "Question",
    name: "Does this basic calculator support scientific functions?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Sin, cos, log, powers, and constants are on the Scientific Calculator. This page is for everyday arithmetic only.",
    },
  },
  {
    "@type": "Question",
    name: "Is the basic calculator free?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Free to use in the browser with no sign-up.",
    },
  },
  {
    "@type": "Question",
    name: "Can I chain calculations after pressing equals?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. After =, the result stays in the display so you can continue with more operators.",
    },
  },
  {
    "@type": "Question",
    name: "Why do I see Error or an invalid message?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Usually a typo: unmatched parentheses, double operators, or division by zero. Clear and re-enter the expression.",
    },
  },
];

const BasicCalculator = () => {
  const [expression, setExpression] = useState(DEFAULTS.expression);
  const [summary, setSummary] = useState(null);

  const append = (value) => {
    if (summary?.error) {
      setSummary(null);
    }
    setExpression((prev) => prev + value);
  };

  const clearAll = () => {
    setExpression(DEFAULTS.expression);
    setSummary(null);
  };

  const backspace = () => {
    setExpression((prev) => prev.slice(0, -1));
    setSummary(null);
  };

  const calculate = () => {
    const outcome = evaluateExpression(expression);

    if (!outcome) {
      setSummary({ error: "Enter an expression to calculate." });
      return;
    }

    if (outcome.error) {
      setSummary(outcome);
      return;
    }

    setSummary(outcome);
    setExpression(outcome.resultText);
  };

  const handleKey = (key) => {
    if (key === "C") {
      clearAll();
    } else if (key === "⌫") {
      backspace();
    } else if (key === "=") {
      calculate();
    } else {
      append(key);
    }
  };

  const reset = () => {
    clearAll();
  };

  const buttonClass = (key) => {
    if (key === "C" || key === "⌫") return actionClassName;
    if (["+", "-", "*", "/", "="].includes(key)) return opClassName;
    return keyClassName;
  };

  return (
    <>
      <Helmet>
        <title>
          Basic Calculator - Free Online Add, Subtract, Multiply, Divide
        </title>
        <meta
          name="description"
          content="Free basic calculator online: +, −, ×, ÷ with decimals and parentheses. Clear, delete, and instant results—no sign-up."
        />
        <meta
          name="keywords"
          content="basic calculator, online calculator, simple calculator, addition subtraction multiplication division, free math calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Basic Calculator" />
        <meta
          property="og:description"
          content="Everyday arithmetic calculator in your browser."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Basic Calculator" />
        <meta
          name="twitter:description"
          content="Add, subtract, multiply, and divide online."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Basic Calculator",
            url: PAGE_URL,
            description:
              "Simple online calculator for addition, subtraction, multiplication, and division.",
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
            name: "Basic Calculator",
            url: PAGE_URL,
            description: "Web-based basic arithmetic calculator.",
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
            headline: "Using a Basic Online Calculator",
            description:
              "How to perform everyday arithmetic with +, −, ×, ÷.",
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
                name: "Basic Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <label className="font-h3 text-h3 text-on-surface">Expression</label>
          <input
            type="text"
            value={expression}
            readOnly
            aria-label="Calculator expression"
            placeholder="0"
            className="w-full text-right font-code-num text-2xl px-4 py-4 bg-white border border-outline-variant rounded-lg text-on-surface"
          />
          <p className="text-sm text-on-surface-variant">
            Supports +, −, ×, ÷, decimals, and parentheses. Press = to calculate.
          </p>

          <div className="grid grid-cols-4 gap-2">
            {KEYPAD_ROWS.flat().map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => handleKey(key)}
                className={buttonClass(key)}
                aria-label={key === "⌫" ? "Delete" : key}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={calculate}
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
            Calculation summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Result</span>
              <span className="font-code-num text-code-num text-primary">
                {summary && !summary.error
                  ? fmtResult(summary.result)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Expression evaluated</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%] break-all">
                {summary && !summary.error ? summary.expression : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Operations</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                +, −, ×, ÷, decimals, ( )
              </span>
            </div>

            {summary?.error && (
              <p className="text-sm text-error">{summary.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {summary && !summary.error
                ? "Result replaces the display so you can continue calculating. For trig and logs, use the Scientific Calculator."
                : "Build an expression on the keypad and press = or Calculate Now."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BasicCalculator;
