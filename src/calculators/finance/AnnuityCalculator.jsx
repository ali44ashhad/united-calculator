import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const AnnuityCalculator = () => {
  const [paymentAmount, setPaymentAmount] = useState("1000");
  const [interestRate, setInterestRate] = useState("6");
  const [numberOfPeriods, setNumberOfPeriods] = useState("20");

  const calculateAnnuity = () => {
    const P = parseFloat(paymentAmount);
    const r = parseFloat(interestRate) / 100 / 12; // Monthly rate
    const n = parseFloat(numberOfPeriods) * 12; // Total months

    if (isNaN(P) || isNaN(r) || isNaN(n)) return null;

    const futureValue = P * ((Math.pow(1 + r, n) - 1) / r);
    const totalPaid = P * n;
    const totalInterest = futureValue - totalPaid;

    return {
      futureValue: futureValue.toFixed(2),
      totalPaid: totalPaid.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculateAnnuity();

  return (
    <>
      <Helmet>
        <title>
          Calculate your retirement return by our free annuity calculator ||
          United Calculator
        </title>
        <meta
          name="description"
          content="Use our free Annuity Calculator to calculate your guaranteed income during retirement. Plan your future with fixed payments, calculate returns, and make valuble investment decisions."
        />
        <meta
          name="keywords"
          content="annuity calculator, annuity income calculator, retirement annuity calculator, fixed annuity calculator, immediate annuity calculator, pension annuity calculator, online annuity calculator, annuity calculator india, annuity payout calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/annuity-calculator"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="calculate Your Retirement Income with the Annuity Calculator || United Calculator"
        />
        <meta
          property="og:description"
          content="Use our Annuity Calculator to determine your retirement income from fixed or immediate annuity plans. Plan a secure financial future now."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/annuity-calculator"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Annuity Calculator by united calculator || Retirement Income Estimator"
        />
        <meta
          name="twitter:description"
          content="Calculate your fixed retirement income with our annuity calculator. Ideal for pension planning and income security."
        />
        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Annuity Calculator",
      "url": "https://www.unitedcalculator.net/finance/annuity-calculator",
      "description": "Free annuity calculator to project retirement income from fixed or immediate annuities. Plan your finances and secure your future income stream.",
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
          "name": "What is an annuity calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An annuity calculator helps to estimate the income you’ll receive from an annuity plan based on your investment amount, rate of return, and investment duration."
          }
        },
        {
          "@type": "Question",
          "name": "Who should use an annuity calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Anyone can invest for retirement or looking to secure regular income from a lump sum investment should use an annuity calculator for better financial planning."
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
          "name": "Annuity Calculator",
          "item": "https://www.unitedcalculator.net/finance/annuity-calculator"
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
              Monthly Payment ($)
            </label>
            <input
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 6"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Number of Years</label>
            <input
              type="number"
              value={numberOfPeriods}
              onChange={(e) => setNumberOfPeriods(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 20"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Annuity Result Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Total Contributions:</span>
                <span className="text-yellow-600 font-medium">
                  ${result.totalPaid}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">
                  Estimated Interest Earned:
                </span>
                <span className="text-green-600 font-medium">
                  ${result.totalInterest}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Future Value:</span>
                <span className="text-blue-600">${result.futureValue}</span>
              </div>
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
        <p class="mb-6">
          Our free <strong>Annuity Calculator</strong> helps you to estimate
          your future value or payment of an annuity based on your
          contributions, interest rate, and term for your futur. By entering
          details such as periodic payment, number of periods with your goal,
          and interest rate, you can understand how much you’ll receive or need
          to contribute to reach your financial goals per months.
        </p>

        <p class="mb-6">
          Whether you’re planning for retirement, a long-term investment, or a
          fixed-income stream for your secure future, this annuity calculator
          will provides accurate results to guide your decisions. For exploring
          other types of returns, you can also try our{" "}
          <a
            href="https://www.unitedcalculator.net/finance/average-return-calculator"
            target="_blank"
            class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
          >
            Average Return Calculator
          </a>
          .
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">What is an Annuity?</h2>
          <p>
            An annuity is a financial product that provides a series of payments
            over time. It can be used for retirement planning, fixed-income
            investments, or structured payouts. Annuities may be{" "}
            <strong>immediate</strong> (start payments right away) or{" "}
            <strong>deferred</strong> (payments begin in the future).
          </p>
          <p class="mt-2">Key terms in an annuity:</p>
          <ul class="list-disc ml-5 mt-2">
            <li>
              <strong>Payment (PMT):</strong> The amount paid or received each
              period.
            </li>
            <li>
              <strong>Interest Rate (r):</strong> The periodic rate of return.
            </li>
            <li>
              <strong>Number of Periods (n):</strong> Total number of payment
              intervals.
            </li>
            <li>
              <strong>Present Value (PV):</strong> Current value of the annuity.
            </li>
            <li>
              <strong>Future Value (FV):</strong> Value of the annuity at the
              end of all periods.
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Annuity Formulas</h2>
          <p>The standard formulas used are:</p>
          <pre class="bg-gray-100 p-3 rounded-lg overflow-auto mb-3">
            <code>Future Value of Annuity: FV = PMT × [(1 + r)ⁿ – 1] ÷ r</code>
            <code>
              Present Value of Annuity: PV = PMT × [1 – (1 + r)⁻ⁿ] ÷ r
            </code>
          </pre>
          <ul class="list-disc ml-5 mb-3">
            <li>
              <strong>PMT</strong> — Payment per period
            </li>
            <li>
              <strong>r</strong> — Interest rate per period
            </li>
            <li>
              <strong>n</strong> — Total number of periods
            </li>
          </ul>
          <p>
            These formulas allow you to calculate either the value of periodic
            payments in the future or determine how much you need to invest now
            to achieve a specific payout.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            How to Use the Annuity Calculator
          </h2>
          <p>Using the Annuity Calculator is simple:</p>
          <ol class="list-decimal ml-5 mb-3">
            <li>Enter the periodic payment amount (PMT).</li>
            <li>Specify the interest rate per period.</li>
            <li>Enter the total number of payment periods (n).</li>
            <li>
              Choose whether to calculate present value (PV) or future value
              (FV).
            </li>
            <li>
              Click <strong>Calculate</strong> to see your annuity value or
              required payment.
            </li>
          </ol>
          <ul class="list-disc ml-5">
            <li>Shows total value of annuity over time</li>
            <li>Helps compare different contribution or payout scenarios</li>
            <li>Assists with retirement or long-term investment planning</li>
            <li>Provides clarity on how interest affects payments</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Example Calculation</h2>
          <div class="bg-blue-50 p-4 rounded-lg space-y-2">
            <p>
              <strong>Example:</strong> Suppose you contribute{" "}
              <strong>$500</strong> per month to an annuity for{" "}
              <strong>10 years (120 months)</strong> at an annual interest rate
              of <strong>6%</strong> (0.5% per month):
            </p>
            <p>
              Step 1: Apply FV formula → FV = 500 × [(1 + 0.005)¹²⁰ – 1] ÷ 0.005
            </p>
            <p>
              Step 2: FV ≈ <strong>$84,098</strong>
            </p>
            <p>
              This means your annuity contributions grow to approximately
              $84,098 over 10 years due to compound interest.
            </p>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Factors That Affect Annuity Value
          </h2>
          <p>Several factors influence the outcome of an annuity:</p>
          <ul class="list-disc ml-5">
            <li>
              <strong>Interest Rate:</strong> Higher rates increase annuity
              growth.
            </li>
            <li>
              <strong>Payment Amount:</strong> Larger contributions lead to
              higher future value.
            </li>
            <li>
              <strong>Number of Periods:</strong> Longer investment duration
              compounds returns.
            </li>
            <li>
              <strong>Payment Frequency:</strong> Monthly, quarterly, or annual
              payments affect total growth.
            </li>
            <li>
              <strong>Type of Annuity:</strong> Immediate or deferred annuities
              influence when payouts start.
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Benefits of Using the Annuity Calculator
          </h2>
          <ul class="list-disc ml-5">
            <li>Accurately predicts future or present value of an annuity</li>
            <li>Helps with retirement and long-term financial planning</li>
            <li>Compares different contribution or payout strategies</li>
            <li>Shows impact of interest rate and term on overall value</li>
            <li>Assists in making informed investment decisions</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Frequently Asked Questions (FAQs)
          </h2>
          <dl>
            <dt class="font-semibold mt-4">
              Q.1 What does the Annuity Calculator show?
            </dt>
            <dd>
              Ans. It calculates either the present value (PV) or future value
              (FV) of an annuity based on your inputs.
            </dd>

            <dt class="font-semibold mt-4">
              Q.2 Can I calculate both immediate and deferred annuities?
            </dt>
            <dd>
              Ans. Yes, just adjust the start period and payment timing
              accordingly.
            </dd>

            <dt class="font-semibold mt-4">
              Q.3 Does it account for inflation?
            </dt>
            <dd>
              Ans. No, this calculator shows nominal values. Inflation
              adjustments need separate calculation.
            </dd>

            <dt class="font-semibold mt-4">
              Q.4 Can I use it for retirement planning?
            </dt>
            <dd>
              Ans. Absolutely. It helps estimate how periodic contributions grow
              over time for retirement.
            </dd>

            <dt class="font-semibold mt-4">
              Q.5 How does the interest rate affect results?
            </dt>
            <dd>
              Ans. Higher interest rates increase the annuity’s value due to
              compounding.
            </dd>
          </dl>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            An <strong>Annuity Calculator</strong> is an essential tool for
            planning long-term investments or retirement income. It helps you
            understand how contributions, interest, and time interact to grow
            your money.
          </p>
          <p>
            By experimenting with different payment amounts, terms, and interest
            rates, you can choose the annuity strategy that best meets your
            financial goals and ensures a steady stream of income in the future.
          </p>
        </section>
      </article>
    </>
  );
};

export default AnnuityCalculator;
