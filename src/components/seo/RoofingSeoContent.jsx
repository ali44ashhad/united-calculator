import React from "react";
import { Link } from "react-router-dom";

export default function RoofingSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Roofing calculator: sloped area in sq ft from footprint and pitch
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Shingle quotes often start with <strong>how many squares</strong> of
          roof you have—not just the flat outline of the house. This{" "}
          <strong>roofing calculator</strong> takes <strong>length</strong> and{" "}
          <strong>width</strong> of the roof footprint in feet plus{" "}
          <strong>pitch</strong> (rise per 12 inches of run, like 6 for a 6/12
          roof) and returns <strong>true surface area</strong> in square feet and{" "}
          <strong>roofing squares</strong> (100 sq ft each).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>roof area calculator</strong>,{" "}
          <strong>roof pitch calculator</strong>,{" "}
          <strong>roofing squares</strong>. Long-tail:{" "}
          <strong>calculate roof sq ft from 40x30 footprint 6/12 pitch</strong>,{" "}
          <strong>how much shingles for roof area</strong>,{" "}
          <strong>flat roof vs pitched area factor</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Footprint (ft²) = length × width
Pitch factor = √(1 + (pitch ÷ 12)²)
Surface area (ft²) = footprint × pitch factor
Roofing squares = surface ÷ 100

Example: 40 × 30 ft, 6/12 pitch
→ 1,200 ft² × ~1.118 ≈ 1,342 ft² (~13.4 squares)`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Flat footprint only? The{" "}
          <Link
            to="/other/square-footage-calculator"
            className="text-primary hover:underline"
          >
            Square Footage Calculator
          </Link>{" "}
          handles rooms and plots in ft² without slope. For slab volume under a
          simple pad, the{" "}
          <Link
            to="/other/concrete-calculator"
            className="text-primary hover:underline"
          >
            Concrete Calculator
          </Link>{" "}
          is the closer tool—roofing area here is for shingles and underlayment,
          not cubic yards of pour.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Ordering tips</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Add <strong>10–15% waste</strong> for cuts, hips, valleys, and ridge
            cap—this page does not add waste automatically.
          </li>
          <li>
            Complex roofs (dormers, mansards) need more than one rectangle;
            measure each plane or use a professional takeoff.
          </li>
          <li>
            <strong>Pitch 0</strong> gives factor 1—flat or low-slope systems
            use different materials than steep asphalt shingles.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              What is a roofing square?
            </dt>
            <dd className="mt-1">
              <strong>100 square feet</strong> of roof surface. Suppliers price
              bundles per square covered.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Is footprint the same as ground area?
            </dt>
            <dd className="mt-1">
              Only if the roof sits directly above the outline you measured.
              Overhangs count in the footprint you enter.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Why does pitch increase area?
            </dt>
            <dd className="mt-1">
              A sloped surface is longer than its horizontal shadow. The pitch
              factor accounts for that slope length.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Does this calculate cost?
            </dt>
            <dd className="mt-1">
              No—geometry only. Multiply squares by your contractor&apos;s price
              per square for a budget estimate.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              What pitch is too steep to walk?
            </dt>
            <dd className="mt-1">
              Safety depends on training and gear, not this calculator. Above
              12/12 is often treated as very steep for residential work.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
