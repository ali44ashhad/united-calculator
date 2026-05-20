import React from "react";
import { Link } from "react-router-dom";

export default function MolaritySeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Molarity calculator: M (mol/L) from moles and solution volume
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          In general chemistry, <strong>molarity</strong> is the go-to way to say
          how concentrated a solution is: <strong>moles of solute per liter of
          solution</strong>, written <strong>M</strong> or <strong>mol/L</strong>.
          This <strong>free molarity calculator online</strong> applies{" "}
          <strong>M = n ÷ V</strong> when you already know <strong>n</strong> in
          moles and the final <strong>V</strong> in liters after mixing—typical
          for titration prep, stock dilutions, and homework checks.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>molarity calculator</strong>,{" "}
          <strong>concentration calculator</strong>, <strong>mol/L</strong>.
          Long-tail: <strong>calculate molarity from moles and liters</strong>,{" "}
          <strong>how to find M from 0.5 mol in 250 mL</strong>,{" "}
          <strong>chemistry solution concentration formula</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`M = n / V

n = moles of solute (mol)
V = volume of solution (L)
M = molarity (mol/L)  →  read as "molar"

Example: 0.5 mol in 0.25 L → M = 2 mol/L = 2 M = 2000 mM`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Liters, milliliters, and common mistakes
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Lab glassware is often marked in <strong>mL</strong>. Divide by 1000
          before using this page (250 mL = 0.25 L). A frequent error is using
          solvent volume only instead of <strong>total solution volume</strong> after
          the solute is dissolved. Molarity is also not{" "}
          <strong>molality</strong> (mol/kg solvent)—do not swap them on an exam.
        </p>
      </section> 

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              What does 2 M mean?
            </dt>
            <dd className="mt-1">
              <strong>2 M</strong> means 2 moles of solute per liter of solution.
              It does not mean 2 moles total unless you also specify the volume.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              When should I use mM instead of M?
            </dt>
            <dd className="mt-1">
              Biochemistry buffers and dilute ions are often quoted in{" "}
              <strong>millimolar (mM)</strong>. This calculator shows both: mM =
              M × 1000.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
