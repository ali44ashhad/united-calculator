import React from "react";
import { Link } from "react-router-dom";

export default function ConcreteSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Concrete calculator: how many cubic yards do I need for a slab?
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Ordering ready-mix concrete is usually done in{" "}
          <strong>cubic yards</strong>, but you measure the job in feet and
          inches. This <strong>free concrete calculator online</strong> estimates
          volume for a simple <strong>rectangular slab</strong>: enter{" "}
          <strong>length and width in feet</strong> and{" "}
          <strong>depth (thickness) in inches</strong>. You get cubic feet and
          cubic yards so you can call the plant with a realistic yardage number.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The math matches what contractors use on a pad or driveway: convert
          depth to feet, multiply the three dimensions, then divide by 27 because
          one cubic yard equals 27 cubic feet. For other 3D shapes, use the{" "}
          <Link
            to="/geometry/volume-calculator"
            className="text-primary hover:underline"
          >
            Volume Calculator
          </Link>
          ; for unit swaps, try the{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">
          Why cubic yards matter for concrete pours
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Ready-mix trucks in the US typically bill by the{" "}
          <strong>cubic yard</strong>. Underestimating means a cold joint or a
          second short load; overestimating wastes money and may leave excess on
          site. A quick <strong>concrete yardage calculator</strong> before you
          order helps you compare quotes and plan pump or wheelbarrow access.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this slab concrete calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>Measure the pour area length and width in feet.</li>
          <li>
            Measure slab thickness in inches (4 in is common for walks; 6 in for
            driveways and many patios).
          </li>
          <li>Read cubic feet and cubic yards in the summary.</li>
          <li>
            Add about 5–10% extra when ordering to cover waste, uneven base, or
            spillage—the tool does not add that automatically.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Formula used</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Depth (ft) = depth (in) ÷ 12
Volume (cu ft) = length (ft) × width (ft) × depth (ft)
Volume (cu yd) = volume (cu ft) ÷ 27`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Worked example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A slab <strong>10 ft × 8 ft × 6 in</strong> thick:
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Depth = 6 ÷ 12 = 0.5 ft
            <br />
            Volume = 10 × 8 × 0.5 = <strong>40 cu ft</strong>
            <br />
            Yards = 40 ÷ 27 ≈ <strong>1.48 cu yd</strong> — often rounded to{" "}
            <strong>1.5 yards</strong> on the order form.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Typical slab depths (inches)
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>4 in</strong> — sidewalks, light-duty paths (check local code)
          </li>
          <li>
            <strong>6 in</strong> — patios, driveways, garage floors (common)
          </li>
          <li>
            <strong>8–12 in</strong> — heavier loads or poor soil (engineered
            designs may differ)
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Always follow your building department and engineer; this page is a
          volume math tool only.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator does not include
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Circular or irregular shapes (only a rectangle)</li>
          <li>Separate footings, stem walls, or steps</li>
          <li>Automatic waste factor (you add 5–10% manually)</li>
          <li>Rebar, mesh, vapor barrier, or finish labor</li>
          <li>Bag-mix count (80 lb bags per cubic foot)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How many bags of concrete per cubic yard?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Roughly 45 bags of 80 lb mix per cubic yard (varies by product).
              This tool outputs bulk volume; use bag labels for small projects.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is depth entered in inches but length in feet?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              US contractors often measure slab thickness in inches and plan
              dimensions in feet. The calculator converts inches to feet before
              multiplying.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How much extra concrete should I order?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Many pros add 5–10% to the calculated yardage for waste and
              subgrade variation. Round up to the supplier’s minimum load if
              needed.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
