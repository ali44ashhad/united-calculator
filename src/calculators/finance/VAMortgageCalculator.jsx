import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const VAMortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("300000");
  const [interestRate, setInterestRate] = useState("3.25"); // Annual
  const [loanTerm, setLoanTerm] = useState("30"); // Years
  const [propertyTax, setPropertyTax] = useState("1.2"); // Annual % of home price
  const [homeInsurance, setHomeInsurance] = useState("1000"); // Annual fixed
  const [vaFundingFee, setVaFundingFee] = useState("2.3"); // Percentage of loan

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const months = parseFloat(loanTerm) * 12;
    const propertyTaxRate = parseFloat(propertyTax) / 100;
    const insurance = parseFloat(homeInsurance);
    const fundingFeeRate = parseFloat(vaFundingFee) / 100;

    if (
      isNaN(principal) ||
      isNaN(rate) ||
      isNaN(months) ||
      isNaN(propertyTaxRate) ||
      isNaN(insurance) ||
      isNaN(fundingFeeRate)
    )
      return null;

    const fundingFeeAmount = principal * fundingFeeRate;
    const totalLoan = principal + fundingFeeAmount;

    const monthlyPrincipalInterest =
      (totalLoan * rate) / (1 - Math.pow(1 + rate, -months));
    const monthlyTax = (principal * propertyTaxRate) / 12;
    const monthlyInsurance = insurance / 12;
    const totalMonthlyPayment =
      monthlyPrincipalInterest + monthlyTax + monthlyInsurance;

    return {
      totalLoan: totalLoan.toFixed(2),
      monthlyPrincipalInterest: monthlyPrincipalInterest.toFixed(2),
      monthlyTax: monthlyTax.toFixed(2),
      monthlyInsurance: monthlyInsurance.toFixed(2),
      totalMonthlyPayment: totalMonthlyPayment.toFixed(2),
    };
  };

  const result = calculateMortgage();

  return (
    <>
      <Helmet>
        <title>
          VA Mortgage Calculator | Estimate Your VA Home Loan Payments
        </title>
        <meta
          name="description"
          content="Use our VA Mortgage Calculator to estimate monthly payments on your VA home loan, including principal, interest, taxes, insurance, and VA funding fee. Ideal for veterans and military families planning homeownership."
        />
        <meta
          name="keywords"
          content="VA mortgage calculator, VA loan calculator, VA home loan calculator, veteran mortgage calculator, military home loan estimator, VA funding fee calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/va-mortgage-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="VA Mortgage Calculator | Estimate Your VA Home Loan Payments"
        />
        <meta
          property="og:description"
          content="Calculate your VA home loan payments with our VA Mortgage Calculator. Includes estimates for principal, interest, property taxes, insurance, and VA funding fee for veterans and active-duty military."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/va-mortgage-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "VA Mortgage Calculator",
      "url": "https://unitedcalculator.net/finance/va-mortgage-calculator",
      "description": "Use our VA Mortgage Calculator to determine your monthly payments for a VA loan. It includes principal, interest, taxes, insurance, and VA funding fees, tailored for veterans, military members, and their families.",
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
          "name": "What is a VA mortgage calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A VA mortgage calculator estimates monthly payments for VA home loans, including principal, interest, VA funding fee, property taxes, and homeowners insurance."
          }
        },
        {
          "@type": "Question",
          "name": "Who is eligible for a VA loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "VA loans are available to eligible veterans, active-duty service members, members of the National Guard or Reserves, and certain surviving spouses as defined by the U.S. Department of Veterans Affairs."
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
          "name": "VA Mortgage Calculator",
          "item": "https://unitedcalculator.net/finance/va-mortgage-calculator"
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
              placeholder="e.g. 300000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Interest Rate (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 3.25"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Loan Term (Years)</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 30"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Property Tax (%)</label>
            <input
              type="number"
              value={propertyTax}
              onChange={(e) => setPropertyTax(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1.2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Home Insurance (Annual $)
            </label>
            <input
              type="number"
              value={homeInsurance}
              onChange={(e) => setHomeInsurance(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">VA Funding Fee (%)</label>
            <input
              type="number"
              value={vaFundingFee}
              onChange={(e) => setVaFundingFee(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 2.3"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              VA Mortgage Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">
                  Total Loan Amount (incl. VA Fee):
                </span>
                <span className="text-yellow-600 font-medium">
                  ${result.totalLoan}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">
                  Principal & Interest (Monthly):
                </span>
                <span className="text-green-600 font-medium">
                  ${result.monthlyPrincipalInterest}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Property Tax (Monthly):</span>
                <span className="text-green-600 font-medium">
                  ${result.monthlyTax}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Home Insurance (Monthly):</span>
                <span className="text-green-600 font-medium">
                  ${result.monthlyInsurance}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Monthly Payment:</span>
                <span className="text-blue-600">
                  ${result.totalMonthlyPayment}
                </span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default VAMortgageCalculator;
