import React from "react";
import { Link } from "react-router-dom";

export default function ConversionSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Length conversion calculator: meters, km, feet & miles
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Need to switch between metric and US customary{" "}
          <strong>distance units</strong>? This{" "}
          <strong>free length unit converter online</strong> converts values
          among <strong>meters (m)</strong>, <strong>kilometers (km)</strong>,{" "}
          <strong>feet (ft)</strong>, and <strong>miles (mi)</strong>. Enter a
          number, pick from and to units, and the result updates as you type.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This page is a <strong>length-only</strong> tool—it does not convert
          weight, volume, temperature, or currency. For slab dimensions in feet
          and inches, see the{" "}
          <Link
            to="/other/concrete-calculator"
            className="text-primary hover:underline"
          >
            Concrete Calculator
          </Link>
          ; for 3D space, use the{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">
          Common conversion factors
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>1 meter</strong> ≈ 3.28084 feet
          </li>
          <li>
            <strong>1 kilometer</strong> ≈ 0.621371 miles
          </li>
          <li>
            <strong>1 mile</strong> = 5,280 feet
          </li>
          <li>
            <strong>1 foot</strong> ≈ 0.3048 meters
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this unit converter
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the distance value you want to convert.</li>
          <li>Select the unit you are converting from and the target unit.</li>
          <li>
            Read the converted amount and the factor (e.g. 1 m = 3.28084 ft) in
            the summary.
          </li>
          <li>Use Reset to return to 100 meters → feet.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Formula used</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Result = input value × conversion factor (from → to)

Example: meters to feet
  100 m × 3.28084 = 328.084 ft`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Worked examples</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>100 m → ft:</strong> 100 × 3.28084 ≈{" "}
            <strong>328.084 ft</strong> (default in the calculator).
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>5 km → mi:</strong> 5 × 0.621371 ≈{" "}
            <strong>3.107 mi</strong>.
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>1 mi → ft:</strong> 1 × 5,280 = <strong>5,280 ft</strong>.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          When to use meters vs feet
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Science, engineering, and most countries outside the US use{" "}
          <strong>meters and kilometers</strong>. US construction, real estate,
          and road signs often use <strong>feet and miles</strong>. A{" "}
          <strong>meters to feet converter</strong> helps when reading plans in
          one system and ordering materials in another—pair it with the{" "}
          <Link
            to="/other/btu-calculator"
            className="text-primary hover:underline"
          >
            BTU Calculator
          </Link>{" "}
          (room dimensions in feet) or metric building specs.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator does not convert
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Weight (kg, lb, oz)</li>
          <li>Volume (liters, gallons, cubic yards)</li>
          <li>Temperature (°C, °F)</li>
          <li>Currency or exchange rates</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How many feet in a meter?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              About 3.28084 feet per meter. Enter 1 with from Meters and to Feet
              to confirm.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I convert km to miles?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Multiply kilometers by 0.621371. Example: 10 km ≈ 6.214 miles.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Are the factors exact?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              They use standard conversion constants (e.g. international foot
              definition). For legal or surveying work, use official standards
              for your jurisdiction.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
