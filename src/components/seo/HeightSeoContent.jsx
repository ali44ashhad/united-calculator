import React from "react";
import { Link } from "react-router-dom";

export default function HeightSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Height units: why 5′10″ and 178 cm describe the same person
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Medical charts, passport data, and gym equipment often mix{" "}
          <strong>metric</strong> and <strong>US customary</strong> units. The
          modern inch is defined as <strong>exactly 2.54 centimeters</strong>, so
          conversions between centimeters, meters, feet, and inches are
          deterministic—no “approximate inch” needed. This{" "}
          <strong>height calculator</strong> normalizes whatever you type into
          centimeters first, then splits total inches into{" "}
          <strong>whole feet</strong> and a <strong>fractional inch</strong>{" "}
          remainder, which matches how people read tape measures in the US.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you only remember one constant, remember <strong>2.54</strong>: it
          ties every inch-based ruler to the SI system used worldwide.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Decimal feet vs feet-inches</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Some engineering drawings list <strong>decimal feet</strong> (for
          example 5.75 ft). That is fine here: the tool multiplies feet by 30.48
          to get centimeters, then shows the familiar{" "}
          <strong>X ft Y.Y in</strong> breakdown so you can compare with how you
          would say your height out loud.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Related tools</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <Link
              to="/other/conversion-calculator"
              className="text-primary hover:underline"
            >
              Conversion Calculator
            </Link>{" "}
            — broader length, weight, and temperature conversions.
          </li>
          <li>
            <Link
              to="/health/bmi-calculator"
              className="text-primary hover:underline"
            >
              BMI Calculator
            </Link>{" "}
            — combines height with weight for body mass index.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              Why might my result differ from a wall chart at the doctor?
            </dt>
            <dd className="mt-1">
              Stadiometers, shoes, time of day, and posture all shift the
              reading by small amounts. The math here is exact; the measurement
              on site is what carries clinical meaning.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Can I enter total inches only (for example 70 in)?
            </dt>
            <dd className="mt-1">
              Yes—choose inches as the input unit and type the total inch value.
              The summary will still show centimeters, meters, and feet plus
              inches.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
