import React from "react";
import { Link } from "react-router-dom";

export default function ShoeSizeConversionSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Shoe size conversion: US to EU and UK (approximate)
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Shopping shoes from another country? This{" "}
          <strong>shoe size converter</strong> takes a <strong>US shoe size</strong>{" "}
          and estimates <strong>EU</strong> and <strong>UK</strong> equivalents with
          simple offsets: <strong>EU ≈ US + 30</strong> and{" "}
          <strong>UK ≈ US − 0.5</strong>. It is a quick rule-of-thumb—not each
          brand&apos;s official chart.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>US to EU shoe size</strong>,{" "}
          <strong>international shoe size conversion</strong>. Long-tail:{" "}
          <strong>what is US 9 in European size</strong>,{" "}
          <strong>convert men&apos;s US 10 to UK size</strong>,{" "}
          <strong>online shoe size chart calculator</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`EU size ≈ US size + 30
UK size ≈ US size − 0.5

Example: US 9 → EU 39, UK 8.5`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For general length and unit swaps, the{" "}
          <Link
            to="/other/conversion-calculator"
            className="text-primary hover:underline"
          >
            Conversion Calculator
          </Link>{" "}
          handles feet, meters, and more. Foot length in centimeters ties to the{" "}
          <Link
            to="/other/height-calculator"
            className="text-primary hover:underline"
          >
            Height Calculator
          </Link>{" "}
          mindset (exact inch/cm math)—many brands list cm on insoles. For apparel
          sizing in inches, see the{" "}
          <Link
            to="/other/bra-size-calculator"
            className="text-primary hover:underline"
          >
            Bra Size Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Why charts disagree (and what this tool does not do)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          US, UK, and EU scales differ; a US men&apos;s 9 might be labeled EU 42 on
          one brand and closer to EU 39 on another. Width (narrow/wide), gender,
          kids&apos; grades, and athletic lasts add more variation. This page is{" "}
          <strong>US-in only</strong>—not reverse EU→US, not Mondopoint (cm), not
          width codes. Try shoes on when you can; use the seller&apos;s size chart
          before checkout.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              How does this shoe size converter work?
            </dt>
            <dd className="mt-1">
              Enter a US size. EU is estimated as <strong>US + 30</strong>; UK as{" "}
              <strong>US − 0.5</strong>. Results update as you type.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Is US women&apos;s the same as US men&apos;s?
            </dt>
            <dd className="mt-1">
              No. This tool uses one US number with simple offsets. Women&apos;s and
              kids&apos; tables differ by brand.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              What is US size 9 in EU?
            </dt>
            <dd className="mt-1">
              With this formula: <strong>9 + 30 = EU 39</strong>. Brand charts may
              list 42 or other values—check the label.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              What is US size 10 in EU?
            </dt>
            <dd className="mt-1">
              Here: <strong>EU 40</strong>. Some charts list EU 43–44 for US
              men&apos;s 10.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Are UK and US sizes the same?
            </dt>
            <dd className="mt-1">
              No. UK often runs about half a size smaller than US for similar fit;
              this tool uses UK ≈ US − 0.5 as a rough guide only.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
