import React from "react";
import { Link } from "react-router-dom";

export default function BACSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          BAC calculator: estimate blood alcohol content
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>BAC calculator</strong> estimates your{" "}
          <strong>blood alcohol content (BAC)</strong> using the{" "}
          <strong>Widmark formula</strong> from body weight, gender, grams of
          ethanol consumed, and hours since drinking started. Results update as
          you change inputs.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Never use an online BAC estimate to decide if you can drive.</strong>{" "}
          Limits, metabolism, food, and health vary. If you track overall wellness,
          see our{" "}
          <Link
            to="/health/bmi-calculator"
            className="text-primary hover:underline"
          >
            BMI Calculator
          </Link>{" "}
          for weight-for-height context only.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Widmark BAC from kg, gender, grams, hours</li>
              <li>~0.015% BAC per hour elimination</li>
              <li>Standard-drink equivalent (14 g per drink)</li>
              <li>0.08% U.S. driving reference (informational)</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Breathalyzer or blood test results</li>
              <li>Country- or state-specific legal advice</li>
              <li>Drink-by-drink beer/wine/spirit presets</li>
              <li>Medical or legal sobriety determination</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Widmark BAC formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`BAC (%) = (alcohol in grams ÷ (weight in g × r)) × 100
          − (0.015 × hours)

r = 0.68 (male), 0.55 (female)
weight in grams = kg × 1000`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The elimination term approximates average metabolism. Individual rates
          differ widely.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Standard drinks and grams</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          In the United States, one <strong>standard drink</strong> is often defined
          as about <strong>14 grams</strong> of pure ethanol. Examples (approximate):
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>12 oz beer (~5% ABV) ≈ 14 g</li>
          <li>5 oz wine (~12% ABV) ≈ 14 g</li>
          <li>1.5 oz spirits (~40% ABV) ≈ 14 g</li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Enter total grams in the calculator. Example: 40 g ≈ 2.9 standard drinks.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this BAC calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your weight in kilograms.</li>
          <li>Select gender (Widmark body water constant).</li>
          <li>Enter total pure alcohol consumed in grams.</li>
          <li>Enter hours since you started drinking.</li>
          <li>Review estimated BAC, impairment note, and reference lines.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Typical BAC effects (general)</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>0.02–0.03%:</strong> Possible mild effects for some people
          </li>
          <li>
            <strong>0.05%:</strong> Impairment likely—coordination and judgment
          </li>
          <li>
            <strong>0.08%:</strong> Common U.S. per se limit for drivers 21+
          </li>
          <li>
            <strong>0.15%+:</strong> High risk of serious impairment
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Many states use lower limits for under-21 drivers and commercial
          licenses. International limits often differ (e.g. 0.05% or lower).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>70 kg</strong> male, <strong>40 g</strong> alcohol,{" "}
            <strong>1 hour</strong> elapsed:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>Raw BAC ≈ (40 ÷ (70,000 × 0.68)) × 100 ≈ 0.084%</li>
            <li>After 1 h: subtract 0.015 → about <strong>0.069%</strong></li>
          </ul>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Still an estimate—actual BAC can be higher or lower.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How long until BAC reaches zero?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Roughly 0.015% per hour is an average—not exact. Food, liver health,
              and other factors change the rate.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is gender in the formula?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Widmark uses different body water constants (r) for average male vs
              female physiology, which affects alcohol distribution.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use drinks instead of grams?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Convert to grams first: multiply standard drinks by ~14 g (U.S.
              definition) and enter the total.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is 0.08% the limit everywhere?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Many countries use 0.05% or lower. Some U.S. states impose stricter
              rules for certain drivers. Always follow local law.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Should I drive if BAC is below 0.08%?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Impairment can occur below 0.08%, and estimates are unreliable. The
              safest choice is not to drive after drinking.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
