import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState("5000");
  const [expectedRate, setExpectedRate] = useState("12");
  const [timePeriod, setTimePeriod] = useState("10");

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(expectedRate) / 100 / 12;
    const n = parseFloat(timePeriod) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n)) return null;

    const maturityValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const totalInvested = P * n;
    const estimatedReturns = maturityValue - totalInvested;

    return {
      maturityValue: maturityValue.toFixed(2),
      totalInvested: totalInvested.toFixed(2),
      estimatedReturns: estimatedReturns.toFixed(2),
    };
  };

  const result = calculateSIP();

  return (
    <>
      {" "}
      <Helmet>
        <title>
          Calculate Your Online Mutual Fund Returns with the SIP Calculator -
          united calculator
        </title>
        <meta
          name="description"
          content="To determine how much your mutual funds will return, use our free SIP Calculator. Plan your monthly contributions, consider projected returns, and prudently increase your capital."
        />
        <meta
          name="keywords"
          content="step up sip calculator, sip calculator sbi, sbi sip calculator, sip calculator groww, groww sip calculator, sip calculator with step up, sip calculator with inflation, hdfc sip calculator, sip calculator online"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/sip-calculator"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Calculate Your Online Mutual Fund Returns with the SIP Calculator - united calculator"
        />
        <meta
          property="og:description"
          content="Use a free online SIP calculator to find out the expected returns on your mutual fund investments. Using precise projections will help you make better selections."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/sip-calculator"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SIP Calculator - Mutual Fund Return Estimator"
        />
        <meta
          name="twitter:description"
          content="Use our SIP calculator to calculate mutual fund returns. Perfect tool for monthly investment planning."
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "SIP Calculator",
            "url": "https://www.unitedcalculator.net/finance/sip-calculator",
            "description": "Free online SIP calculator to estimate mutual fund returns. Calculate your monthly investment and future value to plan your wealth.",
            "publisher": {
              "@type": "Organization",
              "name": "United Calculators",
              "url": "https://www.unitedcalculator.net"
            }
          }
          `}
        </script>
        {/* JSON-LD: FAQ */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a SIP calculator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A SIP calculator is a financial tool that helps investors estimate the future value of their SIP investments based on expected returns and time period."
                }
              },
              {
                "@type": "Question",
                "name": "Is SIP calculator accurate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SIP calculators provide estimates based on assumed rates of return. Actual returns may vary depending on market performance."
                }
              }
            ]
          }
          `}
        </script>
        {/* JSON-LD: Breadcrumb */}
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
                "name": "SIP Calculator",
                "item": "https://www.unitedcalculator.net/finance/sip-calculator"
              }
            ]
          }
          `}
        </script>
      </Helmet>
      <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              Monthly Investment (₹)
            </label>
            <input
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Expected Annual Return (%)
            </label>
            <input
              type="number"
              value={expectedRate}
              onChange={(e) => setExpectedRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 12"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Time Period (in Years)
            </label>
            <input
              type="number"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              SIP Result Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Invested Amount:</span>
                <span className="text-yellow-600 font-medium">
                  ₹{result.totalInvested}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Estimated Returns:</span>
                <span className="text-green-600 font-medium">
                  ₹{result.estimatedReturns}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Value at Maturity:</span>
                <span className="text-blue-600">₹{result.maturityValue}</span>
              </div>
            </div>
          </section>
        )}
      </div>
      <div className=" py-10 space-y-10 text-gray-800 [&_a]:text-blue-600 [&_a]:font-semibold [&_a]:no-underline">
        <section>
          <p className="text-lg text-gray-700">
            It has never been simpler to make a financial future statement. Use
            our SIP Calculator to determine how much money will grow over time
            from consistent monthly mutual fund investments. This tool makes it
            simple and accurate to see your long-term development as an
            investor, regardless of your level of experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            What is SIP Calculator?
          </h2>
          <p className="mb-2">
            A Systematic Investment Plan (SIP) allows investors to invest a
            fixed amount in a mutual fund on a regular basis. The SIP calculator
            helps determine how much money your monthly investment can yield
            over a certain period of time at the expected rate of return.
          </p>
          <p>
            Unlike a lump sum investment, SIPs promote disciplined investment
            and take advantage of rupee cost averaging and compounding.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            How to use the SIP Calculator?
          </h2>
          <p className="mb-4">
            Our SIP calculator is simple to use and only takes a few seconds:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Enter the monthly investment</strong> – the amount that
              you plan to invest every month.
            </li>
            <li>
              <strong>Enter the expected rate of return</strong> – Usually
              between 10%-15% annually for equity mutual funds.
            </li>
            <li>
              <strong>Set the time period</strong> – Total investment period in
              years.
            </li>
            <li>
              <strong>Click on "Calculate"</strong> to get:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Total amount of investment</li>
                <li>Estimated return</li>
                <li>Maturity Amount</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            SIP Calculator Formula
          </h2>
          <p className="mb-2">The formula used for calculating SIP is:</p>
          <p className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded text-sm sm:text-base overflow-x-auto">
            FV = P × [(1 + r)<sup>n</sup> - 1] × (1 + r) / r
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>
              <strong>FV</strong> = Future Value (Maturity Amount)
            </li>
            <li>
              <strong>P</strong> = Monthly investment
            </li>
            <li>
              <strong>r</strong> = Expected return per month (annual rate ÷ 12 ÷
              100)
            </li>
            <li>
              <strong>n</strong> = Total number of months
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Why use SIP Calculator?
          </h2>
          <p className="mb-2">
            It is important to understand the potential returns in advance for
            financial planning. Our SIP calculator helps with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Setting realistic financial goals</li>
            <li>Comparison of different investment scenarios</li>
            <li>Anticipating the long-term benefits of early investment</li>
            <li>Encouraging continued savings</li>
          </ul>
          <p className="mt-4">
            For instance, investing ₹5,000 monthly for 10 years at a 12% return
            can fetch you over ₹11.6 lakh – almost double the amount you
            invested.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Explore Related Financial Tools
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>CAGR Calculator</strong> – to measure investment growth
              over time
            </li>
            <li>
              <strong>Lumpsum Calculator</strong> – Ideal if you are planning to
              invest once instead of monthly SIPs
            </li>
            <li>
              <strong>Income Tax Calculator</strong> – To plan the after-tax
              return
            </li>
            <li>
              <strong>EMI Calculator</strong> – To manage debt while investing
              in SIPs
            </li>
          </ul>
          <p className="mt-3">
            These tools work together to support smart investment decisions and
            overall financial management.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">
                What is the minimum amount to start a SIP?
              </h3>
              <p>
                You can start a SIP with as little as ₹500 per month depending
                on the mutual fund scheme.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Is SIP better than a lump sum investment?
              </h3>
              <p>
                Both have their own benefits. SIPs are better for regular
                savings and market fluctuations, while lump sums work well when
                you have a large sum ready to invest.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Are SIP returns guaranteed?
              </h3>
              <p>
                No. SIP returns depend on market performance. However, long-term
                SIPs in equity funds offer better returns with lower average
                risk.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Can I increase my SIP amount over time?
              </h3>
              <p>
                Yes, many mutual funds offer a SIP step-up facility that lets
                you increase your SIP amount periodically.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Start Planning Today</h2>
          <p>
            The SIP calculator isn't just a number cruncher – it's your first
            step toward financial discipline. Use it regularly to keep track of
            your growth, explore alternative scenarios, and stay committed to
            your goals.
          </p>
          <p className="mt-3">
            Want to estimate a lump-sum investment? Try our{" "}
            <a href="/lumpsum-calculator">Lumpsum Calculator</a> or calculate
            effective investment return using the{" "}
            <a href="/cagr-calculator">CAGR Calculator</a>.
          </p>
        </section>
      </div>
    </>
  );
};

export default SIPCalculator;
