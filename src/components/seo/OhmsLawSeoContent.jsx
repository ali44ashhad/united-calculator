import React from "react";
import { Link } from "react-router-dom";

export default function OhmsLawSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Ohm&apos;s law calculator: volts, amps, and ohms from any two values
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Whether you are sizing an LED resistor, checking a car accessory load,
          or reviewing homework for intro circuits, you usually know two of three
          numbers and need the last one. This <strong>Ohm&apos;s law calculator</strong>{" "}
          implements the relationship <strong>V = I × R</strong>—voltage in{" "}
          <strong>volts (V)</strong>, current in <strong>amperes (A)</strong>, and
          resistance in <strong>ohms (Ω)</strong>. Leave the unknown field blank,
          enter the other two, and the page solves it instantly with the same
          formulas printed on every reference card.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Searchers type <strong>ohms law calculator</strong>,{" "}
          <strong>voltage current resistance calculator</strong>, and longer
          phrases like <strong>find resistance from 12 volts and 2 amps</strong> or{" "}
          <strong>how to calculate amperage with ohms law</strong>—one tool covers
          all of those: rearrange V = I × R depending on what is missing.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          The three rearrangements (memorize one, derive the rest)
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`V = I × R     (voltage)
I = V ÷ R     (current)   — R cannot be 0
R = V ÷ I     (resistance) — I cannot be 0

Example (defaults on this page): 12 V and 2 A
→ R = 12 ÷ 2 = 6 Ω`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Power dissipation in watts is a separate step: <strong>P = V × I</strong>.
          Once you know V and I from Ohm&apos;s law, you can multiply them for heat
          in a resistor. For monthly <strong>kWh and bill estimates</strong> on
          appliances, the{" "}
          <Link
            to="/other/electricity-calculator"
            className="text-primary hover:underline"
          >
            Electricity Calculator
          </Link>{" "}
          uses kilowatts, hours, and rate per kWh—a different layer than
          milliohms on a breadboard, but the same “how much is this load doing?”
          mindset.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          When this basic form is enough (and when it is not)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Ohm&apos;s law in this form fits many <strong>DC</strong> situations:
          bench supplies, flashlight circuits, and simple automotive loads where
          reactance is negligible. It does <strong>not</strong> replace AC
          impedance math (inductors, capacitors, power factor) or safety rules
          for mains voltage—always de-energize, fuse appropriately, and follow
          local codes.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Mechanical <strong>horsepower</strong> from torque and RPM is another
          flavor of “how much power,” but in rotating machinery rather than
          electrons. After Ohm&apos;s checks, students comparing motor specs
          sometimes open the{" "}
          <Link
            to="/other/engine-horsepower-calculator"
            className="text-primary hover:underline"
          >
            Engine Horsepower Calculator
          </Link>{" "}
          for HP = (T × RPM) ÷ 5252. HVAC sizing in BTU/h is yet another axis—the{" "}
          <Link
            to="/other/btu-calculator"
            className="text-primary hover:underline"
          >
            BTU Calculator
          </Link>{" "}
          helps with heating and cooling loads in rooms, not wire gauge.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Practical checks before you trust the number
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Unit consistency:</strong> volts, amps, ohms—mixing mA with
            volts without converting breaks the math.
          </li>
          <li>
            <strong>Sign and direction:</strong> passive sign convention matters
            in theory; magnitudes are what this calculator reports.
          </li>
          <li>
            <strong>Temperature:</strong> resistor value drifts as it heats;
            measured R at idle may differ under load.
          </li>
          <li>
            <strong>All three entered?</strong> The summary flags values that do
            not satisfy V ≈ I × R within a small tolerance.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              What is Ohm&apos;s law in one line?
            </dt>
            <dd className="mt-1">
              For many resistive DC paths, <strong>voltage equals current times
              resistance</strong>: V = I × R.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              I have 12 V and a 6 Ω resistor—what current flows?
            </dt>
            <dd className="mt-1">
              <strong>I = V ÷ R = 12 ÷ 6 = 2 A.</strong> Enter 12 in voltage, 6 in
              resistance, leave current blank.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Can I enter all three fields?
            </dt>
            <dd className="mt-1">
              Yes. The tool checks consistency instead of overwriting one value.
              If your ammeter and math disagree, remeasure.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Is ohms law the same as watt&apos;s law?
            </dt>
            <dd className="mt-1">
              No. Ohm&apos;s law links V, I, and R. <strong>Power</strong> in watts
              is P = V × I (and related forms). Use both when picking resistor
              wattage ratings.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Why does the calculator error on zero current?
            </dt>
            <dd className="mt-1">
              Solving <strong>R = V ÷ I</strong> requires nonzero current. An open
              circuit is a different problem—effectively infinite resistance at DC.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
