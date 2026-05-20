import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/gpa-calculator";

const DEFAULT_COURSES = [
  { grade: "3.7", credit: "3" },
  { grade: "3.3", credit: "4" },
];

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const cloneCourses = (list) => list.map((c) => ({ ...c }));

const computeGPA = (courses) => {
  let totalCredits = 0;
  let totalPoints = 0;

  for (const course of courses) {
    const gStr = course.grade.trim();
    const cStr = course.credit.trim();

    if (gStr === "" && cStr === "") {
      continue;
    }

    if (gStr === "" || cStr === "") {
      return {
        error: "Each row needs both grade and credit hours, or clear both fields.",
      };
    }

    const grade = parseFloat(gStr);
    const credit = parseFloat(cStr);

    if (isNaN(grade) || isNaN(credit)) {
      return { error: "Enter numeric grade points and credit hours." };
    }

    if (credit <= 0) {
      return { error: "Credit hours must be greater than zero for each counted course." };
    }

    totalPoints += grade * credit;
    totalCredits += credit;
  }

  if (totalCredits === 0) {
    return null;
  }

  const gpa = totalPoints / totalCredits;

  return {
    totalCredits,
    totalPoints,
    gpa,
  };
};

const formatGpa = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

const GPACalculator = () => {
  const [courses, setCourses] = useState(() => cloneCourses(DEFAULT_COURSES));

  const result = computeGPA(courses);

  const handleCourseChange = (index, field, value) => {
    const updated = [...courses];
    updated[index] = { ...updated[index], [field]: value };
    setCourses(updated);
  };

  const addCourse = () => {
    setCourses([...courses, { grade: "", credit: "" }]);
  };

  const removeCourse = (index) => {
    if (courses.length <= 1) return;
    setCourses(courses.filter((_, i) => i !== index));
  };

  const reset = () => {
    setCourses(cloneCourses(DEFAULT_COURSES));
  };

  return (
    <>
      <Helmet>
        <title>GPA Calculator - Weighted Grade Point Average by Credits</title>
        <meta
          name="description"
          content="Calculate semester or cumulative GPA: enter grade points (e.g. 4.0 scale) and credit hours per course. GPA = sum(grade × credit) ÷ sum(credits)."
        />
        <meta
          name="keywords"
          content="GPA calculator weighted by credits, semester GPA calculator, cumulative GPA calculator online, grade points credit hours calculator, college GPA estimator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="GPA Calculator - Credits & Grade Points"
        />
        <meta
          property="og:description"
          content="Weighted GPA from course grade points and credit hours."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GPA Calculator" />
        <meta
          name="twitter:description"
          content="Add courses with grades and credits to compute GPA."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "GPA Calculator",
            url: PAGE_URL,
            description:
              "Calculate weighted GPA from numeric grade points and credit hours per course.",
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
            name: "GPA Calculator",
            url: PAGE_URL,
            description:
              "Web application to compute weighted grade point average from course inputs.",
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
            headline: "How to Calculate a Weighted GPA from Credits and Grades",
            description:
              "Guide to multiplying grade points by credit hours, summing quality points, and dividing by total credits.",
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
                name: "How is GPA calculated in this tool?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For each course, multiply grade points by credit hours, sum those products, then divide by the sum of credit hours: GPA = Σ(grade × credit) ÷ Σ(credits).",
                },
              },
              {
                "@type": "Question",
                name: "What grade scale should I use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Enter grade points on your school’s scale (often 4.0 where A=4.0). This calculator does not convert letter grades for you.",
                },
              },
              {
                "@type": "Question",
                name: "Are pass/fail or withdrawal courses included?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Only rows you fill with grade and credit are included. Typically P/F courses carry 0 GPA credits—omit them or enter per your registrar’s rules.",
                },
              },
              {
                "@type": "Question",
                name: "Is this my official transcript GPA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Schools may repeat-course policies, rounding, plus/minus tables, and weighting rules this page does not know. Use it for estimates and planning.",
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
                name: "GPA Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="p-4 border border-outline-variant rounded-xl bg-surface-container-lowest/50 space-y-3"
            >
              <p className="text-sm font-medium text-on-surface-variant">
                Course {index + 1}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-h3 text-h3 text-on-surface">
                    Grade points
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="e.g. 3.7"
                    value={course.grade}
                    onChange={(e) =>
                      handleCourseChange(index, "grade", e.target.value)
                    }
                    className={inputClassName}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-h3 text-h3 text-on-surface">
                    Credit hours
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    placeholder="e.g. 3"
                    value={course.credit}
                    onChange={(e) =>
                      handleCourseChange(index, "credit", e.target.value)
                    }
                    className={inputClassName}
                  />
                </div>
              </div>
              {courses.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeCourse(index)}
                  className="text-sm text-error hover:underline"
                >
                  Remove course
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addCourse}
          className="w-full md:w-auto px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors"
        >
          + Add course
        </button>

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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">GPA summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total credit hours</span>
              <span className="font-code-num text-code-num">
                {result?.totalCredits != null && !result.error
                  ? result.totalCredits.toLocaleString()
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Quality points (Σ grade × credit)</span>
              <span className="font-code-num text-code-num">
                {result?.totalPoints != null && !result.error
                  ? formatGpa(result.totalPoints)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">GPA</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.gpa != null && !result.error
                  ? formatGpa(result.gpa)
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Weighted GPA only—you enter numeric grade points (e.g. 4.0 scale).
              Does not map A/B/C letters or apply your school’s repeat policies.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default GPACalculator;
