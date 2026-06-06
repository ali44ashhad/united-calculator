import React from "react";
import { Link } from "react-router-dom";

export default function PregnancySeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Pregnancy calculator: how many weeks pregnant &amp; due date from LMP
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>pregnancy calculator</strong> to see{" "}
          <strong>how many weeks pregnant you are</strong>, your{" "}
          <strong>gestational age</strong>, <strong>trimester</strong>, and{" "}
          <strong>estimated due date</strong> from the{" "}
          <strong>first day of your last period (LMP)</strong>. It applies{" "}
          <strong>LMP + 280 days (40 weeks)</strong>—the same standard used in most
          prenatal offices—and shows approximate <strong>pregnancy progress</strong>{" "}
          through full term.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>pregnancy week calculator</strong> uses LMP only (not a
          separate conception date field). For EDD-focused wording, try the{" "}
          <Link
            to="/health/due-date-calculator"
            className="text-primary hover:underline"
          >
            Due Date Calculator
          </Link>
          . Before pregnancy, use the{" "}
          <Link
            to="/health/ovulation-calculator"
            className="text-primary hover:underline"
          >
            Ovulation Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/health/conception-calculator"
            className="text-primary hover:underline"
          >
            Conception Calculator
          </Link>
          . For conception-based dating, see the{" "}
          <Link
            to="/health/pregnancy-conception-calculator"
            className="text-primary hover:underline"
          >
            Pregnancy Conception Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is a pregnancy calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>pregnancy tracker calculator</strong> turns your LMP into:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Weeks and days pregnant</strong> today
          </li>
          <li>
            <strong>Estimated due date (EDD)</strong>
          </li>
          <li>
            <strong>Trimester band</strong> (first, second, third)
          </li>
          <li>
            <strong>Days remaining</strong> until due date
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this pregnancy calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Gestational age (wk + d) from LMP</li>
              <li>Due date (LMP + 280 days)</li>
              <li>Trimester and progress %</li>
              <li>Est. conception (~LMP + 14)</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Conception date as primary input</li>
              <li>Ultrasound crown–rump dating</li>
              <li>IVF transfer date method</li>
              <li>Week-by-week fetal development articles</li>
              <li>Medical prenatal prescriptions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Pregnancy dating formula
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Due date (EDD) = LMP + 280 days (40 weeks)

Gestational age today = days from LMP ÷ 7
  → full weeks + extra days

Example: LMP = January 1
  → EDD ≈ October 8
  → On March 15 ≈ 10 weeks 0 days pregnant`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Pregnancy trimesters by week
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>First trimester:</strong> weeks 1–12
          </li>
          <li>
            <strong>Second trimester:</strong> weeks 13–26
          </li>
          <li>
            <strong>Third trimester:</strong> weeks 27–40+
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this pregnancy calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the first day of your last menstrual period.</li>
          <li>Read how many weeks pregnant you are today.</li>
          <li>Note due date, trimester, and days until EDD.</li>
          <li>Confirm dating at your first prenatal visit—ultrasound may adjust.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>LMP:</strong> January 1, 2026 · <strong>Today:</strong> March 15,
            2026
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>Gestational age ≈ <strong>10 weeks 3 days</strong></li>
            <li>EDD ≈ <strong>October 8, 2026</strong> (280 days from LMP)</li>
            <li>Second trimester begins around week 13</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Pregnancy calculator vs due date calculator
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Both use <strong>LMP + 280 days</strong>. This page leads with{" "}
          <strong>how far along you are</strong> and progress; the{" "}
          <Link
            to="/health/due-date-calculator"
            className="text-primary hover:underline"
          >
            Due Date Calculator
          </Link>{" "}
          emphasizes the expected delivery date and EDD keywords.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (pregnancy weeks &amp; due date)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How does the pregnancy calculator work?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Enter LMP. Due date = LMP + 280 days. Weeks pregnant = days from LMP
              to today divided into weeks and days.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How many weeks pregnant am I?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Count days since LMP, divide by 7. Example: 76 days ≈{" "}
              <strong>10 weeks 6 days</strong>. This tool calculates automatically.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I track pregnancy progress week by week?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—gestational weeks, trimester, and progress % toward 40 weeks help
              you see where you are on the calendar. Detailed fetal milestones come
              from prenatal resources and your clinician.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does it use conception date?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Primary input is LMP. Estimated conception (~day 14) is shown for
              reference. Conception-first dating uses a different calculator on this
              site.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can my due date change?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Early ultrasound often adjusts EDD if it differs from LMP math. Use your
              provider&apos;s official date for care decisions.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is full term?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Often defined from 39 weeks 0 days through 40 weeks 6 days. Many
              healthy births occur between 37 and 42 weeks.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Gestational age vs fetal age?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Gestational age counts from LMP (what this tool shows). Fetal age from
              fertilization is usually about two weeks less on standard cycles.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this pregnancy calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Educational <strong>pregnancy timeline</strong> only. Prenatal
              diagnosis and high-risk care require licensed professionals.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
