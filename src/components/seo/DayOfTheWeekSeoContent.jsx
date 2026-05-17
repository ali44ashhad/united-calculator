import React from "react";
import { Link } from "react-router-dom";

export default function DayOfTheWeekSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Day of the week calculator: what day is this date?
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          “What day was I born?” “What weekday is July 4, 2026?” This{" "}
          <strong>free day-of-the-week calculator online</strong> answers in one
          step: pick any <strong>calendar date</strong> and see the{" "}
          <strong>weekday name</strong> (Monday through Sunday). Handy for
          birthdays, anniversaries, historical dates, and planning events that
          must land on a specific day.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The tool uses your browser’s local calendar—no time-of-day field. To
          count how many days lie between two dates, use the{" "}
          <Link
            to="/other/day-counter"
            className="text-primary hover:underline"
          >
            Day Counter
          </Link>{" "}
          or{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this weekday finder
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>Choose a date with the date picker (or type YYYY-MM-DD).</li>
          <li>Read the full formatted date and weekday in the summary.</li>
          <li>Change the date anytime—the result updates immediately.</li>
          <li>Reset returns to the sample date July 4, 2024 (Thursday).</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How it works</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The year, month, and day are parsed as a local midnight date (avoiding
          UTC shift bugs from raw date strings). The JavaScript calendar then
          maps that date to a weekday index 0–6 (Sunday–Saturday) and displays
          the English name.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Worked example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Date:</strong> July 4, 2024
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Result: <strong>Thursday</strong> — U.S. Independence Day 2024 falls
            on a Thursday. Try your own birth date the same way.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Common uses for a weekday calculator
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Birthday weekday (“What day was I born?”)</li>
          <li>Wedding or event planning on a preferred day</li>
          <li>Historical research and genealogy notes</li>
          <li>Checking holidays that move on the calendar</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Limitations</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Gregorian calendar only (not Julian or non-Western systems)</li>
          <li>English weekday names only</li>
          <li>Does not count days between two dates</li>
          <li>Very old historical dates may differ from regional reforms</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What day of the week was I born?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Enter your birth date in the picker. The summary shows the weekday
              name for that calendar day in your locale’s date formatting.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why does my date show the wrong day sometimes?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Some sites parse date strings as UTC midnight, which can shift the
              day. This calculator builds the date from local year/month/day
              components to stay on the correct weekday.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is Sunday or Monday the first day of the week?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The underlying index starts with Sunday (0) per JavaScript’s
              convention, but the label shown is simply the correct weekday name
              for your date—not a “week start” setting.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
