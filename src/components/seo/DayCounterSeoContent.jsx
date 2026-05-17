import React from "react";
import { Link } from "react-router-dom";

export default function DayCounterSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Day counter: how many days between two dates?
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Need a single number—how many days from point A to point B? This{" "}
          <strong>free day counter online</strong> counts{" "}
          <strong>calendar days</strong> between a <strong>start date</strong>{" "}
          and <strong>end date</strong>. Use it for trip length, project timelines,
          sobriety counters, or “days until” style questions when you already
          know both dates.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Unlike the{" "}
          <Link
            to="/other/date-calculator"
            className="text-primary hover:underline"
          >
            Date Calculator
          </Link>
          , this tool shows <strong>total days only</strong>—not weeks and
          remainder. For exact age in years and months from a birth date, see the{" "}
          <Link
            to="/other/age-calculator"
            className="text-primary hover:underline"
          >
            Age Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this days-between-dates counter
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the earlier date as the start date.</li>
          <li>Enter the later date as the end date.</li>
          <li>Read the total day count in the summary (updates as you type).</li>
          <li>Click Reset to restore the sample range (Jan 1 → Jun 15, 2024).</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Formula used</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Days = ceil((end date − start date) in milliseconds ÷ milliseconds per day)

Dates are read as local calendar days (midnight to midnight).`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Worked example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Start:</strong> January 1, 2024 — <strong>End:</strong> June
            15, 2024
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Result: <strong>166 days</strong> between those dates. Same start and
            end date gives <strong>0 days</strong>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Day counter vs date calculator
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Both tools measure the gap between two dates. Choose the{" "}
          <strong>Day Counter</strong> when you only need one total. Choose the{" "}
          <strong>Date Calculator</strong> when you also want{" "}
          <strong>full weeks</strong> and <strong>remaining days</strong> (e.g. “23
          weeks and 5 days”).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Limitations</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Not a business-day or workday counter (weekends count)</li>
          <li>No add/subtract N days from one date</li>
          <li>No time-of-day or time zone handling</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How many days until my event?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Set start to today (or your reference date) and end to the event
              date. The total days line is your countdown length in calendar days.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does it count the start day?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The count uses the difference between midnights. Identical start
              and end dates show 0 days; the next calendar day shows 1 day, and so
              on.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if I pick the wrong order?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              If the end date is before the start date, the tool prompts you to fix
              the order instead of showing a negative number.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
