import React from "react";
import { Link } from "react-router-dom";

export default function HorsepowerSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Horsepower from torque and RPM: one line on the spec sheet
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Automakers and tuners still quote <strong>peak torque</strong> and{" "}
          <strong>peak horsepower</strong> because they compress a whole dyno
          curve into headline numbers. At any instant, you can relate the two
          with the classic formula{" "}
          <strong>
            HP = (torque in lb-ft × RPM) ÷ 5252
          </strong>
          . That constant bundles unit conversions so you get{" "}
          <strong>mechanical horsepower</strong> from pound-feet and revolutions
          per minute—the same shortcut used in bench racing since long before
          YouTube existed.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The result is a <strong>theoretical crank-style number</strong> for the
          torque and speed you typed. It ignores drivetrain loss, accessory load,
          and whether the engine can actually hold that torque at that RPM.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Why 5252 shows up everywhere</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Power is the rate of doing work. When torque is already in foot-pounds
          and shaft speed is in RPM, the algebra collapses into a single divisor.
          On many real curves, peak HP and peak torque sit on opposite sides of
          that crossover region—which is why your butt dyno and the brochure
          rarely agree at every gear.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Related tools</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <Link
              to="/other/engine-horsepower-calculator"
              className="text-primary hover:underline"
            >
              Engine Horsepower Calculator
            </Link>{" "}
            — same 5252 relationship with its own defaults and article.
          </li>
          <li>
            <Link
              to="/other/gas-mileage-calculator"
              className="text-primary hover:underline"
            >
              Gas Mileage Calculator
            </Link>{" "}
            — fuel economy after you are done quoting power figures.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              Can I use newton-meters for torque?
            </dt>
            <dd className="mt-1">
              This page expects pound-feet. Convert N·m to lb-ft first (divide by
              about 1.35582), then enter the value.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Why does my dyno sheet show a different peak?
            </dt>
            <dd className="mt-1">
              Correction factors, atmospheric conditions, gear ratio in the
              roller, and whether the pull was inertial or steady-state all move
              the curve. The calculator only multiplies the two numbers you
              supply.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
