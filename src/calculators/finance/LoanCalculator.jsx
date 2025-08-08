import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("10000");
  const [interestRate, setInterestRate] = useState("5");
  const [loanTerm, setLoanTerm] = useState("5");

  const P = parseFloat(loanAmount || 0);
  const r = parseFloat(interestRate || 0) / 100 / 12;
  const n = parseFloat(loanTerm || 0) * 12;

  const monthlyPayment =
    r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = monthlyPayment * n;
  const totalInterest = totalPayment - P;

  return (
    <>
      <Helmet>
        <title>Loan Calculator</title>
        <meta
          name="description"
          content="Use our Loan Calculator to estimate your monthly payments, total interest, and loan amortization. Perfect for personal loans, auto loans, and more."
        />
        <meta
          name="keywords"
          content="loan calculator, monthly loan payment calculator, personal loan calculator, EMI calculator, interest calculator, auto loan calculator, loan repayment calculator, amortization calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/loan-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Loan Calculator" />
        <meta
          property="og:description"
          content="Calculate your monthly loan payments, interest costs, and total repayment using our easy-to-use Loan Calculator. Ideal for all types of loans."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/loan-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Loan Calculator",
      "url": "https://unitedcalculator.net/finance/loan-calculator",
      "description": "Use the Loan Calculator to calculate monthly payments, total interest, and loan amortization for personal loans, auto loans, and more.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://unitedcalculator.net"
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
          "name": "What is a loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A loan calculator helps estimate your monthly loan payments and total repayment amount based on loan amount, interest rate, and term."
          }
        },
        {
          "@type": "Question",
          "name": "What types of loans can I calculate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can use the loan calculator for personal loans, auto loans, student loans, and other types of fixed-rate loans."
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
          "item": "https://unitedcalculator.net"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Finance Calculators",
          "item": "https://unitedcalculator.net/finance"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Loan Calculator",
          "item": "https://unitedcalculator.net/finance/loan-calculator"
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
              placeholder="10000"
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
              placeholder="5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Loan Term (years)</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="5"
            />
          </div>
        </div>

        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Loan Summary
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Monthly Payment:</span>
            <span className="text-blue-600">${monthlyPayment.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-2">
            <span className="text-gray-800">Total Payment:</span>
            <span className="text-blue-600">${totalPayment.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-2">
            <span className="text-gray-800">Total Interest:</span>
            <span className="text-blue-600">${totalInterest.toFixed(2)}</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoanCalculator;
