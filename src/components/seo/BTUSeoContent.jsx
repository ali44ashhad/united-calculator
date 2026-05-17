import React from "react";
import { Link } from "react-router-dom";

export default function BTUSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          BTU calculator: how much heating or cooling power does my room need?
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Choosing an air conditioner, space heater, or HVAC unit starts with
          capacity—and capacity is often quoted in{" "}
          <strong>BTUs</strong> (British Thermal Units). This{" "}
          <strong>free BTU calculator online</strong> gives a quick{" "}
          <strong>rule-of-thumb estimate</strong> from room{" "}
          <strong>length, width, and height in feet</strong> plus how many people
          typically occupy the space. It is a starting point for shopping, not a
          replacement for a professional Manual J load calculation.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The tool uses about <strong>5 BTU per cubic foot</strong> of room
          volume and adds <strong>600 BTU</strong> for each person beyond the
          first (body heat). Real loads also depend on climate, insulation,
          windows, sun, and appliances—factors this page does not model. For
          room volume in other units, try the{" "}
          <Link
            to="/geometry/volume-calculator"
            className="text-primary hover:underline"
          >
            Volume Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">What is a BTU?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          One <strong>British Thermal Unit</strong> is roughly the energy needed
          to raise one pound of water by one degree Fahrenheit. In HVAC,
          equipment labels such as “8,000 BTU” or “12,000 BTU” (often written
          as 1 ton ≈ 12,000 BTU/hr in cooling) describe how much heat the unit
          can move per hour under test conditions. Higher BTU means more
          heating or cooling capacity for a space.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this room BTU calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>Measure room length, width, and ceiling height in feet.</li>
          <li>Enter the number of people usually in the room (minimum 1).</li>
          <li>
            Read room volume, volume-based BTU, people add-on, and total
            estimated BTU in the summary.
          </li>
          <li>
            Compare to AC or heater ratings on the product label; round up
            slightly for sunny rooms or poor insulation.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Formula used</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Room volume (cu ft) = length × width × height
Volume BTU = volume × 5
People BTU = (number of people − 1) × 600   (if people > 1)
Total BTU ≈ Volume BTU + People BTU`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Worked example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A room <strong>15 ft × 12 ft × 8 ft</strong> with <strong>2 people</strong>:
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Volume = 1,440 cu ft → 1,440 × 5 = <strong>7,200 BTU</strong>
            <br />
            People add-on = (2 − 1) × 600 = <strong>600 BTU</strong>
            <br />
            Total ≈ <strong>7,800 BTU</strong> — many window units in the
            8,000–10,000 BTU range would be in the ballpark for cooling in mild
            climates.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          BTU for air conditioner vs heater sizing
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Searchers often ask “what size AC do I need BTU calculator” or
          “heating BTU calculator for bedroom.” The same volume-based estimate
          applies to both directions in this simplified model: you are sizing
          how much heat must be added or removed to keep comfort. Cooling units
          remove heat; heaters add it. Oversizing AC can cause short cycling and
          humidity issues; undersizing leaves the room warm. When in doubt,
          consult an HVAC pro or use manufacturer sizing charts for your climate.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator does not include
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Climate zone and outdoor design temperatures</li>
          <li>Wall insulation, attic heat, and air leakage</li>
          <li>Window area, orientation, and shading</li>
          <li>Kitchen heat, electronics, and lighting load</li>
          <li>Duct losses or mini-split line length</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How many BTU per square foot do I need?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Rules vary by climate; 20–30 BTU per square foot is a common rough
              range for cooling in the US. This tool uses cubic feet (includes
              ceiling height) at 5 BTU per cu ft instead, which is another
              popular shortcut.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why add 600 BTU per extra person?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Occupants generate body heat. The calculator adds 600 BTU for each
              person after the first as a simple occupancy adjustment.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is 12,000 BTU the same as 1 ton?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              In HVAC slang, one ton of cooling is about 12,000 BTU per hour. A
              “12,000 BTU” window unit is in that class.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I enter meters instead of feet?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This page expects feet. Convert dimensions first (1 m ≈ 3.28 ft)
              or use the{" "}
              <Link
                to="/other/conversion-calculator"
                className="text-primary hover:underline"
              >
                Conversion Calculator
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
