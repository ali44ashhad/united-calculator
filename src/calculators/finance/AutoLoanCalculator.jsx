import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const AutoLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("20000");
  const [interestRate, setInterestRate] = useState("6");
  const [loanTerm, setLoanTerm] = useState("5");

  const calculateAutoLoan = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n) || n === 0) return null;

    const monthlyPayment = (P * r) / (1 - Math.pow(1 + r, -n));
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - P;

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculateAutoLoan();

  return (
    <>
      <Helmet>
        <title>
          Auto Loan Calculator - Estimate Your Car Loan EMI and Interest
        </title>
        <meta
          name="description"
          content="Use our Auto Loan Calculator to calculate your monthly EMI, total interest, and overall loan cost for buying a car. Enter loan amount, interest rate, and tenure to plan effectively."
        />
        <meta
          name="keywords"
          content="auto loan calculator, car loan calculator, car emi calculator, vehicle loan calculator, car loan emi calculator, auto finance calculator, car loan interest calculator, car loan calculator india"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/auto-loan-calculator"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Auto Loan Calculator - Estimate Your Car Loan EMI and Interest"
        />
        <meta
          property="og:description"
          content="Calculate your monthly auto loan EMI, interest, and total repayment using our car loan calculator. Ideal for car buyers planning finance."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/auto-loan-calculator"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Auto Loan Calculator - Car Loan EMI Estimator"
        />
        <meta
          name="twitter:description"
          content="Use this auto loan calculator to plan your car purchase. Quickly find out EMI, interest, and total cost based on your loan inputs."
        />
        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Auto Loan Calculator",
      "url": "https://www.unitedcalculator.net/finance/auto-loan-calculator",
      "description": "Auto Loan Calculator to help you determine car loan EMI, interest paid, and total repayment. Perfect tool for budgeting your next vehicle purchase.",
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
          "name": "What is an auto loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An auto loan calculator helps you estimate your monthly EMI and total interest payable based on loan amount, interest rate, and loan tenure."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is an auto loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It provides close estimates based on your input values, helping you make informed decisions when taking a car loan."
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
          "name": "Auto Loan Calculator",
          "item": "https://www.unitedcalculator.net/finance/auto-loan-calculator"
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
              placeholder="e.g. 20000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Interest Rate (Annual %)
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
            <label className="block mb-1 font-medium">Loan Term (Years)</label>
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
              Auto Loan Summary
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
                <span className="text-green-600 font-medium">
                  ${result.totalPayment}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Interest:</span>
                <span className="text-red-600">${result.totalInterest}</span>
              </div>
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
        <p class="mb-6">
          Our <strong>Auto Loan Calculator</strong> helps you estimate your
          monthly car loan payments, total interest, and overall loan cost. By
          entering your loan amount, interest rate, and loan term, you’ll get a
          clear breakdown of how much you’ll pay each month and how much will go
          toward interest vs principal. This makes it easier to budget your car
          purchase and avoid surprises later.
        </p>

        <p class="mb-6">
          Whether you’re financing a new or used car, this calculator gives you
          accurate results to plan your budget effectively. It works for both
          bank loans and dealership financing, and it allows you to compare
          different repayment terms before committing. If you want to explore
          leasing options instead, try our{" "}
          <a
            href="https://www.unitedcalculator.net/finance/auto-lease-calculator"
            target="_blank"
            class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
          >
            Auto Lease Calculator
          </a>
          .
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">What is an Auto Loan?</h2>
          <p>
            An auto loan is a financing method that allows you to borrow money
            to buy a car and repay it over time in fixed monthly installments.
            Each monthly payment includes two parts: the{" "}
            <strong>principal</strong>, which goes toward repaying the original
            loan amount, and the <strong>interest</strong>, which is the
            lender’s charge for borrowing the money. At the end of the loan
            term, once all payments are made, you fully own the car.
          </p>
          <p class="mt-2">
            Auto loans are among the most common types of consumer debt, and
            they usually range from 24 months (2 years) up to 84 months (7
            years). The loan terms, interest rates, and total repayment amounts
            can vary widely based on your credit score, down payment, and the
            type of vehicle you’re purchasing.
          </p>
          <p class="mt-2">Key terms in an auto loan:</p>
          <ul class="list-disc ml-5 mt-2">
            <li>
              <strong>Principal</strong> — The amount borrowed to purchase the
              car after subtracting your down payment and trade-in value.
            </li>
            <li>
              <strong>Interest Rate</strong> — The annual percentage charged by
              the lender for borrowing the money.
            </li>
            <li>
              <strong>Loan Term</strong> — The length of time you have to repay
              the loan, typically expressed in months.
            </li>
            <li>
              <strong>Monthly Payment</strong> — The fixed amount you pay every
              month, consisting of principal and interest.
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Auto Loan Formula</h2>
          <p>
            The monthly payment for an auto loan is calculated using the
            standard amortization formula, often called the{" "}
            <strong>EMI (Equated Monthly Installment)</strong> formula:
          </p>
          <pre class="bg-gray-100 p-3 rounded-lg overflow-auto mb-3">
            <code>EMI = P × [ r(1 + r)ⁿ ] ÷ [ (1 + r)ⁿ – 1 ]</code>
          </pre>
          <ul class="list-disc ml-5 mb-3">
            <li>
              <strong>P</strong> — Loan amount (principal)
            </li>
            <li>
              <strong>r</strong> — Monthly interest rate (annual interest rate ÷
              12 ÷ 100)
            </li>
            <li>
              <strong>n</strong> — Total number of monthly payments
            </li>
          </ul>
          <p>
            This formula ensures that every monthly payment remains constant,
            but the share going toward interest vs principal changes over time.
            At the start, more of your payment goes toward interest; later, more
            goes toward principal.
          </p>
          <p>
            If you want to see a detailed month-by-month repayment schedule,
            check our{" "}
            <a
              href="https://www.unitedcalculator.net/finance/amortization-calculator"
              target="_blank"
              class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
            >
              Amortization Calculator
            </a>
            .
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            How to Use the Auto Loan Calculator
          </h2>
          <p>
            Using the Auto Loan Calculator is simple and only requires three
            inputs:
          </p>
          <ol class="list-decimal ml-5 mb-3">
            <li>
              Enter the loan amount (car price minus down payment or trade-in).
            </li>
            <li>Enter the annual interest rate provided by your lender.</li>
            <li>
              Select the loan term in months (e.g., 60 months for 5 years).
            </li>
            <li>
              Click <strong>Calculate</strong> to see your estimated monthly
              payment.
            </li>
          </ol>
          <ul class="list-disc ml-5">
            <li>Displays monthly payment split into principal and interest</li>
            <li>Estimates total interest paid over the loan term</li>
            <li>Helps you compare different loan terms instantly</li>
            <li>
              Provides insight into total borrowing cost before signing a loan
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Example Calculation</h2>
          <div class="bg-blue-50 p-4 rounded-lg space-y-2">
            <p>
              <strong>Example:</strong> Suppose you take an auto loan of{" "}
              <strong>$20,000</strong> at an annual interest rate of{" "}
              <strong>6%</strong> for <strong>5 years (60 months)</strong>.
            </p>
            <p>Step 1: Monthly interest rate = 6% ÷ 12 = 0.005</p>
            <p>Step 2: Total number of payments = 5 × 12 = 60</p>
            <p>Step 3: Apply formula → EMI ≈ $386.66</p>
            <p>
              Over the loan term, you’ll pay about <strong>$3,199.60</strong> in
              interest, making the total repayment amount{" "}
              <strong>$23,199.60</strong>.
            </p>
            <p>
              This shows that while the car price was $20,000, the cost of
              financing increased the total expense by more than $3,000.
            </p>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Factors That Affect Auto Loan Payments
          </h2>
          <p>
            Several factors influence how much you’ll pay on an auto loan.
            Understanding them can save you thousands of dollars:
          </p>
          <ul class="list-disc ml-5">
            <li>
              <strong>Credit Score:</strong> Higher scores usually qualify for
              lower interest rates.
            </li>
            <li>
              <strong>Down Payment:</strong> Larger down payments reduce the
              loan principal and monthly payments.
            </li>
            <li>
              <strong>Loan Term:</strong> Longer terms mean smaller monthly
              payments but more total interest paid.
            </li>
            <li>
              <strong>New vs Used Car:</strong> Used cars often come with higher
              interest rates compared to new cars.
            </li>
            <li>
              <strong>Lender Type:</strong> Banks, credit unions, and
              dealerships may all offer different loan rates.
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Benefits of Using the Auto Loan Calculator
          </h2>
          <ul class="list-disc ml-5">
            <li>
              Helps you plan your car budget effectively before making a
              purchase
            </li>
            <li>Shows the true cost of borrowing including total interest</li>
            <li>Lets you experiment with different loan terms and rates</li>
            <li>Assists in making smarter financing decisions</li>
            <li>
              Provides a quick comparison between financing and leasing options
            </li>
            <li>
              Helps prevent over-borrowing by showing affordability clearly
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Frequently Asked Questions (FAQs)
          </h2>
          <dl>
            <dt class="font-semibold mt-4">
              Q.1 What does the Auto Loan Calculator show?
            </dt>
            <dd>
              Ans. It shows your estimated monthly payment, total interest paid,
              and total cost of the loan over the repayment term.
            </dd>

            <dt class="font-semibold mt-4">
              Q.2 Can I reduce my monthly auto loan payments?
            </dt>
            <dd>
              Ans. Yes, you can reduce payments by making a larger down payment,
              choosing a longer loan term, or securing a lower interest rate.
            </dd>

            <dt class="font-semibold mt-4">
              Q.3 What’s better: a shorter or longer loan term?
            </dt>
            <dd>
              Ans. Shorter terms have higher monthly payments but save on
              interest. Longer terms lower the monthly burden but increase total
              interest costs.
            </dd>

            <dt class="font-semibold mt-4">
              Q.4 Does this calculator include taxes and fees?
            </dt>
            <dd>
              Ans. No, it only estimates principal and interest. Taxes,
              registration fees, insurance, and dealer fees are not included.
            </dd>

            <dt class="font-semibold mt-4">
              Q.5 Can I use this calculator for refinancing my car loan?
            </dt>
            <dd>
              Ans. Yes, just enter your remaining balance, new interest rate,
              and loan term to estimate new payments under refinancing.
            </dd>

            <dt class="font-semibold mt-4">
              Q.6 How does my credit score affect my loan payments?
            </dt>
            <dd>
              Ans. Borrowers with higher credit scores usually qualify for
              significantly lower interest rates, reducing both monthly payments
              and overall loan costs.
            </dd>

            <dt class="font-semibold mt-4">
              Q.7 Can I pay off my auto loan early?
            </dt>
            <dd>
              Ans. Yes, most lenders allow early payoff, which saves you
              interest. However, some may charge prepayment penalties, so check
              your loan agreement first.
            </dd>
          </dl>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            An <strong>Auto Loan Calculator</strong> is an essential tool for
            anyone planning to finance a car purchase. It not only estimates
            your monthly payments but also reveals the true cost of borrowing by
            showing how much of your payment goes toward interest vs principal.
            By adjusting the loan amount, interest rate, and loan term, you can
            explore multiple scenarios before committing to a loan. This ensures
            you choose a financing option that fits your budget and long-term
            financial goals.
          </p>
          <p>
            Before signing any loan agreement, always use the calculator to
            check affordability, compare offers, and make informed decisions. A
            little planning today can save you thousands of dollars in interest
            tomorrow.
          </p>
        </section>
      </article>
    </>
  );
};

export default AutoLoanCalculator;
