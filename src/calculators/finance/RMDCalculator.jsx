import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/finance/rmd-calculator";

const DEFAULTS = {
  accountBalance: "200000",
  age: "73",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

/** IRS Uniform Lifetime Table divisors (Publication 590-B), ages 72–100 */
const UNIFORM_LIFETIME_DIVISORS = {
  72: 27.4,
  73: 26.5,
  74: 25.5,
  75: 24.6,
  76: 23.7,
  77: 22.9,
  78: 22.0,
  79: 21.1,
  80: 20.2,
  81: 19.4,
  82: 18.5,
  83: 17.7,
  84: 16.8,
  85: 16.0,
  86: 15.2,
  87: 14.4,
  88: 13.7,
  89: 12.9,
  90: 12.2,
  91: 11.5,
  92: 10.8,
  93: 10.1,
  94: 9.5,
  95: 8.9,
  96: 8.4,
  97: 7.8,
  98: 7.3,
  99: 6.8,
  100: 6.4,
};

const computeRMD = (accountBalance, age) => {
  if (accountBalance.trim() === "" || age.trim() === "") {
    return null;
  }

  const balance = parseFloat(accountBalance);
  const userAge = parseInt(age, 10);

  if (isNaN(balance) || isNaN(userAge)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (balance < 0) {
    return { error: "Account balance cannot be negative." };
  }

  if (userAge < 72) {
    return {
      error:
        "Uniform Lifetime Table applies from age 72. Federal RMD start is generally age 73 under current rules—confirm with IRS guidance.",
    };
  }

  if (userAge > 100) {
    return {
      error: "This table covers ages 72–100 only. Consult IRS Publication 590-B for older ages.",
    };
  }

  const divisor = UNIFORM_LIFETIME_DIVISORS[userAge];

  if (!divisor) {
    return { error: "No divisor found for this age." };
  }

  const annualRMD = balance / divisor;

  return {
    accountBalance: balance,
    age: userAge,
    divisor,
    annualRMD,
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
    name: "What does this RMD calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Annual required minimum distribution estimate: account balance divided by the IRS Uniform Lifetime Table divisor for your age (72–100).",
    },
  },
  {
    "@type": "Question",
    name: "When do RMDs start?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Under SECURE 2.0, many account owners begin at age 73. Some older rules used 72. Confirm your required beginning date with IRS or tax guidance.",
    },
  },
  {
    "@type": "Question",
    name: "Which balance should I enter?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Typically the prior December 31 fair market value of the tax-deferred account. This tool uses the balance you enter—it does not pull custodian statements.",
    },
  },
  {
    "@type": "Question",
    name: "Does this cover inherited IRAs or spouse rules?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. Only the standard Uniform Lifetime Table for ages 72–100. Inherited accounts and spousal exceptions use different tables.",
    },
  },
  {
    "@type": "Question",
    name: "Do Roth IRAs have RMDs?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Original Roth IRA owners generally have no lifetime RMDs. This calculator targets traditional IRA, 401(k), and similar tax-deferred balances.",
    },
  },
];

const RMDCalculator = () => {
  const [accountBalance, setAccountBalance] = useState(
    DEFAULTS.accountBalance
  );
  const [age, setAge] = useState(DEFAULTS.age);

  const result = computeRMD(accountBalance, age);

  const reset = () => {
    setAccountBalance(DEFAULTS.accountBalance);
    setAge(DEFAULTS.age);
  };

  return (
    <>
      <Helmet>
        <title>
          RMD Calculator - Required Minimum Distribution Estimate
        </title>
        <meta
          name="description"
          content="Estimate annual RMD from account balance and age using the IRS Uniform Lifetime Table (ages 72–100). Not inherited IRAs or Roth owner RMD rules."
        />
        <meta
          name="keywords"
          content="RMD calculator, required minimum distribution, IRA RMD, 401k RMD, Uniform Lifetime Table"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="RMD Calculator" />
        <meta
          property="og:description"
          content="Balance ÷ IRS life expectancy divisor for your age."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RMD Calculator" />
        <meta
          name="twitter:description"
          content="Required minimum distribution estimate from IRS table."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "RMD Calculator",
            url: PAGE_URL,
            description:
              "Estimate required minimum distribution using IRS Uniform Lifetime Table divisors.",
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
            name: "RMD Calculator",
            url: PAGE_URL,
            description:
              "Web tool to estimate annual RMD from balance and age.",
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
            headline: "RMD from IRS Uniform Lifetime Table",
            description:
              "Divide tax-deferred account balance by the IRS divisor for your age.",
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
                name: "RMD Calculator",
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
              Account balance
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={accountBalance}
                onChange={(e) => setAccountBalance(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.accountBalance}
                min="0"
                step="any"
              />
            </div>
            <p className="text-sm text-on-surface-variant">
              Usually prior December 31 value of tax-deferred accounts (IRA,
              401(k), etc.).
            </p>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Your age this year
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.age}
              min="72"
              max="100"
              step="1"
            />
            <p className="text-sm text-on-surface-variant">
              Uniform Lifetime Table: ages 72–100. RMD start is generally 73.
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">RMD summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">
                Annual required minimum distribution
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.annualRMD)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                IRS Uniform Lifetime divisor
              </span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.divisor : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Account balance used</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.accountBalance)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Age</span>
              <span className="font-code-num text-code-num">
                {result && !result.error ? result.age : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              RMD ≈ balance ÷ divisor. Not tax advice. Inherited IRAs, spouse
              more than 10 years younger, and still-working 401(k) exceptions
              are not modeled.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RMDCalculator;
