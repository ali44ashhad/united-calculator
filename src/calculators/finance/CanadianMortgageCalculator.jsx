import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const CanadianMortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState("500000");
  const [downPayment, setDownPayment] = useState("100000");
  const [loanTerm, setLoanTerm] = useState("25");
  const [interestRate, setInterestRate] = useState("5");

  const calculateMortgage = () => {
    const price = parseFloat(homePrice);
    const down = parseFloat(downPayment);
    const termYears = parseFloat(loanTerm);
    const rate = parseFloat(interestRate) / 100 / 12;

    const loanAmount = price - down;
    const totalMonths = termYears * 12;

    if (
      isNaN(price) ||
      isNaN(down) ||
      isNaN(termYears) ||
      isNaN(rate) ||
      totalMonths <= 0
    )
      return null;

    const EMI =
      (loanAmount * rate * Math.pow(1 + rate, totalMonths)) /
      (Math.pow(1 + rate, totalMonths) - 1);

    const totalPayment = EMI * totalMonths;
    const totalInterest = totalPayment - loanAmount;

    return {
      emi: EMI.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      loanAmount: loanAmount.toFixed(2),
    };
  };

  const result = calculateMortgage();

  return (
    <>
      <Helmet>
        <title>Canadian Mortgage Calculator | calculate your mortgage</title>
        <meta
          name="description"
          content="Use our Canadian Mortgage Calculator to estimate your monthly mortgage payments, interest cost, and amortization schedule. Ideal for home buyers in Canada."
        />
        <meta
          name="keywords"
          content="canadian mortgage calculator, mortgage calculator canada, home loan calculator canada, canada mortgage payments, mortgage amortization calculator, mortgage interest calculator canada"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/canadian-mortgage-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Canadian Mortgage Calculator" />
        <meta
          property="og:description"
          content="Calculate your Canadian mortgage payments with ease using our Mortgage Calculator. Get detailed insights on principal, interest, and amortization."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/canadian-mortgage-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Canadian Mortgage Calculator",
      "url": "https://www.unitedcalculator.net/finance/canadian-mortgage-calculator",
      "description": "Use our Canadian Mortgage Calculator to calculate monthly home loan payments, interest breakdown, and amortization schedule. Designed specifically for Canadian home buyers.",
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
          "name": "What is a Canadian mortgage calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Canadian mortgage calculator estimates monthly payments, interest costs, and amortization schedule based on Canadian mortgage terms and rates."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a Canadian mortgage calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a Canadian mortgage calculator helps home buyers in Canada plan their finances, understand mortgage costs, and compare loan options before purchasing a home."
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
          "name": "Canadian Mortgage Calculator",
          "item": "https://www.unitedcalculator.net/finance/canadian-mortgage-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Home Price (CAD)</label>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 500000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Down Payment (CAD)</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 100000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Loan Term (Years)</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 25"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Interest Rate (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Canadian Mortgage Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Loan Amount:</span>
                <span className="text-blue-600 font-medium">
                  ${result.loanAmount}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly Payment (EMI):</span>
                <span className="text-green-600 font-medium">
                  ${result.emi}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Interest:</span>
                <span className="text-red-500 font-medium">
                  ${result.totalInterest}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Payment:</span>
                <span className="text-yellow-600">${result.totalPayment}</span>
              </div>
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
        <p class="mb-6">
          Our <strong>Canadian Mortgage Calculator</strong> helps you estimate
          your monthly mortgage payments, total interest, and overall loan costs
          based on Canadian lending rules. By entering your home price, down
          payment, interest rate, and amortization period, the calculator gives
          you a clear breakdown of what to expect as a homeowner in Canada. This
          tool is especially useful for first-time buyers and property investors
          looking to budget accurately before making one of the biggest
          financial commitments of their lives.
        </p>

        <p class="mb-6">
          Whether you’re buying a new home or refinancing an existing mortgage,
          this calculator makes it easy to compare scenarios and make better
          financial decisions. If you’d also like to explore how your loan
          payments are spread across principal and interest, try our{" "}
          <a
            href="https://www.unitedcalculator.net/finance/amortization-calculator"
            target="_blank"
            class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
          >
            Amortization Calculator
          </a>
          .
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            What is a Canadian Mortgage?
          </h2>
          <p>
            A mortgage in Canada is a type of loan that allows you to purchase a
            home by borrowing money from a bank or lender. You repay the loan in
            fixed installments over a set number of years, known as the
            amortization period. Your payment is typically divided into two
            parts:
          </p>
          <ul class="list-disc ml-5 mt-2">
            <li>
              <strong>Principal:</strong> The amount borrowed to purchase the
              home.
            </li>
            <li>
              <strong>Interest:</strong> The cost of borrowing money, charged by
              the lender.
            </li>
          </ul>
          <p class="mt-2">
            In Canada, buyers are required to make a minimum down payment of
            <strong>5%</strong> on homes priced up to $500,000. For homes above
            $1,000,000, at least 20% is required. If your down payment is less
            than 20%, you must purchase{" "}
            <strong>mortgage default insurance</strong> from CMHC (Canada
            Mortgage and Housing Corporation) or other insurers.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Mortgage Payment Formula</h2>
          <p>
            The Canadian mortgage payment calculation is based on the following
            formula:
          </p>
          <p class="mt-2 font-mono bg-gray-100 p-2 rounded">
            M = P × [ i(1 + i)<sup>n</sup> ] / [ (1 + i)<sup>n</sup> – 1 ]
          </p>
          <ul class="list-disc ml-5 mt-2">
            <li>
              <strong>M</strong> = Monthly mortgage payment
            </li>
            <li>
              <strong>P</strong> = Loan amount (home price – down payment)
            </li>
            <li>
              <strong>i</strong> = Monthly interest rate (annual ÷ 12)
            </li>
            <li>
              <strong>n</strong> = Total number of payments (years × 12)
            </li>
          </ul>
          <p class="mt-2">
            This formula ensures accurate results, factoring in interest
            compounding and amortization, so you know exactly how much you’ll
            owe monthly.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            How to Use the Canadian Mortgage Calculator
          </h2>
          <p>Follow these simple steps:</p>
          <ol class="list-decimal ml-5 mb-3">
            <li>Enter the total home price you want to purchase.</li>
            <li>Add your planned down payment amount.</li>
            <li>Choose the interest rate offered by your lender.</li>
            <li>
              Select the amortization period (usually 15, 20, or 25 years).
            </li>
            <li>
              Click <strong>Calculate</strong> to view monthly payments,
              interest paid, and total loan cost.
            </li>
          </ol>
          <ul class="list-disc ml-5">
            <li>Shows monthly mortgage payments instantly</li>
            <li>Provides breakdown of principal vs. interest</li>
            <li>Helps compare different loan terms</li>
            <li>Assists in budgeting before applying for a mortgage</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Example Calculation</h2>
          <div class="bg-blue-50 p-4 rounded-lg space-y-2">
            <p>
              <strong>Example:</strong> Suppose you want to buy a home worth
              <strong> $500,000</strong> with a{" "}
              <strong>10% down payment</strong>
              ($50,000).
            </p>
            <ul class="list-disc ml-5">
              <li>Loan Amount = $450,000</li>
              <li>Interest Rate = 5% annually (0.416% monthly)</li>
              <li>Amortization = 25 years (300 payments)</li>
            </ul>
            <p>
              Monthly Payment ≈ <strong>$2,620</strong>
            </p>
            <p>
              Over the 25 years, total payments will equal about
              <strong>$786,000</strong>, including nearly
              <strong>$336,000</strong> in interest.
            </p>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Benefits of Using the Calculator
          </h2>
          <ul class="list-disc ml-5">
            <li>Provides realistic monthly payment estimates</li>
            <li>Helps evaluate affordability before purchasing</li>
            <li>Assists in comparing mortgage terms and rates</li>
            <li>Encourages better financial planning and savings</li>
            <li>
              Prepares you for hidden costs like property tax and insurance
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Frequently Asked Questions (FAQs)
          </h2>
          <dl>
            <dt class="font-semibold mt-4">
              Q.1 What does the Canadian Mortgage Calculator show?
            </dt>
            <dd>
              Ans. It shows your estimated monthly mortgage payments, total
              interest, and total cost of the loan.
            </dd>

            <dt class="font-semibold mt-4">
              Q.2 Does this include property taxes and insurance?
            </dt>
            <dd>
              Ans. No, the calculator focuses on mortgage payments only. You
              should budget separately for taxes and insurance.
            </dd>

            <dt class="font-semibold mt-4">
              Q.3 Can I use this for refinancing?
            </dt>
            <dd>
              Ans. Yes, simply enter your current balance, interest rate, and
              remaining term.
            </dd>

            <dt class="font-semibold mt-4">
              Q.4 What is the maximum amortization period in Canada?
            </dt>
            <dd>
              Ans. For insured mortgages, the maximum is 25 years. Uninsured
              mortgages may go up to 30 years.
            </dd>

            <dt class="font-semibold mt-4">
              Q.5 How does a larger down payment affect my mortgage?
            </dt>
            <dd>
              Ans. A larger down payment reduces the loan amount, lowers monthly
              payments, and may help you avoid mortgage insurance.
            </dd>
          </dl>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            A <strong>Canadian Mortgage Calculator</strong> is a powerful tool
            for homebuyers and investors. By estimating monthly payments and
            long-term costs, it allows you to plan realistically, avoid
            financial surprises, and make smarter borrowing decisions.
          </p>
          <p>
            With consistent planning, you’ll not only secure the right mortgage
            but also work toward long-term financial stability. For more
            insights into loan planning, you may also find our{" "}
            <a
              href="https://www.unitedcalculator.net/finance/house-affordability-calculator"
              target="_blank"
              class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
            >
              House Affordability Calculator
            </a>{" "}
            helpful.
          </p>
        </section>
      </article>
    </>
  );
};

export default CanadianMortgageCalculator;
