import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const CDCalculator = () => {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("5");
  const [term, setTerm] = useState("3");
  const [compoundingsPerYear, setCompoundingsPerYear] = useState("4"); // Quarterly

  const calculateCD = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(term);
    const n = parseFloat(compoundingsPerYear);

    if (isNaN(P) || isNaN(r) || isNaN(t) || isNaN(n) || n === 0) return null;

    const A = P * Math.pow(1 + r / n, n * t);
    const interest = A - P;

    return {
      maturityAmount: A.toFixed(2),
      interestEarned: interest.toFixed(2),
    };
  };

  const result = calculateCD();

  return (
    <>
      <Helmet>
        <title>CD Calculator - calculate your certificate deposite</title>
        <meta
          name="description"
          content="Use our CD Calculator to estimate the maturity value of your Certificate of Deposit. Calculate interest earned over time based on deposit amount, term, and rate."
        />
        <meta
          name="keywords"
          content="cd calculator, certificate of deposit calculator, calculate cd interest, cd maturity calculator, fixed deposit calculator, cd investment calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/cd-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CD Calculator" />
        <meta
          property="og:description"
          content="Calculate your Certificate of Deposit interest earnings with our CD Calculator. Plan your fixed-term savings efficiently with accurate projections."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/cd-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "CD Calculator",
      "url": "https://www.unitedcalculator.net/finance/cd-calculator",
      "description": "Use our CD Calculator to calculate the final value of your Certificate of Deposit including earned interest. Great for fixed-term investment planning.",
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
          "name": "What is a CD calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A CD calculator estimates the maturity value and interest earned from a Certificate of Deposit based on deposit amount, interest rate, and term."
          }
        },
        {
          "@type": "Question",
          "name": "Why use a Certificate of Deposit calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A CD calculator helps you forecast the growth of your fixed-term deposit, allowing you to make informed investment decisions."
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
          "name": "CD Calculator",
          "item": "https://www.unitedcalculator.net/finance/cd-calculator"
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
              placeholder="e.g. 5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Term (Years)</label>
            <input
              type="number"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 3"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Compoundings Per Year
            </label>
            <input
              type="number"
              value={compoundingsPerYear}
              onChange={(e) => setCompoundingsPerYear(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 4 for quarterly"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              CD Maturity Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Interest Earned:</span>
                <span className="text-blue-600 font-medium">
                  ${result.interestEarned}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Maturity Amount:</span>
                <span className="text-green-600">${result.maturityAmount}</span>
              </div>
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
        <p class="mb-6">
          Our <strong>CD Calculator</strong> helps you estimate the future value
          of your Certificate of Deposit by calculating the interest earned over
          a set period of time. By entering your deposit amount, interest rate,
          term length, and compounding frequency, you’ll get a clear picture of
          how much your savings will grow. This tool makes it easier to plan for
          short-term and long-term financial goals with guaranteed returns.
        </p>

        <p class="mb-6">
          Whether you’re saving for an emergency fund, a vacation, or a large
          purchase, this calculator provides accurate projections to show how
          your money will accumulate. If you’d like to explore more ways to grow
          your savings, try our{" "}
          <a
            href="https://www.unitedcalculator.net/finance/compound-interest-calculator"
            target="_blank"
            class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
          >
            Compound Interest Calculator
          </a>
          .
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            What is a Certificate of Deposit (CD)?
          </h2>
          <p>
            A Certificate of Deposit (CD) is a type of savings account that
            locks in your money for a fixed period of time, usually ranging from
            a few months to several years. In return, banks or credit unions pay
            a fixed interest rate, often higher than standard savings accounts.
            CDs are considered low-risk investments because they are typically
            insured by the FDIC (banks) or NCUA (credit unions).
          </p>
          <p class="mt-2">Key features of a CD include:</p>
          <ul class="list-disc ml-5 mt-2">
            <li>
              <strong>Fixed Interest Rate:</strong> Guaranteed return for the
              duration of the term.
            </li>
            <li>
              <strong>Term Length:</strong> Can range from 3 months to 10 years.
            </li>
            <li>
              <strong>Compounding:</strong> Daily, monthly, quarterly, or
              annually depending on the institution.
            </li>
            <li>
              <strong>Early Withdrawal Penalty:</strong> Taking out money before
              maturity usually incurs a fee.
            </li>
            <li>
              <strong>Safe Investment:</strong> Ideal for risk-averse savers.
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">CD Growth Formula</h2>
          <p>
            The future value of a CD is calculated using the compound interest
            formula:
          </p>
          <p class="mt-2 text-gray-700 italic">
            A = P (1 + r/n)<sup>nt</sup>
          </p>
          <ul class="list-disc ml-5 mt-2">
            <li>
              <strong>A:</strong> Final amount after interest
            </li>
            <li>
              <strong>P:</strong> Initial principal (deposit)
            </li>
            <li>
              <strong>r:</strong> Annual interest rate (decimal form)
            </li>
            <li>
              <strong>n:</strong> Number of compounding periods per year
            </li>
            <li>
              <strong>t:</strong> Time in years
            </li>
          </ul>
          <p class="mt-2">
            This formula ensures you can calculate exactly how much your CD will
            be worth at maturity.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            How to Use the CD Calculator
          </h2>
          <p>
            Using the CD Calculator is straightforward. Just follow these steps:
          </p>
          <ol class="list-decimal ml-5 mb-3">
            <li>Enter your deposit amount (the initial principal).</li>
            <li>Input the annual interest rate offered by the bank.</li>
            <li>Select the term length (in months or years).</li>
            <li>
              Choose the compounding frequency (daily, monthly, quarterly,
              annually).
            </li>
            <li>
              Click <strong>Calculate</strong> to view your total maturity
              amount and interest earned.
            </li>
          </ol>
          <ul class="list-disc ml-5">
            <li>Provides accurate maturity value of your CD</li>
            <li>Highlights the effect of different compounding frequencies</li>
            <li>Shows how interest rates and terms affect returns</li>
            <li>Helps in comparing CD options before investing</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Example Calculation</h2>
          <div class="bg-blue-50 p-4 rounded-lg space-y-2">
            <p>
              <strong>Example:</strong> Suppose you invest{" "}
              <strong>$10,000</strong> in a 3-year CD with an annual interest
              rate of <strong>4%</strong>, compounded monthly.
            </p>
            <p>
              Using the formula, your CD would grow to approximately{" "}
              <strong>$11,265</strong> at maturity. That means you earned{" "}
              <strong>$1,265</strong> in interest over three years.
            </p>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Benefits of Using the CD Calculator
          </h2>
          <ul class="list-disc ml-5">
            <li>Shows guaranteed returns with zero market risk</li>
            <li>Helps compare CDs of different banks and terms</li>
            <li>Demonstrates the power of compounding</li>
            <li>Encourages disciplined savings with fixed maturity</li>
            <li>Assists in planning for short-term and long-term goals</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Frequently Asked Questions (FAQs)
          </h2>
          <dl>
            <dt class="font-semibold mt-4">
              Q.1 What does the CD Calculator show?
            </dt>
            <dd>
              Ans. It shows the maturity value of your CD based on deposit
              amount, interest rate, term, and compounding frequency.
            </dd>

            <dt class="font-semibold mt-4">Q.2 Is a CD risk-free?</dt>
            <dd>
              Ans. Yes, CDs are generally insured by FDIC or NCUA, making them
              very safe investments.
            </dd>

            <dt class="font-semibold mt-4">
              Q.3 Can I withdraw my money before the CD matures?
            </dt>
            <dd>
              Ans. Yes, but you’ll usually pay an early withdrawal penalty,
              which reduces your earnings.
            </dd>

            <dt class="font-semibold mt-4">
              Q.4 How does compounding affect my CD growth?
            </dt>
            <dd>
              Ans. More frequent compounding (e.g., daily or monthly) results in
              higher returns compared to annual compounding.
            </dd>

            <dt class="font-semibold mt-4">
              Q.5 Should I invest in a CD or other savings options?
            </dt>
            <dd>
              Ans. CDs are great for conservative savers. If you want higher
              returns and are comfortable with risk, you may consider other
              options like investments or use our{" "}
              <a
                href="https://www.unitedcalculator.net/finance/investment-calculator"
                target="_blank"
                class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
              >
                Investment Calculator
              </a>
              .
            </dd>
          </dl>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            A <strong>CD Calculator</strong> is an excellent tool for anyone who
            wants to maximize savings with guaranteed interest. By understanding
            the impact of interest rates, terms, and compounding, you can make
            smarter decisions about where to place your money.
          </p>
          <p>
            With consistent use, this calculator will help you compare CD
            options, avoid surprises, and achieve financial stability through
            safe, predictable growth.
          </p>
        </section>
      </article>
    </>
  );
};

export default CDCalculator;
