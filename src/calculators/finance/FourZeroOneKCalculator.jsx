import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const FourZeroOneKCalculator = () => {
  const [annualContribution, setAnnualContribution] = useState("19500");
  const [employerMatch, setEmployerMatch] = useState("50"); // in percentage
  const [salary, setSalary] = useState("60000");
  const [annualReturn, setAnnualReturn] = useState("7");
  const [years, setYears] = useState("30");

  const calculate401k = () => {
    const contribution = parseFloat(annualContribution);
    const matchPercent = parseFloat(employerMatch) / 100;
    const salaryAmt = parseFloat(salary);
    const returnRate = parseFloat(annualReturn) / 100;
    const time = parseFloat(years);

    if (
      isNaN(contribution) ||
      isNaN(matchPercent) ||
      isNaN(salaryAmt) ||
      isNaN(returnRate) ||
      isNaN(time)
    )
      return null;

    const employerMatchAmount =
      Math.min(contribution, salaryAmt * 0.06) * matchPercent;

    let total = 0;
    for (let i = 0; i < time; i++) {
      total = (total + contribution + employerMatchAmount) * (1 + returnRate);
    }

    const totalContribution = (contribution + employerMatchAmount) * time;
    const totalGrowth = total - totalContribution;

    return {
      total: total.toFixed(2),
      totalContribution: totalContribution.toFixed(2),
      totalGrowth: totalGrowth.toFixed(2),
    };
  };

  const result = calculate401k();

  return (
    <>
      <Helmet>
        <title>401(k) Calculator - Estimate Your Retirement Savings</title>
        <meta
          name="description"
          content="Use our 401(k) Calculator to estimate how much you’ll have saved for retirement. Customize your contribution, employer match, and growth rate for accurate projections."
        />
        <meta
          name="keywords"
          content="401k calculator, four zero one k calculator, retirement calculator, 401k retirement savings, investment calculator, employer match calculator, retirement planning tool"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/four-zero-one-k-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="401(k) Calculator - Estimate Your Retirement Savings"
        />
        <meta
          property="og:description"
          content="Plan your retirement with our 401(k) Calculator. Calculate how contributions and employer matches grow your savings over time."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/four-zero-one-k-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "401(k) Calculator",
      "url": "https://www.unitedcalculator.net/finance/four-zero-one-k-calculator",
      "description": "Use this 401(k) Calculator to forecast your retirement savings based on contribution rate, employer match, and expected investment returns.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://www.unitedcalculator.net"
      }
    }
    `}
        </script>

        {/* JSON-LD: FAQ */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a 401(k) calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 401(k) calculator helps you estimate your retirement savings by calculating future value based on contributions, employer match, and investment growth."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is a 401(k) calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It provides a useful estimate based on the inputs you provide, but actual outcomes depend on market performance, contribution consistency, and employer policies."
          }
        }
      ]
    }
    `}
        </script>

        {/* JSON-LD: Breadcrumb */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.unitedcalculator.net"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Finance Calculators",
          "item": "https://www.unitedcalculator.net/finance"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "401(k) Calculator",
          "item": "https://www.unitedcalculator.net/finance/four-zero-one-k-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              Annual Contribution ($)
            </label>
            <input
              type="number"
              value={annualContribution}
              onChange={(e) => setAnnualContribution(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 19500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Employer Match (%)</label>
            <input
              type="number"
              value={employerMatch}
              onChange={(e) => setEmployerMatch(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 50"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Annual Salary ($)</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 60000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Expected Annual Return (%)
            </label>
            <input
              type="number"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 7"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Years of Investment
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 30"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              401(k) Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Total Contributions:</span>
                <span className="text-yellow-600 font-medium">
                  ${result.totalContribution}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Estimated Growth:</span>
                <span className="text-green-600 font-medium">
                  ${result.totalGrowth}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">
                  Total Value at Retirement:
                </span>
                <span className="text-blue-600">${result.total}</span>
              </div>
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
        <p class="mb-6">
          Our <strong>401(k) Calculator</strong> helps you estimate how much you
          could accumulate in your retirement account based on your
          contributions, employer match, expected investment return, and years
          to retirement. Whether you’re starting your first job or reviewing
          your retirement plan, this tool gives a clear snapshot of your
          long-term savings outlook.
        </p>

        <p class="mb-6">
          The calculator models tax-deferred growth (for traditional 401(k)
          plans) and shows how employer contributions and compound returns can
          accelerate your savings. If you want a broader retirement projection
          that includes other savings and retirement goals, try our
          <a
            href="https://www.unitedcalculator.net/finance/retirement-calculator"
            target="_blank"
            class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
          >
            Retirement Calculator
          </a>
          .
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">What is a 401(k)?</h2>
          <p>
            A 401(k) is an employer-sponsored retirement account commonly used
            in the United States. You contribute a portion of your
            paycheck—often pre-tax for traditional 401(k)s—and your employer may
            match some portion of that contribution. Money in the account grows
            tax-deferred until withdrawal, usually in retirement.
          </p>
          <p class="mt-2">
            Some employers offer a dollar-for-dollar match, others match a
            percentage; either way, the employer match is effectively free money
            and can significantly boost your retirement balance. To compare
            growth under different return scenarios, you can also use our
            <a
              href="https://www.unitedcalculator.net/finance/compound-interest-calculator"
              target="_blank"
              class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
            >
              Compound Interest Calculator
            </a>
            .
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            How the 401(k) Calculator Works
          </h2>
          <p>
            The calculator asks for a few simple inputs and uses compound growth
            to project your balance:
          </p>
          <ul class="list-disc ml-5 mb-3">
            <li>
              <strong>Employee contribution</strong> (amount or % of salary)
            </li>
            <li>
              <strong>Employer match</strong> (percentage or fixed amount)
            </li>
            <li>
              <strong>Expected annual rate of return</strong> (assumed average)
            </li>
            <li>
              <strong>Years until retirement</strong>
            </li>
          </ul>
          <p>
            Results include a projected ending balance, total contributions (you
            + employer), and the portion of your balance that comes from
            investment gains.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Calculation Logic (basic)</h2>
          <p>
            For regular contributions at the end of each period, the future
            value of a series of equal contributions is commonly calculated
            using:
          </p>
          <pre class="bg-gray-100 p-3 rounded-lg overflow-auto mb-3">
            <code>FV = C × [ (1 + r)^n − 1 ] ÷ r</code>
          </pre>
          <p class="mt-2">
            Where <code>C</code> is the total annual contribution (employee +
            employer), <code>r</code> is the annual rate of return (expressed as
            a decimal), and <code>n</code> is the number of years. If
            contributions are made monthly, the same formula applies using
            monthly values (monthly contribution, monthly rate, and total
            months).
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Example Calculation</h2>
          <div class="bg-blue-50 p-4 rounded-lg space-y-2">
            <p>
              <strong>Example:</strong> Suppose you contribute{" "}
              <strong>$5,000</strong> per year, your employer contributes an
              additional <strong>$2,500</strong> per year (total annual
              contribution = <strong>$7,500</strong>), you expect an average
              annual return of <strong>7%</strong>, and you plan to work for{" "}
              <strong>30 years</strong>.
            </p>
            <p>Step 1: Annual contribution (C) = $7,500</p>
            <p>Step 2: Annual rate (r) = 7% = 0.07</p>
            <p>Step 3: Years (n) = 30</p>
            <p>
              Step 4: Apply formula →{" "}
              <strong>Projected balance ≈ $708,456</strong>
            </p>
            <p>
              Over 30 years you would have contributed <strong>$225,000</strong>{" "}
              in total (you + employer), and the remaining{" "}
              <strong>≈ $483,456</strong> comes from investment growth — that’s
              the power of compound interest.
            </p>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Tips for Maximizing Your 401(k)
          </h2>
          <ul class="list-disc ml-5">
            <li>
              Try to contribute at least enough to get the full employer match —
              it’s essentially free return.
            </li>
            <li>
              Increase contributions gradually when you get raises or bonuses.
            </li>
            <li>
              Consider diversified investments within your plan to manage risk.
            </li>
            <li>
              If you switch jobs, roll over old 401(k) balances into your new
              401(k) or an IRA to avoid losing tax advantages.
            </li>
            <li>
              Adjust assumptions (rate of return and years) in the calculator to
              see best- and worst-case scenarios.
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Frequently Asked Questions (FAQs)
          </h2>
          <dl>
            <dt class="font-semibold mt-4">
              Q.1 Does this calculator account for taxes?
            </dt>
            <dd>
              Ans. This projection assumes tax-deferred growth typical of
              traditional 401(k)s and does not explicitly model post-retirement
              taxes. For Roth 401(k)s, contributions are after-tax but qualified
              withdrawals are tax-free — you may want to consult a tax
              professional for detailed planning.
            </dd>

            <dt class="font-semibold mt-4">
              Q.2 What if my employer match changes?
            </dt>
            <dd>
              Ans. You can adjust the employer match input in the calculator to
              model different employer contributions. Small increases in
              employer match significantly improve long-term results.
            </dd>

            <dt class="font-semibold mt-4">
              Q.3 Is the calculator accurate for all cases?
            </dt>
            <dd>
              Ans. The tool provides estimates based on the inputs you provide.
              Real returns vary year to year and fees, plan-specific investment
              options, and taxes will affect actual results.
            </dd>

            <dt class="font-semibold mt-4">Q.4 Should I consider inflation?</dt>
            <dd>
              Ans. Yes — inflation reduces purchasing power over time. To see
              inflation-adjusted values, try our
              <a
                href="https://www.unitedcalculator.net/finance/inflation-calculator"
                target="_blank"
                class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
              >
                Inflation Calculator
              </a>
              .
            </dd>

            <dt class="font-semibold mt-4">
              Q.5 Can I use this for non-US retirement accounts?
            </dt>
            <dd>
              Ans. The growth math is the same for most retirement savings
              accounts worldwide; adjust contribution rules and tax assumptions
              according to your country’s regulations.
            </dd>
          </dl>
        </section>
      </article>
    </>
  );
};

export default FourZeroOneKCalculator;
