import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const PaymentCalculator = () => {
  const [principal, setPrincipal] = useState("50000"); // Loan amount
  const [annualRate, setAnnualRate] = useState("5"); // Annual interest rate
  const [termYears, setTermYears] = useState("5"); // Loan term in years

  const calculatePayment = () => {
    const P = parseFloat(principal);
    const r = parseFloat(annualRate) / 100 / 12; // Monthly interest rate
    const n = parseFloat(termYears) * 12; // Total number of payments

    if (isNaN(P) || isNaN(r) || isNaN(n) || r === 0) return null;

    const monthlyPayment =
      (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - P;

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    };
  };

  const result = calculatePayment();

  return (
    <>
      <Helmet>
        <title>Payment Calculator</title>
        <meta
          name="description"
          content="Use our Payment Calculator to calculate your monthly payment based on loan amount, interest rate, and term. Great for planning personal loans, auto loans, or mortgages."
        />
        <meta
          name="keywords"
          content="payment calculator, loan payment calculator, monthly payment calculator, EMI calculator, interest payment calculator, auto loan payment calculator, mortgage payment calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/payment-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Payment Calculator" />
        <meta
          property="og:description"
          content="Calculate your monthly payments for loans using our Payment Calculator. Helpful for planning finances on personal loans, car loans, or home mortgages."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/payment-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Payment Calculator",
      "url": "https://unitedcalculator.net/finance/payment-calculator",
      "description": "Use our Payment Calculator to determine your monthly payments for a loan based on amount, interest rate, and term. Useful for mortgages, auto loans, and personal financing.",
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
          "name": "What is a payment calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A payment calculator helps you estimate your monthly loan payments based on the loan amount, interest rate, and duration."
          }
        },
        {
          "@type": "Question",
          "name": "Who can use a payment calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Anyone planning to take a loan, whether it's for a car, house, or personal use, can use a payment calculator to understand repayment amounts."
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
          "name": "Payment Calculator",
          "item": "https://unitedcalculator.net/finance/payment-calculator"
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
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 50000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              value={annualRate}
              onChange={(e) => setAnnualRate(e.target.value)}
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
              placeholder="e.g. 5"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Payment Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly Payment:</span>
                <span className="text-yellow-600 font-medium">
                  ${result.monthlyPayment}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Interest:</span>
                <span className="text-green-600 font-medium">
                  ${result.totalInterest}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Payment:</span>
                <span className="text-blue-600">${result.totalPayment}</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default PaymentCalculator;
