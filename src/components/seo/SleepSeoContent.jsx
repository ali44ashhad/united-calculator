import React from "react";
import { Link } from "react-router-dom";

export default function SleepSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Sleep calculator: bedtimes from your wake-up time and 90-minute cycles
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Waking mid-cycle can feel rough; many people prefer to set an alarm
          near the <strong>end of a sleep cycle</strong>. This{" "}
          <strong>sleep calculator</strong> starts with your{" "}
          <strong>wake-up time</strong>, subtracts full{" "}
          <strong>90-minute cycles</strong> plus about{" "}
          <strong>14 minutes</strong> to fall asleep, and lists{" "}
          <strong>six bedtimes</strong>—from one cycle (a short rest) up to six
          cycles (about nine hours of cycle time plus the buffer).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>sleep cycle calculator</strong>,{" "}
          <strong>bedtime calculator</strong>. Long-tail:{" "}
          <strong>what time should I go to bed if I wake at 7am</strong>,{" "}
          <strong>90 minute sleep cycle wake up calculator</strong>,{" "}
          <strong>best time to sleep for 6 cycles</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The math</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Bedtime = wake time − (cycles × 90 min) − 14 min buffer

Example: wake 7:00 AM, 6 cycles
→ 6×90 + 14 = 554 min before alarm
→ asleep ~9:26 PM previous evening`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>hours between two clock times</strong> (shifts, study blocks),
          use the{" "}
          <Link
            to="/other/hours-calculator"
            className="text-primary hover:underline"
          >
            Hours Calculator
          </Link>
          . For adding or subtracting clock durations on a calendar day, the{" "}
          <Link
            to="/other/time-calculator"
            className="text-primary hover:underline"
          >
            Time Calculator
          </Link>{" "}
          handles duration math. Counting days until a trip or deadline pairs with
          the{" "}
          <Link
            to="/other/day-counter"
            className="text-primary hover:underline"
          >
            Day Counter
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use the results</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Pick the <strong>latest bedtime</strong> you can still hit and still get
          enough total rest for your day. If you only have time for one or two
          cycles, treat it as a nap window—not a full night. Everyone&apos;s cycles
          differ slightly; adjust by feel and keep a consistent schedule when you
          can.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              How does this sleep calculator work?
            </dt>
            <dd className="mt-1">
              Enter wake-up time. The page lists six bedtimes by counting backward
              90-minute cycles plus a 14-minute fall-asleep buffer.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Why 90-minute sleep cycles?
            </dt>
            <dd className="mt-1">
              A full cycle is often cited as ~90 minutes. Waking between cycles may
              feel easier than waking during deep sleep—your mileage may vary.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              What is the 14-minute buffer?
            </dt>
            <dd className="mt-1">
              Time assumed to fall asleep after getting into bed, before full cycles
              are counted backward from your alarm.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Which bedtime should I choose?
            </dt>
            <dd className="mt-1">
              Usually the <strong>latest</strong> option that still gives you enough
              sleep. Six cycles is the longest row; one cycle is the shortest.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Is this medical advice?
            </dt>
            <dd className="mt-1">
              No—cycle math only. See a clinician for insomnia, apnea, or ongoing
              fatigue.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
