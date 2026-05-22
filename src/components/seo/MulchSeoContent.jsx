import React from "react";
import { Link } from "react-router-dom";

export default function MulchSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Mulch calculator: cubic yards for garden beds (feet &amp; inches)
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Spring cleanup and new landscaping always come down to one purchase
          question: <strong>how much mulch do I need?</strong> This{" "}
          <strong>free mulch calculator online</strong> takes a rectangular bed{" "}
          <strong>length and width in feet</strong> plus{" "}
          <strong>mulch depth in inches</strong>, then reports{" "}
          <strong>cubic feet</strong>, <strong>cubic yards</strong> (what many
          bulk suppliers quote), and a rough <strong>bag count</strong> assuming
          about <strong>2 cubic feet per bag</strong>—the size you will see at
          big-box garden centers.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>mulch calculator</strong>,{" "}
          <strong>mulch cubic yards</strong>, <strong>garden mulch calculator</strong>.
          Long-tail: <strong>how many cubic yards of mulch for 10x10 bed</strong>,{" "}
          <strong>mulch calculator 3 inches deep</strong>,{" "}
          <strong>convert mulch depth inches to cubic yards</strong>,{" "}
          <strong>landscaping mulch estimate by square feet</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Area (ft²) = length_ft × width_ft
Volume (ft³) = area × (depth_in ÷ 12)
Cubic yards (yd³) = ft³ ÷ 27

Example: 10 ft × 10 ft × 3 in deep
→ 100 ft² × 0.25 ft = 25 ft³
→ 25 ÷ 27 ≈ 0.93 yd³`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Depth and ordering tips</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Most flower beds use about <strong>2–4 inches</strong> of shredded bark
          or wood mulch after settling. Steep slopes, tree rings, and paths may
          differ. Add <strong>5–10% extra</strong> if the bed edges are irregular
          or you want a buffer for compaction. Bag labels and bulk quotes are not
          always interchangeable—verify whether the vendor sells by{" "}
          <strong>yard</strong>, <strong>scoop</strong>, or <strong>ton</strong>.
        </p>
      </section> 

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              Why divide by 27?
            </dt>
            <dd className="mt-1">
              One <strong>cubic yard</strong> equals 27 cubic feet (3 ft × 3 ft ×
              3 ft). Suppliers in the U.S. often price bulk mulch per cubic yard.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Can I use meters instead of feet?
            </dt>
            <dd className="mt-1">
              This page expects feet and inches. Convert meters to feet first (1 m
              ≈ 3.281 ft), or use a general conversion tool before entering
              values.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
