import React from "react";
import { Link } from "react-router-dom";

export default function GPASeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          GPA calculator: weighted average by credit hours
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Universities report <strong>grade point average (GPA)</strong> so
          students, advisors, and scholarship committees can compare academic
          load-adjusted performance. Most US-style systems use a{" "}
          <strong>weighted GPA</strong>: each course contributes{" "}
          <strong>grade points × credit hours</strong> to a “quality point”
          pool, then you divide by <strong>total attempted credits that count
          toward GPA</strong>. This <strong>free GPA calculator online</strong>{" "}
          implements exactly that math—add as many rows as you need, type your
          numeric grade points and credits, and read GPA plus intermediate sums
          in the summary card.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The tool does <strong>not</strong> guess your registrar’s edge cases
          (grade forgiveness, NC grades, audit hours, or A+ above 4.0). For
          long-run averages across many numbers in general, the{" "}
          <Link
            to="/statistics/statistics-calculator"
            className="text-primary hover:underline"
          >
            Statistics Calculator
          </Link>{" "}
          can help with means and medians of raw scores; GPA here stays in the
          credit-weighted lane.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula in plain English</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`GPA = Σ (grade points × credit hours) ÷ Σ (credit hours)

Example:
  Course A: 3.7 points × 3 credits = 11.1 quality points
  Course B: 3.3 points × 4 credits = 13.2 quality points
  Total credits = 7
  GPA = (11.1 + 13.2) ÷ 7 ≈ 3.47`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Typical grade-point scales (you enter the number)
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>4.0 scale:</strong> A = 4.0, B = 3.0, etc., sometimes with
            ±0.3 steps depending on the school.
          </li>
          <li>
            <strong>Weighted high-school GPAs</strong> may bump honors/AP
            courses—this calculator has one numeric field per course; use the
            bumped value if your school publishes it that way.
          </li>
          <li>
            Always match the <strong>same scale</strong> for every row in one run
            (do not mix 4.0 points with a 5.0-scale physics grade without
            converting first).
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Planning tuition alongside grades
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          GPA affects merit aid at some institutions; total cost depends on
          tuition, room, board, and aid packages. When you are modeling college
          expenses—not just semester grades—open the{" "}
          <Link
            to="/finance/college-cost-calculator"
            className="text-primary hover:underline"
          >
            College Cost Calculator
          </Link>{" "}
          in another tab and compare scenarios with your projected GPA trends.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Study-life balance</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you also track sports performance metrics, the{" "}
          <Link
            to="/other/golf-handicap-calculator"
            className="text-primary hover:underline"
          >
            Golf Handicap Calculator
          </Link>{" "}
          uses a completely different formula—but the idea is the same: one
          summary number built from structured inputs you maintain over time.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Limitations</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>No letter-grade picker—enter numeric points yourself.</li>
          <li>No semester vs cumulative split logic; merge or separate runs manually.</li>
          <li>No plus/minus tables per institution baked in.</li>
          <li>Not legal or transcript advice—verify with your registrar.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if I took a 0-credit lab?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Rows with zero credits are rejected because they would divide by
              zero. Omit non-GPA labs or follow your school’s published policy for
              quality points.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I combine two semesters?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Add every course from both semesters in one list (or compute each
              semester separately, then combine totals: sum all quality points and
              divide by sum of all credits).
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why does my university GPA differ slightly?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Rounding rules, repeated courses, exclusion of certain withdrawals,
              and truncated credit displays on transcripts can shift the final
              number by a few hundredths.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
