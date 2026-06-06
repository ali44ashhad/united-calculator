import React from "react";
import { Link } from "react-router-dom";

export default function DueDateSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Due date calculator: pregnancy EDD, gestational age &amp; delivery estimate
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>due date calculator</strong> to find your{" "}
          <strong>estimated due date (EDD)</strong>—also called your{" "}
          <strong>expected delivery date</strong> or{" "}
          <strong>baby due date</strong>—from the{" "}
          <strong>first day of your last menstrual period (LMP)</strong>. It applies
          the standard <strong>40-week pregnancy</strong> rule (280 days from LMP)
          used in most <strong>pregnancy calculators</strong> and prenatal offices.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you are asking <strong>when is my baby due based on last period</strong>,
          wondering <strong>how many weeks pregnant am I</strong>, or need a quick{" "}
          <strong>gestational age calculator</strong>, enter LMP above for EDD,
          <strong> pregnancy week</strong> count, trimester band, and days remaining
          until delivery. Only a small share of births land exactly on the calendar
          EDD—many arrive between about <strong>37 and 42 weeks</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Planning before pregnancy? Start with the{" "}
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
          </Link>
          . After you have an EDD, track milestones on the{" "}
          <Link
            to="/health/pregnancy-calculator"
            className="text-primary hover:underline"
          >
            Pregnancy Calculator
          </Link>{" "}
          or compare conception-based timing on the{" "}
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
          What is a due date calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>due date calculator</strong> (or{" "}
          <strong>EDD calculator</strong>) estimates when a pregnancy may reach{" "}
          <strong>40 weeks gestation</strong> using your <strong>LMP date</strong>.
          Clinicians use the same starting point for <strong>gestational age</strong>
          , even though fertilization usually happens about two weeks after LMP on
          average cycles.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Estimated due date (EDD)</strong> — projected delivery day
          </li>
          <li>
            <strong>How far along you are</strong> — weeks and days pregnant today
          </li>
          <li>
            <strong>Trimester</strong> — first, second, or third (approximate)
          </li>
          <li>
            <strong>Countdown</strong> — days until due date from today
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this due date calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>EDD from LMP + 280 days (Naegele&apos;s rule)</li>
              <li>Gestational age in weeks + days</li>
              <li>Approximate trimester</li>
              <li>Days until (or past) due date</li>
              <li>Estimated conception (~ LMP + 14 days)</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Ultrasound crown–rump length dating</li>
              <li>IVF embryo transfer date method</li>
              <li>Individual cycle length adjustments</li>
              <li>Medical induction or cesarean scheduling</li>
              <li>High-risk pregnancy protocols</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Due date formula: Naegele&apos;s rule
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Estimated due date (EDD) = LMP + 280 days
                        = LMP + 40 weeks

Gestational age today = days from LMP ÷ 7
  (full weeks + extra days)

Example: LMP = January 1
  → EDD ≈ October 8 (280 days later)
  → On April 1 you are about 13 weeks 0 days`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Some countries teach <strong>LMP + 7 days − 3 months + 1 year</strong> as
          the same Naegele adjustment. This tool adds <strong>280 days</strong>{" "}
          directly for clarity.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          LMP vs conception date vs ultrasound
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Pregnancy dating from last period</strong> is standard because LMP
          is usually known before ovulation is confirmed.{" "}
          <strong>Conception date</strong> is often about 14 days after LMP on a
          28-day cycle—but sperm and egg timing vary. An early{" "}
          <strong>ultrasound due date</strong> may replace LMP-based EDD if
          measurements differ by more than roughly a week in the first trimester.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this due date calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter the <strong>first day of your last period</strong> (first day of
            full bleeding, not spotting).
          </li>
          <li>
            Click <strong>Calculate Now</strong> to see your{" "}
            <strong>estimated delivery date</strong>.
          </li>
          <li>
            Read <strong>gestational age</strong>, trimester, and days until due.
          </li>
          <li>
            Share the EDD with your provider; ultrasound may refine it at your first
            prenatal visit.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>LMP:</strong> March 1, 2026
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              <strong>EDD:</strong> March 1 + 280 days ≈ <strong>December 6, 2026</strong>
            </li>
            <li>
              <strong>Estimated conception (~day 14):</strong> around March 15
            </li>
            <li>
              On <strong>June 1</strong> you are about <strong>13 weeks</strong>{" "}
              pregnant (second trimester)
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Pregnancy trimesters by gestational week
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>First trimester:</strong> weeks 1–12 — organ formation, early
            symptoms
          </li>
          <li>
            <strong>Second trimester:</strong> weeks 13–26 — often more energy,
            anatomy scan period
          </li>
          <li>
            <strong>Third trimester:</strong> weeks 27–40+ — fetal growth, birth
            planning
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Full term</strong> is often defined from 39 weeks 0 days through
          40 weeks 6 days; <strong>early term</strong> from 37 weeks. Your care team
          defines what is safe for your pregnancy.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          When your due date might change
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>First-trimester ultrasound measures fetal size vs LMP</li>
          <li>Uncertain LMP or irregular cycles</li>
          <li>Assisted reproduction with known transfer or retrieval date</li>
          <li>Later growth scans if provider suspects dating mismatch</li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Treat this page as a <strong>pregnancy due date estimator</strong> until
          your clinician confirms official dating.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (due date &amp; pregnancy dating)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is the due date calculated from last period?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Add <strong>280 days (40 weeks)</strong> to the first day of your last
              menstrual period. That is <strong>Naegele&apos;s rule</strong>, the
              basis of most <strong>EDD calculators</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              When is my baby due if my last period was…?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Enter that LMP date above. The summary shows your{" "}
              <strong>expected delivery date</strong>, how many weeks pregnant you
              are today, and how many days remain.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can the due date change during pregnancy?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. <strong>Ultrasound dating</strong> in the first trimester often
              adjusts EDD if it differs from LMP math. Use your provider&apos;s final
              date for clinical decisions.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is gestational age vs fetal age?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Gestational age</strong> counts from LMP (what this tool
              shows). <strong>Fetal age</strong> from conception is usually about
              two weeks less on standard cycles.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How accurate is a due date calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              LMP dating is a strong starting point when cycles are regular and you
              remember LMP well. Irregular periods, recent hormonal birth control, or
              breastfeeding can reduce accuracy until ultrasound.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is the due date the same as the delivery date?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. EDD is the midpoint estimate. Normal labor often occurs in the
              weeks before or after that single calendar day.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              I know my conception date—can I use that?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This calculator uses LMP. Conception-based EDD is roughly{" "}
              <strong>266 days after conception</strong> (38 weeks from
              fertilization). Try the{" "}
              <Link
                to="/health/pregnancy-conception-calculator"
                className="text-primary hover:underline"
              >
                Pregnancy Conception Calculator
              </Link>{" "}
              for conception-oriented estimates.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate how many weeks pregnant I am?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Count days from LMP to today, divide by 7 for full weeks; the remainder
              is extra days (e.g. <strong>24 weeks 5 days</strong>). This page
              computes that automatically after you enter LMP.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this due date calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It is an educational <strong>pregnancy timeline</strong> tool.
              Prenatal diagnosis, high-risk care, and birth planning require a
              licensed healthcare professional.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
