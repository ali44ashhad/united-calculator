import React from "react";
import { Link } from "react-router-dom";

export default function TimeZoneSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Time zone calculator: convert wall clock between world regions
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Remote teams schedule calls across <strong>UTC</strong>,{" "}
          <strong>US Eastern</strong>, <strong>London</strong>, and{" "}
          <strong>India (IST)</strong>. This <strong>time zone converter</strong>{" "}
          takes a <strong>date and time in the source zone</strong> and shows the{" "}
          <strong>same instant</strong> formatted for the destination zone—DST
          rules apply automatically for IANA names like{" "}
          <strong>America/New_York</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>time zone converter</strong>,{" "}
          <strong>UTC to IST</strong>. Long-tail:{" "}
          <strong>convert 12 PM UTC to India time</strong>,{" "}
          <strong>EST to PST meeting time calculator</strong>,{" "}
          <strong>what time is it in Tokyo when London is 3pm</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>Pick the zone your entered time belongs to (From zone).</li>
          <li>Enter local date and time in that zone—not your browser zone unless they match.</li>
          <li>Choose the destination zone and read the converted clock time.</li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Example default on this page: <strong>15 Jun 2025, noon UTC</strong> →{" "}
          <strong>5:30 PM</strong> in <strong>Asia/Kolkata</strong> (IST, UTC+5:30).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Related time tools</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Elapsed time</strong> between two clock times on one day (not
          zones) lives in the{" "}
          <Link
            to="/other/time-duration-calculator"
            className="text-primary hover:underline"
          >
            Time Duration Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/other/hours-calculator"
            className="text-primary hover:underline"
          >
            Hours Calculator
          </Link>
          . <strong>Payroll punch spans</strong> use the{" "}
          <Link
            to="/other/time-card-calculator"
            className="text-primary hover:underline"
          >
            Time Card Calculator
          </Link>
          . Calendar <strong>date math</strong> (add days to a date) is in the{" "}
          <Link
            to="/other/date-calculator"
            className="text-primary hover:underline"
          >
            Date Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              How does time zone conversion work here?
            </dt>
            <dd className="mt-1">
              Your input is wall clock in the source zone. The tool resolves that
              to one UTC instant, then formats it in the destination zone.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Does daylight saving time apply?
            </dt>
            <dd className="mt-1">
              Yes for zones like US and EU cities—the browser applies DST for the
              date you pick.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              What is IST in this list?
            </dt>
            <dd className="mt-1">
              <strong>Asia/Kolkata</strong> is India Standard Time (UTC+5:30, no
              DST).
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Why not use my laptop clock zone?
            </dt>
            <dd className="mt-1">
              Select the zone that matches the time you typed. The datetime field
              is not tied to your device zone once you choose From zone correctly.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Can I convert multi-day date ranges?
            </dt>
            <dd className="mt-1">
              This is a single instant converter. For date spans, use Date or Day
              Counter tools.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
