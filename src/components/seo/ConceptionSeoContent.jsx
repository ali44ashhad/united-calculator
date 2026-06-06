import React from "react";
import { Link } from "react-router-dom";

export default function ConceptionSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Conception calculator: ovulation date, fertile window &amp; best days to
          conceive
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>conception calculator</strong> to estimate your{" "}
          <strong>most fertile days</strong>, <strong>ovulation date</strong>, and
          likely <strong>conception date</strong> from the{" "}
          <strong>first day of your last menstrual period (LMP)</strong> and your{" "}
          <strong>average menstrual cycle length</strong>. It doubles as a practical{" "}
          <strong>ovulation calculator</strong> and{" "}
          <strong>fertile window calculator</strong> for couples planning pregnancy.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Whether you are <strong>trying to conceive (TTC)</strong>, building{" "}
          <strong>fertility awareness</strong>, or wondering{" "}
          <strong>when you conceived based on last period</strong>, the tool shows
          the <strong>best days to conceive on a 28-day cycle</strong> (or any
          length you enter), <strong>most fertile days after period</strong>, and
          how to <strong>calculate ovulation date from LMP</strong> using{" "}
          <strong>cycle length minus 14 days</strong>—your{" "}
          <strong>conception date from menstrual cycle</strong> estimate plus about
          five days before ovulation through one day after.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For ovulation-focused dates, see the{" "}
          <Link
            to="/health/ovulation-calculator"
            className="text-primary hover:underline"
          >
            Ovulation Calculator
          </Link>
          . To track pregnancy weeks or an estimated due date, use the{" "}
          <Link
            to="/health/pregnancy-calculator"
            className="text-primary hover:underline"
          >
            Pregnancy Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/health/due-date-calculator"
            className="text-primary hover:underline"
          >
            Due Date Calculator
          </Link>
          . The{" "}
          <Link
            to="/health/pregnancy-conception-calculator"
            className="text-primary hover:underline"
          >
            Pregnancy Conception Calculator
          </Link>{" "}
          offers another view of conception timing and fertile dates.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is a conception calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>conception calculator</strong> estimates when ovulation—and
          therefore the highest chance of pregnancy—likely occurs in your cycle.
          It is not a medical test; it is a <strong>menstrual cycle calculator</strong>{" "}
          that uses your <strong>last period date</strong> and{" "}
          <strong>cycle length in days</strong> to predict:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Estimated ovulation day</strong> (often called peak fertility)
          </li>
          <li>
            <strong>Likely conception date</strong> if intercourse happens near
            ovulation
          </li>
          <li>
            <strong>Fertile window dates</strong>—the best days to conceive in
            that cycle
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Couples use it as a <strong>fertility tracker</strong> and{" "}
          <strong>pregnancy planner</strong> alongside ovulation predictor kits
          (OPKs), cervical mucus changes, or basal body temperature when they
          want extra accuracy.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this conception calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Ovulation estimate (LMP + cycle − 14 days)</li>
              <li>Fertile window (5 days before to 1 day after ovulation)</li>
              <li>Cycle lengths from 21 to 45 days</li>
              <li>Conception / ovulation date summary</li>
              <li>Works for common 28-day and custom cycles</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>LH surge / ovulation test results</li>
              <li>Basal body temperature (BBT) charting</li>
              <li>Ultrasound or hCG blood tests</li>
              <li>PCOS, perimenopause, or irregular-cycle models</li>
              <li>IVF, IUI, or fertility clinic protocols</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Conception calculator formula: ovulation &amp; fertile window
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Estimated ovulation day = LMP + (cycle length − 14)

Likely conception date ≈ ovulation day (sperm may fertilize
  on ovulation day or within the prior fertile days)

Fertile window start = ovulation − 5 days
Fertile window end   = ovulation + 1 day

28-day cycle example:
  LMP = January 1 → ovulation ≈ January 15
  Fertile window ≈ January 10 – January 16`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The <strong>14-day luteal phase</strong> assumption is why many{" "}
          <strong>ovulation date calculators</strong> use{" "}
          <strong>cycle length minus 14</strong>. A 30-day cycle often ovulates
          around day 16; a 26-day cycle around day 12.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Best time to conceive: fertile days explained
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The <strong>best time to conceive</strong> is usually the{" "}
          <strong>fertile window</strong>—not just ovulation day alone. Sperm can
          live roughly up to five days in the reproductive tract, so intercourse
          on <strong>fertile days before ovulation</strong> can still lead to
          pregnancy when the egg is released.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Peak fertility:</strong> ovulation day and 1–2 days before
          </li>
          <li>
            <strong>Good fertility:</strong> 3–5 days before ovulation
          </li>
          <li>
            <strong>Lower chance:</strong> more than a week before ovulation or
            well after the egg&apos;s lifespan
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>fertility calculator</strong> marks that window on the
          calendar so you can plan intercourse, track symptoms, or pair results
          with an <strong>ovulation predictor kit</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this conception calculator (step by step)
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter the <strong>first day of your last period</strong> (LMP)—day 1
            of bleeding, not spotting.
          </li>
          <li>
            Enter your <strong>average cycle length</strong> (days from start of
            one period to start of the next).
          </li>
          <li>
            Click <strong>Calculate Now</strong> and read your{" "}
            <strong>estimated ovulation / conception date</strong>.
          </li>
          <li>
            Note the <strong>fertile window start and end</strong>—your{" "}
            <strong>most fertile days</strong> for trying to conceive.
          </li>
          <li>
            Repeat next cycle if your period length varies; use 3–6 months of
            data for a better average.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Example: conception date from a 28-day cycle
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Last period:</strong> March 1 · <strong>Cycle length:</strong>{" "}
            28 days
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>Ovulation offset: 28 − 14 = 14 days after LMP</li>
            <li>
              <strong>Estimated ovulation / conception:</strong> March 15
            </li>
            <li>
              <strong>Fertile window:</strong> about March 10 – March 16
            </li>
          </ul>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            For a <strong>32-day cycle</strong> with LMP March 1: ovulation ≈
            March 19 (32 − 14 = 18 days after LMP). For a{" "}
            <strong>24-day cycle</strong>: ovulation ≈ March 11.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Menstrual cycle length guide
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>21–24 days:</strong> shorter cycle—ovulation often earlier
            after period
          </li>
          <li>
            <strong>25–27 days:</strong> slightly shorter than average
          </li>
          <li>
            <strong>28 days:</strong> classic textbook cycle; ovulation near day
            14
          </li>
          <li>
            <strong>29–35 days:</strong> common and often still regular
          </li>
          <li>
            <strong>36–45 days:</strong> longer cycles—enter actual average; see
            a doctor if newly irregular
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Trying to conceive (TTC): tips beyond the calculator
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Have intercourse every 1–2 days during the{" "}
            <strong>fertile window</strong>—no need to time only ovulation day.
          </li>
          <li>
            Start prenatal vitamins with folic acid before pregnancy when possible.
          </li>
          <li>
            Limit alcohol and smoking; manage stress and sleep—they affect cycles.
          </li>
          <li>
            Track 3+ cycles to refine your <strong>average cycle length</strong>.
          </li>
          <li>
            Consider OPKs or BBT if calendar estimates do not match your body.
          </li>
          <li>
            Seek evaluation after <strong>12 months</strong> trying (or{" "}
            <strong>6 months</strong> if age 35+).
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Conception date vs intercourse date vs due date
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Conception</strong> (fertilization) may occur on ovulation day
          or within the prior fertile days when sperm was already present. This
          calculator shows the <strong>estimated ovulation/conception calendar
          date</strong>, not the exact hour of intercourse. Once pregnant, clinics
          often date pregnancy from LMP; use our{" "}
          <Link
            to="/health/due-date-calculator"
            className="text-primary hover:underline"
          >
            Due Date Calculator
          </Link>{" "}
          for <strong>EDD (estimated due date)</strong> and gestational week
          tracking on the{" "}
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
          Signs of ovulation (optional checks)
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Egg-white or slippery cervical mucus</li>
          <li>Mild one-sided pelvic twinge (mittelschmerz)</li>
          <li>Positive LH surge on ovulation test strips</li>
          <li>Slight rise in basal body temperature after ovulation</li>
          <li>Increased libido or breast tenderness for some women</li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Combine these clues with this <strong>ovulation date predictor</strong>{" "}
          for stronger <strong>fertility awareness</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (conception &amp; fertility)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How does a conception calculator work?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              It uses your <strong>last menstrual period</strong> and{" "}
              <strong>cycle length</strong> to estimate ovulation at roughly{" "}
              <strong>cycle minus 14 days</strong>, then builds a{" "}
              <strong>fertile window</strong> around that date.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              When is the best time to conceive?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The <strong>best days to get pregnant</strong> are usually the five
              days before ovulation plus ovulation day and the day after—the
              range this tool displays as your fertile window.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How accurate is an ovulation calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Calendar methods are estimates. Regular cycles improve accuracy;
              <strong> irregular periods</strong>, stress, travel, illness, PCOS,
              breastfeeding, or perimenopause can shift ovulation. Use OPKs or
              medical advice for confirmation.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why subtract 14 from cycle length?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Many cycles have a luteal phase (after ovulation until the next
              period) of about 14 days. So ovulation moves when total cycle length
              changes—this is standard in <strong>fertility calculators</strong>{" "}
              and <strong>due date</strong> math.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I get pregnant outside my fertile window?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Peak chance is in the fertile window, but early ovulation or
              miscalculated cycle length can surprise you. Treat this as planning
              guidance, not birth control.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if I have irregular periods?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Use your best recent average or track several months. For widely
              varying cycles, a calendar-only <strong>conception date calculator</strong>{" "}
              is less reliable—consider fertility testing or cycle monitoring.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate ovulation for a 28-day cycle?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Count 14 days from the first day of your last period—that is your
              estimated ovulation day on a typical 28-day cycle. Enter LMP and 28
              here for instant fertile dates.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the difference between conception and ovulation?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>Ovulation</strong> is when the ovary releases an egg.{" "}
              <strong>Conception</strong> is when sperm fertilizes the egg—often
              the same day or within the fertile days before. This calculator uses
              ovulation day as the central estimate.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              After conceiving, how do I find my due date?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Healthcare providers usually date pregnancy from LMP. Use the{" "}
              <Link
                to="/health/due-date-calculator"
                className="text-primary hover:underline"
              >
                Due Date Calculator
              </Link>{" "}
              for <strong>estimated delivery date (EDD)</strong> and pregnancy
              week by week.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this conception calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It is an educational <strong>pregnancy planning calculator</strong>{" "}
              for <strong>fertility awareness</strong>. Diagnosis, treatment, and
              high-risk pregnancy care require a qualified clinician.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
