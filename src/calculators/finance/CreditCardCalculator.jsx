import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const CreditCardCalculator = () => {
  const DEFAULTS = {
    balance: "5000",
    annualInterestRate: "18",
    monthlyPayment: "500",
  };

  const [balance, setBalance] = useState(DEFAULTS.balance);
  const [annualInterestRate, setAnnualInterestRate] = useState(
    DEFAULTS.annualInterestRate
  );
  const [monthlyPayment, setMonthlyPayment] = useState(DEFAULTS.monthlyPayment);

  const calculateCreditCard = () => {
    const bal = parseFloat(balance);
    const rate = parseFloat(annualInterestRate) / 100 / 12;
    const payment = parseFloat(monthlyPayment);

    if (isNaN(bal) || isNaN(rate) || isNaN(payment) || payment <= 0 || bal <= 0) {
      return null;
    }

    if (payment <= bal * rate) {
      return { message: "Payment too low to cover interest!" };
    }

    let months = 0;
    let currentBalance = bal;
    let totalPaid = 0;

    while (currentBalance > 0 && months < 1000) {
      const interest = currentBalance * rate;
      currentBalance = currentBalance + interest - payment;
      if (currentBalance < 0) currentBalance = 0;
      totalPaid += payment;
      months++;
    }

    return {
      months,
      totalPaid: totalPaid.toFixed(2),
      originalBalance: bal.toFixed(2),
      interestPaid: (totalPaid - bal).toFixed(2),
    };
  };

  const result = calculateCreditCard();

  return (
    <>
      <Helmet>
        <title>
          Credit Card Calculator - Payoff Time, Interest & Total Paid
        </title>
        <meta
          name="description"
          content="Estimate credit card payoff months, total amount paid, and interest from balance, APR, and fixed monthly payment."
        />
        <meta
          name="keywords"
          content="credit card calculator, credit card payoff calculator, credit card interest calculator, debt payoff calculator, APR payment calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/credit-card-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Credit Card Calculator" />
        <meta
          property="og:description"
          content="See how long a fixed monthly payment takes to clear a card balance and how much interest you pay."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/credit-card-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Credit Card Calculator" />
        <meta
          name="twitter:description"
          content="Credit card debt payoff estimate with balance, APR, and monthly payment."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Credit Card Calculator",
      "url": "https://www.unitedcalculator.net/finance/credit-card-calculator",
      "description": "Credit card payoff calculator using balance, APR, and fixed monthly payments with monthly interest applied.",
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
          "name": "What is a credit card calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It estimates how many months a fixed payment takes to pay off a credit card balance and how much interest you pay over that period."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a credit card calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps you compare payment amounts, see total interest cost, and plan a realistic debt payoff timeline."
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
          "name": "Credit Card Calculator",
          "item": "https://www.unitedcalculator.net/finance/credit-card-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Outstanding balance
            </label>
            <div className="relative max-w-full md:max-w-md">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.balance}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">APR</label>
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

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Fixed monthly payment
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={monthlyPayment}
                onChange={(e) => setMonthlyPayment(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.monthlyPayment}
              />
            </div>
          </div>
        </div>

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
                setBalance(DEFAULTS.balance);
                setAnnualInterestRate(DEFAULTS.annualInterestRate);
                setMonthlyPayment(DEFAULTS.monthlyPayment);
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

        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Credit Card Payoff Summary
          </h2>
          {result?.message ? (
            <p className="text-body-lg font-body-lg text-error">
              {result.message}
            </p>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-on-surface">Months to payoff</span>
                <span className="font-code-num text-code-num text-primary">
                  {result ? result.months : "—"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-on-surface">Total paid</span>
                <span className="font-code-num text-code-num">
                  {result ? `$${result.totalPaid}` : "—"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-on-surface">Interest paid</span>
                <span className="font-code-num text-code-num">
                  {result ? `$${result.interestPaid}` : "—"}
                </span>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default CreditCardCalculator;
