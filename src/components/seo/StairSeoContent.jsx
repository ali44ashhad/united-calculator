import React from "react";
import { Link } from "react-router-dom";

export default function StairSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Stair calculator: steps, run, and riser from total rise
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Framing a straight run starts with <strong>total rise</strong> (floor
          to floor in inches) and your target <strong>riser</strong> and{" "}
          <strong>tread</strong> sizes. This <strong>stair calculator</strong>{" "}
          counts <strong>steps = ceil(rise ÷ riser)</strong>, computes{" "}
          <strong>actual riser height</strong> after rounding steps up, and{" "}
          <strong>total run = (steps − 1) × tread</strong> for horizontal layout.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>stair rise and run calculator</strong>,{" "}
          <strong>stair step calculator</strong>. Long-tail:{" "}
          <strong>how many steps for 96 inch total rise</strong>,{" "}
          <strong>stair stringer layout 7.5 inch riser 10 inch tread</strong>,{" "}
          <strong>2R plus T stair comfort rule</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`steps = ⌈total rise ÷ target riser⌉
actual riser = total rise ÷ steps
total run = (steps − 1) × tread depth
comfort guide: 2 × actual riser + tread ≈ 24–25 in

Example: 96 in rise, 7.5 in target riser, 10 in tread
→ 13 steps, ~7.38 in actual riser, 120 in run (10 ft)`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Measure floor-to-floor height carefully before cutting stringers. For
          flat <strong>room area in square feet</strong>, use the{" "}
          <Link
            to="/other/square-footage-calculator"
            className="text-primary hover:underline"
          >
            Square Footage Calculator
          </Link>
          . Converting rise from feet to inches uses the{" "}
          <Link
            to="/other/conversion-calculator"
            className="text-primary hover:underline"
          >
            Conversion Calculator
          </Link>
          . After the floor is laid, tile quantity comes from the{" "}
          <Link
            to="/other/tile-calculator"
            className="text-primary hover:underline"
          >
            Tile Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Code and safety</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Residential codes limit <strong>riser height</strong>,{" "}
          <strong>tread depth</strong>, <strong>headroom</strong>, and{" "}
          <strong>handrails</strong>—always check your jurisdiction. This page is
          a layout estimate, not a permit substitute.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              How many steps do I need?
            </dt>
            <dd className="mt-1">
              Divide total rise by target riser and round <strong>up</strong> to
              a whole step count.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              How is total run calculated?
            </dt>
            <dd className="mt-1">
              <strong>(steps − 1) × tread depth</strong>—one fewer tread than
              risers on a straight flight.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              What is the 2R + T rule?
            </dt>
            <dd className="mt-1">
              Two risers plus one tread near <strong>24–25 inches</strong> is a
              common comfort guideline; codes still control legal limits.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Why is actual riser smaller than my target?
            </dt>
            <dd className="mt-1">
              Rounding step count up divides the same total rise across more
              steps, so each riser can be slightly shorter than your target.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Does this replace building code review?
            </dt>
            <dd className="mt-1">
              No—verify with local code and inspections before construction.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
