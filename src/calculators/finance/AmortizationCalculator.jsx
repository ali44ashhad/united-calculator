import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const AmortizationCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("250000");
  const [annualInterestRate, setAnnualInterestRate] = useState("6.5");
  const [loanTermYears, setLoanTermYears] = useState("30");

  const calculateAmortization = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(annualInterestRate) / 100;
    const years = parseFloat(loanTermYears);

    if (isNaN(principal) || isNaN(annualRate) || isNaN(years)) return null;

    const monthlyRate = annualRate / 12;
    const numberOfPayments = years * 12;

    const monthlyPayment =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculateAmortization();

  return (
    <>
      <Helmet>
        <title>
          Calculate Your Loan Repayment Schedule Online using the Amortization
          Calculator | United Calculator
        </title>
        <meta
          name="description"
          content="Use our free amortization calculator to find out how long it will take to pay off your loan. Enter your loan amount, interest rate, and loan period to see detailed monthly amortization breakdowns."
        />
        <meta
          name="keywords"
          content="simple monthly amortization calculator, mortgage amortization calculator with extra payments, student loan amortization calculator, personal loan amortization calculator, heloc amortization calculator, amortization calculator, loan amortization, mortgage calculator, loan payment calculator, amortization schedule, principal and interest calculator, emi calculator, home loan calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/amortization-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Amortization Calculator - Calculate Loan Repayment Schedule Online"
        />
        <meta
          property="og:description"
          content="Get an accurate amortization schedule with our free online calculator. Understand your monthly payments and how much goes toward interest and principal."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/amortization-calculator"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Amortization Calculator - Loan Repayment Breakdown"
        />
        <meta
          name="twitter:description"
          content="Free Amortization Calculator to calculate monthly loan repayments. Get detailed breakdowns of principal and interest components."
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Amortization Calculator",
        "url": "https://www.unitedcalculator.net/finance/amortization-calculator",
        "description": "Free amortization calculator to generate a complete loan payment schedule. Find out how much interest and principal you'll pay over time.",
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
            "name": "What is an amortization calculator?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By providing a comprehensive amortization schedule, an amortization calculator assists you in figuring out how loan payments are distributed over time between principal and interest."
            }
          },
          {
            "@type": "Question",
            "name": "Why is amortization important?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Borrowers can better understand how payments lower the main balance and how much interest they will pay over time by understanding amortization."
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
            "name": "Amortization Calculator",
            "item": "https://www.unitedcalculator.net/finance/amortization-calculator"
          }
        ]
      }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Loan Amount ($)</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 250000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              value={annualInterestRate}
              onChange={(e) => setAnnualInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 6.5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Loan Term (Years)</label>
            <input
              type="number"
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 30"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Amortization Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly Payment:</span>
                <span className="text-blue-600 font-medium">
                  ${result.monthlyPayment}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Payment:</span>
                <span className="text-yellow-600 font-medium">
                  ${result.totalPayment}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Interest Paid:</span>
                <span className="text-red-600">${result.totalInterest}</span>
              </div>
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
        <p class="mb-6">
          Our <strong>Amortization Calculator</strong> is a smart tool which
          helps y users to break down their loan repayments into
          easy-to-understand monthly schedules for payout. Whether it’s a
          mortgage, car loan, or personal loan, our mortgage calculator always
          give exactly how much of each payment goes toward principal and how
          much goes toward interest.
        </p>

        <p class="mb-6">
          if you understand amortization then it can help you to plan your
          finances in better ways, save on interest, and it decide whether you
          are making extra payments is worth it. If you want to explore how
          additional payments you can reduce your loan term, you can try our{" "}
          <a
            href="https://www.unitedcalculator.net/finance/loan-payoff-calculator"
            target="_blank"
            class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
          >
            Loan Payoff Calculator
          </a>
          .
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            What is Loan Amortization?
          </h2>
          <p>
            Loan amortization is the process of paying off a debt in regular
            installments over a set period. Each payed installement covers your
            interest charges and reduces the principal amount which you owed. At
            the starting of your loan, interest makes up a larger portion of
            your payment, but over time, more of your payment goes toward the
            principal.
          </p>
          <p class="mt-2">
            This schedule gives you a clear and stat-forward view of your
            repayment journey and helps you to make early financial decisions.
            For mortgage-specific estimates, you can also use our{" "}
            <a
              href="https://www.unitedcalculator.net/finance/mortgage-calculator"
              target="_blank"
              class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
            >
              Mortgage Calculator
            </a>
            .
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Amortization Formula</h2>
          <p>The main standard formula of loan amortization is given below</p>
          <pre class="bg-gray-100 p-3 rounded-lg overflow-auto mb-3">
            <code>EMI = P × [ r(1 + r)ⁿ ] ÷ [ (1 + r)ⁿ – 1 ]</code>
          </pre>
          <ul class="list-disc ml-5 mb-3">
            <li>
              <code>P</code> — Loan amount (principal)
            </li>
            <li>
              <code>r</code> — Monthly interest rate (annual rate ÷ 12)
            </li>
            <li>
              <code>n</code> — Total number of monthly payments
            </li>
          </ul>
          <p>
            For example, if you take a $50,000 loan at 6% annual interest over 5
            years would have a monthly payment of about $966.64, as given with
            details in the calculator’s repayment table. if you want to compare
            different loan interest rates, try our{" "}
            <a
              href="https://www.unitedcalculator.net/finance/apr-calculator"
              target="_blank"
              class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
            >
              APR Calculator
            </a>
            .
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            How i can Use the Amortization Calculator
          </h2>
          <ol class="list-decimal ml-5 mb-3">
            <li>First you need to enter your loan amount (principal).</li>
            <li>After that enter the annual interest rate.</li>
            <li>Select the loan term (in years or months).</li>
            <li>
              Click <strong>Calculate</strong> to see how much your monthly
              payment will be pay and schdueled.
            </li>
          </ol>
          <ul class="list-disc ml-5">
            <li>Shows month-by-month breakdown</li>
            <li>Highlights total interest paid</li>
            <li>Reveals how extra payments save money</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Example Calculation</h2>
          <div class="bg-blue-50 p-4 rounded-lg space-y-2">
            <p>
              <strong>Example:</strong>Les`s suppose you take a loan of{" "}
              <strong>$20,000</strong> at an annual interest rate of{" "}
              <strong>5%</strong> for <strong>3 years</strong>.
            </p>
            <p>Step 1: Monthly interest rate will be → 5% ÷ 12 = 0.004167</p>
            <p>Step 2: Total number of payments from starting → 3 × 12 = 36</p>
            <p>Step 3: Apply formula → EMI ≈ $599.42</p>
            <p>
              Over the loan term, you’ll pay about <strong>$1,579.12</strong> in
              interest, and your balance will decrease with every payment.
            </p>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Benefits of Knowing Your Amortization Schedule
          </h2>
          <ul class="list-disc ml-5">
            <li>Plan your monthly budget with accuracy</li>
            <li>
              Understand how your interest affects your loan cost with time
              period
            </li>
            <li>Make planning about refinancing your loan amount</li>
            <li>
              You can save money by identifying the impact of extra payments if
              you understand properly
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Frequently Asked Questions (FAQs)
          </h2>
          <dl>
            <dt class="font-semibold mt-4">
              Q.1 What an amortization schedule show at calculation?
            </dt>
            <dd>
              Ans. It shows each monthly payment split between principal and
              interest, along with your remaining balance over time.
            </dd>

            <dt class="font-semibold mt-4">
              Q.2 Is there any option to reduce my total interest cost?
            </dt>
            <dd>
              Ans. Yes, you can reduce your total interest cost by making extra
              payments toward the principal or refinancing at a lower rate can
              be reduce your interest cost.
            </dd>

            <dt class="font-semibold mt-4">
              Q.3 Is amortization only used for fixed-rate loans?
            </dt>
            <dd>
              Ans. In most of the cases amortization schedules are for
              fixed-rate loans, variable-rate loans can also be amortized but
              require adjustments when rates change.
            </dd>

            <dt class="font-semibold mt-4">
              Q.4 Does the Amortization calculator include taxes and insurance?
            </dt>
            <dd>
              Ans. No, Amortization calculator focuses only on principal and
              interest only. For mortgage-related costs, you can check our{" "}
              <a
                href="https://www.unitedcalculator.net/finance/mortgage-calculator"
                target="_blank"
                class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
              >
                Mortgage Calculator
              </a>
              .
            </dd>

            <dt class="font-semibold mt-4">
              Q.5 Can I use this calculator for business loans?
            </dt>
            <dd>
              Ans. Absolutely, it works for any loan with regular monthly
              payments, including personal, business, and auto loans.
            </dd>
          </dl>
        </section>
      </article>
    </>
  );
};

export default AmortizationCalculator;
