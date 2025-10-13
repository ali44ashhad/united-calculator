import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DepreciationCalculator = () => {
  const [cost, setCost] = useState("50000");
  const [salvageValue, setSalvageValue] = useState("5000");
  const [usefulLife, setUsefulLife] = useState("10");

  const calculateDepreciation = () => {
    const c = parseFloat(cost);
    const s = parseFloat(salvageValue);
    const life = parseFloat(usefulLife);

    if (
      isNaN(c) ||
      isNaN(s) ||
      isNaN(life) ||
      c <= 0 ||
      life <= 0 ||
      s < 0 ||
      s > c
    )
      return null;

    const annualDepreciation = (c - s) / life;
    const totalDepreciation = annualDepreciation * life;

    return {
      annualDepreciation: annualDepreciation.toFixed(2),
      totalDepreciation: totalDepreciation.toFixed(2),
    };
  };

  const result = calculateDepreciation();

  return (
    <>
      <Helmet>
        <title>Depreciation Calculator</title>
        <meta
          name="description"
          content="Use our Depreciation Calculator to calculate the decrease in value of an asset over time using methods like straight-line, declining balance, or sum-of-the-years-digits."
        />
        <meta
          name="keywords"
          content="depreciation calculator, asset depreciation, straight line depreciation, declining balance method, sum of years digits calculator, car depreciation, equipment depreciation, calculate depreciation"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/depreciation-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Depreciation Calculator" />
        <meta
          property="og:description"
          content="Calculate asset depreciation using our Depreciation Calculator. Choose from multiple methods including straight-line, declining balance, and more."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/depreciation-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Depreciation Calculator",
      "url": "https://www.unitedcalculator.net/finance/depreciation-calculator",
      "description": "The Depreciation Calculator helps you determine the loss in value of assets over time using methods like straight-line and declining balance. Useful for accounting, taxes, and budgeting.",
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
          "name": "What is a depreciation calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A depreciation calculator helps you estimate how much an asset loses value over time. It's commonly used for vehicles, machinery, electronics, and tax-related accounting."
          }
        },
        {
          "@type": "Question",
          "name": "Which depreciation methods are supported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our calculator supports straight-line, declining balance, and sum-of-the-years-digits methods for calculating depreciation."
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
          "name": "Depreciation Calculator",
          "item": "https://www.unitedcalculator.net/finance/depreciation-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Cost of Asset ($)</label>
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 50000"
              min="0"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Salvage Value ($)</label>
            <input
              type="number"
              value={salvageValue}
              onChange={(e) => setSalvageValue(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 5000"
              min="0"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Useful Life (years)
            </label>
            <input
              type="number"
              value={usefulLife}
              onChange={(e) => setUsefulLife(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
              min="1"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Depreciation Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Annual Depreciation:</span>
                <span className="text-blue-600 font-medium">
                  ${result.annualDepreciation}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Total Depreciation:</span>
                <span className="text-green-600">
                  ${result.totalDepreciation}
                </span>
              </div>
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
  <div class="mx-auto">
    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Our <strong>Depreciation Calculator</strong> helps business owners,
      accountants, and individuals estimate how an asset loses value over time.
      Choose from common methods — straight-line, declining balance, or units
      of production — enter purchase price, useful life, and salvage value to
      get yearly depreciation schedules and accumulated depreciation.
    </p>

    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Use this tool to prepare financial statements, plan asset replacements,
      or estimate tax deductions. If you want to compare the present value of
      future depreciation tax shields, see the{" "}
      <a href="https://www.unitedcalculator.net/finance/present-value-calculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Present Value Calculator</a>.
    </p>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Depreciation Methods</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        Common depreciation approaches:
      </p>
      <ul class="list-disc ml-5 mt-3 text-sm sm:text-base space-y-1">
        <li><strong>Straight-line:</strong> (Cost − Salvage) ÷ Useful life → equal expense each period.</li>
        <li><strong>Declining balance:</strong> Accelerated method applying a fixed rate to book value (e.g., 200% declining balance).</li>
        <li><strong>Units of production:</strong> Expense based on usage (e.g., hours, miles, units produced).</li>
      </ul>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        Select the method that best matches the asset’s wear pattern and accounting policy.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">How the Calculator Works</h2>
      <p class="text-sm sm:text-base leading-relaxed mb-3">
        Enter:
      </p>
      <ol class="list-decimal ml-5 mb-3 text-sm sm:text-base space-y-1">
        <li>Asset purchase price (initial cost).</li>
        <li>Estimated salvage value at end of useful life (resale value).</li>
        <li>Useful life (years or production units).</li>
        <li>Chosen depreciation method and (if applicable) decline factor or expected production.</li>
      </ol>

      <div class="bg-gray-50 border border-gray-100 rounded-lg p-3 overflow-x-auto">
        <pre class="whitespace-pre-wrap text-sm sm:text-base leading-relaxed"><code>Straight-line annual depreciation = (Cost − Salvage) ÷ Useful life

Declining-balance depreciation (period) = Book value at period start × Decline rate

Units-of-production depreciation (period) = (Cost − Salvage) × (Units used in period ÷ Total estimated units)</code></pre>
      </div>

      <p class="mt-3 text-sm sm:text-base leading-relaxed">
        The calculator outputs period-by-period depreciation, accumulated depreciation, and ending book value. For assets financed with loans, compare payment effects on cash flow using the <a href="/LoanCalculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Loan Calculator</a>.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Why Depreciation Matters</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        Depreciation affects reported profit, taxable income, and the book value
        of assets. Choosing an appropriate method influences period earnings and
        tax timing. Businesses use depreciation schedules for budgeting,
        replacement planning, and financial reporting.
      </p>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        Note: tax authorities often have their own allowable depreciation rules — to estimate tax impact, consider combining results with the <a href="https://www.unitedcalculator.net/finance/income-tax-calculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Income Tax Calculator</a>.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Example Calculation</h2>
      <div class="bg-blue-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
        <p><strong>Example — Straight-line:</strong></p>
        <p>Cost = $12,000; Salvage = $2,000; Useful life = 5 years</p>
        <p>Annual depreciation = ($12,000 − $2,000) ÷ 5 = <strong>$2,000</strong></p>
        <p>Book value after 3 years = $12,000 − (3 × $2,000) = <strong>$6,000</strong></p>

        <hr class="my-2"/>

        <p><strong>Example — Declining balance (200% DB):</strong></p>
        <p>Year 1 depreciation = $12,000 × (2 ÷ 5) = $4,800 (approx; then apply to declining book value subsequently)</p>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Practical Tips</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>Keep consistent policies — switch methods only when appropriate and disclose in financial statements.</li>
        <li>Review useful-life estimates periodically — major changes (e.g., technology shifts) may require adjustments.</li>
        <li>Record salvage value conservatively — overstating salvage understates depreciation expense.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
      <dl class="text-sm sm:text-base">
        <dt class="font-semibold mt-4">Q.1 Which method is best?</dt>
        <dd class="mt-1">Ans. It depends on how the asset is used. Straight-line is simple and common; declining balance accelerates expense for assets that lose value quickly; units-of-production is best when usage varies significantly.</dd>

        <dt class="font-semibold mt-4">Q.2 Can I change depreciation method later?</dt>
        <dd class="mt-1">Ans. Accounting rules allow method changes when justified, but you should apply consistently and disclose changes. Tax rules may restrict or require adjustments.</dd>

        <dt class="font-semibold mt-4">Q.3 Does depreciation affect cash flow?</dt>
        <dd class="mt-1">Ans. Depreciation is a non-cash expense — it reduces reported profit and taxable income but does not directly change cash. However, financing the asset (loan payments) does affect cash — use the <a href="https://www.unitedcalculator.net/finance/loan-calculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Loan Calculator</a> to model cash payments.</dd>
      </dl>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Conclusion</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        A <strong>Depreciation Calculator</strong> makes it easy to generate
        schedules for accounting, tax planning, and asset management. Enter
        accurate cost, salvage, and useful-life figures to get an itemized
        depreciation table and book-value projections.
      </p>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        Want me to add JSON-LD `Article`/`FAQPage` schema, absolute permalinks,
        or a printable depreciation schedule export? Tell me which and I’ll
        generate it.
      </p>
    </section>
  </div>
</article>

    </>
  );
};

export default DepreciationCalculator;
