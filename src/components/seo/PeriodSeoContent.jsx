import React from "react";
import { Link } from "react-router-dom";

export default function PeriodSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Period calculator: next period date &amp; menstrual cycle tracker
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>period calculator</strong> to predict your{" "}
          <strong>next period date</strong> from the{" "}
          <strong>first day of your last period</strong> and your{" "}
          <strong>average cycle length</strong>. It shows a{" "}
          <strong>countdown to your next period</strong>, your{" "}
          <strong>current cycle day</strong>, and the next few predicted cycle
          starts—a simple <strong>menstrual cycle calculator</strong> for planning
          and awareness.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Wondering <strong>when is my next period</strong> or need a{" "}
          <strong>period tracker</strong> without an app account? Enter dates above.
          For <strong>ovulation</strong> and <strong>fertile days</strong>, use the{" "}
          <Link
            to="/health/ovulation-calculator"
            className="text-primary hover:underline"
          >
            Ovulation Calculator
          </Link>
          . For pregnancy timing, see the{" "}
          <Link
            to="/health/conception-calculator"
            className="text-primary hover:underline"
          >
            Conception Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/health/due-date-calculator"
            className="text-primary hover:underline"
          >
            Due Date Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is a period calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>period calculator</strong> (or{" "}
          <strong>next period calculator</strong>) adds your typical{" "}
          <strong>cycle length in days</strong> to your last period start to estimate
          when bleeding may begin again. It is calendar-based—not hormone testing.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Next period start</strong> — primary prediction
          </li>
          <li>
            <strong>Future cycles</strong> — rolling estimates for planning
          </li>
          <li>
            <strong>Cycle day</strong> — where you are in the current cycle today
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this period calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Next period date estimate</li>
              <li>Countdown and cycle day</li>
              <li>Next 3 predicted period starts</li>
              <li>Cycle presets (21–35 days)</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Bleeding duration (period length) tracking</li>
              <li>Symptom or mood logging</li>
              <li>Birth control or hormone modeling</li>
              <li>Pregnancy test timing</li>
              <li>Medical diagnosis of irregular bleeding</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Next period date formula
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Next period start ≈ Last period start + Cycle length (days)

Cycle length = days from day 1 of one period
               to day 1 of the next

Example: Last period Jan 1, 28-day cycle
  → Next period ≈ Jan 29
  → Following ≈ Feb 26, Mar 26`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Normal menstrual cycle length
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Many cycles last <strong>21 to 35 days</strong>. A{" "}
          <strong>28-day cycle</strong> is a common textbook average. Track 3–6 months
          if yours vary—use the average for this{" "}
          <strong>cycle calendar calculator</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this period calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter the <strong>first day of your last period</strong> (first day of
            full flow).
          </li>
          <li>Enter or select your average <strong>cycle length</strong>.</li>
          <li>Read next period date, countdown, and cycle day.</li>
          <li>
            When your period starts, update the last period date for the next
            prediction.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Last period:</strong> March 5 · <strong>Cycle:</strong> 30 days
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              Next period ≈ <strong>April 4</strong>
            </li>
            <li>On March 20 you are on about cycle day 16</li>
            <li>Following estimates: May 4, June 3</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Period calculator vs ovulation calculator
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This page predicts <strong>when bleeding starts again</strong>. The{" "}
          <Link
            to="/health/ovulation-calculator"
            className="text-primary hover:underline"
          >
            Ovulation Calculator
          </Link>{" "}
          estimates mid-cycle egg release and fertile days (~cycle length − 14).
          Many people use both for cycle awareness and family planning.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          When periods are irregular
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Stress, PCOS, thyroid issues, perimenopause, and hormonal contraception
          can change cycle length. Predictions are least reliable when months differ
          widely—see a clinician for persistent irregularity or heavy bleeding.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (period &amp; cycle)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a period calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A tool that estimates your <strong>next menstrual period</strong> from
              your last period start and average cycle length.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate my next period?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Add your cycle length in days to your last period&apos;s first day.
              Example: Jan 10 + 28 days ≈ Feb 7.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How accurate is a period calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Regular cycles improve accuracy. One or two days early or late is common
              even in healthy cycles—treat dates as estimates.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if my period is late?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Late periods can follow stress, illness, weight change, or pregnancy.
              Calendar math alone cannot explain a missed period—consider a pregnancy
              test and medical advice if concerned.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is cycle day 1 the first day of bleeding?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. <strong>Day 1</strong> is the first day of full menstrual flow,
              not spotting alone—match how you entered your last period.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use this on birth control?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Hormonal contraception often regulates or suppresses natural cycles.
              Withdrawal bleeds on the pill may not follow the same calendar rules—ask
              your prescriber how to track.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Period calculator vs period app?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Apps log history and learn your average over time. This page gives quick
              math from two inputs—update LMP each cycle for ongoing use.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this period calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It is an educational <strong>menstrual cycle tracker</strong>.
              Abnormal bleeding, severe pain, or fertility concerns need professional
              care.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
