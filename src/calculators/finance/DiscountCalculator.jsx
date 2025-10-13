import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState("1000");
  const [discountPercentage, setDiscountPercentage] = useState("10");

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

    if (isNaN(price) || isNaN(discount)) return null;

    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;

    return {
      discountAmount: discountAmount.toFixed(2),
      finalPrice: finalPrice.toFixed(2),
    };
  };

  const result = calculateDiscount();

  return (
    <>
      <Helmet>
        <title>Discount Calculator</title>
        <meta
          name="description"
          content="Use our Discount Calculator to quickly find the final price after discount. Perfect for shopping, budgeting, and comparing offers during sales or promotions."
        />
        <meta
          name="keywords"
          content="discount calculator, percentage discount calculator, sale price calculator, price after discount, shopping discount calculator, savings calculator, retail calculator, calculate discount"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/discount-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Discount Calculator" />
        <meta
          property="og:description"
          content="Easily calculate how much you save during sales using our Discount Calculator. Enter original price and discount percentage to find the final price."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/discount-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Discount Calculator",
      "url": "https://www.unitedcalculator.net/finance/discount-calculator",
      "description": "The Discount Calculator helps you determine the sale price after applying a discount. Ideal for shopping, comparing deals, and calculating total savings.",
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
          "name": "What is a discount calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A discount calculator helps you find the final price of a product after applying a percentage discount. It also shows how much money you save."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate the sale price?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter the original price and the discount percentage into the calculator. It will automatically compute the discounted price and total savings."
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
          "name": "Discount Calculator",
          "item": "https://www.unitedcalculator.net/finance/discount-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Original Price (₹)</label>
            <input
              type="number"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 1000"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Discount (%)</label>
            <input
              type="number"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Discount Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Discount Amount:</span>
                <span className="text-green-600 font-medium">
                  ₹{result.discountAmount}
                </span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">
                  Final Price After Discount:
                </span>
                <span className="text-blue-600">₹{result.finalPrice}</span>
              </div>
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
  <div class="mx-auto">
    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Our <strong>Discount Calculator</strong> helps shoppers, retailers, and
      business owners easily calculate how much they’ll save on a product or
      service after applying a discount. Whether you’re looking at a single
      percentage discount, multiple stacked discounts, or price reductions
      combined with taxes, this calculator provides instant, accurate results.
    </p>


    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">What is a Discount?</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        A discount is a reduction in price offered by sellers to buyers. It can
        be expressed as a percentage (e.g., 20% off) or a fixed amount (e.g.,
        $50 off). Discounts are commonly used in sales promotions, bulk
        purchases, or as loyalty rewards to attract and retain customers.
      </p>
      <ul class="list-disc ml-5 mt-3 text-sm sm:text-base space-y-1">
        <li><strong>Percentage discount:</strong> a specific percent off the original price (e.g., 25% off).</li>
        <li><strong>Fixed amount discount:</strong> a flat monetary deduction (e.g., $10 off).</li>
        <li><strong>Stacked discounts:</strong> multiple discounts applied in sequence (e.g., 20% off + extra 10% off).</li>
        <li><strong>Conditional discounts:</strong> available for certain purchase amounts, payment types, or memberships.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Discount Calculation Formula</h2>
      <p class="text-sm sm:text-base leading-relaxed mb-3">
        The basic discount formula depends on whether you are applying one or
        multiple discounts:
      </p>

      <div class="bg-gray-50 border border-gray-100 rounded-lg p-3 overflow-x-auto">
        <pre class="whitespace-pre-wrap text-sm sm:text-base leading-relaxed"><code>Single Discount:
Discounted Price = Original Price × (1 - Discount Rate)

Multiple Discounts:
Discounted Price = Original Price × (1 - Discount₁) × (1 - Discount₂) × ...

Savings Amount = Original Price - Discounted Price</code></pre>
      </div>

      <p class="mt-3 text-sm sm:text-base leading-relaxed">
        For example, if a $200 product has two discounts of 20% and 10%, the
        final price is not $140 — it’s $200 × 0.8 × 0.9 = $144. The second
        discount applies to the already-reduced price.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">How to Use the Discount Calculator</h2>
      <ol class="list-decimal ml-5 mb-3 text-sm sm:text-base space-y-1">
        <li>Enter the original price of the product or service.</li>
        <li>Enter the discount percentage or flat discount amount.</li>
        <li>Optionally, add any sales tax or additional fees.</li>
        <li>Click <strong>Calculate</strong> to get the discounted price and total savings.</li>
      </ol>

      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>Instantly shows discounted price, savings, and effective discount rate.</li>
        <li>Works for multiple discounts applied sequentially.</li>
        <li>Optionally adds sales tax to show the final total payable amount.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Example Calculations</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Example 1 (Single Discount):</strong></p>
          <p>Original Price = $100</p>
          <p>Discount = 25%</p>
          <p>Discounted Price = $100 × (1 - 0.25) = <strong>$75</strong></p>
          <p>You save <strong>$25</strong>.</p>
        </div>

        <div class="bg-blue-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Example 2 (Stacked Discounts):</strong></p>
          <p>Original Price = $200</p>
          <p>Discount 1 = 20%, Discount 2 = 10%</p>
          <p>Price after 1st discount: $200 × 0.8 = $160</p>
          <p>Price after 2nd discount: $160 × 0.9 = <strong>$144</strong></p>
          <p>Total Savings = <strong>$56</strong> (28% effective discount)</p>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Factors That Affect Discounts</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li><strong>Discount Type:</strong> Percentage vs fixed amount changes savings impact.</li>
        <li><strong>Stacking Rules:</strong> Multiple discounts compound, not simply add up.</li>
        <li><strong>Taxes and Fees:</strong> Applied before or after discounts depending on policy.</li>
        <li><strong>Promo Conditions:</strong> Minimum spend or eligible products only.</li>
        <li><strong>Time Validity:</strong> Seasonal or limited-time discounts affect price timing.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Benefits of Using the Discount Calculator</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>Instantly see the discounted price and total savings.</li>
        <li>Compare multiple offers or promotions quickly.</li>
        <li>Understand effective discounts when stacking multiple offers.</li>
        <li>Include tax or fees to calculate the true final price.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
      <dl class="text-sm sm:text-base">
        <dt class="font-semibold mt-4">Q.1 Can I add more than one discount?</dt>
        <dd class="mt-1">Ans. Yes, you can enter multiple discounts to see the final price after each is applied sequentially.</dd>

        <dt class="font-semibold mt-4">Q.2 Does it calculate sales tax too?</dt>
        <dd class="mt-1">Ans. Yes, you can include your local sales tax to see the final total after discount and tax. For detailed tax-only calculations, use our
          {" "}<a href="https://www.unitedcalculator.net/finance/sales-tax-calculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Sales Tax Calculator</a>.
        </dd>

        <dt class="font-semibold mt-4">Q.3 How do fixed discounts differ from percentage discounts?</dt>
        <dd class="mt-1">Ans. Fixed discounts subtract a set amount, while percentage discounts scale with the price. Both can be modeled in this calculator.</dd>

        <dt class="font-semibold mt-4">Q.4 Can it handle payment plan discounts?</dt>
        <dd class="mt-1">Ans. Yes, you can estimate discounted prices and then use the{" "}
          <a href="https://www.unitedcalculator.net/finance/payment-calculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Payment Calculator</a>{" "}
          to see monthly payments based on the discounted price.
        </dd>

        <dt class="font-semibold mt-4">Q.5 How do I know my real savings?</dt>
        <dd class="mt-1">Ans. The calculator shows both the final price and total dollar savings. You can also check the effective discount percentage if stacking multiple offers.</dd>
      </dl>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Conclusion</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        A <strong>Discount Calculator</strong> is a quick and reliable way to see
        how much you save on any purchase. Whether shopping during seasonal
        sales or offering promotions to customers, knowing the exact final price
        helps with smarter spending and pricing decisions.
      </p>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        Combine it with our{" "}
        <a href="https://www.unitedcalculator.net/finance/percent-off-calculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Percent Off Calculator</a>{" "}
        for deeper percentage analysis or{" "}
        <a href="https://www.unitedcalculator.net/finance/sales-tax-calculator" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Sales Tax Calculator</a>
       {" "} to see post-tax totals instantly.
      </p>
    </section>
  </div>
</article>

    </>
  );
};

export default DiscountCalculator;
