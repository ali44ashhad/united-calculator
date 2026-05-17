import React from "react";
import { Link } from "react-router-dom";

export default function AgeSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Age calculator: how old am I in years, months, and days?
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A quick “how old am I?” question comes up for school forms, travel
          documents, eligibility checks, and birthday posts. This{" "}
          <strong>free age calculator online</strong> takes your{" "}
          <strong>date of birth</strong> and compares it to today&apos;s calendar
          date on your device. You get a readable breakdown—{" "}
          <strong>years, months, and days</strong>—plus{" "}
          <strong>total days lived</strong> for a straight day count from birth
          to now.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It is a <strong>chronological age calculator</strong>, not a legal or
          medical age verifier. For counting days between two arbitrary dates,
          try the{" "}
          <Link
            to="/other/day-counter"
            className="text-primary hover:underline"
          >
            Day Counter
          </Link>
          . To add or subtract days from a date, use the{" "}
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
          What is chronological age?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Chronological age</strong> is time elapsed since birth on the
          calendar. It differs from “biological age” or fitness age, which depend
          on health metrics. Most forms ask for chronological age in full years
          or years-months-days. This tool mirrors how people describe age in
          conversation: “25 years, 3 months, and 12 days old.”
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The calculator borrows real calendar month lengths (28–31 days) when
          borrowing days across months, so results align with common manual
          methods rather than a flat 30-day month approximation.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this date-of-birth age calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Pick your <strong>date of birth</strong> in the date field (format
            depends on your browser locale).
          </li>
          <li>
            The summary updates automatically—no need to press calculate,
            though the button row matches other tools on this site.
          </li>
          <li>
            Read <strong>Years</strong>, <strong>Months</strong>,{" "}
            <strong>Days</strong>, and <strong>Total days lived</strong>.
          </li>
          <li>
            Future birth dates show an error; only past or today are valid.
          </li>
          <li>
            Click <strong>Reset</strong> to restore the sample date (15 June
            2000).
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Years, months, days vs total days
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Years / months / days  → calendar-style age (borrows days across months)
Total days lived       → simple count of midnights from DOB to today`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Example: someone born on <strong>15 June 2000</strong> has a large{" "}
          <strong>total days</strong> figure and a years-months-days line that
          changes on their birthday each year. Search queries like “calculate my
          age from DOB” or “exact age in years months days calculator” expect
          both views.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Common uses for an online age calculator
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Checking if someone meets a minimum age (e.g. 18+) for sign-ups or
            programs—always confirm rules with official sources.
          </li>
          <li>
            Planning milestone birthdays and “days old” social posts using total
            days lived.
          </li>
          <li>
            Homework that asks students to compute age from a birth date as of a
            given day (use today on the device as “as of” date).
          </li>
          <li>
            Genealogy notes when you know a birth date and want a current age
            snapshot.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Time zones and leap years
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The date picker stores a calendar date without a time of day. Parsing
          uses local midnight to avoid off-by-one errors from UTC shifts. Leap
          days (29 February) are valid birth dates; age on 28 February or 1 March
          in non-leap years follows standard calendar borrowing in the algorithm.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate my age from my date of birth?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Subtract birth date from today in years, then adjust months and
              days when the day-of-month has not been reached yet this month.
              This page does that automatically when you select your DOB.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is total days different from years × 365?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Real calendars include leap years and varying month lengths. Total
              days counts every day in range; the Y-M-D line uses calendar
              months, not fixed 30-day blocks.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I calculate age as of a specific past date?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This tool always uses today. For custom start/end dates, use the
              Day Counter or Date Calculator linked above.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is my birth date stored on a server?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Calculation runs in your browser; nothing is sent for storage
              as part of this calculator.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if I was born on 29 February?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Enter 29 Feb as your birth date when applicable. In common age
              counting, some systems treat 28 Feb as the birthday in non-leap
              years; this calculator uses standard date arithmetic from your
              selected DOB.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
