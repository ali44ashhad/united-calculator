import React, { useState } from "react";
import Mexp from "math-expression-evaluator";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/math/scientific-calculator";

const DEFAULTS = {
  expression: "",
};

const mexp = new Mexp();

const keyClassName =
  "text-sm font-medium p-3 rounded-lg border border-outline-variant bg-surface-container-lowest hover:bg-surface-container text-on-surface transition-colors active:scale-95";

const opClassName =
  "text-sm font-medium p-3 rounded-lg border border-outline-variant bg-primary/10 hover:bg-primary/20 text-primary transition-colors active:scale-95";

const actionClassName =
  "text-sm font-medium p-3 rounded-lg border border-outline-variant bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors active:scale-95";

const fnClassName =
  "text-xs font-medium p-3 rounded-lg border border-outline-variant bg-secondary/10 hover:bg-secondary/20 text-secondary transition-colors active:scale-95";

const KEYPAD_ROWS = [
  ["7", "8", "9", "/", "sin("],
  ["4", "5", "6", "*", "cos("],
  ["1", "2", "3", "-", "tan("],
  ["0", ".", "+", "(", ")"],
  ["log(", "ln(", "sqrt(", "^", "π"],
  ["e", "C", "⌫", "=", ""],
];

const prepareExpression = (expression) =>
  expression.replace(/π/g, "PI").replace(/e/g, "E").replace(/\^/g, "^");

const evaluateScientificExpression = (expression) => {
  if (expression.trim() === "") {
    return null;
  }

  try {
    const prepared = prepareExpression(expression);
    const value = mexp.eval(prepared);

    if (typeof value !== "number" || !Number.isFinite(value)) {
      return { error: "Could not evaluate this expression." };
    }

    const resultText = Number.isInteger(value) ? String(value) : String(value);

    return {
      expression,
      prepared,
      result: value,
      resultText,
      formula:
        "sin, cos, tan (radians), log, ln, sqrt, ^, π, e via expression parser",
    };
  } catch {
    return {
      error: "Invalid expression. Check functions, operators, and parentheses.",
    };
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
    name: "What can this scientific calculator do?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Evaluate expressions with +, −, ×, ÷, parentheses, sin, cos, tan, log, ln, sqrt, powers (^), and constants π and e. Press = to calculate.",
    },
  },
  {
    "@type": "Question",
    name: "Are trig functions in degrees or radians?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Radians—sin(π/2) = 1. There is no DEG/RAD toggle on this page.",
    },
  },
  {
    "@type": "Question",
    name: "How is this different from the basic calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The Basic Calculator handles everyday arithmetic only. This page adds scientific functions.",
    },
  },
  {
    "@type": "Question",
    name: "Does this graph or store history?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No—single-expression evaluation in the browser, no graphing or saved history.",
    },
  },
  {
    "@type": "Question",
    name: "What does log mean here?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "log( ) is base-10 logarithm; ln( ) is natural log (base e), matching common scientific calculators.",
    },
  },
  {
    "@type": "Question",
    name: "Why do I see an error?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Usually unmatched parentheses, empty input, or invalid syntax. Use C to clear and try again.",
    },
  },
];

const ScientificCalculator = () => {
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
    const outcome = evaluateScientificExpression(expression);

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
    if (!key) return;
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
    if (!key) return "hidden";
    if (key === "C" || key === "⌫") return actionClassName;
    if (["+", "-", "*", "/", "=", "^"].includes(key)) return opClassName;
    if (["sin(", "cos(", "tan(", "log(", "ln(", "sqrt("].includes(key)) {
      return fnClassName;
    }
    return keyClassName;
  };

  return (
    <>
      <Helmet>
        <title>
          Scientific Calculator - sin, cos, log &amp; Powers Online
        </title>
        <meta
          name="description"
          content="Online scientific calculator: sin, cos, tan (radians), log, ln, sqrt, powers, π and e—expression keypad, not graphing or unit conversion."
        />
        <meta
          name="keywords"
          content="scientific calculator, online trig calculator, logarithm calculator, sin cos tan"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Scientific Calculator" />
        <meta
          property="og:description"
          content="Trig, logs, roots, and powers in the browser."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Scientific Calculator" />
        <meta
          name="twitter:description"
          content="Scientific math expressions online."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Scientific Calculator",
            url: PAGE_URL,
            description: "Online scientific calculator with trig and logs.",
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
            name: "Scientific Calculator",
            url: PAGE_URL,
            description: "Web-based scientific expression calculator.",
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
            headline: "Using a Scientific Calculator Online",
            description: "Trig, logarithms, and powers in one keypad.",
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
                name: "Scientific Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4 max-w-lg mx-auto">
          <label className="font-h3 text-h3 text-on-surface">Expression</label>
          <input
            type="text"
            value={expression}
            readOnly
            aria-label="Scientific calculator expression"
            placeholder="0"
            className="w-full text-right font-code-num text-2xl px-4 py-4 bg-white border border-outline-variant rounded-lg text-on-surface"
          />
          <p className="text-sm text-on-surface-variant">
            Trig uses <strong>radians</strong>. Tap functions then enter values,
            close parentheses, press =.
          </p>

          <div className="grid grid-cols-5 gap-2">
            {KEYPAD_ROWS.flat().map((key, index) =>
              key ? (
                <button
                  key={`${key}-${index}`}
                  type="button"
                  onClick={() => handleKey(key)}
                  className={buttonClass(key)}
                  aria-label={key === "⌫" ? "Delete" : key}
                >
                  {key}
                </button>
              ) : (
                <span key={`spacer-${index}`} aria-hidden="true" />
              )
            )}
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
                {summary && !summary.error ? fmtResult(summary.result) : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Expression evaluated</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%] break-all">
                {summary && !summary.error ? summary.expression : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Functions</span>
              <span className="font-code-num text-code-num text-sm text-right max-w-[55%]">
                sin, cos, tan, log, ln, sqrt, ^, π, e
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Trig mode</span>
              <span className="font-code-num text-code-num">Radians</span>
            </div>

            {summary?.error && (
              <p className="text-sm text-error">{summary.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              {summary && !summary.error
                ? `${summary.formula}. Result stays in the display for chaining—not graphing or CAS.`
                : "Build an expression on the keypad and press = or Calculate Now."}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ScientificCalculator;
