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
          href="https://www.unitedcalculator.net/finance/bond-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bond Calculator" />
        <meta
          property="og:description"
          content="Quickly calculate bond prices, yields, and present value with our Bond Calculator. Essential tool for investors in fixed-income securities."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/bond-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Bond Calculator",
      "url": "https://www.unitedcalculator.net/finance/bond-calculator",
      "description": "Use our Bond Calculator to determine the price, present value, and yield of bond investments. Perfect for evaluating fixed-income returns.",
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
      <article class="py-6">
        <p class="mb-6">
          Our <strong>Bond Calculator</strong> helps you determine the price,
          yield, and overall return of a bond investment. By entering details
          such as face value, coupon rate, years to maturity, and market
          interest rate, you’ll get a clear breakdown of whether the bond is
          trading at a discount, premium, or at par. This makes it easier to
          evaluate investment opportunities and compare bonds before making a
          decision.
        </p>

        <p class="mb-6">
          Whether you’re a beginner or an experienced investor, this calculator
          gives you accurate results to assess risk and potential returns. If
          you want to explore long-term returns on other types of investments,
          you can also try our{" "}
          <a
            href="https://www.unitedcalculator.net/finance/average-return-calculator"
            target="_blank"
            class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
          >
            Average Return Calculator
          </a>
          .
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">What is a Bond?</h2>
          <p>
            A bond is a fixed-income security that represents a loan made by an
            investor to a government, corporation, or other entity. In return,
            the issuer promises to pay periodic <strong>coupon payments</strong>{" "}
            (interest) and return the <strong>face value</strong> (principal) at
            maturity.
          </p>
          <p class="mt-2">
            Bonds are generally considered safer than stocks, but their returns
            depend on factors such as interest rates, credit rating of the
            issuer, and market conditions. Understanding bond pricing is key to
            making informed investment decisions.
          </p>
          <p class="mt-2">Key terms in a bond investment:</p>
          <ul class="list-disc ml-5 mt-2">
            <li>
              <strong>Face Value (Par Value):</strong> The amount the issuer
              repays at maturity, usually $1,000 per bond.
            </li>
            <li>
              <strong>Coupon Rate:</strong> The annual interest rate the bond
              pays, based on its face value.
            </li>
            <li>
              <strong>Yield to Maturity (YTM):</strong> The total return
              expected if the bond is held until maturity.
            </li>
            <li>
              <strong>Market Price:</strong> The current price at which the bond
              trades in the market.
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Bond Pricing Formula</h2>
          <p>
            The value of a bond is the present value of all future coupon
            payments plus the present value of the face value at maturity. The
            formula is:
          </p>
          <pre class="bg-gray-100 p-3 rounded-lg overflow-auto mb-3">
            <code>Bond Price = Σ [ C ÷ (1 + r)ᵗ ] + [ F ÷ (1 + r)ⁿ ]</code>
          </pre>
          <ul class="list-disc ml-5 mb-3">
            <li>
              <strong>C</strong> — Coupon payment (Face Value × Coupon Rate)
            </li>
            <li>
              <strong>F</strong> — Face Value of the bond
            </li>
            <li>
              <strong>r</strong> — Market interest rate per period
            </li>
            <li>
              <strong>t</strong> — Period number
            </li>
            <li>
              <strong>n</strong> — Total number of periods
            </li>
          </ul>
          <p>
            This formula ensures accurate pricing by discounting future cash
            flows to their present value. If the bond’s price is above face
            value, it’s trading at a <strong>premium</strong>. If it’s below,
            it’s at a<strong>discount</strong>.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            How to Use the Bond Calculator
          </h2>
          <p>
            Using the Bond Calculator is straightforward. You’ll need to input:
          </p>
          <ol class="list-decimal ml-5 mb-3">
            <li>Bond’s face value (usually $1,000).</li>
            <li>Coupon rate (annual interest rate of the bond).</li>
            <li>Years to maturity (or total number of periods).</li>
            <li>Current market interest rate (yield).</li>
            <li>
              Click <strong>Calculate</strong> to see the bond price, yield, and
              total expected return.
            </li>
          </ol>
          <ul class="list-disc ml-5">
            <li>Shows if the bond is at a discount, premium, or par value</li>
            <li>Helps you compare bonds with different rates and maturities</li>
            <li>
              Estimates the total interest earned over the life of the bond
            </li>
            <li>Provides a clearer picture of long-term investment returns</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Example Calculation</h2>
          <div class="bg-blue-50 p-4 rounded-lg space-y-2">
            <p>
              <strong>Example:</strong> Suppose you buy a bond with a{" "}
              <strong>face value of $1,000</strong>, a{" "}
              <strong>coupon rate of 5%</strong>, and <strong>10 years</strong>{" "}
              to maturity. If the current market interest rate is{" "}
              <strong>4%</strong>:
            </p>
            <p>Step 1: Annual coupon payment = $1,000 × 5% = $50</p>
            <p>Step 2: Discount each coupon by (1 + 0.04)ᵗ</p>
            <p>Step 3: Discount the $1,000 face value by (1 + 0.04)¹⁰</p>
            <p>
              Result → Bond Price ≈ <strong>$1,081.11</strong>
            </p>
            <p>
              This means the bond trades at a <strong>premium</strong> because
              the coupon rate (5%) is higher than the market rate (4%).
            </p>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Factors That Affect Bond Prices
          </h2>
          <p>Bond prices move based on several factors. Key ones include:</p>
          <ul class="list-disc ml-5">
            <li>
              <strong>Interest Rates:</strong> When rates rise, bond prices
              fall; when rates drop, bond prices rise.
            </li>
            <li>
              <strong>Time to Maturity:</strong> Longer-term bonds are more
              sensitive to interest rate changes.
            </li>
            <li>
              <strong>Credit Risk:</strong> Lower-rated bonds offer higher
              yields but carry more default risk.
            </li>
            <li>
              <strong>Inflation:</strong> Higher inflation erodes bond returns,
              lowering bond prices.
            </li>
            <li>
              <strong>Market Demand:</strong> High demand for bonds can drive
              prices up.
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Benefits of Using the Bond Calculator
          </h2>
          <ul class="list-disc ml-5">
            <li>Helps you determine fair value of a bond before purchase</li>
            <li>Shows whether a bond is overpriced or undervalued</li>
            <li>Provides clarity on expected returns (YTM)</li>
            <li>Assists in comparing different bonds quickly</li>
            <li>Helps manage risk and make smarter investment decisions</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Frequently Asked Questions (FAQs)
          </h2>
          <dl>
            <dt class="font-semibold mt-4">
              Q.1 What does the Bond Calculator show?
            </dt>
            <dd>
              Ans. It shows the bond’s price, yield to maturity, and total
              expected return based on your inputs.
            </dd>

            <dt class="font-semibold mt-4">
              Q.2 What’s the difference between coupon rate and YTM?
            </dt>
            <dd>
              Ans. The coupon rate is the fixed interest paid by the bond, while
              YTM reflects the overall return considering price and time to
              maturity.
            </dd>

            <dt class="font-semibold mt-4">
              Q.3 Can bond prices change after purchase?
            </dt>
            <dd>
              Ans. Yes, bond prices fluctuate with market interest rates,
              inflation expectations, and credit risk of the issuer.
            </dd>

            <dt class="font-semibold mt-4">
              Q.4 Are government bonds safer than corporate bonds?
            </dt>
            <dd>
              Ans. Generally, yes. Government bonds have lower default risk, but
              corporate bonds often offer higher yields.
            </dd>

            <dt class="font-semibold mt-4">
              Q.5 Can I use this calculator for zero-coupon bonds?
            </dt>
            <dd>
              Ans. Yes, just set the coupon rate to 0% and enter the face value,
              maturity, and market interest rate.
            </dd>

            <dt class="font-semibold mt-4">
              Q.6 Does this calculator include taxes?
            </dt>
            <dd>
              Ans. No, it only estimates bond price and returns. Taxes on
              interest income or capital gains are not included.
            </dd>

            <dt class="font-semibold mt-4">
              Q.7 How often do bonds pay interest?
            </dt>
            <dd>
              Ans. Most bonds pay semi-annually, but some pay annually or
              quarterly depending on the terms.
            </dd>
          </dl>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            A <strong>Bond Calculator</strong> is an essential tool for
            investors who want to analyze fixed-income securities. By
            calculating bond price, yield, and returns, it provides valuable
            insights before making an investment.
          </p>
          <p>
            With this calculator, you can compare different bonds, evaluate
            risk, and make smarter portfolio decisions. Whether you’re investing
            for income, safety, or diversification, understanding bond pricing
            ensures you make well-informed choices.
          </p>
        </section>
      </article>
    </>
  );
};

export default BondCalculator;
