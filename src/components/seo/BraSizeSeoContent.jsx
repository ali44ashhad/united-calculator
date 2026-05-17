import React from "react";
import { Link } from "react-router-dom";

export default function BraSizeSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Bra size calculator from band and bust measurements in inches
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Finding a comfortable bra often starts with two numbers:{" "}
          <strong>under-bust (band)</strong> and <strong>full bust</strong>.
          This <strong>free bra size calculator online</strong> estimates a{" "}
          <strong>US-style band + cup label</strong>—for example 34C—from inch
          measurements you take at home with a soft tape. It rounds odd
          under-bust readings up to the next <strong>even band size</strong>,
          then maps the inch difference between bust and adjusted band to cup
          letters from AA through J.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          No calculator replaces trying on bras. Brands, fabrics, and styles
          fit differently. Use this as a starting point before shopping. For
          general body measurements in other units, the{" "}
          <Link
            to="/other/conversion-calculator"
            className="text-primary hover:underline"
          >
            Conversion Calculator
          </Link>{" "}
          can help convert centimeters to inches if your tape shows cm.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to measure band and bust for bra sizing
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Wear a lightly lined or unpadded bra (or none) and stand straight.
          </li>
          <li>
            <strong>Under-bust:</strong> place the tape snugly around your rib
            cage directly under the bust, parallel to the floor. Record inches.
          </li>
          <li>
            <strong>Full bust:</strong> measure around the fullest part of the
            chest, keeping the tape level without compressing tissue.
          </li>
          <li>
            Enter both values in the tool. Read adjusted band, cup letter, and
            inch difference in the summary.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How this bra fitting calculator works
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Adjusted band = under-bust rounded up to next even inch (if odd)
Inch difference = full bust − adjusted band
Cup letter = chart[difference]  (0″ → AA, 1″ → A, 2″ → B, …)`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Example: under-bust <strong>33″</strong> becomes band <strong>34″</strong>.
          Full bust <strong>37″</strong> gives difference <strong>3″</strong> → cup{" "}
          <strong>C</strong> → estimated size <strong>34C</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Inch difference to cup size chart (this tool)
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-x-auto">
          <table className="w-full text-sm text-on-surface">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-2 pr-4">Difference (in)</th>
                <th className="text-left py-2">Cup</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              {[
                ["0", "AA"],
                ["1", "A"],
                ["2", "B"],
                ["3", "C"],
                ["4", "D"],
                ["5", "DD"],
                ["6", "E"],
                ["7", "F"],
                ["8", "G"],
                ["9", "H"],
                ["10", "I"],
                ["11+", "J (max in tool)"],
              ].map(([diff, cup]) => (
                <tr key={diff} className="border-b border-outline-variant/50">
                  <td className="py-2 pr-4">{diff}</td>
                  <td className="py-2">{cup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          US, UK, and EU bra sizes — important limits
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Searchers ask for “UK bra size calculator,” “EU bra size conversion,”
          or “bra size chart international.” Those systems use different band
          numbering and cup progressions. This page implements one{" "}
          <strong>inch-difference method</strong> aligned with many US fitting
          guides—not a universal label. Always check the brand’s size chart
          before ordering.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Signs your bra size estimate may be wrong
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Band rides up in back → band may be too large.</li>
          <li>Straps dig in but cup feels loose → try smaller band, larger cup.</li>
          <li>Spillage over cup → cup too small or style mismatch.</li>
          <li>Gaping cup with tight band → cup too large or wrong style.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the difference between band and bust measurement?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Band is under-bust (rib cage). Bust is fullest chest circumference.
              Cup size in this tool comes from bust minus adjusted band in
              inches.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why round odd under-bust up to an even number?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Many US bra bands are sold as 32, 34, 36, etc. A 33″ under-bust
              becomes 34″ before cup lookup.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use centimeters instead of inches?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This calculator expects inches. Convert cm to inches first (÷
              2.54) or use a dual-unit tape and record the inch side.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is DD the same as E?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Labels vary by country and brand. This tool lists DD at 5″
              difference and E at 6″. Check brand charts for double-letter
              conventions.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this store my measurements?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. Everything runs in your browser; measurements are not sent to
              a server as part of this tool.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
