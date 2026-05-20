import React from "react";
import { Link } from "react-router-dom";

export default function GradeSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Grade calculator: from raw marks to percentage and A+–F letter band
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          After a midterm or assignment is returned, the first thing most students
          check is <strong>what percent they earned</strong> and how that maps to
          a <strong>letter grade</strong>. This <strong>free grade calculator
          online</strong> divides <strong>marks obtained</strong> by{" "}
          <strong>total possible marks</strong>, multiplies by 100 for a
          percentage, then applies a clear banded scale:{" "}
          <strong>A+</strong> at 90% and up, <strong>A</strong> from 80%,{" "}
          <strong>B</strong> from 70%, <strong>C</strong> from 60%,{" "}
          <strong>D</strong> from 50%, and <strong>F</strong> below half. It is
          ideal for quick “what if I got X out of Y?” checks before you email the
          TA.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>semester-wide GPA</strong> across many courses with credit
          hours, use the{" "}
          <Link
            to="/other/gpa-calculator"
            className="text-primary hover:underline"
          >
            GPA Calculator
          </Link>{" "}
          instead—this page is for <strong>one numerator and one denominator</strong>
          at a time.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The percentage formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Percentage = (marks obtained ÷ total marks) × 100

Example: 34 out of 40 → (34 ÷ 40) × 100 = 85% → letter A (80–89.99%).`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          When this scale matches (and when it does not)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Many high schools and intro courses use cutoffs near 90/80/70/60, but
          others curve to the class median, drop the lowest quiz, or use{" "}
          <strong>weighted categories</strong> (exams 60%, homework 20%, final
          20%). This tool assumes a <strong>flat proportional score</strong> with
          no weights—perfect for a single exam line on the syllabus that says
          “out of 100 points” or “out of 50.”
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If your instructor publishes a <strong>rubric table</strong> with
          different breakpoints, treat this calculator as a rough guide and use
          their table for the official letter on the transcript.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Related tools</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <Link
              to="/other/gpa-calculator"
              className="text-primary hover:underline"
            >
              GPA Calculator
            </Link>{" "}
            — credit-weighted average across courses.
          </li>
          <li>
            <Link
              to="/statistics/statistics-calculator"
              className="text-primary hover:underline"
            >
              Statistics Calculator
            </Link>{" "}
            — mean and median of a list of scores for class-wide analysis.
          </li>
          <li>
            <Link
              to="/other/conversion-calculator"
              className="text-primary hover:underline"
            >
              Conversion Calculator
            </Link>{" "}
            — length units if you ever mix metric rubric totals with imperial
            examples (rare, but students ask).
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Limitations</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>No plus/minus letters (A−, B+)—only A+, A, B, C, D, F.</li>
          <li>
            Percentage can exceed 100% with extra credit; letter stays A+ for 90%
            and above.
          </li>
          <li>Does not combine multiple assignments into one course grade.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What grade is 75%?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              On this scale, 75% falls in the <strong>B</strong> band (70–79.99%).
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is 59% a D or an F?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>D</strong> runs from 50% up to but not including 60%. So 59%
              is still a D here; below 50% is F.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can total marks be something other than 100?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Enter any positive total (e.g. 40-point quiz, 150-point final).
              The percentage is always obtained ÷ total × 100.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
