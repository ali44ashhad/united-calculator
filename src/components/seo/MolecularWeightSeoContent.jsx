import React from "react";
import { Link } from "react-router-dom";

export default function MolecularWeightSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Molecular weight calculator: molar mass (g/mol) from a chemical formula
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Stoichiometry homework, buffer prep, and gas-law problems all need one
          number first: <strong>how many grams per mole</strong> does this compound
          weigh? This <strong>free molecular weight calculator online</strong>{" "}
          (also called a <strong>molar mass calculator</strong> or{" "}
          <strong>molecular mass calculator</strong>) parses a simple{" "}
          <strong>chemical formula</strong>—<strong>H2O</strong>,{" "}
          <strong>CO2</strong>, <strong>NaCl</strong>,{" "}
          <strong>C6H12O6</strong>—and sums <strong>atomic weights</strong> times
          each subscript. The result is <strong>molar mass in g/mol</strong>, the
          same unit chemists use when converting between <strong>grams</strong>{" "}
          and <strong>moles</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>molecular weight calculator</strong>,{" "}
          <strong>molar mass calculator</strong>, <strong>formula weight</strong>.
          Long-tail: <strong>calculate molar mass of H2O online</strong>,{" "}
          <strong>molecular mass from chemical formula free</strong>,{" "}
          <strong>g/mol calculator for organic chemistry</strong>,{" "}
          <strong>compound molar mass stoichiometry helper</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Molar mass = Σ (atomic weight × subscript) for each element

H2O  →  2×1.008 + 1×16.00  ≈  18.02 g/mol
CO2  →  12.01 + 2×16.00     ≈  44.01 g/mol
C6H12O6 (glucose) → 180.16 g/mol (with these weights)`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Limitations (read before the exam)</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This parser handles <strong>plain formulas</strong> with integer
          subscripts. It does <strong>not</strong> expand parentheses (write{" "}
          <strong>CaOH2</strong> instead of <strong>Ca(OH)2</strong>) or hydrate
          dot notation (<strong>CuSO4·5H2O</strong>). Isotopes and IUPAC
          precision beyond two decimals are not modeled—compare with your
          classroom periodic table if the rubric is strict.
        </p>
      </section> 

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              Molecular weight vs molar mass?
            </dt>
            <dd className="mt-1">
              In intro chemistry they are used interchangeably in{" "}
              <strong>g/mol</strong>. Molecular weight is slightly more tied to
              dimensionless relative mass; molar mass has units—this tool outputs
              g/mol.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Why does my textbook differ in the last decimal?
            </dt>
            <dd className="mt-1">
              Periodic tables update <strong>atomic weights</strong> (especially
              for elements with variable isotope abundance). Rounding rules also
              change the final digit.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
