import React from "react";
import { Link } from "react-router-dom";

export default function DensitySeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Density calculator: find ρ from mass and volume
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Density</strong> tells you how much mass fits in a given
          volume. This <strong>free density calculator online</strong> uses the
          standard formula <strong>ρ = m ÷ V</strong> with{" "}
          <strong>mass in kilograms (kg)</strong> and{" "}
          <strong>volume in cubic meters (m³)</strong>, so the result is in{" "}
          <strong>kg/m³</strong>—the SI unit for density.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Need volume from dimensions first? Use the{" "}
          <Link
            to="/geometry/volume-calculator"
            className="text-primary hover:underline"
          >
            Volume Calculator
          </Link>
          . For length unit swaps, try the{" "}
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
        <h3 className="font-h3 text-h3 text-on-surface">What is density?</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Density is mass per unit volume. Heavy, compact materials (like lead)
          have high density; light, airy materials (like Styrofoam) have low
          density. Water is about <strong>1000 kg/m³</strong> near room
          temperature—a useful reference when checking homework or lab work.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this mass-volume density calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter the object’s mass in kilograms.</li>
          <li>Enter its volume in cubic meters.</li>
          <li>Read density in kg/m³ in the summary (updates as you type).</li>
          <li>Reset restores the sample: 10 kg and 2 m³ → 5 kg/m³.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Formula</h3>
        <motion.div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`ρ = m / V

ρ = density (kg/m³)
m = mass (kg)
V = volume (m³)

Example: m = 10 kg, V = 2 m³ → ρ = 5 kg/m³`}</pre>
        </motion.div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Reference densities (approximate)
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Air</strong> — ~1.2 kg/m³ (at sea level)
          </li>
          <li>
            <strong>Water</strong> — ~1000 kg/m³
          </li>
          <li>
            <strong>Aluminum</strong> — ~2700 kg/m³
          </li>
          <li>
            <strong>Steel</strong> — ~7800 kg/m³
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Limitations</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>kg and m³ only (no g/cm³ or lb/ft³ output built in)</li>
          <li>Uniform material assumed (single density value)</li>
          <li>Does not solve for mass or volume—only density from m and V</li>
          <li>Temperature and pressure can change density (especially gases)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I convert g/cm³ to kg/m³?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Multiply g/cm³ by 1000. Example: 2 g/cm³ = 2000 kg/m³. Enter values
              already in kg and m³ in this tool, or convert units first.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why can’t volume be zero?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Division by zero is undefined. A real object must have positive
              volume.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is density the same as specific weight?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Specific weight includes gravity (weight per volume). Density
              is mass per volume.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
