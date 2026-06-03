import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/vat-calculator";

const DEFAULTS = {
  amount: "1000",
  vatRate: "20",
  amountIncludesVat: false,
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeVAT = (amount, vatRate, amountIncludesVat) => {
  if (amount.trim() === "" || vatRate.trim() === "") {
    return null;
  }

  const price = parseFloat(amount);
  const ratePercent = parseFloat(vatRate);

  if (isNaN(price) || isNaN(ratePercent)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (price < 0) {
    return { error: "Amount cannot be negative." };
  }

  if (ratePercent < 0) {
    return { error: "VAT rate cannot be negative." };
  }

  const rate = ratePercent / 100;
  let netPrice;
  let vatAmount;
  let grossPrice;

  if (amountIncludesVat) {
    grossPrice = price;
    netPrice = rate === 0 ? price : price / (1 + rate);
    vatAmount = grossPrice - netPrice;
  } else {
    netPrice = price;
    vatAmount = netPrice * rate;
    grossPrice = netPrice + vatAmount;
  }

  return {
    amountEntered: price,
    vatRatePercent: ratePercent,
    amountIncludesVat,
    netPrice,
    vatAmount,
    grossPrice,
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
    name: "What does this VAT calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Net price (ex VAT), VAT amount, and gross price (inc VAT) from an amount and VAT rate percent. Choose whether your amount is before or after VAT.",
    },
  },
  {
    "@type": "Question",
    name: "How do I add VAT to a net price?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Leave “amount includes VAT” unchecked, enter the net price and rate. VAT = net × rate%, gross = net + VAT.",
    },
  },
  {
    "@type": "Question",
    name: "How do I remove VAT from a gross price?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Check “amount includes VAT” and enter the gross total. Net = gross ÷ (1 + rate%), VAT = gross − net.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as the sales tax calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Similar percentage math. Sales tax on this site adds tax to a pre-tax price only. This VAT tool also splits tax-inclusive totals.",
    },
  },
  {
    "@type": "Question",
    name: "Does it apply country-specific VAT rules?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. You enter one rate. Reduced rates, exemptions, and registration rules are not modeled.",
    },
  },
];

const VATCalculator = () => {
  const [amount, setAmount] = useState(DEFAULTS.amount);
  const [vatRate, setVatRate] = useState(DEFAULTS.vatRate);
  const [amountIncludesVat, setAmountIncludesVat] = useState(
    DEFAULTS.amountIncludesVat
  );

  const result = computeVAT(amount, vatRate, amountIncludesVat);

  const reset = () => {
    setAmount(DEFAULTS.amount);
    setVatRate(DEFAULTS.vatRate);
    setAmountIncludesVat(DEFAULTS.amountIncludesVat);
  };

  return (
    <>
      <Helmet>
        <title>
          VAT Calculator - Add or Remove Value Added Tax
        </title>
        <meta
          name="description"
          content="Net, VAT, and gross from one amount and VAT rate %. Add tax to net prices or remove VAT from tax-inclusive totals—not country rate lookup."
        />
        <meta
          name="keywords"
          content="VAT calculator, value added tax, VAT inclusive, VAT exclusive, remove VAT, add VAT"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="VAT Calculator" />
        <meta
          property="og:description"
          content="Split or add VAT from net or gross amounts and a rate percent."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VAT Calculator" />
        <meta
          name="twitter:description"
          content="VAT exclusive and inclusive price math in one tool."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "VAT Calculator",
            url: PAGE_URL,
            description:
              "Calculate net price, VAT amount, and gross price from a rate percent.",
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
            name: "VAT Calculator",
            url: PAGE_URL,
            description:
              "Web tool to add or remove VAT from net or gross amounts.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
            headline: "VAT Inclusive and Exclusive Pricing",
            description:
              "Compute net, VAT, and gross from a single rate and whether the input is tax-inclusive or tax-exclusive.",
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
            mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
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
                name: "VAT Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              {amountIncludesVat ? "Gross price (inc. VAT)" : "Net price (ex. VAT)"}
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.amount}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">VAT rate</label>
            <div className="relative">
              <input
                type="number"
                value={vatRate}
                onChange={(e) => setVatRate(e.target.value)}
                className={inputClassName}
                placeholder={DEFAULTS.vatRate}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2 flex flex-col justify-end">
            <label className="flex items-center gap-3 cursor-pointer rounded-lg border border-outline-variant px-4 py-3 bg-white hover:bg-surface-container-low transition-colors">
              <input
                type="checkbox"
                checked={amountIncludesVat}
                onChange={(e) => setAmountIncludesVat(e.target.checked)}
                className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20"
              />
              <span className="text-body-lg font-body-lg text-on-surface">
                Amount includes VAT
              </span>
            </label>
            <p className="text-sm text-on-surface-variant">
              Unchecked = add VAT to net. Checked = remove VAT from gross.
            </p>
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">VAT summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Gross price</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.grossPrice)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Net price (ex. VAT)</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.netPrice)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">VAT amount</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.vatAmount)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">VAT rate</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${result.vatRatePercent}%`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Input mode</span>
              <span className="font-code-num text-code-num text-sm">
                {result && !result.error
                  ? result.amountIncludesVat
                    ? "Tax-inclusive (gross in)"
                    : "Tax-exclusive (net in)"
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Add VAT: gross = net × (1 + rate%). Remove VAT: net = gross ÷ (1 +
              rate%). One rate you enter—not multi-rate or country tables.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default VATCalculator;
