import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const BondCalculator = () => {
  const DEFAULTS = {
    faceValue: "1000",
    couponRate: "5",
    yearsToMaturity: "10",
    marketRate: "4",
  };

  const [faceValue, setFaceValue] = useState(DEFAULTS.faceValue);
  const [couponRate, setCouponRate] = useState(DEFAULTS.couponRate);
  const [yearsToMaturity, setYearsToMaturity] = useState(
    DEFAULTS.yearsToMaturity
  );
  const [marketRate, setMarketRate] = useState(DEFAULTS.marketRate);

  const calculateBondPrice = () => {
    const FV = parseFloat(faceValue);
    const CR = parseFloat(couponRate) / 100;
    const MR = parseFloat(marketRate) / 100;
    const N = parseFloat(yearsToMaturity);

    if (isNaN(FV) || isNaN(CR) || isNaN(MR) || isNaN(N) || N <= 0) return null;

    const C = FV * CR;

    let price = 0;
    for (let t = 1; t <= N; t++) {
      price += C / Math.pow(1 + MR, t);
    }

    price += FV / Math.pow(1 + MR, N);

    const totalCoupons = C * N;
    const totalReturns = price - totalCoupons;

    return {
      price: price.toFixed(2),
      totalCoupons: totalCoupons.toFixed(2),
      totalReturns: totalReturns.toFixed(2),
    };
  };

  const result = calculateBondPrice();

  return (
    <>
      <Helmet>
        <title>
          Bond Calculator - Bond Price & Present Value for Fixed Income
        </title>
        <meta
          name="description"
          content="Estimate bond price from face value, coupon rate, years to maturity, and a market discount rate. Quick fixed-income present value helper for annual-pay bonds."
        />
        <meta
          name="keywords"
          content="bond calculator, bond price calculator, bond valuation calculator, present value of bond, coupon bond calculator, fixed income calculator, bond present value, savings bond calculator, corporate bond price"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/bond-calculator"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bond Calculator - Price & Coupon Summary"
        />
        <meta
          property="og:description"
          content="Discount annual coupon cash flows and principal to estimate bond price. Compare premium vs discount using your inputs."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/bond-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bond Calculator - Fixed Income Price Estimate"
        />
        <meta
          name="twitter:description"
          content="Enter face value, coupon, maturity, and market rate to see an estimated bond price and coupon totals."
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Bond Calculator",
      "url": "https://www.unitedcalculator.net/finance/bond-calculator",
      "description": "Bond calculator to help estimate bond price by discounting future coupon payments and face value using a market interest rate.",
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
          "name": "What is a bond calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A bond calculator helps estimate the price of a bond by discounting its coupon payments and principal repayment using an assumed market interest rate, along with related summary figures."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a bond calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It helps you see how coupon rate, maturity, and discount rate interact before you buy or compare fixed-income ideas, and it supports quick what-if checks."
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
          "name": "Bond Calculator",
          "item": "https://www.unitedcalculator.net/finance/bond-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Face Value</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                $
              </span>
              <input
                type="number"
                value={faceValue}
                onChange={(e) => setFaceValue(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.faceValue}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Coupon Rate</label>
            <div className="relative">
              <input
                type="number"
                value={couponRate}
                onChange={(e) => setCouponRate(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.couponRate}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Years to Maturity
            </label>
            <input
              type="number"
              value={yearsToMaturity}
              onChange={(e) => setYearsToMaturity(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
              placeholder={DEFAULTS.yearsToMaturity}
              min="1"
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Market Interest Rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={marketRate}
                onChange={(e) => setMarketRate(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all"
                placeholder={DEFAULTS.marketRate}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                %
              </span>
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
                setFaceValue(DEFAULTS.faceValue);
                setCouponRate(DEFAULTS.couponRate);
                setYearsToMaturity(DEFAULTS.yearsToMaturity);
                setMarketRate(DEFAULTS.marketRate);
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
            Bond Price Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Bond Price</span>
              <span className="font-code-num text-code-num text-primary">
                {result ? `$${result.price}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total Coupon Payments</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.totalCoupons}` : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total Return</span>
              <span className="font-code-num text-code-num">
                {result ? `$${result.totalReturns}` : "—"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BondCalculator;
