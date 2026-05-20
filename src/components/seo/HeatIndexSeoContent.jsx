import React from "react";
import { Link } from "react-router-dom";

export default function HeatIndexSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Heat index: when humidity makes the same thermometer feel worse
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Your skin cools itself by evaporating sweat. When the air is already
          nearly saturated with water vapor, that evaporation slows down, so{" "}
          <strong>the same dry-bulb reading</strong> can feel harder on the body
          than in dry air. The <strong>heat index</strong> (sometimes called{" "}
          <strong>apparent temperature</strong>) is a single number that tries to
          capture that effect using <strong>air temperature</strong> and{" "}
          <strong>relative humidity</strong>. This page uses the familiar{" "}
          <strong>Rothfusz regression</strong> in degrees Fahrenheit—the same
          polynomial shape you will see on many reference charts and safety
          handouts.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          It is <strong>not</strong> a medical forecast. Athletes, older adults,
          children, and anyone on certain medications can be at risk even when
          the index looks moderate. Treat the output as a rough guide and follow
          your employer, school, or emergency manager’s heat plan.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Why the chart stops caring below about 80°F
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Published heat-index tables are built for hot, humid afternoons. When
          the regression gives a value under about 80°F, agencies often fall back
          to simpler rules or just emphasize the actual air temperature. The
          calculator still evaluates the polynomial so you can experiment, but
          the <strong>“risk band”</strong> labels are most meaningful once the
          index reaches the caution range used on common NWS-style materials.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Wind, sun, and pavement
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This tool does not ask for wind speed or whether you are in full sun.
          A breeze can improve comfort; blacktop in July can override it. For
          cold-weather “feels like,” see a{" "}
          <strong>wind chill</strong> tool instead.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Related tools</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <Link
              to="/other/dew-point-calculator"
              className="text-primary hover:underline"
            >
              Dew Point Calculator
            </Link>{" "}
            — ties temperature and humidity to condensation temperature.
          </li>
          <li>
            <Link
              to="/other/wind-chill-calculator"
              className="text-primary hover:underline"
            >
              Wind Chill Calculator
            </Link>{" "}
            — cold-season apparent temperature with wind.
          </li>
          <li>
            <Link
              to="/other/conversion-calculator"
              className="text-primary hover:underline"
            >
              Conversion Calculator
            </Link>{" "}
            — switch between °F and °C when comparing forecasts.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              Heat index vs. dew point—which should I watch?
            </dt>
            <dd className="mt-1">
              Dew point describes moisture in absolute terms; heat index combines
              moisture with the current temperature for a “feels like” style
              number. Many people use dew point to judge mugginess at a glance,
              and heat index for heat-stress messaging.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Can I enter Celsius?
            </dt>
            <dd className="mt-1">
              This calculator expects Fahrenheit because the standard regression
              coefficients are published in °F. Convert first, then enter the
              value.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
