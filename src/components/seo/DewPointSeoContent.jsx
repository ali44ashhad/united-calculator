import React from "react";
import { Link } from "react-router-dom";

export default function DewPointSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Dew point calculator: temperature & humidity to condensation point
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          When does moisture condense on windows, lenses, or cold pipes? The{" "}
          <strong>dew point</strong> is the temperature where air is saturated at
          the current moisture level. This{" "}
          <strong>free dew point calculator online</strong> uses the{" "}
          <strong>Magnus formula</strong> with{" "}
          <strong>air temperature in °C</strong> and{" "}
          <strong>relative humidity (%)</strong> to estimate dew point in °C.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For HVAC room sizing by volume, see the{" "}
          <Link
            to="/other/btu-calculator"
            className="text-primary hover:underline"
          >
            BTU Calculator
          </Link>
          . This page is meteorology and comfort focused, not full psychrometric
          charts.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is dew point?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Relative humidity</strong> compares current vapor to the
          maximum the air could hold at that temperature. As air cools, its
          capacity drops; when temperature reaches the dew point, RH hits 100%
          and fog, dew, or frost can form on surfaces at or below that
          temperature.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this dew point from humidity calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter outdoor or indoor air temperature in °C.</li>
          <li>Enter relative humidity (1–100%).</li>
          <li>Read dew point °C in the summary.</li>
          <li>Reset restores 25 °C and 60% RH (sample ≈ 16.7 °C dew point).</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Magnus formula used</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`a = 17.27,  b = 237.7
α = (a × T) / (b + T) + ln(RH / 100)
Td = (b × α) / (a − α)

T  = air temperature (°C)
RH = relative humidity (%)
Td = dew point (°C)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Worked example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>25 °C</strong> air at <strong>60% RH</strong> → dew point about{" "}
            <strong>16.7 °C</strong>. If a surface is cooler than that, condensation
            becomes more likely.
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            At <strong>100% RH</strong>, dew point equals air temperature—air is
            already saturated.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Comfort and mold risk (rule of thumb)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Indoor dew points above roughly <strong>18–20 °C</strong> often feel
          muggy; sustained high dew points indoors can support mold growth.
          Dehumidifiers and air conditioning lower moisture or temperature so
          dew point drops.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Limitations</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Celsius and percent RH only (no °F or wet-bulb input)</li>
          <li>Magnus approximation—not a full psychrometric chart</li>
          <li>Less accurate at very low temperatures or very high altitudes</li>
          <li>Does not compute heat index or absolute humidity</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Dew point vs relative humidity—which matters more?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              RH depends on temperature. Dew point is often easier for comparing
              how “moist” air feels across different temperatures.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can dew point be higher than air temperature?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No for this model at RH ≤ 100%. At saturation, dew point equals air
              temperature.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why must humidity be above 0%?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The formula uses ln(RH/100). Zero humidity is undefined for that
              step; enter a small positive value if needed.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
