import React from "react";
import { Link } from "react-router-dom";

export default function VolumeSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Volume calculator: how much space is inside a 3D shape?
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Volume</strong> measures how much three-dimensional space a
          solid occupies—think water in a tank, sand in a box, or air in a ball.
          This <strong>free online volume calculator</strong> covers the five
          shapes most often assigned in geometry class:{" "}
          <strong>cube</strong>, <strong>cuboid (rectangular prism)</strong>,{" "}
          <strong>sphere</strong>, <strong>cylinder</strong>, and{" "}
          <strong>cone</strong>. Choose a shape, enter positive dimensions, and
          read the result in <strong>cubic units</strong> (cm³, m³, in³, ft³,
          depending on what you typed).
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The calculator applies standard textbook formulas instantly. It does
          not include pyramids, prisms with triangular bases, or frustums—only
          the solids listed above. To find how much material covers the outside
          of the same shapes, switch to the{" "}
          <Link
            to="/geometry/surface-area-calculator"
            className="text-primary hover:underline"
          >
            Surface Area Calculator
          </Link>
          . Volume answers “how much fits inside”; surface area answers “how
          much skin wraps the outside.”
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is volume in geometry?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Unlike flat area (square units), volume uses <strong>cubic units</strong>{" "}
          because you multiply length × width × height (or equivalent dimensions)
          in three directions. A 1 cm cube has volume 1 cm³. Doubling the edge of
          a cube multiplies volume by eight, not two—an important idea when
          scaling 3D objects.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Engineers use volume for concrete pours, fuel tanks, and packaging.
          Students use it for homework asking “find the volume of a cylinder
          with radius 4 and height 10.” This page is built for quick, accurate
          checks with the formula name shown in the summary card.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this 3D volume calculator online
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Select your solid from the <strong>3D shape</strong> dropdown.
          </li>
          <li>
            Enter the required measurements (all must be positive numbers).
          </li>
          <li>
            For a <strong>cone</strong>, use <strong>vertical height</strong>{" "}
            perpendicular to the base—not slant height along the side.
          </li>
          <li>
            Read <strong>Volume</strong> and <strong>Formula used</strong> in the
            summary. Switching shapes loads example defaults you can edit.
          </li>
          <li>
            Click <strong>Reset</strong> to return to the default cube example.
          </li>
        </ol>
      </section>

      <section className="space-y-6">
        <h3 className="font-h3 text-h3 text-on-surface">
          Volume formulas by shape (what this tool calculates)
        </h3>

        <div className="space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">
            Cube volume calculator — s³
          </h4>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
            <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`V = s³   (s = edge length)`}</pre>
          </div>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            All edges are equal. If side = 5, volume = 125 cubic units. Search
            phrases like “how to find volume of a cube” or “cube volume
            calculator online” map directly to this formula.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">
            Cuboid / rectangular prism volume
          </h4>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
            <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`V = length × width × height`}</pre>
          </div>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Boxes, rooms, and bricks are cuboids. Multiply the three edge lengths.
            Example: 6 × 4 × 3 = <strong>72 cubic units</strong>.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">
            Sphere volume formula calculator — (4/3)πr³
          </h4>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
            <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`V = (4/3)πr³   (r = radius)`}</pre>
          </div>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Balls and globes need only the radius. Volume grows faster than you
            might expect as r increases because of the r³ term. Radius 5 gives
            about <strong>523.6 cubic units</strong>.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">
            Cylinder volume calculator — πr²h
          </h4>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
            <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`V = πr²h
r = radius of circular base, h = height along axis`}</pre>
          </div>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Cans and pipes are cylinders: area of the circular base (πr²) times
            height. Radius 4 and height 10 yield about{" "}
            <strong>502.65 cubic units</strong>.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">
            Cone volume calculator — (1/3)πr²h
          </h4>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
            <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`V = (1/3)πr²h
h = vertical height (perpendicular to base)`}</pre>
          </div>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A cone is exactly one-third the volume of a cylinder with the same
            base and height. Use vertical height h from base to tip. If you only
            know slant height and radius, find h with the{" "}
            <Link
              to="/geometry/pythagorean-theorem-calculator"
              className="text-primary hover:underline"
            >
              Pythagorean Theorem Calculator
            </Link>{" "}
            first (h = √(l² − r²) when l is slant height).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Worked volume examples you can verify
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Cube:</strong> s = 5 → V = 125 cubic units.
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Cuboid:</strong> 6 × 4 × 3 → V = 72 cubic units.
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Sphere:</strong> r = 5 → V ≈ 523.5988 cubic units.
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Cylinder:</strong> r = 4, h = 10 → V ≈ 502.6548 cubic units.
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Cone:</strong> r = 3, h = 4 → V = (1/3)π × 9 × 4 ≈ 37.6991
            cubic units.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Volume vs surface area — do not mix the questions
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Homework often pairs both: “find the volume and surface area of a
          sphere with radius 5.” Volume uses (4/3)πr³; surface area uses 4πr².
          Units differ: cubic vs square. Use this page for capacity; use the
          surface area page for outer wrap. For flat triangles, the{" "}
          <Link
            to="/geometry/triangle-calculator"
            className="text-primary hover:underline"
          >
            Triangle Calculator
          </Link>{" "}
          handles area in two dimensions only.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate the volume of a rectangular prism?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Multiply length × width × height. Select Cuboid, enter the three
              edges, and read the volume in the summary.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the formula for the volume of a sphere?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              V = (4/3)πr³. Enter radius r in the Sphere mode to compute it.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is cone volume one-third of a cylinder?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Geometry proof shows a cone with the same base radius and vertical
              height as a cylinder has exactly ⅓ the cylinder’s volume. That is
              why the formula has the (1/3) factor.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I calculate pyramid volume here?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Not on this page. Square-base pyramids use V = (1/3) × base area ×
              height, which is not in the shape list. This tool stops at cone for
              pointed solids with a circular base.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does the cone need slant height or vertical height?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Vertical height h only—the perpendicular distance from the center
              of the base to the apex. Slant height is for surface area, not this
              volume formula.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I convert cubic units?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Keep one length unit system. 1 m = 100 cm, so 1 m³ = 1,000,000
              cm³. Convert each dimension before multiplying, not after.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
