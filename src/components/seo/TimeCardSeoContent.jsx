import React from "react";
import { Link } from "react-router-dom";

export default function TimeCardSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Time card calculator: hours worked from punch in and punch out
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Paper time cards and kiosk punches still boil down to two clock times.
          This <strong>time card calculator</strong> takes <strong>start</strong>{" "}
          and <strong>end</strong> times and returns <strong>hours worked</strong>{" "}
          in hours/minutes, <strong>total minutes</strong>, and{" "}
          <strong>decimal hours</strong> for payroll entry—defaults show a typical{" "}
          <strong>9:00 AM–5:00 PM</strong> day (8 hours).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>time card hours calculator</strong>,{" "}
          <strong>punch in punch out calculator</strong>. Long-tail:{" "}
          <strong>calculate hours worked 9am to 5pm</strong>,{" "}
          <strong>overnight shift hours calculator</strong>,{" "}
          <strong>decimal hours for timesheet</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How the math works</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Minutes worked = end time − start time (in minutes)
If end < start on the clock → add 24 hours (overnight)

Example: 9:00 AM to 5:00 PM
→ 480 min = 8 h 0 min = 8.0 decimal hours`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The{" "}
          <Link
            to="/other/hours-calculator"
            className="text-primary hover:underline"
          >
            Hours Calculator
          </Link>{" "}
          uses the same span logic with a duration-focused layout. To combine
          separate hour and minute fields (not clock times), use the{" "}
          <Link
            to="/other/time-calculator"
            className="text-primary hover:underline"
          >
            Time Calculator
          </Link>
          . For travel speed between cities, see the{" "}
          <Link
            to="/other/speed-calculator"
            className="text-primary hover:underline"
          >
            Speed Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Payroll notes</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Unpaid lunch:</strong> enter punch-out/in around the break or
          subtract break minutes yourself. <strong>Overtime</strong> tiers are not
          calculated here. <strong>Gross pay</strong> ≈ decimal hours × hourly
          rate—confirm rounding with payroll.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              How do I calculate hours on a time card?
            </dt>
            <dd className="mt-1">
              Enter punch-in and punch-out times; read hours worked and decimal
              hours in the summary.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              What about overnight shifts?
            </dt>
            <dd className="mt-1">
              When end is before start on the clock, 24 hours is added to the
              span automatically.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              What are decimal hours?
            </dt>
            <dd className="mt-1">
              Total minutes ÷ 60—e.g. 8 h 30 min → <strong>8.5</strong> for many
              payroll systems.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Are breaks included?
            </dt>
            <dd className="mt-1">
              No—adjust your times if lunch is unpaid.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Does this calculate my paycheck?
            </dt>
            <dd className="mt-1">
              Hours only. Multiply decimal hours by your wage rate for gross pay
              before taxes.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
