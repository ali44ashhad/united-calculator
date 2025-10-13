import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const CommissionCalculator = () => {
  const [saleAmount, setSaleAmount] = useState("1000");
  const [commissionRate, setCommissionRate] = useState("10");

  const calculateCommission = () => {
    const sale = parseFloat(saleAmount);
    const rate = parseFloat(commissionRate) / 100;

    if (isNaN(sale) || isNaN(rate)) return null;

    const commission = sale * rate;
    const earnings = sale - commission;

    return {
      commission: commission.toFixed(2),
      earnings: earnings.toFixed(2),
    };
  };

  const result = calculateCommission();

  return (
    <>
      <Helmet>
        <title>Commission Calculator</title>
        <meta
          name="description"
          content="Use our Commission Calculator to easily calculate sales commissions based on percentage or tiered structures. Perfect for salespeople, freelancers, and businesses."
        />
        <meta
          name="keywords"
          content="commission calculator, sales commission calculator, calculate commission, commission percentage calculator, freelance commission calculator, tiered commission calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/commission-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Commission Calculator" />
        <meta
          property="og:description"
          content="Quickly calculate commissions based on sales amount and percentage using our Commission Calculator. Ideal for sales professionals and business owners."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/commission-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Commission Calculator",
      "url": "https://www.unitedcalculator.net/finance/commission-calculator",
      "description": "Use the Commission Calculator to determine commission earnings based on flat or tiered percentage structures. Great for sales, consulting, and service industries.",
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
          "name": "What is a commission calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A commission calculator helps determine earnings from sales by applying a percentage-based or tiered rate to the sales amount."
          }
        },
        {
          "@type": "Question",
          "name": "Who can use a commission calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is useful for sales representatives, real estate agents, freelancers, and businesses to calculate commissions based on revenue or sales deals."
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
          "name": "Commission Calculator",
          "item": "https://www.unitedcalculator.net/finance/commission-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Sale Amount ($)</label>
            <input
              type="number"
              value={saleAmount}
              onChange={(e) => setSaleAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Commission Rate (%)
            </label>
            <input
              type="number"
              value={commissionRate}
              onChange={(e) => setCommissionRate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Commission Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Commission Amount:</span>
                <span className="text-red-600 font-medium">
                  ${result.commission}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">
                  You Keep (After Commission):
                </span>
                <span className="text-green-600">${result.earnings}</span>
              </div>
            </div>
          </section>
          
        )}
     

      </div>
         <article class="py-6">
  <div class="mx-auto ">
    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Our <strong>Commission Calculator</strong> helps salespeople, managers, and
      business owners quickly compute commissions based on sales amount,
      commission rate, tiers, or split arrangements. Enter the sale value,
      commission structure (flat rate, percentage, or tiered), and any splits
      between team members to see the commission payout instantly.
    </p>

    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Whether you’re calculating single-sales commissions or complex tiered
      payouts, this tool gives clear, accurate results so you can forecast
      earnings and plan incentives. If you also want to check related numbers
      like take-home pay or how sales tax affects totals.
    </p>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">What is a Commission?</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        A commission is a payment to a salesperson or agent based on the value of
        the sales they generate. Commissions can be a flat fee per sale, a
        percentage of the sale amount, or follow a tiered structure where rates
        increase after hitting certain thresholds.
      </p>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        Commissions align incentives — higher sales earn higher payouts — and are
        commonly used in retail, real estate, finance, insurance, and many other
        industries.
      </p>
      <ul class="list-disc ml-5 mt-3 text-sm sm:text-base space-y-1">
        <li><strong>Flat commission:</strong> fixed amount per sale.</li>
        <li><strong>Percentage commission:</strong> percentage of revenue or price.</li>
        <li><strong>Tiered commission:</strong> multiple percentage brackets based on cumulative sales.</li>
        <li><strong>Split commission:</strong> commission divided among team members or partners.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Commission Calculation Formula</h2>
      <p class="text-sm sm:text-base leading-relaxed mb-3">
        The most common formulas depending on structure:
      </p>

      <div class="bg-gray-50 border border-gray-100 rounded-lg p-3 overflow-x-auto">
        <pre class="whitespace-pre-wrap text-sm sm:text-base leading-relaxed"><code>Flat commission = Fixed amount per sale
Percentage commission = Sale Amount × Commission Rate
Tiered commission = Σ (Sales in Tier × Tier Rate)
Split commission = Total Commission × Split Percentage</code></pre>
      </div>

      <p class="mt-3 text-sm sm:text-base leading-relaxed">
        For tiered plans you sum payouts across tiers. For split arrangements,
        apply the split percentage after computing the total commission.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">How to Use the Commission Calculator</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        Using the calculator is simple — enter the details below:
      </p>
      <ol class="list-decimal ml-5 mb-3 text-sm sm:text-base space-y-1">
        <li>Sales amount (single sale or total sales for the period).</li>
        <li>Choose commission type: flat, percentage, or tiered.</li>
        <li>If percentage: enter commission rate (e.g., 5% → 0.05).</li>
        <li>If tiered: enter tiers (thresholds and rates for each bracket).</li>
        <li>If split: enter split percentages for each recipient.</li>
        <li>Click <strong>Calculate</strong> to see payout breakdowns.</li>
      </ol>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>Supports flat, percentage, tiered, and split commissions</li>
        <li>Shows per-person splits and total commission cost</li>
        <li>Helps forecast earnings and plan compensation</li>
        <li>Useful for payroll, quota planning, and commission audits</li>
      </ul>
    </section>

   
    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Example Calculations</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Example 1 (Simple percentage):</strong></p>
          <p>$10,000 sale with a 6% commission → <strong>$10,000 × 6% = $600</strong></p>

          <hr class="my-2"/>

          <p><strong>Example 2 (Tiered):</strong></p>
          <p>
            Commission plan: 5% up to $5,000, 7% for next $5,000+. For $12,000 total sales:
          </p>
          <ul class="list-disc ml-5 mt-2">
            <li>Tier 1 → $5,000 × 5% = $250</li>
            <li>Tier 2 → $5,000 × 7% = $350</li>
            <li>Tier 3 → remaining $2,000 × 7% = $140</li>
          </ul>
          <p>Total Commission ≈ <strong>$740</strong></p>
        </div>

        <div class="bg-blue-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Example 3 (Split):</strong></p>
          <p>$740 total split 60/40 → 60% = <strong>$444</strong>; 40% = <strong>$296</strong></p>

          <hr class="my-2"/>

          <p><strong>Practical tip:</strong> For monthly/quarterly targets, calculate commissions per period and sum them to forecast total earnings.</p>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Factors That Affect Commission Payouts</h2>
      <p class="text-sm sm:text-base leading-relaxed mb-2">Common factors that change commission amounts:</p>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li><strong>Commission structure:</strong> flat vs percentage vs tiered.</li>
        <li><strong>Sales returns/refunds:</strong> can reduce paid commissions.</li>
        <li><strong>Quota attainment:</strong> accelerators may increase rates after targets.</li>
        <li><strong>Splits & overrides:</strong> team splits, managers' overrides, or referral fees.</li>
        <li><strong>Timing:</strong> commissions may be paid only after collection or after a grace period.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Benefits of Using the Commission Calculator</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>Quickly determine exact payouts for any sales scenario</li>
        <li>Compare different commission plans and incentive structures</li>
        <li>Forecast payroll costs and salesperson earnings</li>
        <li>Minimize disputes by providing a transparent, auditable calculation</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
      <dl class="text-sm sm:text-base">
        <dt class="font-semibold mt-4">Q.1 Can I calculate commissions with returns or chargebacks?</dt>
        <dd class="mt-1">Ans. Yes — subtract returns/chargebacks from gross sales before computing commission, or apply clawback rules as required.</dd>

        <dt class="font-semibold mt-4">Q.2 How do tiered commissions work?</dt>
        <dd class="mt-1">Ans. Sales are allocated to brackets. Each portion is multiplied by its bracket rate and summed to get the total commission.</dd>

        <dt class="font-semibold mt-4">Q.3 Can I split commissions between multiple people?</dt>
        <dd class="mt-1">Ans. Yes — compute the total commission first and then apply split percentages to divide the payout.</dd>

        <dt class="font-semibold mt-4">Q.4 Do you account for taxes in commission calculations?</dt>
        <dd class="mt-1">Ans. No — this calculator shows gross commission payouts. To estimate net income after taxes, combine results with a payroll/take-home tool such as the <a href="/SalaryCalculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Salary Calculator</a>.</dd>

        <dt class="font-semibold mt-4">Q.5 Are recurring commissions supported?</dt>
        <dd class="mt-1">Ans. The basic tool computes commissions for a given period or sale. For recurring/retainer commissions, run the calculation per period and sum results.</dd>

        <dt class="font-semibold mt-4">Q.6 Can I include sales tax or tips when calculating commission?</dt>
        <dd class="mt-1">Ans. Include or exclude sales tax or tips according to your company policy. For help checking tax impact, see our <a href="/SalesTaxCalculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Sales Tax Calculator</a> and <a href="/TipCalculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Tip Calculator</a>.</dd>
      </dl>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Conclusion</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        A <strong>Commission Calculator</strong> is an essential tool to ensure
        transparent, consistent, and fast commission calculations. Use it to
        design incentive plans, compute payouts, and avoid disputes — whether
        you're a salesperson, manager, or business owner.
      </p>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        Enter your sales data and commission rules into the calculator to get an
        immediate, itemized breakdown of payouts. This helps with payroll,
        planning, and motivating sales teams.
      </p>
    </section>
  </div>
</article>
    </>
  );
};

export default CommissionCalculator;
