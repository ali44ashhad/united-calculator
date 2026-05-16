import React from "react";
import { Link } from "react-router-dom";

export default function SurfaceAreaSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Surface area calculator for cubes, spheres, cylinders, cones, and
          cuboids
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Whether you are solving a homework problem, estimating material for a
          project, or checking a textbook answer, finding the{" "}
          <strong>total surface area of a 3D shape</strong> means adding up every
          square inch (or centimeter) on the outside of the object. This free{" "}
          <strong>online surface area calculator</strong> handles the five shapes
          students meet most often: <strong>cube</strong>,{" "}
          <strong>cuboid (rectangular prism)</strong>, <strong>sphere</strong>,{" "}
          <strong>cylinder</strong>, and <strong>cone</strong>. Pick a shape,
          type your measurements, and the tool applies the correct geometry
          formula automatically—no manual substitution required.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Results are labeled in <strong>square units</strong> (sq units), which
          matches how surface area is written in class: cm², m², in², or ft²
          depending on the units you used for length. The calculator does not
          convert units; if you enter radius in centimeters, interpret the output
          as square centimeters. For how much space a solid occupies inside, use
          the{" "}
          <Link
            to="/geometry/volume-calculator"
            className="text-primary hover:underline"
          >
            Volume Calculator
          </Link>
          —surface area and volume answer different questions.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is surface area in geometry?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Surface area</strong> is the sum of the areas of all exposed
          faces or curved surfaces of a three-dimensional figure. Imagine
          unfolding a box until it lies flat: the cardboard you would paint is the
          surface area. For a <strong>sphere</strong>, there are no flat faces,
          but the curved shell still has a measurable area given by{" "}
          <strong>4πr²</strong>. For a <strong>cylinder</strong>, you add the
          area of the two circular ends plus the rectangle you get when you roll
          the side wall flat.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Teachers often ask you to <strong>find the surface area of a 3D shape</strong>{" "}
          when estimating paint, wrapping paper, metal sheet, or fabric. Engineers
          use the same idea for heat transfer and coatings. This page is built for
          quick checks: select the solid, enter dimensions, read total surface
          area and the formula line shown in the summary.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this 3D surface area calculator online
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Open the <strong>3D shape</strong> dropdown and choose cube, cuboid,
            sphere, cylinder, or cone.
          </li>
          <li>
            Enter only the dimensions that shape needs (for example, radius and
            height for a cylinder, or radius and slant height for a cone).
          </li>
          <li>
            Use positive numbers greater than zero. Zero or blank fields show an
            em dash until the inputs are valid.
          </li>
          <li>
            Read <strong>Total surface area</strong> in the summary card. The
            <strong> Formula used</strong> line reminds you which equation ran for
            that shape.
          </li>
          <li>
            Tap <strong>Reset</strong> to return to the default cube example, or
            switch shapes to load preset dimensions for that solid.
          </li>
        </ol>
      </section>

      <section className="space-y-6">
        <h3 className="font-h3 text-h3 text-on-surface">
          Surface area formulas by shape (what this tool calculates)
        </h3>

        <div className="space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">
            Cube surface area calculator — six equal squares
          </h4>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
            <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`SA = 6s²   (s = side length)`}</pre>
          </div>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A cube has six identical square faces. If you know one edge length,
            multiply the area of one face (s²) by six. This is the fastest way to
            answer “what is the surface area of a cube with side 5?”
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">
            Cuboid / rectangular prism surface area
          </h4>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
            <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`SA = 2(lw + lh + wh)
l = length, w = width, h = height`}</pre>
          </div>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A <strong>cuboid</strong> is a box shape with three different edge
            lengths. The formula pairs opposite faces: top and bottom share lw,
            front and back share lh, left and right share wh. Search queries like
            “how to find surface area of a rectangular prism” point to this same
            equation.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">
            Sphere surface area formula calculator
          </h4>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
            <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`SA = 4πr²   (r = radius)`}</pre>
          </div>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Balls, globes, and bubbles use the sphere model. You only need the
            radius—not the diameter—though you can divide diameter by two first.
            The result grows quickly with r because of the r² term.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">
            Cylinder total surface area (two circles + curved side)
          </h4>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
            <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`SA = 2πr(r + h)
r = radius, h = height (axis)`}</pre>
          </div>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Cans, pipes, and drums are cylinders. Total surface area includes
            both circular bases plus the lateral (side) surface. The form{" "}
            <strong>2πr(r + h)</strong> is equivalent to{" "}
            <strong>2πr² + 2πrh</strong>, which some textbooks write as “two
            end areas plus circumference times height.”
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">
            Cone surface area with slant height (base + curved side)
          </h4>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
            <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`SA = πr(r + l)
r = radius of base, l = slant height`}</pre>
          </div>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            This cone mode expects <strong>slant height l</strong>, the distance
            along the cone’s side from rim to tip—not the vertical height h. If
            you only know r and vertical h, first find{" "}
            <strong>l = √(r² + h²)</strong> using the{" "}
            <Link
              to="/geometry/pythagorean-theorem-calculator"
              className="text-primary hover:underline"
            >
              Pythagorean Theorem Calculator
            </Link>
            , then enter r and l here.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Worked examples (numbers you can verify)
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Cube:</strong> side s = 5 → SA = 6 × 25 ={" "}
            <strong>150 sq units</strong>.
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Cuboid:</strong> 6 × 4 × 3 → SA = 2(24 + 18 + 12) ={" "}
            <strong>108 sq units</strong>.
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Sphere:</strong> r = 5 → SA = 4π × 25 ≈{" "}
            <strong>314.1593 sq units</strong>.
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Cylinder:</strong> r = 4, h = 10 → SA = 2π × 4 × 14 ≈{" "}
            <strong>351.8584 sq units</strong>.
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>Cone:</strong> r = 3, slant l = 5 → SA = π × 3 × 8 ≈{" "}
            <strong>75.3982 sq units</strong>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Surface area vs volume — when to use which calculator
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Surface area</strong> measures skin on the outside;{" "}
          <strong>volume</strong> measures capacity on the inside. A tall thin
          cylinder can have modest volume but large surface area if it is very
          wide. Packaging problems often need surface area (how much cardboard);
          filling problems need volume (how much water fits). Keep units
          consistent: never mix inches for radius with centimeters for height in
          one calculation.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I find the surface area of a cube step by step?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Square the side length to get one face area, then multiply by six
              because a cube has six congruent faces. Or use this calculator:
              choose Cube, enter s, read SA = 6s².
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the formula for the surface area of a sphere?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              SA = 4πr². It is exactly four times the area of a circle with the
              same radius. Enter r in the Sphere mode to compute it instantly.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does the cylinder option include top and bottom?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. The formula 2πr(r + h) is total surface area: both circular
              bases plus the curved lateral surface.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why does the cone need slant height instead of vertical height?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The curved part of a cone is a sector whose radius equals slant
              height l. Vertical height h appears in volume (⅓πr²h), not directly
              in total surface area unless you convert l = √(r² + h²) first.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I calculate surface area of a pyramid or prism here?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Not on this page. The cuboid option covers rectangular prisms only.
              Other prisms and pyramids need face-by-face addition or different
              tools.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What if my measurements are in feet and inches?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Convert to a single unit system before entering values. Mixed units
              produce meaningless square units. For example, convert inches to
              feet (divide by 12) so every dimension uses feet.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
