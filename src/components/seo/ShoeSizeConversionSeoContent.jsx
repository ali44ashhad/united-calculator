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
          Shopping shoes online from another country? This{" "}
          <strong>free shoe size converter online</strong> takes a{" "}
          <strong>US shoe size</strong> and estimates{" "}
          <strong>EU</strong> and <strong>UK</strong> equivalents using simple
          offsets: <strong>EU ≈ US + 30</strong> and{" "}
          <strong>UK ≈ US − 0.5</strong>. It is a quick rule-of-thumb—not a
          replacement for each brand’s size chart or trying shoes on.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For other measurement conversions, see the{" "}
          <Link
            to="/other/conversion-calculator"
            className="text-primary hover:underline"
          >
            Conversion Calculator
          </Link>{" "}
          (length). For apparel sizing in inches, see the{" "}
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
          How to use this international shoe size calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your US shoe size (whole or half sizes, e.g. 9 or 9.5).</li>
          <li>Read approximate EU and UK sizes in the summary.</li>
          <li>Compare with the seller’s chart before you buy.</li>
          <li>Reset restores the sample size US 9.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Formulas used</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`EU size ≈ US size + 30
UK size ≈ US size − 0.5

Example: US 9 → EU 39, UK 8.5`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Why shoe sizes differ by region
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The US, UK, and Europe use different scales. A US men’s 9 might be
          labeled EU 42 on one brand’s chart and closer to EU 39 on another.
          Width (narrow/wide), gender, and kids’ grading add more variation. Use
          this <strong>US to EU shoe size calculator</strong> for a ballpark, then
          confirm on the product page.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Common conversions</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>US 8</strong> → EU 38, UK 7.5
          </li>
          <li>
            <strong>US 9</strong> → EU 39, UK 8.5
          </li>
          <li>
            <strong>US 10</strong> → EU 40, UK 9.5
          </li>
          <li>
            <strong>US 11</strong> → EU 41, UK 10.5
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Brand charts may disagree with these estimates—especially for women’s
          and unisex styles.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Limitations</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>US input only (not EU-in or UK-in reverse conversion)</li>
          <li>Does not separate men’s, women’s, or children’s tables</li>
          <li>No width (2E, wide) or athletic brand-specific mapping</li>
          <li>Not an official ISO or Mondopoint (cm) converter</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is US size 10 in EU?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              With this tool: 10 + 30 = <strong>EU 40</strong>. Some charts list
              EU 43–44 for US men’s 10—always check the label.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Are UK and US sizes the same?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. UK sizes typically run about half a size smaller than US for
              the same fit; this calculator uses UK ≈ US − 0.5 as a rough guide.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Should I size up when converting?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              If you are between sizes or buying athletic shoes, many shoppers go
              up half a US size. When possible, measure foot length in cm and
              use the brand’s chart.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
