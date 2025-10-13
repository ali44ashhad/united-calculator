import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DebtToIncomeRatioCalculator = () => {
  const [monthlyDebtPayments, setMonthlyDebtPayments] = useState("1500");
  const [grossMonthlyIncome, setGrossMonthlyIncome] = useState("6000");

  const calculateDTI = () => {
    const debt = parseFloat(monthlyDebtPayments);
    const income = parseFloat(grossMonthlyIncome);

    if (isNaN(debt) || isNaN(income) || income === 0) return null;

    const dti = (debt / income) * 100;

    let category = "";
    if (dti < 20) category = "Excellent";
    else if (dti >= 20 && dti < 35) category = "Good";
    else if (dti >= 35 && dti < 50) category = "Fair";
    else category = "Poor";

    return {
      dti: dti.toFixed(2),
      category,
    };
  };

  const result = calculateDTI();

  return (
    <>
      <Helmet>
        <title>Debt-to-Income Ratio Calculator</title>
        <meta
          name="description"
          content="Use our Debt-to-Income Ratio Calculator to assess your financial health. Calculate your DTI ratio and determine your loan eligibility based on your income and monthly debt payments."
        />
        <meta
          name="keywords"
          content="debt to income ratio calculator, DTI calculator, loan eligibility calculator, mortgage DTI, debt income calculator, personal finance calculator, financial health tool, DTI ratio"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/debt-to-income-ratio-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Debt-to-Income Ratio Calculator" />
        <meta
          property="og:description"
          content="Calculate your debt-to-income ratio using this simple tool to evaluate your loan affordability. Perfect for mortgage planning and financial management."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/debt-to-income-ratio-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Debt-to-Income Ratio Calculator",
      "url": "https://www.unitedcalculator.net/finance/debt-to-income-ratio-calculator",
      "description": "Use the Debt-to-Income Ratio Calculator to determine your DTI and understand how your debt compares to your income. This is a key metric used by lenders to assess your financial stability.",
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
          "name": "What is a debt-to-income ratio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Debt-to-income (DTI) ratio is the percentage of your gross monthly income that goes toward paying your monthly debt payments. It helps lenders evaluate your ability to manage monthly payments and repay debts."
          }
        },
        {
          "@type": "Question",
          "name": "Why is DTI important for loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lenders use your DTI ratio to determine whether you can afford to take on additional debt. A lower DTI ratio indicates better financial health and increases your chances of loan approval."
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
          "name": "Debt-to-Income Ratio Calculator",
          "item": "https://www.unitedcalculator.net/finance/debt-to-income-ratio-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              Monthly Debt Payments ($)
            </label>
            <input
              type="number"
              value={monthlyDebtPayments}
              onChange={(e) => setMonthlyDebtPayments(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1500"
              min="0"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Gross Monthly Income ($)
            </label>
            <input
              type="number"
              value={grossMonthlyIncome}
              onChange={(e) => setGrossMonthlyIncome(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 6000"
              min="0"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Debt-to-Income Ratio Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">DTI Ratio:</span>
                <span className="text-blue-600 font-medium">
                  {result.dti} %
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Category:</span>
                <span className="text-green-600">{result.category}</span>
              </div>
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
  <div class="mx-auto">
    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Use our <strong>Debt-to-Income Ratio (DTI) Calculator</strong> to quickly find
      your DTI — a key number lenders use to decide how much you can borrow.
      Enter your gross monthly income and total monthly debt payments to see
      your front-end and back-end DTI percentages and understand how lenders
      view your borrowing risk. If you need to estimate take-home pay after taxes,
      compare results with the <a href="https://www.unitedcalculator.net/finance/income-tax-calculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Income Tax Calculator</a>.
    </p>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">What is Debt-to-Income Ratio?</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        <strong>DTI</strong> is the percentage of your gross monthly income that
        goes toward debt payments. Lenders commonly evaluate two DTIs:
      </p>
      <ul class="list-disc ml-5 mt-3 text-sm sm:text-base space-y-1">
        <li><strong>Front-end DTI:</strong> housing-related payments (mortgage, insurance, property taxes) ÷ gross monthly income.</li>
        <li><strong>Back-end DTI:</strong> all monthly debt payments (housing, credit cards, student loans, auto loans, minimum payments) ÷ gross monthly income.</li>
      </ul>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        Lenders use DTI to assess whether you can comfortably repay a new loan; lower ratios are generally better.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">How the DTI Calculator Works</h2>
      <p class="text-sm sm:text-base leading-relaxed mb-3">
        The calculator asks for:
      </p>
      <ol class="list-decimal ml-5 mb-3 text-sm sm:text-base space-y-1">
        <li>Gross monthly income (salary, bonuses, rental income, etc.).</li>
        <li>Monthly housing payment (rent or mortgage principal & interest + insurance + taxes).</li>
        <li>Other monthly debt payments: credit card minimums, auto loans, student loans, personal loans, alimony, and child support.</li>
      </ol>

      <div class="bg-gray-50 border border-gray-100 rounded-lg p-3 overflow-x-auto">
        <pre class="whitespace-pre-wrap text-sm sm:text-base leading-relaxed"><code>Front-end DTI = (Monthly housing payment ÷ Gross monthly income) × 100
Back-end DTI = (Total monthly debt payments ÷ Gross monthly income) × 100</code></pre>
      </div>

      <p class="mt-3 text-sm sm:text-base leading-relaxed">
        For borrowers considering refinancing or applying for a new loan, model the proposed monthly payment with our <a href="https://www.unitedcalculator.net/finance/loan-calculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Loan Calculator</a> and enter that value into the DTI calculator to see the impact.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Why DTI Matters</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        Lenders often have maximum DTI thresholds for mortgage approvals, credit lines, and personal loans. Keeping your DTI low increases your chances of:
      </p>
      <ul class="list-disc ml-5 mt-3 text-sm sm:text-base space-y-1">
        <li>Qualifying for better interest rates</li>
        <li>Getting approved for larger loan amounts</li>
        <li>Avoiding the need for mortgage insurance or additional underwriting requirements</li>
      </ul>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        Typical guideline examples: many mortgage lenders prefer a back-end DTI under ~43%, while stricter programs may require lower ratios — but exact thresholds vary by lender and loan program.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">How to Improve Your DTI</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        Common ways to lower your DTI include reducing debt, increasing income, or both. Tactics:
      </p>
      <ul class="list-disc ml-5 mt-3 text-sm sm:text-base space-y-1">
        <li>Pay down high-interest credit cards or balances to lower monthly minimums.</li>
        <li>Refinance or consolidate debts to reduce monthly payments (check the <a href="https://www.unitedcalculator.net/finance/loan-calculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Loan Calculator</a> for payment estimates before refinancing).</li>
        <li>Increase gross income via a raise, side gig, or documented rental income.</li>
      </ul>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        If you’re planning to buy a home, use the DTI calculator together with our <a href="https://www.unitedcalculator.net/finance/mortgage-calculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Mortgage Calculator</a> to see what loan amount and payment fit your DTI targets.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Example Calculation</h2>
      <div class="bg-blue-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
        <p><strong>Example:</strong> Gross monthly income = $6,000</p>
        <p>Monthly housing (rent/mortgage+taxes+insurance) = $1,500</p>
        <p>Other monthly debts (cards, loans, etc.) = $700</p>
        <p>Front-end DTI → ($1,500 ÷ $6,000) × 100 = <strong>25%</strong></p>
        <p>Back-end DTI → (($1,500 + $700) ÷ $6,000) × 100 = <strong>36.67%</strong></p>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
      <dl class="text-sm sm:text-base">
        <dt class="font-semibold mt-4">Q.1 What is a "good" DTI?</dt>
        <dd class="mt-1">Ans. Lower is better. Many lenders prefer back-end DTI under 43%, but “good” depends on lender, loan type, and other compensating factors like savings and credit score.</dd>

        <dt class="font-semibold mt-4">Q.2 Should I include taxes in gross income?</dt>
        <dd class="mt-1">Ans. Use gross (pre-tax) monthly income. If you have complex income sources, verify which income lenders will consider — and if you want to estimate post-tax affordability, the <a href="/IncomeTaxCalculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Income Tax Calculator</a> can help approximate net pay.</dd>

        <dt class="font-semibold mt-4">Q.3 Do lenders count all monthly obligations?</dt>
        <dd class="mt-1">Ans. Most lenders include recurring obligations (minimum credit card payments, auto loans, student loans, child support). Utilities and non-recurring expenses are usually excluded.</dd>
      </dl>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Conclusion</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        The <strong>DTI Calculator</strong> is a quick way to understand your borrowing profile and plan steps to improve mortgage or loan eligibility. Enter accurate gross income and monthly obligations to get actionable DTI percentages.
      </p>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        Want to test payment scenarios or mortgage affordability tied to DTI targets? Use the <a href="/MortgageCalculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Mortgage Calculator</a> or the <a href="/LoanCalculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Loan Calculator</a> and re-run DTI calculations to see what fits your goals.
      </p>
    </section>
  </div>
</article>

    </>
  );
};

export default DebtToIncomeRatioCalculator;
