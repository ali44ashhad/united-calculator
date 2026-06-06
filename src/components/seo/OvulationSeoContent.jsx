import React from "react";
import { Link } from "react-router-dom";

export default function OvulationSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Ovulation calculator: fertile window &amp; ovulation date estimate
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>ovulation calculator</strong> to predict your{" "}
          <strong>ovulation date</strong> and <strong>fertile window</strong> from
          the <strong>first day of your last period</strong> and{" "}
          <strong>average cycle length</strong>. It uses the common calendar method:{" "}
          <strong>ovulation ≈ cycle length minus 14 days</strong>, with fertile days
          from about <strong>five days before ovulation through one day after</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you are tracking <strong>when do I ovulate</strong>, planning{" "}
          <strong>fertility awareness</strong>, or need a{" "}
          <strong>fertile days calculator</strong> for pregnancy planning, enter
          your LMP above. For conception-focused timing and TTC guidance, see the{" "}
          <Link
            to="/health/conception-calculator"
            className="text-primary hover:underline"
          >
            Conception Calculator
          </Link>
          . After pregnancy begins, use the{" "}
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
          What is an ovulation calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          An <strong>ovulation calculator</strong> (or{" "}
          <strong>fertile window calculator</strong>) estimates when an egg is
          released mid-cycle and when intercourse or insemination is most likely to
          lead to pregnancy. It is a <strong>menstrual cycle calculator</strong>{" "}
          based on dates—not hormone tests.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Estimated ovulation day</strong> — peak fertility
          </li>
          <li>
            <strong>Fertile window</strong> — sperm survival plus egg lifespan
          </li>
          <li>
            <strong>Next period estimate</strong> — LMP + cycle length
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this ovulation calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Ovulation date (calendar method)</li>
              <li>Fertile window start and end</li>
              <li>Cycle presets (21–35 days)</li>
              <li>Countdown and in-window-today flag</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>LH ovulation test strips (OPK)</li>
              <li>Basal body temperature (BBT) charting</li>
              <li>Cervical mucus tracking</li>
              <li>Ultrasound follicle monitoring</li>
              <li>Medical fertility diagnosis or treatment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Ovulation &amp; fertile window formula
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Ovulation day ≈ LMP + (Cycle length − 14)

Fertile window ≈ Ovulation − 5 days through Ovulation + 1 day

Next period ≈ LMP + Cycle length

Example: LMP Jan 1, 28-day cycle
  → Ovulation ≈ Jan 15
  → Fertile window ≈ Jan 10 – Jan 16`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The <strong>14-day rule</strong> assumes a stable luteal phase after
          ovulation. Longer or shorter cycles usually shift ovulation day while the
          luteal phase stays similar for many women.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          When are you most fertile?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Peak fertility</strong> is often ovulation day and the 1–2 days
          before. Sperm can live about <strong>3–5 days</strong> in fertile cervical
          fluid, so intercourse in the days leading up to ovulation still counts.
          The egg is typically viable about <strong>12–24 hours</strong> after
          release—hence the window ending roughly one day after ovulation on this
          calendar model.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this ovulation calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter the <strong>first day of your last period</strong> (day 1 of
            bleeding).
          </li>
          <li>
            Enter <strong>average cycle length</strong> (day 1 to next day 1)—use
            several months if cycles vary.
          </li>
          <li>Review ovulation date, fertile window, and countdown.</li>
          <li>
            Pair with OPKs or BBT if cycles are irregular or you need tighter timing.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>LMP:</strong> March 1 · <strong>Cycle:</strong> 30 days
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>Ovulation ≈ March 1 + 16 days = <strong>March 17</strong></li>
            <li>Fertile window ≈ <strong>March 12 – March 18</strong></li>
            <li>Next period ≈ March 31</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Ovulation on different cycle lengths
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>21-day cycle:</strong> ovulation ≈ day 7
          </li>
          <li>
            <strong>28-day cycle:</strong> ovulation ≈ day 14 (classic textbook)
          </li>
          <li>
            <strong>35-day cycle:</strong> ovulation ≈ day 21
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Calendar method vs ovulation tests
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>fertility calculator</strong> is free and fast but less
          precise than <strong>luteinizing hormone (LH) tests</strong> or{" "}
          <strong>BBT</strong> when cycles are irregular. Use calendar dates as a
          starting point; confirm surge or temperature shift when stakes are high.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (ovulation &amp; fertility)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is an ovulation calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A tool that estimates <strong>when you ovulate</strong> and your{" "}
              <strong>fertile days</strong> from period history and cycle length.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate my ovulation date?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Add <strong>(cycle length − 14)</strong> days to your last period start.
              On a 28-day cycle, that is often day 14.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How long is the fertile window?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This calculator uses about <strong>6–7 calendar days</strong>: five
              before ovulation plus ovulation day and the day after.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How accurate is an ovulation calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Regular cycles improve accuracy. Stress, travel, illness, PCOS, and
              perimenopause can shift ovulation—treat output as an estimate.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use this to avoid pregnancy?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Calendar methods alone are weak contraception. Fertility awareness
              for birth control needs training and often multiple signs—not this
              page alone.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if my periods are irregular?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Average your last 3–6 cycles or use OPKs/BBT. Wide variation reduces
              calendar-only reliability.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Ovulation calculator vs conception calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Same core math on this site. The{" "}
              <Link
                to="/health/conception-calculator"
                className="text-primary hover:underline"
              >
                Conception Calculator
              </Link>{" "}
              emphasizes TTC and conception date wording; this page is ovulation-first.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              When should I take a pregnancy test?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Many tests detect hCG from the first day of a missed period—about two
              weeks after ovulation on average cycles. Confirm with your clinician.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this ovulation calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It is an educational <strong>fertility awareness</strong> tool.
              Infertility evaluation and treatment require licensed healthcare
              professionals.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
