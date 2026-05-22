import React from "react";
import { Link } from "react-router-dom";

export default function ResistorSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Resistor color code calculator: 4-band value and tolerance
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Through-hole resistors still ship with colored stripes instead of a
          printed label. This <strong>resistor color code calculator</strong>{" "}
          decodes the usual <strong>4-band</strong> pattern: two{" "}
          <strong>digit bands</strong>, one <strong>multiplier</strong>, and one{" "}
          <strong>tolerance</strong> band. Pick colors from the dropdowns and
          read resistance in <strong>ohms</strong> with a formatted value (kΩ, MΩ)
          plus a min–max band from tolerance.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>resistor calculator</strong>,{" "}
          <strong>color code calculator</strong>,{" "}
          <strong>ohm value from bands</strong>. Long-tail:{" "}
          <strong>brown black red gold resistor value</strong>,{" "}
          <strong>4 band resistor color code chart online</strong>,{" "}
          <strong>resistor tolerance gold vs silver</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How the four bands combine</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`R (Ω) = (digit1 × 10 + digit2) × multiplier

Example (page defaults):
  brown = 1, black = 0  →  digits "10"
  red multiplier = ×100
  → 10 × 100 = 1,000 Ω = 1 kΩ
  gold tolerance = ±5%  →  about 950 Ω to 1,050 Ω`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          After you know resistance, circuit math often moves to{" "}
          <strong>voltage, current, and power</strong>. The{" "}
          <Link
            to="/other/ohms-law-calculator"
            className="text-primary hover:underline"
          >
            Ohm&apos;s Law Calculator
          </Link>{" "}
          solves <strong>V = I × R</strong> when any two are known—handy for
          checking LED series resistors or divider nodes. For energy use over
          time on a load, the{" "}
          <Link
            to="/other/electricity-calculator"
            className="text-primary hover:underline"
          >
            Electricity Calculator
          </Link>{" "}
          works in kilowatts and kWh, which is a different question than stripe
          colors on a ¼ W part.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Gold, silver, and reading direction
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          On the <strong>multiplier</strong> band, gold means ×0.1 and silver
          means ×0.01 (small-value resistors). On the <strong>tolerance</strong>{" "}
          band, gold and silver usually mean ±5% and ±10%, not multiplication.
          Bands are often grouped toward one end—tolerance is typically the band
          farthest from the lead cluster. If colors look ambiguous, measure with a
          meter or compare to a printed schematic before trusting a guess.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              What does brown-black-red-gold mean?
            </dt>
            <dd className="mt-1">
              <strong>1 kΩ ±5%</strong>—digits 1 and 0, multiplier ×100, gold
              tolerance band.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Why is my resistor missing a color?
            </dt>
            <dd className="mt-1">
              Some packages use 5 bands (extra digit) or printed text. This tool
              covers <strong>4-band</strong> parts only.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Is tolerance the same as precision?
            </dt>
            <dd className="mt-1">
              Tolerance is the manufacturer&apos;s stated spread (e.g. ±5%).
              Temperature drift and aging add more error in real circuits.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Can I enter ohms and get colors?
            </dt>
            <dd className="mt-1">
              This page decodes <strong>colors → ohms</strong> only, not reverse
              lookup. Pick the nearest standard value from a chart if encoding
              backward.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Do I need E12 or E24 values?
            </dt>
            <dd className="mt-1">
              The math returns the nominal value; suppliers stock preferred
              series (E12/E24). Round to the nearest stocked part for BOMs.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
