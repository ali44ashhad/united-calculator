import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/tip-calculator";

const DEFAULTS = {
  billAmount: "50",
  tipPercentage: "18",
  splitBy: "2",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeTip = (billAmount, tipPercentage, splitBy) => {
  if (
    billAmount.trim() === "" ||
    tipPercentage.trim() === "" ||
    splitBy.trim() === ""
  ) {
    return null;
  }

  const bill = parseFloat(billAmount);
  const tip = parseFloat(tipPercentage);
  const people = parseInt(splitBy, 10);

  if (isNaN(bill) || isNaN(tip) || isNaN(people)) {
    return { error: "Enter valid numbers for bill, tip %, and people." };
  }

  if (bill < 0 || tip < 0) {
    return { error: "Bill and tip percentage cannot be negative." };
  }

  if (people <= 0) {
    return { error: "Split count must be at least 1 person." };
  }

  const tipAmount = (bill * tip) / 100;
  const total = bill + tipAmount;
  const perPerson = total / people;
  const tipPerPerson = tipAmount / people;

  return {
    bill,
    tip,
    people,
    tipAmount,
    total,
    perPerson,
    tipPerPerson,
  };
};

const fmtMoney = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState(DEFAULTS.billAmount);
  const [tipPercentage, setTipPercentage] = useState(DEFAULTS.tipPercentage);
  const [splitBy, setSplitBy] = useState(DEFAULTS.splitBy);

  const result = computeTip(billAmount, tipPercentage, splitBy);

  const reset = () => {
    setBillAmount(DEFAULTS.billAmount);
    setTipPercentage(DEFAULTS.tipPercentage);
    setSplitBy(DEFAULTS.splitBy);
  };

  return (
    <>
      <Helmet>
        <title>
          Tip Calculator - Split Bill, Tip Amount &amp; Per Person Total
        </title>
        <meta
          name="description"
          content="Calculate tip amount, total with tip, and per-person share from bill amount, tip percentage, and number of people. Free restaurant tip calculator."
        />
        <meta
          name="keywords"
          content="tip calculator split bill, restaurant tip calculator 18 percent, gratuity calculator per person, how much to tip on 50 dollar bill, split check calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Tip Calculator - Bill Split & Gratuity"
        />
        <meta
          property="og:description"
          content="Tip = bill × %; total and per-person amounts when splitting."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tip Calculator" />
        <meta
          name="twitter:description"
          content="Tip, total, and per person from bill and tip %."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Tip Calculator",
            url: PAGE_URL,
            description:
              "Calculate tip amount and split the total bill including gratuity between multiple people.",
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
            name: "Tip Calculator",
            url: PAGE_URL,
            description:
              "Web tool to compute tip, total with tip, and per-person share from bill and tip percentage.",
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
            headline: "How to Calculate Tip and Split the Bill",
            description:
              "Multiply the pre-tip bill by tip percent divided by 100, add to the bill for the total, then divide by the number of people for each share.",
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
            mainEntity: [
              {
                "@type": "Question",
                name: "How do you calculate a tip?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tip amount = bill × (tip percent ÷ 100). Total with tip = bill + tip amount.",
                },
              },
              {
                "@type": "Question",
                name: "What is a standard restaurant tip in the US?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many diners use 15–20% of the pre-tax bill for sit-down service; adjust up or down for quality.",
                },
              },
              {
                "@type": "Question",
                name: "How do I split the bill with tip?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Add tip to the bill for the grand total, then divide by the number of people. This calculator does that in one step.",
                },
              },
              {
                "@type": "Question",
                name: "Should tip be on tax?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Custom varies. This tool tips on the bill amount you enter—use pre-tax subtotal if that is your preference.",
                },
              },
              {
                "@type": "Question",
                name: "What if I am dining alone?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Set split to 1 person. Per person equals the full total with tip.",
                },
              },
            ],
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
                name: "Other Calculators",
                item: "https://www.unitedcalculator.net/other",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Tip Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Bill amount ($)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                className={`${inputClassName} pl-8`}
                placeholder={DEFAULTS.billAmount}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Tip (%)
            </label>
            <div className="relative">
              <input
                type="number"
                value={tipPercentage}
                onChange={(e) => setTipPercentage(e.target.value)}
                className={`${inputClassName} pr-10`}
                placeholder={DEFAULTS.tipPercentage}
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
              Split between (people)
            </label>
            <input
              type="number"
              value={splitBy}
              onChange={(e) => setSplitBy(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.splitBy}
              min="1"
              step="1"
            />
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Tip summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Pre-tip bill</span>
              <span className="font-code-num text-code-num">
                {result?.bill != null && !result.error
                  ? `$${fmtMoney(result.bill)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">
                Tip ({result?.tip != null && !result.error ? `${result.tip}%` : "—"})
              </span>
              <span className="font-code-num text-code-num">
                {result?.tipAmount != null && !result.error
                  ? `$${fmtMoney(result.tipAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Total with tip</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.total != null && !result.error
                  ? `$${fmtMoney(result.total)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Per person (total)</span>
              <span className="font-code-num text-code-num">
                {result?.perPerson != null && !result.error
                  ? `$${fmtMoney(result.perPerson)}`
                  : "—"}
              </span>
            </div>
            {result?.people != null && result.people > 1 && !result.error && (
              <div className="flex items-center justify-between gap-4">
                <span className="text-on-surface">Tip per person</span>
                <span className="font-code-num text-code-num">
                  ${fmtMoney(result.tipPerPerson)}
                </span>
              </div>
            )}
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              <strong>Tip = bill × % ÷ 100</strong>; total = bill + tip; per
              person = total ÷ people. Works with any currency—enter amounts in
              your unit.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TipCalculator;
