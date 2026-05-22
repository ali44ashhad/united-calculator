import React from "react";
import { Link } from "react-router-dom";

export default function TimeDurationSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Time duration calculator: how long between two clock times
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Meetings, study blocks, and travel legs often need one answer:{" "}
          <strong>how much time passed?</strong> This{" "}
          <strong>time duration calculator</strong> takes a <strong>start time</strong>{" "}
          and <strong>end time</strong> on the clock and returns{" "}
          <strong>hours and minutes</strong>, <strong>total minutes</strong>, and{" "}
          <strong>decimal hours</strong>. Defaults show{" "}
          <strong>2:00 PM to 4:30 PM = 2 h 30 min</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>elapsed time calculator</strong>,{" "}
          <strong>time between two times</strong>. Long-tail:{" "}
          <strong>how long from 2pm to 430pm</strong>,{" "}
          <strong>duration past midnight calculator</strong>,{" "}
          <strong>time span in hours and minutes</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The math</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Duration (min) = end minutes − start minutes
If negative → add 24 × 60 (overnight)

Example: 14:00 to 16:30
→ 150 min = 2 h 30 min = 2.5 h`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>payroll punch times</strong>, the{" "}
          <Link
            to="/other/time-card-calculator"
            className="text-primary hover:underline"
          >
            Time Card Calculator
          </Link>{" "}
          uses the same span with a shift-work focus. The{" "}
          <Link
            to="/other/hours-calculator"
            className="text-primary hover:underline"
          >
            Hours Calculator
          </Link>{" "}
          is another clock start/end tool. To add separate hour and minute fields
          (not clock times), use the{" "}
          <Link
            to="/other/time-calculator"
            className="text-primary hover:underline"
          >
            Time Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Clock times vs calendar dates</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This page handles <strong>times on one day</strong>, including crossing
          midnight. It does <strong>not</strong> count multi-day gaps between
          calendar dates—for that, use a{" "}
          <Link
            to="/other/date-calculator"
            className="text-primary hover:underline"
          >
            Date Calculator
          </Link>{" "}
          or day counter when you need date-based spans.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              How do I find duration between two times?
            </dt>
            <dd className="mt-1">
              Enter start and end; read hours, minutes, and total minutes in the
              summary.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              What if the event crosses midnight?
            </dt>
            <dd className="mt-1">
              When end is before start on the clock, 24 hours is added automatically.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              How long is 2 PM to 4:30 PM?
            </dt>
            <dd className="mt-1">
              <strong>2 hours 30 minutes</strong> (150 min, 2.5 decimal hours).
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Time duration vs time card?
            </dt>
            <dd className="mt-1">
              Same math; Time Card is labeled for worked hours and payroll context.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Can I use dates?
            </dt>
            <dd className="mt-1">
              Clock times only here—not full calendar date ranges across multiple days.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
