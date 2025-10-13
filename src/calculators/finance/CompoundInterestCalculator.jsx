import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("8");
  const [timesCompounded, setTimesCompounded] = useState("4"); // Quarterly
  const [years, setYears] = useState("10");

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const n = parseFloat(timesCompounded);
    const t = parseFloat(years);

    if (isNaN(P) || isNaN(r) || isNaN(n) || isNaN(t)) return null;

    const amount = P * Math.pow(1 + r / n, n * t);
    const interest = amount - P;

    return {
      totalAmount: amount.toFixed(2),
      compoundInterest: interest.toFixed(2),
    };
  };

  const result = calculateCompoundInterest();

  return (
    <>
      <Helmet>
        <title>Compound Interest Calculator</title>
        <meta
          name="description"
          content="Use our Compound Interest Calculator to estimate the future value of your investments or savings with compounding interest over time. Plan smarter with accurate projections."
        />
        <meta
          name="keywords"
          content="compound interest calculator, interest calculator, compounding calculator, future value calculator, savings calculator, investment calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/compound-interest-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Compound Interest Calculator" />
        <meta
          property="og:description"
          content="Calculate how your money grows with our Compound Interest Calculator. Get accurate projections for savings, investments, and retirement planning."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/compound-interest-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Compound Interest Calculator",
      "url": "https://www.unitedcalculator.net/finance/compound-interest-calculator",
      "description": "Use the Compound Interest Calculator to determine the future value of an investment or savings account with compounded interest over time.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://www.unitedcalculator.net"
      }
    }
    `}
        </script>
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a compound interest calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A compound interest calculator helps you estimate the future value of an investment or savings by applying compound interest over time."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a compound interest calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It allows you to project the growth of your money with reinvested interest, helping with retirement planning, savings goals, and long-term investing."
          }
        }
      ]
    }
    `}
        </script>
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
          "name": "Compound Interest Calculator",
          "item": "https://www.unitedcalculator.net/finance/compound-interest-calculator"
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
              Principal Amount ($)
            </label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 8"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Compounded Times per Year
            </label>
            <input
              type="number"
              value={timesCompounded}
              onChange={(e) => setTimesCompounded(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 4 (Quarterly)"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Number of Years</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Compound Interest Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Interest Earned:</span>
                <span className="text-green-600 font-medium">
                  ${result.compoundInterest}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Amount:</span>
                <span className="text-blue-600">${result.totalAmount}</span>
              </div>
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
  <div class="mx-auto ">
    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Our <strong>Compound Interest Calculator</strong> helps savers and investors
      estimate how investments grow over time when interest is reinvested.
      Enter the principal, interest rate, compounding frequency, and investment
      duration to see future value, total interest earned, and growth breakdowns.
    </p>

    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Compound interest accelerates growth because you earn interest on interest.
      For related planning tools.
    </p>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">What is Compound Interest?</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        Compound interest is interest calculated on both the initial principal and
        the accumulated interest from previous periods. The more frequently interest
        compounds, the faster an investment grows.
      </p>
      <ul class="list-disc ml-5 mt-3 text-sm sm:text-base space-y-1">
        <li><strong>Principal:</strong> the starting amount invested or loaned.</li>
        <li><strong>Rate:</strong> annual nominal interest rate (e.g., 5% = 0.05).</li>
        <li><strong>Compounding frequency:</strong> yearly, semiannually, quarterly, monthly, daily, or continuously.</li>
        <li><strong>Time:</strong> number of years the money is invested or borrowed.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Compound Interest Formula</h2>
      <p class="text-sm sm:text-base leading-relaxed mb-3">
        Depending on frequency, use the discrete or continuous formula:
      </p>

      <div class="bg-gray-50 border border-gray-100 rounded-lg p-3 overflow-x-auto">
        <pre class="whitespace-pre-wrap text-sm sm:text-base leading-relaxed"><code>Discrete compounding:
A = P × (1 + r / n)^(n × t)

Continuous compounding:
A = P × e^(r × t)

Where:
A = future value
P = principal
r = annual interest rate (decimal)
n = compounding periods per year
t = time in years</code></pre>
      </div>

      <p class="mt-3 text-sm sm:text-base leading-relaxed">
        Use the discrete formula for common compounding intervals (monthly, quarterly).
        Use the continuous formula if interest compounds continuously.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">How to Use the Compound Interest Calculator</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        Enter the following inputs:
      </p>
      <ol class="list-decimal ml-5 mb-3 text-sm sm:text-base space-y-1">
        <li>Principal (starting amount).</li>
        <li>Annual interest rate (as a percentage).</li>
        <li>Compounding frequency (annually, semiannually, quarterly, monthly, daily, or continuous).</li>
        <li>Time in years.</li>
        <li>Optional: regular contributions (each period) to include periodic deposits.</li>
      </ol>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>Shows future value (A), total interest earned, and effective annual rate.</li>
        <li>Supports periodic contributions to model recurring savings plans.</li>
        <li>Compares different compounding frequencies and rates.</li>
      </ul>
    </section>


    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Example Calculations</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="bg-green-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Example 1 (No contributions):</strong></p>
          <p>Principal = $5,000, Rate = 5% annually, Compounded monthly (n=12), Time = 10 years.</p>
          <p>Formula → A = 5000 × (1 + 0.05/12)^(12×10)</p>
          <p>Result → <strong>Future Value ≈ $8,235.05</strong> (approx.)</p>
        </div>

        <div class="bg-green-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Example 2 (With monthly contribution):</strong></p>
          <p>Principal = $1,000, Monthly contribution = $200, Rate = 4% annually, Compounded monthly, Time = 20 years.</p>
          <p>Compute future value of principal plus future value of an annuity for contributions to get the total.</p>
          <p>Result → <strong>Substantial growth due to contributions + compounding.</strong></p>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Interest Rate Conversions</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        Convert nominal rates to effective annual rate (EAR) to compare:
      </p>
      <div class="bg-gray-50 border border-gray-100 rounded-lg p-3 overflow-x-auto">
        <pre class="whitespace-pre-wrap text-sm sm:text-base leading-relaxed"><code>EAR = (1 + r / n)^(n) − 1</code></pre>
      </div>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        Example: 6% nominal compounded monthly → EAR = (1 + 0.06/12)^12 − 1 ≈ 6.17%.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Factors That Affect Compound Growth</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li><strong>Rate:</strong> higher rates increase growth exponentially over time.</li>
        <li><strong>Time:</strong> longer horizons dramatically increase final value.</li>
        <li><strong>Compounding frequency:</strong> more frequent compounding yields slightly higher returns.</li>
        <li><strong>Contributions:</strong> regular deposits accelerate growth much more than a one-time principal increase.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Benefits of Using the Calculator</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>Quickly estimate long-term growth for savings and investments</li>
        <li>Compare compounding frequencies and contribution plans</li>
        <li>See the impact of small changes in rate or time on final value</li>
        <li>Plan retirement savings, education funds, or emergency funds</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
      <dl class="text-sm sm:text-base">
        <dt class="font-semibold mt-4">Q.1 What’s the difference between nominal and effective rates?</dt>
        <dd class="mt-1">Ans. Nominal rate is the stated annual rate. Effective rate (EAR) accounts for compounding and shows true annual growth.</dd>

        <dt class="font-semibold mt-4">Q.2 How often should I compound?</dt>
        <dd class="mt-1">Ans. More frequent compounding yields slightly higher returns — compare using the Effective Annual Rate. For long-term planning, frequency matters less than rate and time.</dd>

        <dt class="font-semibold mt-4">Q.3 Does the calculator support continuous compounding?</dt>
        <dd class="mt-1">Ans. Yes — select continuous compounding to use A = P × e^(r × t).</dd>

        <dt class="font-semibold mt-4">Q.4 Can I model regular deposits?</dt>
        <dd class="mt-1">Ans. Yes — include periodic contribution fields to calculate future value of contributions plus principal.</dd>

        <dt class="font-semibold mt-4">Q.5 How can I compare this to a lump-sum future value?</dt>
        <dd class="mt-1">Ans. Use the <a href="/FutureValueCalculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Future Value Calculator</a> for single-lump comparisons, or the <a href="/SavingsCalculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Savings Calculator</a> for recurring deposits scenarios.</dd>
      </dl>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Conclusion</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        A <strong>Compound Interest Calculator</strong> is an essential planning tool for
        anyone saving or investing. It helps you visualize how time, rate, and
        contributions combine to grow wealth, making it easier to set realistic goals.
      </p>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        Enter your details to get an immediate projection, then adjust rate, time,
        and contributions to explore “what-if” scenarios and optimize your plan.
      </p>
    </section>
  </div>
</article>

    </>
  );
};

export default CompoundInterestCalculator;
