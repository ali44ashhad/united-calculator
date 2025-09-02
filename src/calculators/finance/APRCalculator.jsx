import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const APRCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("10000");
  const [fees, setFees] = useState("500");
  const [interestRate, setInterestRate] = useState("5");
  const [termYears, setTermYears] = useState("2");

  const calculateAPR = () => {
    const principal = parseFloat(loanAmount);
    const totalFees = parseFloat(fees);
    const nominalRate = parseFloat(interestRate) / 100;
    const years = parseFloat(termYears);

    if (
      isNaN(principal) ||
      isNaN(totalFees) ||
      isNaN(nominalRate) ||
      isNaN(years)
    )
      return null;

    const totalLoan = principal + totalFees;
    const r = nominalRate;
    const n = years;

    // Approximate APR using the formula:
    // APR = 2 * n * interest / (totalLoan + principal)
    const interest = principal * r * n;
    const apr = ((2 * n * interest) / (principal + totalLoan)) * 100;

    return {
      apr: apr.toFixed(2),
      totalCost: (principal + interest + totalFees).toFixed(2),
    };
  };

  const result = calculateAPR();

  return (
    <>
      <Helmet>
        <title>
          APR Calculator - Calculate Annual Percentage Rate by United Calculator
        </title>
        <meta
          name="description"
          content="Use our APR Calculator to determine the annual percentage rate on your loans or credit. Understand true borrowing costs including interest and fees."
        />
        <meta
          name="keywords"
          content="apr calculator, annual percentage rate calculator, loan apr calculator, credit card apr calculator, apr calculator india, calculate apr, mortgage apr calculator, apr vs interest rate"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/apr-calculator"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="APR Calculator - Calculate Annual Percentage Rate | United Calculator"
        />
        <meta
          property="og:description"
          content="Easily calculate the true annual percentage rate (APR) on loans and credit cards. Includes interest, fees, and other costs to help you make informed decisions."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/apr-calculator"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="APR Calculator - Understand Real Loan Costs"
        />
        <meta
          name="twitter:description"
          content="Use our APR calculator to find out the true cost of borrowing. Perfect for comparing loans, mortgages, and credit card offers."
        />
        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "APR Calculator",
      "url": "https://www.unitedcalculator.net/finance/apr-calculator",
      "description": "This APR Calculator helps you determine the true cost of a loan or credit card by factoring in interest rates, fees, and repayment terms.",
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
          "name": "What is an APR calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An APR calculator helps you find the real annual cost of borrowing by including interest and additional fees, giving you a better comparison tool across loan offers."
          }
        },
        {
          "@type": "Question",
          "name": "Why is APR important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "APR gives a complete picture of how much a loan will cost annually. It’s useful for comparing credit products with different interest rates and fee structures."
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
          "name": "APR Calculator",
          "item": "https://www.unitedcalculator.net/finance/apr-calculator"
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
              placeholder="e.g. 10000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Fees ($)</label>
            <input
              type="number"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 500"
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

          <div>
            <label className="block mb-1 font-medium">Loan Term (Years)</label>
            <input
              type="number"
              value={termYears}
              onChange={(e) => setTermYears(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 2"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              APR Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Estimated APR:</span>
                <span className="text-blue-600 font-medium">{result.apr}%</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Cost of Loan:</span>
                <span className="text-red-600">${result.totalCost}</span>
              </div>
            </div>
          </section>
        )}
      </div>
     <article class="py-6">
  <p class="mb-6">
    Our <strong>APR Calculator</strong> helps you determine the annual percentage
    rate (APR) for loans and credit products. By entering the loan amount,
    interest rate, fees, and loan term, you’ll get a clear picture of the true
    cost of borrowing. This makes it easier to compare loans, credit cards, and
    other financial products.
  </p>

  <p class="mb-6">
    Whether you’re taking out a personal loan, mortgage, or credit card, this
    calculator provides accurate results to guide your financial decisions. You
    can also try our{" "}
    <a
      href="https://www.unitedcalculator.net/finance/loan-calculator"
      target="_blank"
      class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
    >
      Loan Calculator
    </a>{" "}
    to estimate monthly payments and total interest.
  </p>

  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-2">What is APR?</h2>
    <p>
      APR, or Annual Percentage Rate, represents the total cost of borrowing over
      a year, expressed as a percentage. It includes the nominal interest rate
      plus any fees or additional costs associated with the loan.
    </p>
    <p class="mt-2">Key terms related to APR:</p>
    <ul class="list-disc ml-5 mt-2">
      <li><strong>Nominal Interest Rate:</strong> The stated interest rate on the loan.</li>
      <li><strong>Fees:</strong> Any upfront charges or ongoing costs for the loan.</li>
      <li><strong>Loan Term:</strong> Duration over which the loan is repaid.</li>
      <li><strong>APR:</strong> True annualized cost of borrowing, combining interest and fees.</li>
    </ul>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-2">APR Formula</h2>
    <p>
      The APR can be calculated using the formula that accounts for loan fees and
      the interest rate:
    </p>
    <pre class="bg-gray-100 p-3 rounded-lg overflow-auto mb-3">
      <code>APR = [ (Total Interest + Fees) ÷ Loan Amount ÷ Number of Years ] × 100</code>
    </pre>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Total Interest:</strong> Interest paid over the loan term</li>
      <li><strong>Fees:</strong> Any additional charges for the loan</li>
      <li><strong>Loan Amount:</strong> Principal borrowed</li>
      <li><strong>Number of Years:</strong> Loan term in years</li>
    </ul>
    <p>
      This formula ensures you see the real cost of borrowing, helping you
      compare loans with different rates and fees accurately.
    </p>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-2">How to Use the APR Calculator</h2>
    <p>Follow these steps to calculate APR:</p>
    <ol class="list-decimal ml-5 mb-3">
      <li>Enter the loan amount (principal).</li>
      <li>Input the nominal interest rate.</li>
      <li>Include any fees associated with the loan.</li>
      <li>Enter the loan term in years.</li>
      <li>Click <strong>Calculate</strong> to get the APR.</li>
    </ol>
    <ul class="list-disc ml-5">
      <li>Shows the true cost of borrowing</li>
      <li>Helps compare loans with different fees and interest rates</li>
      <li>Provides clarity on the annualized interest rate</li>
      <li>Assists in making better financial decisions</li>
    </ul>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-2">Example Calculation</h2>
    <div class="bg-blue-50 p-4 rounded-lg space-y-2">
      <p>
        <strong>Example:</strong> You borrow <strong>$10,000</strong> for 3 years
        with a nominal interest rate of <strong>6%</strong> and fees of
        <strong>$300</strong>:
      </p>
      <p>Step 1: Total interest = 10,000 × 6% × 3 = $1,800</p>
      <p>Step 2: Total cost including fees = 1,800 + 300 = $2,100</p>
      <p>Step 3: APR = (2,100 ÷ 10,000 ÷ 3) × 100 ≈ <strong>7%</strong></p>
      <p>
        This shows the true annual cost of borrowing, including fees, is 7%.
      </p>
    </div>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-2">Factors That Affect APR</h2>
    <ul class="list-disc ml-5">
      <li><strong>Interest Rate:</strong> Higher nominal rates increase APR.</li>
      <li><strong>Fees:</strong> Upfront or recurring fees raise the effective APR.</li>
      <li><strong>Loan Term:</strong> Shorter terms may increase or decrease APR depending on payment structure.</li>
      <li><strong>Payment Frequency:</strong> Monthly vs. yearly repayments can slightly affect APR.</li>
      <li><strong>Type of Loan:</strong> Secured vs. unsecured loans may have different APRs.</li>
    </ul>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-2">Benefits of Using the APR Calculator</h2>
    <ul class="list-disc ml-5">
      <li>Understand the true cost of borrowing</li>
      <li>Compare different loans effectively</li>
      <li>Account for both interest and fees</li>
      <li>Make smarter financial decisions</li>
      <li>Plan repayment strategies based on the effective annual rate</li>
    </ul>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
    <dl>
      <dt class="font-semibold mt-4">Q.1 What does the APR Calculator show?</dt>
      <dd>Ans. It calculates the annual percentage rate including interest and fees, showing the true cost of borrowing.</dd>

      <dt class="font-semibold mt-4">Q.2 How is APR different from interest rate?</dt>
      <dd>Ans. Interest rate only shows the nominal rate, while APR includes fees and provides the annualized cost.</dd>

      <dt class="font-semibold mt-4">Q.3 Can I use APR to compare loans?</dt>
      <dd>Ans. Yes, APR allows you to compare loans with different fees and terms accurately.</dd>

      <dt class="font-semibold mt-4">Q.4 Does APR account for compounding?</dt>
      <dd>Ans. Yes, APR calculations often include the effect of interest compounding if applicable.</dd>

      <dt class="font-semibold mt-4">Q.5 Is APR applicable to credit cards?</dt>
      <dd>Ans. Yes, credit card APRs indicate the effective annual interest rate including fees.</dd>
    </dl>
  </section>

  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-2">Conclusion</h2>
    <p>
      An <strong>APR Calculator</strong> is an essential tool for borrowers who
      want to understand the true cost of loans and credit products. By
      considering both interest and fees, it provides a clear picture of annual
      borrowing costs.
    </p>
    <p>
      Using this calculator allows you to compare loans accurately, choose the
      most cost-effective option, and plan your finances better. Whether for a
      personal loan, mortgage, or credit card, understanding APR ensures smarter
      financial decisions.
    </p>
  </section>
</article>

    </>
  );
};

export default APRCalculator;
