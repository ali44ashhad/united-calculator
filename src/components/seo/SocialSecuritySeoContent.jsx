import React from "react";
import { Link } from "react-router-dom";

export default function SocialSecuritySeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Social Security calculator: lifetime benefits from a monthly payment
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This <strong>Social Security calculator</strong> answers a narrow
          planning question: if you receive a fixed{" "}
          <strong>monthly benefit</strong> starting at a chosen{" "}
          <strong>retirement age</strong>, how much might you collect in total
          through an assumed <strong>life expectancy of age 85</strong>?
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          You enter the monthly dollar amount yourself—from an SSA benefit
          estimate, financial plan, or advisor. The tool does{" "}
          <strong>not</strong> calculate benefits from your earnings history,
          filing year, or early/late claiming rules. It is a{" "}
          <strong>lifetime total multiplier</strong>, not a replacement for{" "}
          <a
            href="https://www.ssa.gov/"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            SSA.gov
          </a>
          .
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For savings and investments before retirement, see the{" "}
          <Link
            to="/finance/retirement-calculator"
            className="text-primary hover:underline"
          >
            Retirement Calculator
          </Link>
          . For employer pension fund growth, try the{" "}
          <Link
            to="/finance/pension-calculator"
            className="text-primary hover:underline"
          >
            Pension Calculator
          </Link>
          . For monthly income after a lump sum, the{" "}
          <Link
            to="/finance/annuity-calculator"
            className="text-primary hover:underline"
          >
            Annuity Calculator
          </Link>{" "}
          uses different math.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Total lifetime benefits from your monthly amount</li>
              <li>Years until retirement (current vs retirement age)</li>
              <li>Years of payments from retirement through age 85</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>SSA primary insurance amount from wages</li>
              <li>62 vs 67 vs 70 claiming adjustments</li>
              <li>COLA, taxes, or spousal/survivor benefits</li>
              <li>Personalized longevity beyond the age-85 assumption</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Years receiving = 85 − retirement age
Lifetime total = monthly benefit × 12 × years receiving

Example: $1,500/mo from age 67 → 18 years → 18 × 12 × 1,500 = $324,000`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Current age</strong> is used only to show how many years remain
          until your chosen retirement age—it does not change the lifetime
          total formula.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">How to use it</h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter your age today.</li>
          <li>
            Enter the age when you plan to start benefits (often 62–70 in the
            U.S.).
          </li>
          <li>
            Enter the monthly benefit that matches that claim age (from SSA or
            your planner).
          </li>
          <li>
            Read lifetime total, years of payments, and years until
            retirement.
          </li>
        </ol>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <h4 className="font-h3 text-h3 text-on-surface">Example</h4>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Age <strong>55</strong> now, benefits at <strong>67</strong>,{" "}
            <strong>$1,500</strong>/month → <strong>12 years</strong> until
            retirement, <strong>18 years</strong> of payments (67 to 85), lifetime
            total <strong>$324,000</strong> before COLA or tax.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Planning with Social Security (context)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Social Security is often one piece of retirement income alongside
          savings, pensions, and investments. Claiming earlier usually means a
          lower monthly check; delaying past full retirement age can increase
          it up to age 70. This page does not apply those rules—you reflect them
          by choosing the monthly amount you enter.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Where do I get my monthly benefit number?
            </dt>
            <dd className="mt-2">
              Create a my Social Security account at SSA.gov, review your latest
              statement, or use a benefit estimate for the age you plan to
              claim—then type that figure here.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Why assume life ends at 85?
            </dt>
            <dd className="mt-2">
              It keeps the math simple for illustration. Many people live
              longer; adjust mentally or run a second scenario with more years
              outside this tool.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Does a higher retirement age always mean more lifetime dollars?
            </dt>
            <dd className="mt-2">
              Not necessarily. Waiting often raises the monthly check but
              reduces years of collection. This calculator shows the tradeoff
              only for the monthly amount you enter—it does not auto-increase
              benefits for delaying.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              Are benefits taxed?
            </dt>
            <dd className="mt-2">
              Up to 85% of benefits may be taxable depending on other income.
              This tool shows gross lifetime dollars with no tax withholding.
            </dd>
          </div>
          <div>
            <dt className="font-h3 text-h3 text-on-surface">
              How is this different from the retirement calculator?
            </dt>
            <dd className="mt-2">
              The retirement calculator projects investment and savings growth
              to a target age. This tool totals a fixed Social Security payment
              stream you supply.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
