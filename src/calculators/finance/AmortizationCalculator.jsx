import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const AmortizationCalculator = () => {
  const DEFAULTS = {
    loanAmount: "250000",
    annualInterestRate: "6.5",
    loanTermYears: "30",
  };

  const [loanAmount, setLoanAmount] = useState(DEFAULTS.loanAmount);
  const [annualInterestRate, setAnnualInterestRate] = useState(
    DEFAULTS.annualInterestRate
  );
  const [loanTermYears, setLoanTermYears] = useState(DEFAULTS.loanTermYears);

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

      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-bold text-on-surface">
            Loan details
          </h2>
          <p className="text-on-surface-variant">
            Enter your loan amount, interest rate, and term to see your monthly
            payment and total interest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Loan Amount */}
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Loan Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.loanAmount}
              />
            </div>
          </div>

          {/* Annual Interest Rate */}
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Annual Interest Rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={annualInterestRate}
                onChange={(e) => setAnnualInterestRate(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.annualInterestRate}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          {/* Loan Term */}
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">Loan Term</label>
            <select
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg appearance-none transition-all"
            >
              <option value="30">30 Years</option>
              <option value="20">20 Years</option>
              <option value="15">15 Years</option>
              <option value="10">10 Years</option>
              <option value="5">5 Years</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-lg font-h3 text-h3 shadow-md active:scale-95 transition-all"
            >
              Calculate Now
            </button>
            <button
              type="button"
              onClick={() => {
                setLoanAmount(DEFAULTS.loanAmount);
                setAnnualInterestRate(DEFAULTS.annualInterestRate);
                setLoanTermYears(DEFAULTS.loanTermYears);
              }}
              className="text-secondary font-medium px-4 py-2 hover:bg-surface-container transition-colors rounded-lg"
            >
              Reset
            </button>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              lock
            </span>
            <span className="text-sm">Secure and private calculation</span>
          </div>
        </div>

        {/* Summary */}
        {result && (
          <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
            <div className="mb-6 space-y-1">
              <h2 className="text-xl font-bold text-on-surface">Results</h2>
              <p className="text-on-surface-variant">
                Your payment stays fixed (for a fixed-rate loan), while the
                interest/principal split changes over time.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-on-surface">Monthly Payment</span>
                <span className="font-code-num text-code-num text-primary">
                  ${result.monthlyPayment}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-on-surface">Total Payment</span>
                <span className="font-code-num text-code-num">
                  ${result.totalPayment}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-on-surface">Total Interest Paid</span>
                <span className="font-code-num text-code-num">
                  ${result.totalInterest}
                </span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default AmortizationCalculator;
