import React from "react";
import { Link } from "react-router-dom";

export default function DateSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Date calculator: how many days between two dates?
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Planning a project deadline, counting down to an event, or checking
          how long a lease runs? This{" "}
          <strong>free days-between-dates calculator online</strong> takes a{" "}
          <strong>start date</strong> and <strong>end date</strong> and returns{" "}
          <strong>total calendar days</strong>, plus how that breaks into{" "}
          <strong>full weeks</strong> and <strong>remaining days</strong>. It is
          a simple span calculator—not a full workday or business-day counter.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The tool does <strong>not</strong> add or subtract days from one date;
          it only measures the gap between two dates you pick. For exact age from
          a birth date to today, use the{" "}
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
          How to use this date difference calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>Choose the earlier date as the start date.</li>
          <li>Choose the later date as the end date (same day is allowed).</li>
          <li>
            Read total days, weeks, and leftover days in the summary panel.
          </li>
          <li>
            Use Reset to return to the sample range (Jan 1, 2024 → Jun 15, 2024).
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How the count works</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Dates are parsed in your local calendar (year, month, day). The
          calculator finds the millisecond difference between midnight on each
          day, converts to days, and rounds up with{" "}
          <strong>ceiling</strong> so partial-day boundaries still count as full
          calendar steps. <strong>Weeks</strong> = total days ÷ 7 (integer part);{" "}
          <strong>remaining days</strong> = the remainder after full weeks.
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Total days = ceil((end date − start date) in milliseconds ÷ ms per day)
Full weeks = floor(total days ÷ 7)
Remaining days = total days mod 7`}</pre>
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
            The calculator reports <strong>166 total days</strong>, which is{" "}
            <strong>23 full weeks</strong> and <strong>5 remaining days</strong>{" "}
            (23 × 7 + 5 = 166). Use the live tool for your exact dates.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Calendar days vs business days
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Searchers often ask for a <strong>business days between dates</strong>{" "}
          or <strong>working days calculator</strong>. This page counts{" "}
          <strong>every calendar day</strong>—weekends and holidays included. If
          you need Mon–Fri only, exclude weekends manually or use a dedicated
          business-day tool.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator does not do
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Add or subtract N days from a single date</li>
          <li>Exclude weekends or holidays</li>
          <li>Handle time-of-day or time zones (dates only)</li>
          <li>Compute months/years between dates (see Age Calculator for Y/M/D)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is the start date included in the count?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The math measures the span from start midnight to end midnight
              using a ceiling on whole days. For same start and end, the result
              is 0 days.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I count backward from today?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Put the earlier date in Start and the later date in End. If you
              swap them, the tool asks you to fix the order.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How is this different from the Age Calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Age Calculator finds years, months, and days from a birth date to
              today. This tool finds the gap between any two dates you choose.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
