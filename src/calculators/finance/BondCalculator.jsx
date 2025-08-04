import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const BondCalculator = () => {
  const [faceValue, setFaceValue] = useState("1000");
  const [couponRate, setCouponRate] = useState("5");
  const [yearsToMaturity, setYearsToMaturity] = useState("10");
  const [marketRate, setMarketRate] = useState("4");

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
        <title>Saving Bond Calculator | Ideal for fixed-income investors</title>
        <meta
          name="description"
          content="Use our saving Bond Calculator to determine the present value, yield, and price of your bond investments. Ideal for fixed-income investors and financial planning."
        />
        <meta
          name="keywords"
          content="bond calculator, saving bond calculator, bond price calculator, bond yield calculator, bond valuation calculator, fixed income calculator, present value of bond, bond investment calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unitedcalculator.net/finance/bond-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bond Calculator" />
        <meta
          property="og:description"
          content="Quickly calculate bond prices, yields, and present value with our Bond Calculator. Essential tool for investors in fixed-income securities."
        />
        <meta
          property="og:url"
          content="https://unitedcalculator.net/finance/bond-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Bond Calculator",
      "url": "https://unitedcalculator.net/finance/bond-calculator",
      "description": "Use our Bond Calculator to determine the price, present value, and yield of bond investments. Perfect for evaluating fixed-income returns.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
        "url": "https://unitedcalculator.net"
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
            "text": "A bond calculator helps you determine the price, present value, and yield of a bond investment based on interest rate, maturity, and coupon payments."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I use a bond calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a bond calculator allows you to accurately assess the value of your fixed-income investments and make informed financial decisions."
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
          "item": "https://unitedcalculator.net"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Finance Calculators",
          "item": "https://unitedcalculator.net/finance"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Bond Calculator",
          "item": "https://unitedcalculator.net/finance/bond-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>
      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Face Value ($)</label>
            <input
              type="number"
              value={faceValue}
              onChange={(e) => setFaceValue(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Coupon Rate (%)</label>
            <input
              type="number"
              value={couponRate}
              onChange={(e) => setCouponRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Years to Maturity</label>
            <input
              type="number"
              value={yearsToMaturity}
              onChange={(e) => setYearsToMaturity(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Market Interest Rate (%)
            </label>
            <input
              type="number"
              value={marketRate}
              onChange={(e) => setMarketRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 4"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Bond Price Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Bond Price:</span>
                <span className="text-blue-600 font-medium">
                  ${result.price}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total Coupon Payments:</span>
                <span className="text-yellow-600 font-medium">
                  ${result.totalCoupons}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Return:</span>
                <span className="text-green-600">${result.totalReturns}</span>
              </div>
            </div>
          </section>
        )}
      </div>{" "}
    </>
  );
};

export default BondCalculator;
