import React from "react";
import { Link } from "react-router-dom";

export default function GDPSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          GDP calculator (expenditure method): C + I + G + exports minus imports
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Gross domestic product (GDP)</strong> is the most quoted single
          scorecard for the size of an economy. In introductory macroeconomics,
          one way to think about it is the <strong>expenditure identity</strong>:
          everything produced is eventually bought by someone—households (C),
          firms building capital (I), governments (G), and foreign buyers net of
          what you import (X − M). This{" "}
          <strong>free GDP calculator online</strong> implements that identity
          so you can plug in five aggregate flows and see{" "}
          <strong>GDP = C + I + G + (X − M)</strong> instantly, plus a small
          breakdown for teaching, homework, or quick scenario checks.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          National statistical offices (BEA, ONS, CSO, etc.) publish GDP only
          after huge data programs, revisions, and chain-weighting. This page is
          deliberately simple: <strong>same units, same period</strong>, textbook
          formula. For personal or business cash planning—not national
          accounts—pair ideas with the{" "}
          <Link
            to="/finance/budget-calculator"
            className="text-primary hover:underline"
          >
            Budget Calculator
          </Link>{" "}
          and for how inflation erodes purchasing power over time, the{" "}
          <Link
            to="/finance/inflation-calculator"
            className="text-primary hover:underline"
          >
            Inflation Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What each letter means (expenditure components)
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>C — Consumption:</strong> spending by households on goods
            and services (durables, nondurables, services). In real accounts it
            excludes most home production and used goods resales.
          </li>
          <li>
            <strong>I — Gross private domestic investment:</strong> business
            structures, equipment, intellectual property, and residential
            investment; change in private inventories is part of I in full
            accounts.
          </li>
          <li>
            <strong>G — Government consumption and gross investment:</strong>{" "}
            federal, state, and local spending on goods and services (not all
            transfers like Social Security count here in GDP accounting).
          </li>
          <li>
            <strong>X — Exports:</strong> goods and services sold to non-residents.
          </li>
          <li>
            <strong>M — Imports:</strong> purchases from abroad; subtracted so
            domestic GDP does not include foreign production embedded in C, I,
            or G.
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The tool’s <strong>net exports</strong> row is simply{" "}
          <strong>X − M</strong>. A trade deficit (imports larger than exports)
          shows up as a negative contribution to GDP in this framework—exactly
          what you see on many country dashboards.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Step-by-step: how to use this gross domestic product calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            Pick a <strong>time period</strong> (one quarter or one year) and a{" "}
            <strong>unit</strong> (e.g. billions of dollars, trillions of yen).
          </li>
          <li>
            Enter <strong>C, I, G, X, M</strong> from a table in your textbook or
            a simplified dataset—every box must be filled with a number.
          </li>
          <li>
            Read <strong>private domestic (C + I)</strong>,{" "}
            <strong>net exports</strong>, and <strong>GDP</strong> in the summary.
          </li>
          <li>
            Change one component (say raise G for a fiscal stimulus thought
            experiment) and watch how GDP moves holding others constant.
          </li>
          <li>
            Use <strong>Reset</strong> to return to the sample numbers (5000,
            2000, 3000, 1500, 1000 → GDP 10500 in those units).
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Worked example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Suppose (in arbitrary but <strong>consistent</strong> units){" "}
            <strong>C = 5000</strong>, <strong>I = 2000</strong>,{" "}
            <strong>G = 3000</strong>, <strong>X = 1500</strong>,{" "}
            <strong>M = 1000</strong>.
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Private domestic = 5000 + 2000 = <strong>7000</strong>
            <br />
            Net exports = 1500 − 1000 = <strong>500</strong>
            <br />
            GDP = 7000 + 3000 + 500 = <strong>10,500</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            If imports rose to <strong>2000</strong> with everything else fixed,
            net exports would be <strong>−500</strong> and GDP would fall to{" "}
            <strong>9,500</strong>—a clean demonstration of how trade balance
            enters the identity.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Other ways to measure GDP (and what this tool is not)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Statisticians also compile GDP from the <strong>production</strong>{" "}
          approach (sum of value added by industry) and the{" "}
          <strong>income</strong> approach (wages, profits, taxes less subsidies).
          In theory the three approaches converge; in practice small{" "}
          <strong>statistical discrepancies</strong> remain. This calculator is
          only the <strong>expenditure</strong> shortcut—no value-added tables,
          no depreciation adjustment to get NDP, and no financial-sector detail.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If your coursework shifts from national flows to compound growth of a
          savings balance, the{" "}
          <Link
            to="/finance/compound-interest-calculator"
            className="text-primary hover:underline"
          >
            Compound Interest Calculator
          </Link>{" "}
          is a better fit than GDP for that question.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          GDP vs welfare: why a bigger number is not always “better”
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          GDP counts market production, not leisure, inequality, environmental
          damage, or unpaid care work. A hurricane can raise GDP temporarily
          through reconstruction spending while harming lives. Use GDP as one
          lens among many when reading economic news or policy debates.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Limitations</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>No automatic currency conversion—enter C, I, G, X, M in one currency.</li>
          <li>No real vs nominal GDP split (no GDP deflator input).</li>
          <li>No population divide—GDP per capita needs population data elsewhere.</li>
          <li>Intermediate goods are double-counted if you paste firm sales instead of value added.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why subtract imports if consumers already bought them in C?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Imports appear inside domestic spending categories; subtracting M
              removes foreign-produced value so GDP measures <strong>domestic
              output</strong>, not worldwide spending by residents.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Are transfer payments like pensions part of G?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              In official accounts, most pure transfers are <strong>not</strong>{" "}
              government consumption; G is government purchases of goods and
              services plus gross investment. Your textbook table may already use
              the right G definition—match that table when entering numbers here.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can investment (I) be negative?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              In full national accounts, a large fall in inventories can make
              investment contributions negative in a quarter. This calculator
              allows negative numeric inputs if your scenario requires them.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I get GDP per capita?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Divide the GDP result by population in the same year. United
              Calculator does not store population series—use official census or
              World Bank figures alongside your GDP output.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is GDP the same as national debt?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. GDP is a flow (production per period). Government debt is a
              stock (accumulated borrowing). They are often compared as ratios for
              policy discussion, but they are different concepts.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
