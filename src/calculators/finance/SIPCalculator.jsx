import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("5000");
  const [expectedRate, setExpectedRate] = useState("12");
  const [timePeriod, setTimePeriod] = useState("10");

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(expectedRate) / 100 / 12;
    const n = parseFloat(timePeriod) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n)) return null;

    const maturityValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const totalInvested = P * n;
    const estimatedReturns = maturityValue - totalInvested;

    return {
      maturityValue: maturityValue.toFixed(2),
      totalInvested: totalInvested.toFixed(2),
      estimatedReturns: estimatedReturns.toFixed(2),
    };
  };

  const result = calculateSIP();

  return (
    <>
      {" "}
      <Helmet>
        <title>
          Calculate Your Online Mutual Fund Returns with the SIP Calculator -
          united calculator
        </title>
        <meta
          name="description"
          content="To determine how much your mutual funds will return, use our free SIP Calculator. Plan your monthly contributions, consider projected returns, and prudently increase your capital."
        />
        <meta
          name="keywords"
          content="step up sip calculator, sip calculator sbi, sbi sip calculator, sip calculator groww, groww sip calculator, sip calculator with step up, sip calculator with inflation, hdfc sip calculator, sip calculator online"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/sip-calculator"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Calculate Your Online Mutual Fund Returns with the SIP Calculator - united calculator"
        />
        <meta
          property="og:description"
          content="Use a free online SIP calculator to find out the expected returns on your mutual fund investments. Using precise projections will help you make better selections."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/sip-calculator"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SIP Calculator - Mutual Fund Return Estimator"
        />
        <meta
          name="twitter:description"
          content="Use our SIP calculator to calculate mutual fund returns. Perfect tool for monthly investment planning."
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "SIP Calculator",
            "url": "https://www.unitedcalculator.net/finance/sip-calculator",
            "description": "Free online SIP calculator to estimate mutual fund returns. Calculate your monthly investment and future value to plan your wealth.",
            "publisher": {
              "@type": "Organization",
              "name": "United Calculators",
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
                "name": "What is a SIP calculator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A SIP calculator is a financial tool that helps investors estimate the future value of their SIP investments based on expected returns and time period."
                }
              },
              {
                "@type": "Question",
                "name": "Is SIP calculator accurate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SIP calculators provide estimates based on assumed rates of return. Actual returns may vary depending on market performance."
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
                "name": "SIP Calculator",
                "item": "https://www.unitedcalculator.net/finance/sip-calculator"
              }
            ]
          }
          `}
        </script>
      </Helmet>
      <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              Monthly Investment (₹)
            </label>
            <input
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Expected Annual Return (%)
            </label>
            <input
              type="number"
              value={expectedRate}
              onChange={(e) => setExpectedRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 12"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Time Period (in Years)
            </label>
            <input
              type="number"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              SIP Result Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Invested Amount:</span>
                <span className="text-yellow-600 font-medium">
                  ₹{result.totalInvested}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Estimated Returns:</span>
                <span className="text-green-600 font-medium">
                  ₹{result.estimatedReturns}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Value at Maturity:</span>
                <span className="text-blue-600">₹{result.maturityValue}</span>
              </div>
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
        <p class="mb-6">
          Our <strong>SIP Calculator</strong> is a simple yet powerful tool that
          helps you estimate the future value of your mutual fund investments
          made through a Systematic Investment Plan (SIP). Whether you’re
          investing for retirement, a dream home, or your child’s education,
          this calculator shows how consistent monthly investments can grow into
          substantial wealth over time.
        </p>

        <p class="mb-6">
          Understanding how SIP works can help you plan your financial goals
          better and stay motivated to invest regularly. If you want to explore
          how inflation affects your returns, you can try our
          <a
            href="https://www.unitedcalculator.net/finance/inflation-calculator"
            target="_blank"
            class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
          >
            Inflation Calculator
          </a>
          .
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">What is SIP?</h2>
          <p>
            A Systematic Investment Plan (SIP) is a disciplined way of investing
            a fixed amount in mutual funds at regular intervals, typically
            monthly. It works on the principle of rupee cost averaging, which
            helps you buy more units when prices are low and fewer when prices
            are high, balancing out market fluctuations.
          </p>
          <p class="mt-2">
            SIP encourages consistent investing habits and makes wealth creation
            easier over the long term. For a one-time investment projection, you
            can use our Lump Sum Calculator .
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">SIP Calculator Formula</h2>
          <p>
            The SIP maturity amount is calculated using the future value
            formula:
          </p>
          <pre class="bg-gray-100 p-3 rounded-lg overflow-auto mb-3">
            <code>FV = P × [(1 + r)ⁿ - 1] × (1 + r) ÷ r</code>
          </pre>
          <ul class="list-disc ml-5 mb-3">
            <li>
              <code>P</code> — Monthly investment amount
            </li>
            <li>
              <code>r</code> — Monthly rate of return (annual return ÷ 12)
            </li>
            <li>
              <code>n</code> — Total number of months
            </li>
          </ul>
          <p>
            For example, investing ₹5,000/month for 10 years at an annual return
            of 12% would give you a maturity amount of around ₹11.6 lakh. To
            estimate returns with different interest rates, try our
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
            How to Use the SIP Calculator
          </h2>
          <ol class="list-decimal ml-5 mb-3">
            <li>Enter your monthly investment amount.</li>
            <li>Enter the expected annual return rate (in %).</li>
            <li>Enter the total investment duration (in years or months).</li>
            <li>
              Click <strong>Calculate</strong> to see your maturity amount and
              total investment value.
            </li>
          </ol>
          <ul class="list-disc ml-5">
            <li>Shows total invested amount and total wealth gained</li>
            <li>Calculates returns instantly</li>
            <li>Works for any time frame or return rate</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Example Calculation</h2>
          <div class="bg-blue-50 p-4 rounded-lg space-y-2">
            <p>
              <strong>Example:</strong> You invest <strong>₹10,000</strong>{" "}
              monthly for <strong>15 years</strong> at an annual return rate of{" "}
              <strong>12%</strong>.
            </p>
            <p>Step 1: Monthly rate → 12% ÷ 12 = 0.01</p>
            <p>Step 2: Total months → 15 × 12 = 180</p>
            <p>Step 3: Apply formula → FV ≈ ₹50.4 lakh</p>
            <p>
              Out of this, your total investment is ₹18 lakh, and the remaining
              ₹32.4 lakh is the wealth created through compounding.
            </p>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Benefits of Using SIP Calculator
          </h2>
          <ul class="list-disc ml-5">
            <li>Plan your financial goals with clarity</li>
            <li>Visualize the power of compounding</li>
            <li>Experiment with different investment amounts</li>
            <li>Stay motivated to invest regularly</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Frequently Asked Questions (FAQs)
          </h2>
          <dl>
            <dt class="font-semibold mt-4">
              Q.1 Is SIP better than lump sum investment?
            </dt>
            <dd>
              Ans. SIP is ideal for regular investing and managing market
              volatility, while lump sum investment can be better if you have a
              large amount ready to invest.
            </dd>

            <dt class="font-semibold mt-4">
              Q.2 Can I change my SIP amount later?
            </dt>
            <dd>
              Ans. Yes, you can increase or decrease your SIP amount anytime,
              depending on your financial situation.
            </dd>

            <dt class="font-semibold mt-4">
              Q.3 What happens if I miss a SIP payment?
            </dt>
            <dd>
              Ans. Missing one or two payments won’t cancel your SIP, but
              frequent misses may affect your total returns.
            </dd>

            <dt class="font-semibold mt-4">Q.4 Does SIP guarantee returns?</dt>
            <dd>
              Ans. No, mutual fund returns depend on market performance, but SIP
              helps reduce the impact of volatility over time.
            </dd>

            <dt class="font-semibold mt-4">
              Q.5 Can I use this calculator for retirement planning?
            </dt>
            <dd>
              Ans. Absolutely — SIP is one of the most effective ways to build a
              retirement corpus. For a more detailed retirement projection,
              check our
              <a
                href="https://www.unitedcalculator.net/finance/retirement-calculator"
                target="_blank"
                class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
              >
                Retirement Calculator
              </a>
              .
            </dd>
          </dl>
        </section>
      </article>
    </>
  );
};

export default SIPCalculator;
