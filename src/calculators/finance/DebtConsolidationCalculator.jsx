import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/debt-consolidation-calculator";

const DEFAULT_DEBTS = [
  { balance: "4000", rate: "18", term: "5" },
  { balance: "3000", rate: "22", term: "4" },
];

const DEFAULTS = {
  debts: DEFAULT_DEBTS,
  consolidationRate: "8",
  consolidationTerm: "4",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const monthlyPayment = (principal, annualRatePercent, termYears) => {
  const P = principal;
  const r = annualRatePercent / 100 / 12;
  const n = termYears * 12;

  if (r === 0) return P / n;
  return (P * r) / (1 - Math.pow(1 + r, -n));
};

const computeConsolidation = (debts, consolidationRate, consolidationTerm) => {
  const rate = parseFloat(consolidationRate);
  const term = parseFloat(consolidationTerm);

  if (debts.length === 0) {
    return { error: "Add at least one debt to compare." };
  }

  let totalBalance = 0;
  let totalOriginalInterest = 0;
  let totalOriginalMonthly = 0;

  for (let i = 0; i < debts.length; i++) {
    const { balance, rate: debtRate, term: debtTerm } = debts[i];
    const P = parseFloat(balance);
    const annualRate = parseFloat(debtRate);
    const years = parseFloat(debtTerm);

    if (
      balance.trim() === "" ||
      debtRate.trim() === "" ||
      debtTerm.trim() === ""
    ) {
      return { error: `Complete all fields for debt #${i + 1}.` };
    }

    if (isNaN(P) || isNaN(annualRate) || isNaN(years)) {
      return { error: `Enter valid numbers for debt #${i + 1}.` };
    }

    if (P <= 0 || years <= 0) {
      return {
        error: `Balance and term must be greater than zero for debt #${i + 1}.`,
      };
    }

    if (annualRate < 0) {
      return { error: `Interest rate cannot be negative for debt #${i + 1}.` };
    }

    const n = years * 12;
    const payment = monthlyPayment(P, annualRate, years);
    totalBalance += P;
    totalOriginalMonthly += payment;
    totalOriginalInterest += payment * n - P;
  }

  if (consolidationRate.trim() === "" || consolidationTerm.trim() === "") {
    return { error: "Enter consolidation rate and term." };
  }

  if (isNaN(rate) || isNaN(term)) {
    return { error: "Enter valid consolidation rate and term." };
  }

  if (term <= 0) {
    return { error: "Consolidation term must be greater than zero." };
  }

  if (rate < 0) {
    return { error: "Consolidation rate cannot be negative." };
  }

  if (totalBalance <= 0) {
    return { error: "Total balance must be greater than zero." };
  }

  const consolidatedMonthly = monthlyPayment(totalBalance, rate, term);
  const consolidatedMonths = term * 12;
  const consolidatedInterest =
    consolidatedMonthly * consolidatedMonths - totalBalance;
  const interestDifference = totalOriginalInterest - consolidatedInterest;

  return {
    totalBalance,
    totalOriginalInterest,
    totalOriginalMonthly,
    consolidatedMonthly,
    consolidatedInterest,
    interestDifference,
    consolidationRate: rate,
    consolidationTerm: term,
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
    name: "What does the Debt Consolidation Calculator compare?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "It totals interest if each existing debt is paid on its own fixed-rate amortization schedule, then compares that to one new loan that covers the combined balances at your proposed consolidation rate and term.",
    },
  },
  {
    "@type": "Question",
    name: "How is each current debt modeled?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "For each debt you enter balance, annual interest rate, and remaining term in years. The tool uses the standard fixed-rate monthly payment formula and sums total interest across all debts.",
    },
  },
  {
    "@type": "Question",
    name: "Does this include consolidation fees?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Origination fees, balance-transfer fees, or prepayment penalties are not built in. You can add fees to the balance manually if you want a rough adjustment.",
    },
  },
  {
    "@type": "Question",
    name: "What if consolidation interest is higher than the separate loans?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A longer consolidation term or a higher rate can increase total interest even when the monthly payment drops. The summary shows the difference so you can see whether you save or pay more over the life of the loan.",
    },
  },
  {
    "@type": "Question",
    name: "Is this accurate for credit card minimum payments?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Credit cards use revolving minimums, not fixed amortizing loans. Treat card balances as if they were on a fixed installment plan with your chosen term, or use the Credit Card Calculator for card-specific payoff math.",
    },
  },
];

const DebtConsolidationCalculator = () => {
  const [currentDebts, setCurrentDebts] = useState(DEFAULTS.debts);
  const [consolidationRate, setConsolidationRate] = useState(
    DEFAULTS.consolidationRate
  );
  const [consolidationTerm, setConsolidationTerm] = useState(
    DEFAULTS.consolidationTerm
  );

  const handleDebtChange = (index, field, value) => {
    const updated = [...currentDebts];
    updated[index] = { ...updated[index], [field]: value };
    setCurrentDebts(updated);
  };

  const addDebt = () => {
    setCurrentDebts([
      ...currentDebts,
      { balance: "", rate: "", term: "" },
    ]);
  };

  const reset = () => {
    setCurrentDebts(DEFAULTS.debts.map((d) => ({ ...d })));
    setConsolidationRate(DEFAULTS.consolidationRate);
    setConsolidationTerm(DEFAULTS.consolidationTerm);
  };

  const result = computeConsolidation(
    currentDebts,
    consolidationRate,
    consolidationTerm
  );

  return (
    <>
      <Helmet>
        <title>
          Debt Consolidation Calculator - Compare Interest & Payment
        </title>
        <meta
          name="description"
          content="Compare total interest on multiple fixed-rate debts versus one consolidation loan. Enter balances, rates, terms, and a proposed consolidation rate."
        />
        <meta
          name="keywords"
          content="debt consolidation calculator, consolidate loans calculator, debt interest comparison, personal loan consolidation, credit card debt consolidation estimate"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Debt Consolidation Calculator"
        />
        <meta
          property="og:description"
          content="Model separate loan interest versus one consolidated fixed-rate loan."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Debt Consolidation Calculator"
        />
        <meta
          name="twitter:description"
          content="Compare combined debt interest to a consolidation loan scenario."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Debt Consolidation Calculator",
            url: PAGE_URL,
            description:
              "Compare total interest across multiple amortizing debts with one consolidated fixed-rate loan.",
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
            name: "Debt Consolidation Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate interest on separate debts versus a single consolidation loan.",
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
            headline: "How to Compare Debt Consolidation Interest",
            description:
              "Sum amortized interest on each existing loan, then compare to one loan covering the combined balance at a new rate and term.",
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
                name: "Debt Consolidation Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-6">
          {currentDebts.map((debt, index) => (
            <div
              key={index}
              className="p-5 border border-outline-variant rounded-xl space-y-4 bg-surface-container-lowest"
            >
              <h2 className="font-h3 text-h3 text-on-surface">
                Debt #{index + 1}
              </h2>
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
                      value={debt.balance}
                      onChange={(e) =>
                        handleDebtChange(index, "balance", e.target.value)
                      }
                      className={`${inputClassName} pl-10`}
                      placeholder="4000"
                      min="0"
                      step="any"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-h3 text-h3 text-on-surface">
                    Interest rate
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={debt.rate}
                      onChange={(e) =>
                        handleDebtChange(index, "rate", e.target.value)
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
                    Term (years)
                  </label>
                  <input
                    type="number"
                    value={debt.term}
                    onChange={(e) =>
                      handleDebtChange(index, "term", e.target.value)
                    }
                    className={inputClassName}
                    placeholder="5"
                    min="0"
                    step="any"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addDebt}
          className="text-secondary font-medium px-4 py-2 hover:bg-surface-container transition-colors rounded-lg border border-outline-variant"
        >
          Add another debt
        </button>

        <div className="p-5 border border-outline-variant rounded-xl space-y-4 bg-surface-container-lowest">
          <h2 className="font-h3 text-h3 text-on-surface">
            Proposed consolidation loan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-h3 text-h3 text-on-surface">
                Consolidation rate
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={consolidationRate}
                  onChange={(e) => setConsolidationRate(e.target.value)}
                  className={inputClassName}
                  placeholder={DEFAULTS.consolidationRate}
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
                Consolidation term (years)
              </label>
              <input
                type="number"
                value={consolidationTerm}
                onChange={(e) => setConsolidationTerm(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.consolidationTerm}
                min="0"
                step="any"
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
            Consolidation comparison
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Combined balance</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalBalance)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Sum of separate monthly payments
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalOriginalMonthly)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Total interest (debts separate)
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalOriginalInterest)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Consolidated monthly payment
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.consolidatedMonthly)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Consolidated total interest
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.consolidatedInterest)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Interest difference</span>
              <span
                className={`font-code-num text-code-num ${
                  result && !result.error && result.interestDifference >= 0
                    ? "text-primary"
                    : ""
                }`}
              >
                {result && !result.error
                  ? `${result.interestDifference >= 0 ? "Save " : "Costs "} $${fmtMoney(Math.abs(result.interestDifference))}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Each debt uses fixed-rate amortization over the term you enter.
              Consolidation rolls balances into one loan at your proposed rate
              and term. Fees and credit-card minimums are not included.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DebtConsolidationCalculator;
