import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/molecular-weight-calculator";

const DEFAULTS = {
  formula: "H2O",
};

const ELEMENT_WEIGHTS = {
  H: 1.008,
  He: 4.0026,
  Li: 6.94,
  Be: 9.0122,
  B: 10.81,
  C: 12.01,
  N: 14.01,
  O: 16.0,
  F: 19.0,
  Ne: 20.18,
  Na: 22.99,
  Mg: 24.31,
  Al: 26.98,
  Si: 28.09,
  P: 30.97,
  S: 32.07,
  Cl: 35.45,
  Ar: 39.95,
  K: 39.1,
  Ca: 40.08,
  Fe: 55.85,
  Cu: 63.55,
  Zn: 65.38,
  Ag: 107.87,
  I: 126.9,
  Ba: 137.33,
  Au: 196.97,
  Pb: 207.2,
};

const SUPPORTED_ELEMENTS = Object.keys(ELEMENT_WEIGHTS).sort().join(", ");

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeMolecularWeight = (formulaStr) => {
  const trimmed = formulaStr.trim().replace(/\s/g, "");
  if (!trimmed) {
    return null;
  }

  const regex = /([A-Z][a-z]*)(\d*)/g;
  let match;
  let totalWeight = 0;
  let matched = false;
  const breakdown = [];

  while ((match = regex.exec(trimmed)) !== null) {
    matched = true;
    const element = match[1];
    const count = parseInt(match[2] || "1", 10);
    if (isNaN(count) || count < 1) {
      return { error: `Invalid subscript for element ${element}.` };
    }

    const atomicWeight = ELEMENT_WEIGHTS[element];
    if (atomicWeight === undefined) {
      return {
        error: `Unknown element "${element}". Supported: ${SUPPORTED_ELEMENTS}.`,
      };
    }

    const subtotal = atomicWeight * count;
    breakdown.push({ element, count, atomicWeight, subtotal });
    totalWeight += subtotal;
  }

  if (!matched) {
    return {
      error:
        "Enter a valid chemical formula (e.g. H2O, CO2, NaCl, C6H12O6).",
    };
  }

  return {
    formula: trimmed,
    molarMass: totalWeight,
    breakdown,
  };
};

const fmt2 = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const MolecularWeightCalculator = () => {
  const [formula, setFormula] = useState(DEFAULTS.formula);

  const result = computeMolecularWeight(formula);

  const reset = () => {
    setFormula(DEFAULTS.formula);
  };

  return (
    <>
      <Helmet>
        <title>
          Molecular Weight Calculator - Molar Mass (g/mol) from Formula
        </title>
        <meta
          name="description"
          content="Calculate molecular weight and molar mass in g/mol from a chemical formula like H2O, CO2, or C6H12O6. Sum of atomic weights for common elements—free chemistry calculator."
        />
        <meta
          name="keywords"
          content="molecular weight calculator, molar mass calculator, molecular mass from formula, chemical formula molar mass, g/mol calculator, H2O molecular weight, CO2 molar mass, stoichiometry molar mass, chemistry formula weight calculator, atomic weight sum calculator, compound molar mass online"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Molecular Weight Calculator"
        />
        <meta
          property="og:description"
          content="Molar mass in g/mol from a chemical formula."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Molar Mass Calculator" />
        <meta
          name="twitter:description"
          content="Molecular weight from chemical formula."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Molecular Weight Calculator",
            url: PAGE_URL,
            description:
              "Compute molar mass in grams per mole from a chemical formula using standard atomic weights.",
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Molecular Weight Calculator",
            url: PAGE_URL,
            description:
              "Web tool to calculate molecular weight and molar mass from chemical formulas.",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "How to Calculate Molar Mass from a Chemical Formula",
            description:
              "Add atomic weights for each element times its subscript to get molecular weight in g/mol.",
            author: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": PAGE_URL,
            },
            inLanguage: "en",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is molecular weight the same as molar mass?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For most general chemistry purposes, yes—both are expressed in g/mol and represent the mass of one mole of the compound.",
                },
              },
              {
                "@type": "Question",
                name: "What formula notation does this calculator accept?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Simple formulas with element symbols and integer subscripts, such as H2O, CO2, NaCl, or C6H12O6. Parentheses and hydrates are not parsed.",
                },
              },
              {
                "@type": "Question",
                name: "Which elements are supported?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Common elements including H, C, N, O, Na, Cl, S, P, Fe, Cu, and others listed on the calculator page. Unknown symbols return an error.",
                },
              },
              {
                "@type": "Question",
                name: "How is H2O molar mass calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Two hydrogen atoms (2 × 1.008) plus one oxygen (16.00) ≈ 18.02 g/mol using the atomic weights in this tool.",
                },
              },
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.unitedcalculator.net",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Other Calculators",
                item: "https://www.unitedcalculator.net/other",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Molecular Weight Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-2">
          <label className="font-h3 text-h3 text-on-surface">
            Chemical formula
          </label>
          <input
            type="text"
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
            className={inputClassName}
            placeholder={DEFAULTS.formula}
            autoComplete="off"
            spellCheck={false}
          />
          <p className="text-sm text-on-surface-variant">
            Examples: H2O, CO2, NaCl, C6H12O6, Ca(OH)2 use expanded form CaOH2
            — parentheses not parsed.
          </p>
        </div>

        <div className="pt-2 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-lg font-h3 text-h3 shadow-md active:scale-95 transition-all"
            >
              Calculate Now
            </button>
            <button
              type="button"
              onClick={reset}
              className="text-secondary font-medium px-4 py-2 hover:bg-surface-container transition-colors rounded-lg"
            >
              Reset
            </button>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              lock
            </span>
            <span className="text-sm">Secure and private calculation</span>
          </div>
        </div>

        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Molar mass summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Formula</span>
              <span className="font-code-num text-code-num">
                {result?.formula && !result.error ? result.formula : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Molar mass</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.molarMass != null && !result.error
                  ? `${fmt2(result.molarMass)} g/mol`
                  : "—"}
              </span>
            </div>
            {result?.breakdown?.length > 0 && !result.error && (
              <div className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant space-y-1">
                <p className="font-medium text-on-surface">Breakdown</p>
                <ul className="space-y-1">
                  {result.breakdown.map((row) => (
                    <li key={`${row.element}-${row.count}`}>
                      {row.element}
                      {row.count > 1 ? (
                        <sub>{row.count}</sub>
                      ) : (
                        ""
                      )}
                      : {fmt2(row.atomicWeight)} × {row.count} ={" "}
                      {fmt2(row.subtotal)} g/mol
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Uses standard atomic weights for a fixed element set. For lab
              work, confirm with your periodic table and significant-figure
              rules. Need concentration? Use the{" "}
              <strong>Molarity Calculator</strong> after you know g/mol.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MolecularWeightCalculator;
