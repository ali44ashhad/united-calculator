import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/credit-cards-payoff-calculator";

const DEFAULT_CARDS = [
  { id: 1, balance: "3000", annualInterestRate: "18", monthlyPayment: "300" },
  { id: 2, balance: "2000", annualInterestRate: "20", monthlyPayment: "250" },
];

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computePayoff = (balance, apr, payment) => {
  const bal = parseFloat(balance);
  const monthlyRate = parseFloat(apr) / 100 / 12;
  const pay = parseFloat(payment);

  if (isNaN(bal) || isNaN(monthlyRate) || isNaN(pay) || pay <= 0 || bal <= 0) {
    return { error: "invalid" };
  }
  if (pay <= bal * monthlyRate) {
    return { error: "paymentTooLow" };
  }

  let current = bal;
  let months = 0;
  let totalPaid = 0;

  while (current > 0 && months < 1000) {
    const interest = current * monthlyRate;
    current = current + interest - pay;
    if (current < 0) current = 0;
    totalPaid += pay;
    months++;
  }

  return {
    months,
    interestPaid: totalPaid - bal,
    totalPaid,
    originalBalance: bal,
  };
};

const computeAllCards = (cards) => {
  const perCard = cards.map((card) => {
    const result = computePayoff(
      card.balance,
      card.annualInterestRate,
      card.monthlyPayment
    );
    return { id: card.id, ...result };
  });

  const hasInvalid = perCard.some((c) => c.error === "invalid");
  const hasPaymentTooLow = perCard.some((c) => c.error === "paymentTooLow");

  if (hasInvalid || hasPaymentTooLow) {
    return { perCard, hasInvalid, hasPaymentTooLow, totalMonths: null, totalInterest: null };
  }

  const totalMonths = Math.max(...perCard.map((c) => c.months));
  const totalInterest = perCard.reduce((sum, c) => sum + c.interestPaid, 0);

  return {
    perCard,
    hasInvalid: false,
    hasPaymentTooLow: false,
    totalMonths,
    totalInterest,
  };
};

const fmtMoney = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "What does the Credit Cards Payoff Calculator do?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It estimates payoff months and total interest for each credit card when you pay a fixed monthly amount per card. The overall timeline uses the longest single-card payoff (cards are modeled in parallel, not with snowball reallocations).",
    },
  },
  {
    "@type": "Question",
    name: "How is monthly interest applied?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Each month, interest equals the remaining balance times APR divided by 12. The new balance is balance plus interest minus your payment. The loop repeats until the balance reaches zero.",
    },
  },
  {
    "@type": "Question",
    name: "Why does it say my payment is too low?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "If your monthly payment is less than or equal to the first month's interest charge, the balance cannot shrink. Increase the payment above that interest amount for that card.",
    },
  },
  {
    "@type": "Question",
    name: "How is the total months to payoff calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "When each card has its own fixed payment, the summary shows the maximum months among all cards—the time until the slowest card is paid off if you keep those payments unchanged.",
    },
  },
  {
    "@type": "Question",
    name: "Does this model snowball or avalanche strategies?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Each card uses the payment you enter for that card only. Snowball and avalanche require redirecting extra money as balances are cleared; use our single Credit Card Calculator for one card or plan reallocations manually.",
    },
  },
];

const CreditCardsPayoffCalculator = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  const handleChange = (id, field, value) => {
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, [field]: value } : card))
    );
  };

  const reset = () => setCards(DEFAULT_CARDS);

  const summary = computeAllCards(cards);

  return (
    <>
      <Helmet>
        <title>
          Credit Cards Payoff Calculator - Multi-Card Debt Timeline & Interest
        </title>
        <meta
          name="description"
          content="Estimate payoff months and total interest for multiple credit cards with fixed monthly payments per card. See per-card timelines and combined interest."
        />
        <meta
          name="keywords"
          content="credit cards payoff calculator, multi card debt calculator, credit card payoff timeline, credit card interest calculator, pay off multiple credit cards"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Credit Cards Payoff Calculator"
        />
        <meta
          property="og:description"
          content="Model several credit cards at once with balance, APR, and fixed monthly payment per card."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Credit Cards Payoff Calculator"
        />
        <meta
          name="twitter:description"
          content="Multi-card payoff months and total interest with fixed payments."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Credit Cards Payoff Calculator",
            url: PAGE_URL,
            description:
              "Estimate how long it takes to pay off multiple credit cards and how much interest you pay with fixed monthly payments per card.",
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Credit Cards Payoff Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate multi-card credit card payoff months and interest with fixed payments.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "How to Estimate Payoff Time for Multiple Credit Cards",
            description:
              "For each card, apply monthly interest on the balance then subtract a fixed payment until the balance reaches zero. Combined interest sums across cards; overall months use the longest single-card timeline.",
            author: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": PAGE_URL,
            },
            inLanguage: "en",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_SCHEMA,
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.unitedcalculator.net",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Finance Calculators",
                item: "https://www.unitedcalculator.net/finance",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Credit Cards Payoff Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-6">
          {cards.map(({ id, balance, annualInterestRate, monthlyPayment }) => (
            <div
              key={id}
              className="p-5 border border-outline-variant rounded-xl space-y-4 bg-surface-container-lowest"
            >
              <h2 className="font-h3 text-h3 text-on-surface">Card {id}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="font-h3 text-h3 text-on-surface">
                    Balance
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                      $
                    </span>
                    <input
                      type="number"
                      value={balance}
                      onChange={(e) =>
                        handleChange(id, "balance", e.target.value)
                      }
                      className={`${inputClassName} pl-10`}
                      placeholder="3000"
                      min="0"
                      step="any"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-h3 text-h3 text-on-surface">APR</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={annualInterestRate}
                      onChange={(e) =>
                        handleChange(id, "annualInterestRate", e.target.value)
                      }
                      className={inputClassName}
                      placeholder="18"
                      min="0"
                      step="any"
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
                      onChange={(e) =>
                        handleChange(id, "monthlyPayment", e.target.value)
                      }
                      className={`${inputClassName} pl-10`}
                      placeholder="300"
                      min="0"
                      step="any"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
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
              onClick={reset}
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
            Multi-card payoff summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Longest payoff (months)
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {summary.totalMonths != null ? summary.totalMonths : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total interest (all cards)</span>
              <span className="font-code-num text-code-num">
                {summary.totalInterest != null
                  ? `$${fmtMoney(summary.totalInterest)}`
                  : "—"}
              </span>
            </div>

            {summary.totalMonths != null && (
              <div className="pt-4 border-t border-outline-variant space-y-3">
                <p className="text-sm font-medium text-on-surface">
                  Per card (fixed payment each)
                </p>
                {summary.perCard.map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-sm"
                  >
                    <span className="text-on-surface-variant">
                      Card {card.id}
                    </span>
                    <span className="font-code-num text-code-num">
                      {card.months} mo · ${fmtMoney(card.interestPaid)} interest
                    </span>
                  </div>
                ))}
              </div>
            )}

            {summary.hasInvalid && (
              <p className="text-sm text-error">
                Enter valid positive numbers for balance, APR, and monthly
                payment on every card.
              </p>
            )}
            {summary.hasPaymentTooLow && !summary.hasInvalid && (
              <p className="text-sm text-error">
                One or more payments are too low to cover monthly interest.
                Increase those payments.
              </p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Each card is modeled independently with the payment you assign to
              it. Overall months reflect the slowest card. This does not
              reallocate freed payments from paid-off cards (snowball/avalanche).
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CreditCardsPayoffCalculator;
