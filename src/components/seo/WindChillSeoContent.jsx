import React from "react";
import { Link } from "react-router-dom";

export default function WindChillSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Wind chill calculator: how cold it feels with wind
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          On a windy winter day, the thermometer does not tell the whole story.
          <strong> Wind chill</strong> estimates how cold <strong>exposed skin
          feels</strong> when wind removes heat faster. This{" "}
          <strong>wind chill calculator</strong> uses the{" "}
          <strong>U.S. National Weather Service</strong> regression in{" "}
          <strong>°F</strong> and <strong>mph</strong>—for air temperature{" "}
          <strong>50°F or below</strong> and wind <strong>3 mph or higher</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>wind chill calculator</strong>,{" "}
          <strong>feels like temperature cold</strong>. Long-tail:{" "}
          <strong>wind chill 20 degrees 15 mph</strong>,{" "}
          <strong>NWS wind chill formula fahrenheit</strong>,{" "}
          <strong>how much colder does wind make it feel</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The NWS formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`WC = 35.74 + 0.6215×T − 35.75×V^0.16 + 0.4275×T×V^0.16
  T = air temperature (°F)
  V = wind speed (mph)

Valid: T ≤ 50°F, V ≥ 3 mph

Example: 20°F, 15 mph → about 4°F wind chill`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Summer heat and humidity use the{" "}
          <Link
            to="/other/heat-index-calculator"
            className="text-primary hover:underline"
          >
            Heat Index Calculator
          </Link>
          . For <strong>dew point</strong> and moisture in the air, see the{" "}
          <Link
            to="/other/dew-point-calculator"
            className="text-primary hover:underline"
          >
            Dew Point Calculator
          </Link>
          . Convert °F ↔ °C in the{" "}
          <Link
            to="/other/conversion-calculator"
            className="text-primary hover:underline"
          >
            Conversion Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Safety context</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Lower wind chill means faster frostbite risk on exposed skin. Layer
          clothing, cover extremities, and limit time outside when values plunge.
          This page is an educational chart estimate—not a replacement for official
          NWS watches and warnings.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              What is wind chill?
            </dt>
            <dd className="mt-1">
              Apparent cold from wind plus temperature—usually lower than the
              thermometer reading.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Why must temperature be ≤ 50°F?
            </dt>
            <dd className="mt-1">
              The NWS regression is defined for cold-season conditions, not warm
              air.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Why at least 3 mph wind?
            </dt>
            <dd className="mt-1">
              Below 3 mph the published formula does not apply; calm air feels
              closer to the actual temperature.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Wind chill vs heat index?
            </dt>
            <dd className="mt-1">
              Wind chill = cold + wind. Heat index = hot + humidity.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Can I use km/h?
            </dt>
            <dd className="mt-1">
              This page expects mph. Divide km/h by about 1.609 to get mph first.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
