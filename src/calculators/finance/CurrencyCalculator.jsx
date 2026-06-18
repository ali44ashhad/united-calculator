import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/finance/currency-calculator";

const EXCHANGE_RATES = {
  USD: { INR: 83.5, EUR: 0.93, GBP: 0.81 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0097 },
  EUR: { USD: 1.08, INR: 89.5, GBP: 0.87 },
  GBP: { USD: 1.23, INR: 103, EUR: 1.15 },
};

const CURRENCIES = ["USD", "INR", "EUR", "GBP"];

const DEFAULTS = {
  amount: "1",
  fromCurrency: "USD",
  toCurrency: "INR",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeConversion = (amount, fromCurrency, toCurrency) => {
  if (amount.trim() === "") return null;

  const amt = parseFloat(amount);
  if (isNaN(amt)) {
    return { error: "Enter a valid amount." };
  }

  if (fromCurrency === toCurrency) {
    return {
      converted: amt,
      rate: 1,
      fromCurrency,
      toCurrency,
      amount: amt,
    };
  }

  const rate = EXCHANGE_RATES[fromCurrency]?.[toCurrency];
  if (rate == null) {
    return { error: "No exchange rate for this currency pair." };
  }

  return {
    converted: amt * rate,
    rate,
    fromCurrency,
    toCurrency,
    amount: amt,
  };
};

const fmtAmount = (n) =>
  parseFloat(n.toFixed(2)).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const FAQ_SCHEMA = [
  {
    "@type": "Question",
    name: "Is this a free online currency calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. It is free to use in your browser with no signup. Enter an amount, choose from and to currencies, and see the converted value and rate instantly.",
    },
  },
  {
    "@type": "Question",
    name: "What is the difference between a currency calculator and currency converter?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "People use both terms for the same task: turning an amount in one currency into another using an exchange rate. This tool multiplies your amount by the rate for the pair you select.",
    },
  },
  {
    "@type": "Question",
    name: "Can I use this as an exchange rate calculator?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. The summary shows the rate applied along with the converted amount. Change the amount or currencies to compare different scenarios.",
    },
  },
  {
    "@type": "Question",
    name: "Is this the same as Google currency converter?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Google shows live or frequently updated rates. This calculator uses fixed sample rates for quick private estimates and runs on this page without a live forex API.",
    },
  },
  {
    "@type": "Question",
    name: "Why is my bank, Visa, or Wise rate different?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Banks, card networks, and transfer apps quote their own rates and often add spreads or fees. This tool shows mathematical conversion only.",
    },
  },
  {
    "@type": "Question",
    name: "Does this work for UK pounds (GBP)?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. GBP is one of the four supported currencies. Select GBP as from or to for pound-to-dollar, euro, or rupee estimates using the built-in sample rates.",
    },
  },
  {
    "@type": "Question",
    name: "Are the exchange rates live?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Rates in this tool are illustrative sample values for quick estimates. Check your bank, card issuer, or a live forex feed before making transactions.",
    },
  },
  {
    "@type": "Question",
    name: "Which currencies are supported?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "US dollar (USD), Indian rupee (INR), euro (EUR), and British pound (GBP). Converting between the same currency returns the same amount.",
    },
  },
  {
    "@type": "Question",
    name: "How is the converted amount calculated?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Converted amount equals the amount you enter times the rate from the from-currency row to the to-currency column in the built-in rate table.",
    },
  },
  {
    "@type": "Question",
    name: "Does this include bank fees or markups?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. The result is the mathematical conversion only. Banks and payment providers often add spreads or fees on top of the mid-market rate.",
    },
  },
];

const CurrencyCalculator = () => {
  const [amount, setAmount] = useState(DEFAULTS.amount);
  const [fromCurrency, setFromCurrency] = useState(DEFAULTS.fromCurrency);
  const [toCurrency, setToCurrency] = useState(DEFAULTS.toCurrency);

  const result = computeConversion(amount, fromCurrency, toCurrency);

  const reset = () => {
    setAmount(DEFAULTS.amount);
    setFromCurrency(DEFAULTS.fromCurrency);
    setToCurrency(DEFAULTS.toCurrency);
  };

  return (
    <>
      <Helmet>
        <title>
          Free Currency Calculator &amp; Converter Online | USD, INR, EUR, GBP
        </title>
        <meta
          name="description"
          content="Free online currency calculator and converter with sample exchange rates. Convert USD, INR, EUR, GBP instantly. Exchange rate calculator for quick money conversion—no signup."
        />
        <meta
          name="keywords"
          content="currency calculator, currency converter, online currency calculator, exchange rate calculator, currency converter calculator, money conversion calculator, free currency converter, USD to INR calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Free Currency Calculator & Converter Online"
        />
        <meta
          property="og:description"
          content="Convert USD, INR, EUR, and GBP with sample exchange rates. Free online currency calculator and money converter."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Free Currency Calculator & Converter"
        />
        <meta
          name="twitter:description"
          content="Online exchange rate calculator for USD, INR, EUR, and GBP with instant results."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Free Currency Calculator & Converter Online",
            url: PAGE_URL,
            description:
              "Free online currency calculator and converter with sample exchange rates for USD, INR, EUR, and GBP.",
            inLanguage: "en",
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
            "@type": "SoftwareApplication",
            name: "Currency Calculator",
            url: PAGE_URL,
            description:
              "Free web tool to convert money between USD, INR, EUR, and GBP using illustrative exchange rates.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            inLanguage: "en",
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
            headline: "How to Calculate Currency Exchange Rates Online",
            description:
              "Multiply the amount in the base currency by the exchange rate to the target currency. This tool supports USD, INR, EUR, and GBP with sample rates for illustration.",
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
                name: "Currency Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2 md:col-span-3">
            <label className="font-h3 text-h3 text-on-surface">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.amount}
              min="0"
              step="any"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className={inputClassName}
            >
              {CURRENCIES.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">To</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className={inputClassName}
            >
              {CURRENCIES.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
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
            Conversion result
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Converted amount</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `${fmtAmount(result.converted)} ${result.toCurrency}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">You entered</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `${fmtAmount(result.amount)} ${result.fromCurrency}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Rate used</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `1 ${result.fromCurrency} = ${result.rate} ${result.toCurrency}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Rates are sample values for illustration—not live market quotes.
              Banks and card networks may charge spreads or fees on top of this
              math.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CurrencyCalculator;
