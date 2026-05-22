import React from "react";
import { Link } from "react-router-dom";

export default function TileSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Tile calculator: how many tiles for your floor in square feet
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Before you buy boxes at the home center, you need{" "}
          <strong>how many tiles cover the floor</strong>. This{" "}
          <strong>tile calculator</strong> takes <strong>room length and width</strong>{" "}
          and <strong>tile length and width in feet</strong>, computes floor and tile
          area in ft², then <strong>rounds up</strong> to a minimum tile count—plus a
          line with <strong>about 10% extra</strong> for cuts and breakage.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>tile quantity calculator</strong>,{" "}
          <strong>floor tile estimator</strong>. Long-tail:{" "}
          <strong>how many 12x12 tiles for 10x12 room</strong>,{" "}
          <strong>tile calculator with waste percentage</strong>,{" "}
          <strong>convert inch tile size to feet for tile count</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Floor area (ft²) = floor length × floor width
Tile area (ft²)  = tile length × tile width
Tiles needed     = ⌈floor area ÷ tile area⌉
With ~10% waste  = ⌈tiles needed × 1.1⌉

Example: 12×10 ft floor, 1×1 ft tiles (12″×12″)
→ 120 ft² ÷ 1 ft² = 120 tiles (132 with 10% waste)`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Get room <strong>square footage</strong> first with the{" "}
          <Link
            to="/other/square-footage-calculator"
            className="text-primary hover:underline"
          >
            Square Footage Calculator
          </Link>
          , then enter the same dimensions here with your tile size. For{" "}
          <strong>stair treads</strong> or landings, measure each rectangle
          separately—the{" "}
          <Link
            to="/other/stair-calculator"
            className="text-primary hover:underline"
          >
            Stair Calculator
          </Link>{" "}
          helps with rise and run, not tile count. Outdoor pad area in ft² can
          cross-check the{" "}
          <Link
            to="/other/concrete-calculator"
            className="text-primary hover:underline"
          >
            Concrete Calculator
          </Link>{" "}
          when you are pouring a slab under tile.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Ordering tips</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Convert <strong>inch labels</strong> on the box to feet (÷ 12). Add more
          than 10% for diagonal patterns, large format tile, or lots of cuts.
          Grout joints slightly reduce coverage—buy an extra box if the lot number
          might run out.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              How do I calculate how many tiles I need?
            </dt>
            <dd className="mt-1">
              Floor ft² ÷ tile ft², round up. This page does that automatically.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              How do I enter 12×12 inch tiles?
            </dt>
            <dd className="mt-1">
              Use <strong>1 ft × 1 ft</strong> (12 ÷ 12 = 1 foot per side).
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              How much extra should I buy?
            </dt>
            <dd className="mt-1">
              Often <strong>10–15%</strong> above the minimum; the summary shows
              ~10% as a starting point.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Does grout change the count?
            </dt>
            <dd className="mt-1">
              Slightly—use net tile size or bump waste for wide grout lines.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Can I use this for backsplash?
            </dt>
            <dd className="mt-1">
              Yes—measure the tiled rectangle in feet and enter tile size in feet.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
