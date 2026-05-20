import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/grade-calculator";

const DEFAULTS = {
  marks: "85",
  totalMarks: "100",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const letterGradeFromPercentage = (percentage) => {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 50) return "D";
  return "F";
};

const computeGrade = (marks, totalMarks) => {
  if (marks.trim() === "" || totalMarks.trim() === "") {
    return null;
  }

  const obtained = parseFloat(marks);
  const total = parseFloat(totalMarks);

  if (isNaN(obtained) || isNaN(total)) {
    return { error: "Enter valid numbers for marks obtained and total marks." };
  }

  if (total <= 0) {
    return { error: "Total marks must be greater than zero." };
  }

  if (obtained < 0) {
    return { error: "Marks obtained cannot be negative." };
  }

  const percentage = (obtained / total) * 100;
  const grade = letterGradeFromPercentage(percentage);

  return {
    obtained,
    total,
    percentage,
    grade,
  };
};

const formatPct = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const GradeCalculator = () => {
  const [marks, setMarks] = useState(DEFAULTS.marks);
  const [totalMarks, setTotalMarks] = useState(DEFAULTS.totalMarks);

  const result = computeGrade(marks, totalMarks);

  const reset = () => {
    setMarks(DEFAULTS.marks);
    setTotalMarks(DEFAULTS.totalMarks);
  };

  return (
    <>
      <Helmet>
        <title>
          Grade Calculator - Percentage & Letter Grade (A+ to F)
        </title>
        <meta
          name="description"
          content="Convert marks obtained and total marks into percentage and a letter grade: A+ (90%+), A (80%+), B (70%+), C (60%+), D (50%+), F below 50%."
        />
        <meta
          name="keywords"
          content="grade calculator percentage to letter grade, marks to grade calculator, test score grade calculator A B C, academic grade calculator 90 80 70 scale, final exam grade calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Grade Calculator - % and Letter Grade"
        />
        <meta
          property="og:description"
          content="Enter marks earned and total possible to see percentage and A+–F grade."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grade Calculator" />
        <meta
          name="twitter:description"
          content="Percentage and letter grade from two numbers."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Grade Calculator",
            url: PAGE_URL,
            description:
              "Calculate percentage from marks obtained and total marks, then map to letter grades A+ through F.",
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
            name: "Grade Calculator",
            url: PAGE_URL,
            description:
              "Web application to compute percentage and letter grade from obtained and total marks.",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
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
            headline: "How to Convert Test Marks to a Percentage and Letter Grade",
            description:
              "Guide to dividing marks earned by total possible, multiplying by 100, and applying a simple A+ to F scale.",
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
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": PAGE_URL,
            },
            inLanguage: "en",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How is percentage calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Percentage equals (marks obtained divided by total marks) times 100.",
                },
              },
              {
                "@type": "Question",
                name: "What letter grade scale does this calculator use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A+ for 90% and above, A for 80–89.99%, B for 70–79.99%, C for 60–69.99%, D for 50–59.99%, and F below 50%.",
                },
              },
              {
                "@type": "Question",
                name: "Can marks obtained be higher than total marks?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Extra credit can push the percentage above 100%; the letter grade stays A+ at 90% and above on this scale.",
                },
              },
              {
                "@type": "Question",
                name: "Is this the same as GPA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. GPA weights multiple courses by credit hours. This page maps one exam or assignment ratio to a letter band.",
                },
              },
            ],
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
                name: "Other Calculators",
                item: "https://www.unitedcalculator.net/other",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Grade Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Marks obtained
            </label>
            <input
              type="number"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.marks}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Total marks</label>
            <input
              type="number"
              value={totalMarks}
              onChange={(e) => setTotalMarks(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.totalMarks}
              min="0"
              step="any"
            />
          </div>
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Grade summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Score</span>
              <span className="font-code-num text-code-num">
                {result?.obtained != null && !result.error
                  ? `${result.obtained.toLocaleString()} / ${result.total.toLocaleString()}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Percentage</span>
              <span className="font-code-num text-code-num">
                {result?.percentage != null && !result.error
                  ? `${formatPct(result.percentage)}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Letter grade</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.grade && !result.error ? result.grade : "—"}
              </span>
            </div>
            <div className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant space-y-1">
              <p>
                Bands: <strong>A+</strong> ≥90%, <strong>A</strong> ≥80%,{" "}
                <strong>B</strong> ≥70%, <strong>C</strong> ≥60%,{" "}
                <strong>D</strong> ≥50%, <strong>F</strong> &lt;50%.
              </p>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              One simple scale for quick checks. Your school may use different
              cutoffs or plus/minus rules—confirm with the syllabus.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default GradeCalculator;
