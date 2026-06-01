import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/finance/lease-calculator";

const DEFAULTS = {
  monthlyPayment: "300",
  leaseTerm: "36",
  downPayment: "2000",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeLease = (monthlyPayment, leaseTerm, downPayment) => {
  if (
    monthlyPayment.trim() === "" ||
    leaseTerm.trim() === "" ||
    downPayment.trim() === ""
  ) {
    return null;
  }

  const monthly = parseFloat(monthlyPayment);
  const months = parseFloat(leaseTerm);
  const down = parseFloat(downPayment);

  if (isNaN(monthly) || isNaN(months) || isNaN(down)) {
    return { error: "Enter valid numbers for all fields." };
  }

  if (monthly < 0 || down < 0) {
    return { error: "Monthly payment and down payment cannot be negative." };
  }

  if (months <= 0) {
    return { error: "Lease term must be greater than zero months." };
  }

  const totalFromPayments = monthly * months;
  const totalLeaseCost = totalFromPayments + down;
  const averageCostPerMonth =
    months > 0 ? totalLeaseCost / months : 0;

  return {
    monthlyPayment: monthly,
    leaseTermMonths: months,
    downPayment: down,
    totalFromPayments,
    totalLeaseCost,
    averageCostPerMonth,
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
    name: "What does this Lease Calculator compute?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Total lease cost equals monthly payment times lease term in months, plus down payment (or capitalized cost reduction) paid upfront.",
    },
  },
  {
    "@type": "Question",
    name: "Does it calculate monthly payment from MSRP?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. You enter the monthly payment yourself. For car lease payment from price, residual, and money factor, use the Auto Lease Calculator on this site.",
    },
  },
  {
    "@type": "Question",
    name: "What is included in total lease cost?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Only the payments and down payment you enter. Taxes, acquisition fees, disposition fees, insurance, and maintenance are not added unless you include them in the monthly figure.",
    },
  },
  {
    "@type": "Question",
    name: "What is average cost per month?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Total lease cost divided by lease term months—useful for comparing to a purchase payment when down payment is spread across the lease.",
    },
  },
  {
    "@type": "Question",
    name: "Can I use this for equipment or property leases?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Any lease where you know the monthly payment, term in months, and upfront cash can use the same total-cost formula.",
    },
  },
];

const LeaseCalculator = () => {
  const [monthlyPayment, setMonthlyPayment] = useState(DEFAULTS.monthlyPayment);
  const [leaseTerm, setLeaseTerm] = useState(DEFAULTS.leaseTerm);
  const [downPayment, setDownPayment] = useState(DEFAULTS.downPayment);

  const result = computeLease(monthlyPayment, leaseTerm, downPayment);

  const reset = () => {
    setMonthlyPayment(DEFAULTS.monthlyPayment);
    setLeaseTerm(DEFAULTS.leaseTerm);
    setDownPayment(DEFAULTS.downPayment);
  };

  return (
    <>
      <Helmet>
        <title>
          Lease Calculator - Total Cost from Payment &amp; Term
        </title>
        <meta
          name="description"
          content="Add up total lease cost from monthly payment, lease term in months, and down payment. Does not compute monthly payment from vehicle price—enter payment you were quoted."
        />
        <meta
          name="keywords"
          content="lease calculator, total lease cost, lease payment sum, leasing cost estimate, monthly lease total"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lease Calculator" />
        <meta
          property="og:description"
          content="Total lease cost from monthly payment, months, and down payment."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lease Calculator" />
        <meta
          name="twitter:description"
          content="Sum lease payments plus upfront down payment."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Lease Calculator",
            url: PAGE_URL,
            description:
              "Calculate total lease cost from monthly payment, term in months, and down payment.",
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
            name: "Lease Calculator",
            url: PAGE_URL,
            description:
              "Web tool to total lease payments and upfront down payment.",
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
            headline: "How to Calculate Total Lease Cost",
            description:
              "Multiply monthly lease payment by number of months and add any down payment or drive-off cash.",
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
                name: "Lease Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Monthly lease payment
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={monthlyPayment}
                onChange={(e) => setMonthlyPayment(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.monthlyPayment}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Lease term (months)
            </label>
            <input
              type="number"
              value={leaseTerm}
              onChange={(e) => setLeaseTerm(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.leaseTerm}
              min="0"
              step="1"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="font-h3 text-h3 text-on-surface">
              Down payment (upfront)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                className={`${inputClassName} pl-10`}
                placeholder={DEFAULTS.downPayment}
                min="0"
                step="any"
              />
            </div>
            <p className="text-sm text-on-surface-variant">
              Cash due at signing (cap cost reduction, first payment, or fees you
              include in this figure)
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">Lease summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-lg">
              <span className="text-on-surface font-medium">Total lease cost</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result && !result.error
                  ? `$${fmtMoney(result.totalLeaseCost)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">All monthly payments</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.totalFromPayments)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Down payment</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.downPayment)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Average cost per month</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.averageCostPerMonth)}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Quoted monthly payment</span>
              <span className="font-code-num text-code-num">
                {result && !result.error
                  ? `$${fmtMoney(result.monthlyPayment)}`
                  : "—"}
              </span>
            </div>

            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}

            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Total = (monthly payment × months) + down payment. Enter the
              payment from your lease quote—this tool does not derive payment
              from MSRP, residual, or money factor.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default LeaseCalculator;
