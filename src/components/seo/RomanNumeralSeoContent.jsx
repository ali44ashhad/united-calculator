import React from "react";
import { Link } from "react-router-dom";

export default function RomanNumeralSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Roman numeral converter: Arabic 1–3999 ↔ classical Roman letters
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Copyright years, clock faces, and outline headings still use{" "}
          <strong>Roman numerals</strong>. This <strong>free Roman numeral
          converter</strong> works both ways: type <strong>2024</strong> and
          get <strong>MMXXIV</strong>, or type <strong>XIV</strong> and get{" "}
          <strong>14</strong>. The page auto-detects whether you entered digits
          or letters (I, V, X, L, C, D, M) and shows Arabic and Roman side by
          side in the summary.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>roman numeral converter</strong>,{" "}
          <strong>number to roman</strong>, <strong>roman to number</strong>.
          Long-tail: <strong>what is 2024 in roman numerals</strong>,{" "}
          <strong>convert MMXXIV to number</strong>,{" "}
          <strong>roman numeral for 4 IV or IIII</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Subtractive pairs to remember</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`IV = 4    IX = 9     XL = 40    XC = 90
CD = 400  CM = 900   (and M = 1000)

2024 → MMXXIV
1990 → MCMXC
14   → XIV`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Need general unit or length conversions instead of numerals? The{" "}
          <Link
            to="/other/conversion-calculator"
            className="text-primary hover:underline"
          >
            Conversion Calculator
          </Link>{" "}
          handles feet, meters, pounds, and more. For calendar math (days between
          dates, not chapter numbers), the{" "}
          <Link
            to="/other/date-calculator"
            className="text-primary hover:underline"
          >
            Date Calculator
          </Link>{" "}
          is the better fit—Roman numerals on a monument are not the same as
          counting days in a project plan.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Limits of this tool</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Range 1–3999</strong>—the usual classical ceiling without
            overline notation for larger values.
          </li>
          <li>
            <strong>No zero</strong>—ancient Romans had no symbol for 0 in this
            system.
          </li>
          <li>
            <strong>Non-standard spellings</strong> (e.g. IIII on some clocks)
            may fail Roman → Arabic validation here.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              What is 2024 in Roman numerals?
            </dt>
            <dd className="mt-1">
              <strong>MMXXIV</strong>—two thousands (MM), twenty (XX), four (IV).
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Can I paste lowercase letters?
            </dt>
            <dd className="mt-1">
              Yes. <strong>mmxxiv</strong> and <strong>MMXXIV</strong> decode the
              same way.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Why does IIII not work here?
            </dt>
            <dd className="mt-1">
              This tool expects standard subtractive forms. Clock faces sometimes
              use IIII for 4; enter <strong>IV</strong> for conversion.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              What is the largest Roman numeral here?
            </dt>
            <dd className="mt-1">
              <strong>MMMCMXCIX</strong> = 3999, the top of the supported range.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Is this the same as a list numeral in Word?
            </dt>
            <dd className="mt-1">
              Word outline numbering is formatting. This page is for explicit
              value conversion between Arabic integers and Roman strings.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
