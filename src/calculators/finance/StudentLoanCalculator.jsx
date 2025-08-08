import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const StudentLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("30000");
  const [interestRate, setInterestRate] = useState("5");
  const [loanTerm, setLoanTerm] = useState("10");

  const calculate = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const termYears = parseInt(loanTerm);

    if (
      isNaN(principal) ||
      isNaN(annualRate) ||
      isNaN(termYears) ||
      principal <= 0 ||
      termYears <= 0
    ) {
      return null;
    }

    const monthlyRate = annualRate / 12;
    const numberOfPayments = termYears * 12;

    const monthlyPayment =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    const totalRepayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalRepayment - principal;

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculate();

  return (
    <>
      <Helmet>
        <title>Student Loan Calculator | Estimate Your Loan Payments</title>
        <meta
          name="description"
          content="Use our Student Loan Calculator to estimate your monthly payments, interest costs, and total repayment amount. Plan your student loan strategy with ease."
        />
        <meta
          name="keywords"
          content="student loan calculator, student loan repayment calculator, education loan calculator, college loan calculator, loan EMI calculator, student debt calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/student-loan-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Student Loan Calculator | Estimate Your Loan Payments"
        />
        <meta
          property="og:description"
          content="Easily calculate your student loan repayments using our Student Loan Calculator. Understand monthly EMI, interest payable, and total repayment over time."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/student-loan-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Student Loan Calculator",
      "url": "https://unitedcalculator.net/finance/student-loan-calculator",
      "description": "Use our Student Loan Calculator to plan your education loan repayments effectively. It estimates monthly payments, interest charges, and total repayment based on your loan amount, interest rate, and term.",
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
          "name": "What is a student loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A student loan calculator estimates how much you'll need to repay monthly and in total over the life of your education loan, based on interest rate, term, and loan amount."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a student loan calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a student loan calculator helps you understand your repayment obligations, compare loan plans, and manage your financial future better before taking a loan."
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
          "name": "Student Loan Calculator",
          "item": "https://unitedcalculator.net/finance/student-loan-calculator"
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
              placeholder="e.g. 30000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Interest Rate (% per year)
            </label>
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
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Loan Summary
            </h2>
            <div className="space-y-2 text-lg font-semibold">
              <div className="flex justify-between">
                <span>Monthly Payment:</span>
                <span className="text-blue-600">${result.monthlyPayment}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Repayment:</span>
                <span className="text-green-600">${result.totalRepayment}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Interest:</span>
                <span className="text-red-600">${result.totalInterest}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default StudentLoanCalculator;
