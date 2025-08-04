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
          href="https://unitedcalculator.net/finance/amortization-calculator"
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
          content="https://unitedcalculator.net/finance/amortization-calculator"
        />
        <meta
          property="og:image"
          content="https://unitedcalculator.net/assets/images/amortization-preview.png"
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
        "url": "https://unitedcalculator.net/finance/amortization-calculator",
        "description": "Free amortization calculator to generate a complete loan payment schedule. Find out how much interest and principal you'll pay over time.",
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
            "name": "Amortization Calculator",
            "item": "https://unitedcalculator.net/finance/amortization-calculator"
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
    </>
  );
};

export default AmortizationCalculator;
