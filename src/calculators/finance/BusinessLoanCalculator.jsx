import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const BusinessLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("500000");
  const [interestRate, setInterestRate] = useState("10");
  const [loanTerm, setLoanTerm] = useState("5");

  const calculateLoan = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n)) return null;

    const EMI = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = EMI * n;
    const totalInterest = totalPayment - P;

    return {
      emi: EMI.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculateLoan();

  return (
    <>
      <Helmet>
        <title>Business Loan Calculator</title>
        <meta
          name="description"
          content="Use our Business Loan Calculator to estimate monthly payments, interest costs, and total repayment amount for your business loan. Ideal for small and large business financing."
        />
        <meta
          name="keywords"
          content="business loan calculator, commercial loan calculator, small business loan calculator, business financing calculator, loan repayment calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/business-loan-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Business Loan Calculator" />
        <meta
          property="og:description"
          content="Calculate your business loan repayments, interest, and total cost using our Business Loan Calculator. Ideal for startups and growing businesses."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/business-loan-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Business Loan Calculator",
      "url": "https://www.unitedcalculator.net/finance/business-loan-calculator",
      "description": "Use our Business Loan Calculator to estimate EMIs, interest charges, and total repayment amount. Perfect for planning business financing.",
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
          "name": "What is a business loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A business loan calculator helps you estimate the monthly EMI, total interest, and repayment amount based on loan amount, term, and interest rate."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a business loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a business loan calculator allows you to plan your loan repayment strategy effectively and compare multiple loan offers for the best fit."
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
          "name": "Business Loan Calculator",
          "item": "https://www.unitedcalculator.net/finance/business-loan-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Loan Amount (₹)</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 500000"
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
              placeholder="e.g. 10"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Loan Term (in Years)
            </label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Business Loan Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly EMI:</span>
                <span className="text-blue-600 font-medium">₹{result.emi}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Payment:</span>
                <span className="text-yellow-600 font-medium">
                  ₹{result.totalPayment}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Interest:</span>
                <span className="text-red-600">₹{result.totalInterest}</span>
              </div>
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
        <p class="mb-6">
          Our <strong>Business Loan Calculator</strong> is a powerful tool
          designed to help entrepreneurs, startups, and established companies
          estimate their loan repayments, interest costs, and overall borrowing
          impact. Whether you’re planning to expand your operations, purchase
          equipment, hire new employees, or simply maintain working capital,
          this calculator provides you with a clear financial outlook before
          applying for a loan.
        </p>

        <h2 class="text-xl font-semibold mb-4">
          What is a Business Loan Calculator?
        </h2>
        <p class="mb-6">
          A Business Loan Calculator is a financial planning tool that allows
          you to calculate your monthly installment (EMI), total repayment
          amount, and total interest payable over the life of your business
          loan. By entering details such as loan amount, interest rate, and loan
          tenure, you can get an accurate breakdown of your repayment schedule.{" "}
          <a
            href="https://www.unitedcalculator.net/finance/amortization-calculator"
            class="text-blue-600 underline hover:text-blue-800"
          >
            Amortization calculators
          </a>{" "}
          work in a similar way, providing detailed repayment schedules for
          different types of loans.
        </p>

        <h2 class="text-xl font-semibold mb-4">
          Key Benefits of Using a Business Loan Calculator
        </h2>
        <ul class="list-disc list-inside mb-6">
          <li>Helps you determine affordability before applying.</li>
          <li>Provides clarity on repayment obligations.</li>
          <li>Helps compare multiple loan offers from banks and NBFCs.</li>
          <li>Assists in financial planning and cash flow management.</li>
          <li>
            Prevents over-borrowing by showing the long-term impact of interest.
          </li>
        </ul>

        <h2 class="text-xl font-semibold mb-4">
          How to Use the Business Loan Calculator
        </h2>
        <p class="mb-6">
          Using our calculator is simple. Enter the following details:
        </p>
        <ol class="list-decimal list-inside mb-6">
          <li>
            <strong>Loan Amount</strong> – The total amount you wish to borrow.
          </li>
          <li>
            <strong>Interest Rate</strong> – The annual interest rate offered by
            the lender.
          </li>
          <li>
            <strong>Loan Tenure</strong> – The repayment duration in months or
            years.
          </li>
        </ol>
        <p class="mb-6">
          Once you enter these details, the calculator instantly generates your
          monthly repayment amount, total interest cost, and total repayment
          value. For more detailed breakdowns, you may also check our{" "}
          <a
            href="https://www.unitedcalculator.net/finance/loan-calculator"
            class="text-blue-600 underline hover:text-blue-800"
          >
            Loan Calculator
          </a>{" "}
          for personal and auto loans.
        </p>

        <h2 class="text-xl font-semibold mb-4">Business Loan Formula</h2>
        <p class="mb-6">
          The Business Loan Calculator uses the standard EMI formula:
        </p>
        <pre class="bg-gray-100 p-4 rounded mb-6">
          EMI = [P × R × (1+R)^N] ÷ [(1+R)^N – 1]
        </pre>
        <p class="mb-6">
          Where:
          <strong>P</strong> = Loan Amount
          <strong>R</strong> = Monthly Interest Rate (Annual Rate ÷ 12 ÷ 100)
          <strong>N</strong> = Number of Months in Loan Tenure
        </p>

        <h2 class="text-xl font-semibold mb-4">
          Example of Business Loan Calculation
        </h2>
        <p class="mb-6">
          Suppose you borrow <strong>$100,000</strong> for your business at an
          interest rate of 10% annually for 5 years (60 months). The calculator
          will show:
        </p>
        <ul class="list-disc list-inside mb-6">
          <li>Monthly EMI: $2,124 approx.</li>
          <li>Total Interest Payable: $27,440 approx.</li>
          <li>Total Repayment Amount: $127,440 approx.</li>
        </ul>
        <p class="mb-6">
          This helps you understand the real cost of borrowing and plan
          accordingly. For more repayment structures, check out our{" "}
          <a
            href="https://www.unitedcalculator.net/finance/mortgage-calculator"
            class="text-blue-600 underline hover:text-blue-800"
          >
            Mortgage Calculator
          </a>{" "}
          , which is especially useful for long-term financing.
        </p>

        <h2 class="text-xl font-semibold mb-4">
          Factors Affecting Business Loan Repayments
        </h2>
        <p class="mb-6">
          Several factors can influence your EMI and overall loan cost:
        </p>
        <ul class="list-disc list-inside mb-6">
          <li>
            <strong>Loan Amount</strong> – Higher loans mean higher EMIs.
          </li>
          <li>
            <strong>Interest Rate</strong> – Even a small rate change
            significantly affects repayment.
          </li>
          <li>
            <strong>Loan Tenure</strong> – Longer tenures lower EMIs but
            increase total interest cost.
          </li>
          <li>
            <strong>Prepayment & Foreclosure</strong> – Some lenders allow early
            repayment with or without penalty.
          </li>
          <li>
            <strong>Creditworthiness</strong> – Your credit score can impact the
            rate offered by the bank.
          </li>
        </ul>

        <h2 class="text-xl font-semibold mb-4">Why Use a Business Loan?</h2>
        <p class="mb-6">
          Business loans are essential for growth and sustainability. Companies
          use them for:
        </p>
        <ul class="list-disc list-inside mb-6">
          <li>Working capital requirements</li>
          <li>Business expansion</li>
          <li>Purchasing inventory and equipment</li>
          <li>Marketing and promotions</li>
          <li>Hiring and training employees</li>
          <li>Clearing high-interest debts</li>
        </ul>

        <h2 class="text-xl font-semibold mb-4">
          Business Loan vs Personal Loan for Business
        </h2>
        <p class="mb-6">
          While some entrepreneurs consider using personal loans for business
          expenses, business loans are specifically structured for companies and
          usually come with better terms. Personal loans may have higher
          interest rates and lower maximum borrowing limits. To compare
          different types of borrowing, check our{" "}
          <a
            href="https://www.unitedcalculator.net/finance/personal-loan-calculator"
            class="text-blue-600 underline hover:text-blue-800"
          >
            Personal Loan Calculator
          </a>
          .
        </p>

        <h2 class="text-xl font-semibold mb-4">
          Tips to Get the Best Business Loan Deal
        </h2>
        <ul class="list-disc list-inside mb-6">
          <li>Maintain a strong credit score.</li>
          <li>Compare offers from multiple banks and NBFCs.</li>
          <li>Choose the right tenure based on repayment capacity.</li>
          <li>Check for hidden fees like processing charges and penalties.</li>
          <li>
            Use a{" "}
            <a
              href="https://www.unitedcalculator.net/finance/apr-calculator"
              class="text-blue-600 underline hover:text-blue-800"
            >
              APR Calculator
            </a>{" "}
            to understand the true cost of the loan.
          </li>
        </ul>

        <h2 class="text-xl font-semibold mb-4">Conclusion</h2>
        <p class="mb-6">
          A <strong>Business Loan Calculator</strong> is an essential tool for
          any entrepreneur or business owner planning to take a loan. It helps
          you evaluate different loan scenarios, manage cash flow effectively,
          and avoid financial stress. By knowing your EMIs and total repayment
          obligations in advance, you can make smarter borrowing decisions and
          focus on growing your business with confidence.
        </p>
      </article>
    </>
  );
};

export default BusinessLoanCalculator;
