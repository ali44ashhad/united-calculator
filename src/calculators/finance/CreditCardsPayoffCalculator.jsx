import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const CreditCardsPayoffCalculator = () => {
  // Start with 2 cards as example, user can add more later if you extend
  const [cards, setCards] = useState([
    { id: 1, balance: "3000", annualInterestRate: "18", monthlyPayment: "300" },
    { id: 2, balance: "2000", annualInterestRate: "20", monthlyPayment: "250" },
  ]);

  const handleChange = (id, field, value) => {
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, [field]: value } : card))
    );
  };

  const calculatePayoff = (balance, apr, payment) => {
    let bal = parseFloat(balance);
    const monthlyRate = parseFloat(apr) / 100 / 12;
    const pay = parseFloat(payment);

    if (isNaN(bal) || isNaN(monthlyRate) || isNaN(pay) || pay <= 0 || bal <= 0)
      return { months: 0, interestPaid: 0, message: "Invalid input" };
    if (pay <= bal * monthlyRate)
      return {
        months: 0,
        interestPaid: 0,
        message: "Payment too low to cover interest",
      };

    let months = 0;
    let totalPaid = 0;

    while (bal > 0 && months < 1000) {
      const interest = bal * monthlyRate;
      bal = bal + interest - pay;
      if (bal < 0) bal = 0;
      totalPaid += pay;
      months++;
    }

    return {
      months,
      interestPaid: totalPaid - parseFloat(balance),
      message: null,
    };
  };

  let totalMonths = 0;
  let totalInterest = 0;
  let invalidInputs = false;
  let paymentTooLow = false;

  cards.forEach(({ balance, annualInterestRate, monthlyPayment }) => {
    const { months, interestPaid, message } = calculatePayoff(
      balance,
      annualInterestRate,
      monthlyPayment
    );
    if (message === "Invalid input") invalidInputs = true;
    if (message === "Payment too low to cover interest") paymentTooLow = true;
    totalMonths = Math.max(totalMonths, months); // worst case time to payoff
    totalInterest += interestPaid;
  });

  return (
    <>
      <Helmet>
        <title>Credit Cards Payoff Calculator</title>
        <meta
          name="description"
          content="Use our Credit Cards Payoff Calculator to estimate how long it will take to pay off your credit card debt. Plan payments and reduce interest effectively."
        />
        <meta
          name="keywords"
          content="credit card payoff calculator, debt payoff calculator, credit card payment calculator, credit card interest calculator, pay off credit cards faster"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/credit-cards-payoff-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Credit Cards Payoff Calculator" />
        <meta
          property="og:description"
          content="Estimate how long it will take to pay off your credit card debt with our Credit Cards Payoff Calculator. Plan smart payments and minimize interest."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/credit-cards-payoff-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Credit Cards Payoff Calculator",
      "url": "https://www.unitedcalculator.net/finance/credit-cards-payoff-calculator",
      "description": "Use the Credit Cards Payoff Calculator to calculate the time and cost required to eliminate your credit card debt. Optimize your repayment plan efficiently.",
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
          "name": "What is a credit card payoff calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A credit card payoff calculator helps you determine how long it will take to pay off your credit card debt based on your balance, interest rate, and monthly payments."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Credit Cards Payoff Calculator help?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps you plan your repayment strategy by showing how much interest you'll pay and how long it will take to become debt-free with consistent payments."
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
          "name": "Credit Cards Payoff Calculator",
          "item": "https://www.unitedcalculator.net/finance/credit-cards-payoff-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Credit Cards Payoff Calculator
        </h1>

        <div className="space-y-6">
          {cards.map(({ id, balance, annualInterestRate, monthlyPayment }) => (
            <div
              key={id}
              className="p-4 border border-gray-300 rounded space-y-4"
            >
              <h2 className="font-semibold text-lg text-indigo-700">
                Card {id}
              </h2>

              <div>
                <label className="block mb-1 font-medium">Balance ($)</label>
                <input
                  type="number"
                  value={balance}
                  onChange={(e) => handleChange(id, "balance", e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="e.g. 3000"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Annual Interest Rate (%)
                </label>
                <input
                  type="number"
                  value={annualInterestRate}
                  onChange={(e) =>
                    handleChange(id, "annualInterestRate", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="e.g. 18"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Monthly Payment ($)
                </label>
                <input
                  type="number"
                  value={monthlyPayment}
                  onChange={(e) =>
                    handleChange(id, "monthlyPayment", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="e.g. 300"
                />
              </div>
            </div>
          ))}
        </div>

        {invalidInputs && (
          <div className="mt-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded">
            Please enter valid positive numbers for all fields.
          </div>
        )}

        {paymentTooLow && !invalidInputs && (
          <div className="mt-6 p-4 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded">
            One or more monthly payments are too low to cover the interest.
            Please increase payments.
          </div>
        )}

        {!invalidInputs && !paymentTooLow && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">
                  Estimated Months to Payoff:
                </span>
                <span className="text-blue-600 font-medium">{totalMonths}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Interest Paid:</span>
                <span className="text-green-600">
                  ${totalInterest.toFixed(2)}
                </span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default CreditCardsPayoffCalculator;
