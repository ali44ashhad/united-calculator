import React from "react";
import { Link } from "react-router-dom";

export default function TimeSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Time calculator: add hours and minutes into one duration
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Timesheets, billing, and study logs often need one number from separate{" "}
          <strong>hours</strong> and <strong>minutes</strong> fields. This{" "}
          <strong>time calculator</strong> computes{" "}
          <strong>total minutes</strong>, a <strong>normalized</strong> hours/minutes
          breakdown (so 90 minutes becomes 1 h 30 min), and{" "}
          <strong>decimal hours</strong> for payroll (2 h 30 min → 2.5 h).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>hours minutes to minutes</strong>,{" "}
          <strong>decimal hours calculator</strong>. Long-tail:{" "}
          <strong>convert 2 hours 30 minutes to minutes</strong>,{" "}
          <strong>add hours and minutes for timesheet</strong>,{" "}
          <strong>how many minutes is 1.75 hours</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Total minutes = (hours × 60) + minutes
Decimal hours = total minutes ÷ 60

Example: 2 h + 30 min
→ 150 min, 2.5 decimal hours`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>clock start and end times</strong> on the same day (or
          overnight), use the{" "}
          <Link
            to="/other/hours-calculator"
            className="text-primary hover:underline"
          >
            Hours Calculator
          </Link>
          . Punch-in style <strong>time card</strong> math lives in the{" "}
          <Link
            to="/other/time-card-calculator"
            className="text-primary hover:underline"
          >
            Time Card Calculator
          </Link>
          . Bedtime planning from a wake alarm uses the{" "}
          <Link
            to="/other/sleep-calculator"
            className="text-primary hover:underline"
          >
            Sleep Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">When to use decimal hours</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Some payroll systems multiply <strong>decimal hours × rate</strong> instead
          of separate hour and minute columns. Always confirm rounding rules with
          your employer—this page does not apply break deductions or overtime tiers.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              How do I convert hours and minutes to minutes?
            </dt>
            <dd className="mt-1">
              Multiply hours by 60 and add minutes. Example: 2 h 30 min = 150 min.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              What are decimal hours?
            </dt>
            <dd className="mt-1">
              One number of hours with a decimal fraction—2.5 h means 2 h 30 min.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Can I enter 90 minutes only?
            </dt>
            <dd className="mt-1">
              Leave hours blank (treated as 0) or type 0 hours and 90 minutes—the
              summary normalizes to 1 h 30 min.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Does this subtract time?
            </dt>
            <dd className="mt-1">
              This page <strong>adds</strong> one duration. For two clock times, use
              Hours or Time Card tools.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Will zero show in the summary?
            </dt>
            <dd className="mt-1">
              Yes—0 h 0 min displays <strong>0 min</strong> instead of hiding the
              result.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
