import React from "react";
import { Link } from "react-router-dom";

export default function PregnancyConceptionSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Pregnancy conception calculator: when did I conceive from due date?
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>pregnancy conception calculator</strong> to estimate{" "}
          <strong>when you conceived</strong> by working backward from your{" "}
          <strong>estimated due date (EDD)</strong>. The tool subtracts{" "}
          <strong>266 days (38 weeks)</strong> from your due date for a likely{" "}
          <strong>conception date</strong>, then shows an approximate{" "}
          <strong>fertile window</strong> and implied <strong>LMP</strong> (EDD −
          280 days).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you know your <strong>last period</strong> but not your due date, use
          the{" "}
          <Link
            to="/health/conception-calculator"
            className="text-primary hover:underline"
          >
            Conception Calculator
          </Link>{" "}
          or{" "}
          <Link
            to="/health/ovulation-calculator"
            className="text-primary hover:underline"
          >
            Ovulation Calculator
          </Link>{" "}
          forward from LMP. For EDD from period, try the{" "}
          <Link
            to="/health/due-date-calculator"
            className="text-primary hover:underline"
          >
            Due Date Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/health/pregnancy-calculator"
            className="text-primary hover:underline"
          >
            Pregnancy Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is a pregnancy conception calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>conception date calculator from due date</strong> reverses
          standard pregnancy dating. Clinicians often date pregnancy from LMP (+280
          days to EDD). Conception usually occurs about two weeks after LMP, so{" "}
          <strong>EDD − 266 days</strong> approximates fertilization timing.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Estimated conception date</strong>
          </li>
          <li>
            <strong>Fertile window</strong> (~5 days before through 1 day after)
          </li>
          <li>
            <strong>Implied LMP</strong> for cross-check
          </li>
          <li>
            <strong>Gestational age today</strong> from implied LMP
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Conception ≈ EDD − 266 days</li>
              <li>Fertile window around conception</li>
              <li>Implied LMP (EDD − 280 days)</li>
              <li>Gestational weeks from implied LMP</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Cycle length or ovulation test inputs</li>
              <li>IVF embryo transfer dating</li>
              <li>Ultrasound measurement entry</li>
              <li>Legal paternity determination</li>
              <li>Medical fertility diagnosis</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Conception from due date formula
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Estimated conception ≈ Due date − 266 days (38 weeks)

Implied LMP ≈ Due date − 280 days (40 weeks)

Fertile window ≈ Conception − 5 days through Conception + 1 day

Example: EDD = October 8
  → Conception ≈ January 15
  → Implied LMP ≈ January 1
  → Fertile window ≈ January 10 – January 16`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Why 266 days from conception to due date?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Pregnancy is often quoted as <strong>40 weeks from LMP</strong> (280
          days). If ovulation/conception is roughly <strong>14 days after LMP</strong>
          , then time from conception to the same EDD is{" "}
          <strong>280 − 14 = 266 days</strong> (~38 weeks). Individual ovulation
          timing shifts this estimate.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this pregnancy conception calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your estimated due date from prenatal care or prior calculators.</li>
          <li>Read the reverse-estimated conception date.</li>
          <li>Review the fertile window as approximate intercourse timing.</li>
          <li>Compare implied LMP with what you remember—large gaps suggest ultrasound dating.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>EDD:</strong> December 6, 2026
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>Conception ≈ <strong>March 15, 2026</strong> (266 days before)</li>
            <li>Implied LMP ≈ March 1, 2026</li>
            <li>Fertile window ≈ March 10 – March 16</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Reverse due date vs forward conception calculators
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Forward tools</strong> (LMP + cycle → ovulation/conception).{" "}
          <strong>This page</strong> starts from EDD when you already know when baby
          is due and ask <strong>when did I get pregnant</strong>. Both are calendar
          estimates, not DNA or ultrasound precision.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (conception from due date)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a pregnancy conception calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A tool that estimates <strong>conception date from due date</strong>{" "}
              using the 266-day (38-week) rule.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              When did I conceive if my due date is…?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Subtract 266 days from your EDD. Enter the date above for conception,
              fertile window, and implied LMP.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How accurate is conception date from due date?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Often within a few days to a week for average cycles. Irregular
              ovulation, IVF, or EDD changes from ultrasound widen the error band.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why not use 280 days from conception?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              280 days is from <strong>LMP</strong>, not fertilization. Conception
              is typically ~14 days after LMP on standard dating, hence 266 days.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this replace ovulation tracking?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It reverse-engineers from EDD. Before pregnancy, use{" "}
              <Link
                to="/health/ovulation-calculator"
                className="text-primary hover:underline"
              >
                ovulation
              </Link>{" "}
              or{" "}
              <Link
                to="/health/conception-calculator"
                className="text-primary hover:underline"
              >
                conception
              </Link>{" "}
              tools from your period.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can conception date be used for paternity?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Calendar estimates are not sufficient for legal paternity. DNA testing
              and professional counsel are required.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if my due date changed after ultrasound?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Use the <strong>updated EDD</strong> from your provider. Early
              ultrasound often shifts dating from LMP-only math.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this pregnancy conception calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Educational fertility awareness and dating only—consult clinicians
              for medical decisions.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
