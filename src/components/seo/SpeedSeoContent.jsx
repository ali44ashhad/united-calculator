import React from "react";
import { Link } from "react-router-dom";

export default function SpeedSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Speed calculator: distance, time, and km/h from any two values
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Road trips, running splits, and homework problems all use the same
          relationship: <strong>speed = distance ÷ time</strong>. This{" "}
          <strong>speed calculator</strong> works in <strong>kilometers</strong>,{" "}
          <strong>hours</strong>, and <strong>km/h</strong>. Enter any two numbers,
          leave the third blank, and the page solves it instantly—defaults show{" "}
          <strong>100 km in 2 h → 50 km/h</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>speed distance time calculator</strong>,{" "}
          <strong>average speed km/h</strong>. Long-tail:{" "}
          <strong>how fast is 100 km in 2 hours</strong>,{" "}
          <strong>travel time from distance and speed</strong>,{" "}
          <strong>solve for distance given speed and hours</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The three rearrangements</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`speed (km/h) = distance (km) ÷ time (h)
time (h)     = distance ÷ speed
distance (km)= speed × time

Example: 100 km, 2 h → 50 km/h`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>fuel used per distance</strong> (MPG-style), the{" "}
          <Link
            to="/other/mileage-calculator"
            className="text-primary hover:underline"
          >
            Mileage Calculator
          </Link>{" "}
          is the closer tool. For <strong>adding clock durations</strong> on a
          schedule, try the{" "}
          <Link
            to="/other/time-calculator"
            className="text-primary hover:underline"
          >
            Time Calculator
          </Link>
          . Rotating machinery power uses torque and RPM in the{" "}
          <Link
            to="/other/engine-horsepower-calculator"
            className="text-primary hover:underline"
          >
            Engine Horsepower Calculator
          </Link>{" "}
          —different units than km/h on a highway.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Average vs instantaneous speed</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This page computes <strong>average speed</strong> over the whole segment:
          total distance divided by total time, including stops. A speedometer
          shows instantaneous speed at one moment. For miles and mph, convert units
          first (1 mi ≈ 1.609 km).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              What is the speed formula?
            </dt>
            <dd className="mt-1">
              <strong>Speed = distance ÷ time</strong>. Here, km divided by hours
              gives km/h.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              How do I use this calculator?
            </dt>
            <dd className="mt-1">
              Fill in any two of distance, time, and speed. Leave the third empty
              to solve it.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              How fast is 100 km in 2 hours?
            </dt>
            <dd className="mt-1">
              <strong>50 km/h</strong> average over that segment.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Can I enter all three values?
            </dt>
            <dd className="mt-1">
              Yes—the summary flags whether they match speed = distance ÷ time.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Does this use miles or mph?
            </dt>
            <dd className="mt-1">
              Kilometers, hours, and km/h only. Convert miles to km before entering.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
