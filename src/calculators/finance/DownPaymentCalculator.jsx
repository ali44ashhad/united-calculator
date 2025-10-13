import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DownPaymentCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState("500000");
  const [downPaymentPercentage, setDownPaymentPercentage] = useState("20");

  const calculateDownPayment = () => {
    const price = parseFloat(purchasePrice);
    const percentage = parseFloat(downPaymentPercentage);

    if (isNaN(price) || isNaN(percentage)) return null;

    const downPayment = (price * percentage) / 100;
    const loanAmount = price - downPayment;

    return {
      downPayment: downPayment.toFixed(2),
      loanAmount: loanAmount.toFixed(2),
    };
  };

  const result = calculateDownPayment();

  return (
    <>
      <Helmet>
        <title>Down Payment Calculator</title>
        <meta
          name="description"
          content="Use our Down Payment Calculator to estimate how much you need to pay upfront for a home, car, or any major purchase. Adjust purchase price and percentage to calculate easily."
        />
        <meta
          name="keywords"
          content="down payment calculator, home down payment, car down payment, calculate down payment, mortgage calculator, upfront cost calculator, real estate calculator, loan calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/down-payment-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Down Payment Calculator" />
        <meta
          property="og:description"
          content="Calculate your required down payment amount with ease. Perfect for estimating upfront costs for home or car loans based on purchase price and payment percentage."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/down-payment-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Down Payment Calculator",
      "url": "https://www.unitedcalculator.net/finance/down-payment-calculator",
      "description": "The Down Payment Calculator helps you determine how much money you'll need upfront for a major purchase like a home or car, based on a percentage of the total cost.",
      "publisher": {
        "@type": "Organization",
        "name": "United Calculator",
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
          "name": "What is a down payment calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A down payment calculator helps you estimate the upfront amount you need to pay when purchasing a home, car, or other large asset based on the total price and chosen down payment percentage."
          }
        },
        {
          "@type": "Question",
          "name": "How do I use a down payment calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter the purchase price and desired down payment percentage. The calculator will show the amount you need to pay upfront."
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
          "name": "Down Payment Calculator",
          "item": "https://www.unitedcalculator.net/finance/down-payment-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Purchase Price (₹)</label>
            <input
              type="number"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 500000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Down Payment (%)</label>
            <input
              type="number"
              value={downPaymentPercentage}
              onChange={(e) => setDownPaymentPercentage(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 20"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Down Payment Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Down Payment Amount:</span>
                <span className="text-green-600 font-medium">
                  ₹{result.downPayment}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Loan Amount Required:</span>
                <span className="text-blue-600">₹{result.loanAmount}</span>
              </div>
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
  <div class="mx-auto">
    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Our <strong>Down Payment Calculator</strong> helps homebuyers estimate how
      much cash they need up front to purchase a house, how that down payment
      affects monthly mortgage payments, and how different down-payment levels
      influence loan-to-value (LTV) and mortgage insurance requirements.
    </p>



    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">What is a Down Payment?</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        A down payment is the portion of the home’s purchase price you pay in
        cash at closing. The remainder is financed with a mortgage. Typical
        down payments range from 3% to 20% (or more) depending on loan type,
        lender requirements, and buyer preference.
      </p>
      <ul class="list-disc ml-5 mt-3 text-sm sm:text-base space-y-1">
        <li><strong>Higher down payment:</strong> lowers loan amount, monthly payments, and may avoid private mortgage insurance (PMI).</li>
        <li><strong>Lower down payment:</strong> reduces upfront cash need but increases loan-to-value and may increase monthly cost.</li>
        <li><strong>Source of funds:</strong> savings, gifts, grants, or down payment assistance programs.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Down Payment Formula</h2>
      <p class="text-sm sm:text-base leading-relaxed mb-3">
        The basic math is straightforward:
      </p>
      <div class="bg-gray-50 border border-gray-100 rounded-lg p-3 overflow-x-auto">
        <pre class="whitespace-pre-wrap text-sm sm:text-base leading-relaxed"><code>Down Payment = Purchase Price × Down Payment Rate

Loan Amount = Purchase Price - Down Payment

Down Payment Rate (example) = 20% → 0.20</code></pre>
      </div>
      <p class="mt-3 text-sm sm:text-base leading-relaxed">
        Example: $300,000 home with a 10% down payment → Down Payment = $300,000 × 0.10 = $30,000; Loan Amount = $270,000.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">How to Use the Down Payment Calculator</h2>
      <ol class="list-decimal ml-5 mb-3 text-sm sm:text-base space-y-1">
        <li>Enter the home purchase price.</li>
        <li>Choose a down payment percentage or enter a custom amount.</li>
        <li>Optionally add estimated closing costs and one-time fees.</li>
        <li>Click <strong>Calculate</strong> to see the down payment, loan amount, and estimated LTV.</li>
      </ol>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>Shows down payment dollar amount and resulting loan balance</li>
        <li>Calculates Loan-to-Value (LTV) to help determine PMI and loan options</li>
        <li>Includes quick links to run mortgage payment or affordability checks</li>
      </ul>
    </section>

    
    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Example Scenarios</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Example 1 — 20% Down:</strong></p>
          <p>Purchase Price: $350,000</p>
          <p>Down Payment Rate: 20% → <strong>$70,000</strong></p>
          <p>Loan Amount: $280,000 → Lower monthly payments and typically no PMI.</p>
        </div>

        <div class="bg-blue-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Example 2 — 5% Down:</strong></p>
          <p>Purchase Price: $350,000</p>
          <p>Down Payment Rate: 5% → <strong>$17,500</strong></p>
          <p>Loan Amount: $332,500 → Higher LTV, likely requires PMI and higher monthly cost.</p>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Factors to Consider</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li><strong>Private Mortgage Insurance (PMI):</strong> usually required for conventional loans with LTV above 80% (i.e., down payment under 20%).</li>
        <li><strong>Interest rate impact:</strong> larger down payments can help secure better rates.</li>
        <li><strong>Opportunity cost:</strong> using more savings for the down payment may reduce liquidity for emergencies.</li>
        <li><strong>Assistance programs:</strong> first-time buyer grants or gift funds may reduce your needed cash.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Benefits of Using the Calculator</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>Quickly estimate the cash needed at closing</li>
        <li>Compare how different down-payment levels affect loan size and LTV</li>
        <li>Plan whether to save more or buy now with a lower down payment</li>
        <li>Prepare for PMI, closing costs, and monthly payment expectations</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
      <dl class="text-sm sm:text-base">
        <dt class="font-semibold mt-4">Q.1 What is the minimum down payment?</dt>
        <dd class="mt-1">Ans. Minimums depend on loan type: some programs allow as low as 3% down, while VA loans may offer 0% for eligible veterans. Check lender guidelines for specifics.</dd>

        <dt class="font-semibold mt-4">Q.2 Will a larger down payment lower my interest rate?</dt>
        <dd class="mt-1">Ans. Often, yes — lenders may offer better rates for lower LTV loans. Also, avoiding PMI can reduce total monthly cost.</dd>

        <dt class="font-semibold mt-4">Q.3 Should I use savings or a gift for the down payment?</dt>
        <dd class="mt-1">Ans. Gifts are acceptable for many loans but must follow lender documentation rules. We recommend confirming with your lender before relying on gifted funds.</dd>

        <dt class="font-semibold mt-4">Q.4 How does down payment affect monthly payment?</dt>
        <dd class="mt-1">Ans. A larger down payment reduces the loan amount and therefore monthly mortgage payments. After calculating your down payment here, use the Mortgage Calculator to estimate monthly payments.</dd>
      </dl>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Conclusion</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        A <strong>Down Payment Calculator</strong> helps you plan the cash required
        to buy a home and understand trade-offs between upfront cost and long-term
        monthly expenses. After you choose a down payment, run an amortization
        schedule with our
        <a href="https://www.unitedcalculator.net/finance/mortgage-amortization-calculator"
           target="_blank"
           class="text-blue-600 hover:text-blue-800 underline">
           Mortgage Amortization Calculator
        </a>
        to view detailed payment breakdowns over time.
      </p>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        Ready to estimate? Enter the purchase price and your preferred down
        payment to see loan amount, LTV, and next steps toward homeownership.
      </p>
    </section>
  </div>
</article>

    </>
  );
};

export default DownPaymentCalculator;
