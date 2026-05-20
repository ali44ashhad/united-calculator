import React from "react";
import { Link } from "react-router-dom";

export default function HoursSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Hours between two times: timesheets, shifts, and side gigs
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Freelancers, nurses, and retail crews often need one number:{" "}
          <strong>how long was I on the clock?</strong> This{" "}
          <strong>hours calculator</strong> takes a <strong>start time</strong>{" "}
          and <strong>end time</strong> on the same day—or an{" "}
          <strong>overnight shift</strong> when the punch-out is “earlier” on the
          clock than punch-in—and returns <strong>decimal hours</strong> plus a
          plain <strong>hours and minutes</strong> readout. No spreadsheet
          required for a quick Friday check.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It does <strong>not</strong> subtract lunch automatically. If you take
          30 minutes unpaid, move your start or end so the span matches what you
          actually bill.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Overnight in one sentence</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          When end is before start (for example 22:00 to 06:00), the math adds one
          calendar day to the finish so you get eight hours, not a negative span.
          That matches how most people describe a night shift that crosses
          midnight.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Related tools</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <Link
              to="/other/day-counter"
              className="text-primary hover:underline"
            >
              Day Counter
            </Link>{" "}
            — calendar days between two dates.
          </li>
          <li>
            <Link
              to="/other/date-calculator"
              className="text-primary hover:underline"
            >
              Date Calculator
            </Link>{" "}
            — add or subtract days from a date.
          </li>
          <li>
            <Link
              to="/other/time-zone-calculator"
              className="text-primary hover:underline"
            >
              Time Zone Calculator
            </Link>{" "}
            — compare clocks across regions.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              Why decimal hours on a timesheet?
            </dt>
            <dd className="mt-1">
              Payroll systems often multiply rate × hours as a decimal (7.5 for
              seven hours thirty minutes). This page shows both decimal hours and
              h/min so you can match either format.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Does daylight saving time change the result?
            </dt>
            <dd className="mt-1">
              The tool uses clock times you enter on one timeline without time
              zones. For DST boundaries, verify against your official timekeeping
              system.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
