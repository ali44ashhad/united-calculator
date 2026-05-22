import React from "react";
import { Link } from "react-router-dom";

export default function SquareFootageSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Square footage calculator: room area in ft² from length and width
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Flooring quotes, paint estimates, and real estate listings often start
          with <strong>how many square feet</strong> a space covers. This{" "}
          <strong>square footage calculator</strong> multiplies{" "}
          <strong>length</strong> and <strong>width in feet</strong> for a
          rectangle and also shows <strong>approximate square meters (m²)</strong>{" "}
          for metric-friendly planning.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>sq ft calculator</strong>,{" "}
          <strong>room size calculator</strong>. Long-tail:{" "}
          <strong>how to calculate square feet 12x10 room</strong>,{" "}
          <strong>convert square feet to square meters</strong>,{" "}
          <strong>floor area calculator for rectangular room</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Area (ft²) = length (ft) × width (ft)
m² ≈ ft² × 0.092903

Example: 12 ft × 10 ft = 120 ft² (≈ 11.15 m²)`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          After you know ft², estimate how many tiles you need with the{" "}
          <Link
            to="/other/tile-calculator"
            className="text-primary hover:underline"
          >
            Tile Calculator
          </Link>
          . For a <strong>sloped roof</strong> (longer surface than flat
          footprint), the{" "}
          <Link
            to="/other/roofing-calculator"
            className="text-primary hover:underline"
          >
            Roofing Calculator
          </Link>{" "}
          applies a pitch factor. Metric length conversions before measuring live
          in the{" "}
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
          Irregular rooms and ordering tips
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          L-shaped floors, bays, and alcoves are easiest as{" "}
          <strong>several rectangles</strong>—calculate each piece, then add.
          Circles use π × radius² (not built into this page). When buying
          flooring or tile, add <strong>5–10% waste</strong> for cuts; diagonal
          layouts often need more.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              How do you calculate square footage?
            </dt>
            <dd className="mt-1">
              Multiply length in feet by width in feet. Result is ft².
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              How do I convert ft² to m²?
            </dt>
            <dd className="mt-1">
              Multiply by about <strong>0.092903</strong>, or use 1 m² ≈ 10.764
              ft² in reverse.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Does this work for irregular rooms?
            </dt>
            <dd className="mt-1">
              Split the floor into rectangles, run each, and add the areas.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Should closets count?
            </dt>
            <dd className="mt-1">
              For materials, include any space you will floor or paint. Listing
              rules vary by market.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              How much extra material should I buy?
            </dt>
            <dd className="mt-1">
              Often <strong>5–10%</strong> above total ft²; complex patterns may
              need more.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
