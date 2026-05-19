import React from "react";
import { Link } from "react-router-dom";

export default function ElectricitySeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Electricity cost calculator: kW, hours & rate per kWh
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          How much does it cost to run an appliance? This{" "}
          <strong>free electricity calculator online</strong> estimates{" "}
          <strong>energy in kWh</strong> and <strong>cost in rupees (₹)</strong>{" "}
          from <strong>power in kilowatts (kW)</strong>,{" "}
          <strong>run time in hours</strong>, and your{" "}
          <strong>electricity rate per kWh</strong>. It matches the common bill
          formula: multiply usage by your per-unit charge.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For household budgeting, pair results with the{" "}
          <Link
            to="/finance/budget-calculator"
            className="text-primary hover:underline"
          >
            Budget Calculator
          </Link>
          . For AC/heating load sizing (not cost), see the{" "}
          <Link
            to="/other/btu-calculator"
            className="text-primary hover:underline"
          >
            BTU Calculator
          </Link>
          , the{" "}
          <Link
            to="/other/conversion-calculator"
            className="text-primary hover:underline"
          >
            Conversion Calculator
          </Link>{" "}
          for units, and the{" "}
          <Link
            to="/other/density-calculator"
            className="text-primary hover:underline"
          >
            Density Calculator
          </Link>{" "}
          for science homework involving mass and volume.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this power consumption calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Enter appliance power in kW (divide watts by 1000: 1500 W = 1.5 kW).
          </li>
          <li>Enter how many hours it runs (per day or per billing period).</li>
          <li>Enter your utility rate in ₹ per kWh from your bill.</li>
          <li>Read kWh used and total estimated cost in the summary.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Energy (kWh) = Power (kW) × Time (hours)
Cost (₹) = Energy (kWh) × Rate (₹/kWh)

Equivalent: Cost = kW × hours × ₹/kWh

Example: 1.5 kW × 5 h × ₹6/kWh = 7.5 kWh → ₹45`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Typical appliance power reference (kW)
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>LED bulb (10 W)</strong> — 0.01 kW
          </li>
          <li>
            <strong>TV / laptop</strong> — 0.05–0.15 kW
          </li>
          <li>
            <strong>Refrigerator</strong> — ~0.1–0.2 kW average (cycles on/off)
          </li>
          <li>
            <strong>Microwave (1000 W)</strong> — 1.0 kW when heating
          </li>
          <li>
            <strong>Room AC (1.5 ton)</strong> — ~1.2–1.8 kW while running
          </li>
          <li>
            <strong>Water heater / iron</strong> — 1–2 kW
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Nameplate watts ÷ 1000 = kW. Duty cycle matters—a fridge’s average
          power is lower than its compressor peak.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Worked example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A <strong>1.5 kW</strong> appliance runs <strong>5 hours</strong> at{" "}
            <strong>₹6/kWh</strong>:
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Energy = 1.5 × 5 = <strong>7.5 kWh</strong>
            <br />
            Cost = 7.5 × 6 = <strong>₹45</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Limitations</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Flat rate only—no tiered/slab tariffs or time-of-use pricing</li>
          <li>Excludes fixed monthly charges, fuel surcharge, and taxes</li>
          <li>Assumes constant kW for the whole period (no startup surges)</li>
          <li>Rate shown as ₹/kWh; other currencies use the same math</li>
          <li>Does not convert watts for you—enter kW already</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I convert watts to kW?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Divide watts by 1000. A 500 W fan is 0.5 kW. Then use this
              calculator.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is one kWh?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              One kilowatt-hour is 1 kW used continuously for one hour—or any
              equivalent mix (e.g. 0.5 kW for 2 hours).
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use dollars instead of rupees?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Enter your local price per kWh in the rate field—the output
              uses ₹ as a label, but the number is “currency per kWh × kWh.”
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
