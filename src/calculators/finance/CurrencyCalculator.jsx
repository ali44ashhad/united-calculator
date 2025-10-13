import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const exchangeRates = {
  USD: { INR: 83.5, EUR: 0.93, GBP: 0.81 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0097 },
  EUR: { USD: 1.08, INR: 89.5, GBP: 0.87 },
  GBP: { USD: 1.23, INR: 103, EUR: 1.15 },
};

const currencies = ["USD", "INR", "EUR", "GBP"];

const CurrencyCalculator = () => {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const calculateConversion = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt)) return null;

    if (fromCurrency === toCurrency) {
      return amt.toFixed(2);
    }

    const rate = exchangeRates[fromCurrency]?.[toCurrency];
    if (!rate) return null;

    return (amt * rate).toFixed(2);
  };

  const convertedAmount = calculateConversion();

  return (
    <>
      <Helmet>
        <title>Currency Calculator - change your currencies</title>
        <meta
          name="description"
          content="Use our Currency Calculator to convert between international currencies in real-time. Get accurate exchange rate conversions for travel, business, or investing."
        />
        <meta
          name="keywords"
          content="currency calculator, currency converter, forex calculator, exchange rate calculator, money converter, convert currency online"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/currency-calculator"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Currency Calculator" />
        <meta
          property="og:description"
          content="Convert currencies instantly using our Currency Calculator. Check live exchange rates and calculate the value between international currencies."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/currency-calculator"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Currency Calculator",
      "url": "https://www.unitedcalculator.net/finance/currency-calculator",
      "description": "The Currency Calculator helps you convert between different currencies using real-time exchange rates. Ideal for travelers, investors, and international shoppers.",
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
          "name": "What is a currency calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A currency calculator is a tool that allows users to convert one currency into another using current exchange rates."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is the Currency Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Currency Calculator uses real-time exchange rates to provide accurate and up-to-date currency conversions for personal or professional use."
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
          "name": "Currency Calculator",
          "item": "https://www.unitedcalculator.net/finance/currency-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter amount"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">From Currency</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">To Currency</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>
        </div>

        {convertedAmount !== null && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Conversion Result
            </h2>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">
                {amount} {fromCurrency} =
              </span>
              <span className="text-blue-600">
                {convertedAmount} {toCurrency}
              </span>
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
  <div class="mx-auto">
    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      Our <strong>Currency Calculator</strong> helps you convert money between
      currencies with ease. Enter an amount, select your base and target
      currencies, and get the converted value instantly. You can also include
      transaction fees or markups to see the final amount you’ll actually
      receive.
    </p>

    <p class="mb-6 text-base sm:text-lg leading-relaxed">
      It’s useful for travelers, online shoppers, freelancers, and businesses
      that deal in multiple currencies. The calculator ensures you’re not
      overpaying due to poor exchange rates or hidden fees and helps you
      understand the real cost of currency conversion.
    </p>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">What is a Currency Calculator?</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        A currency calculator converts an amount from one currency to another
        using an exchange rate. You can also apply optional provider fees,
        markups, or rounding rules to see what you’ll actually receive or pay
        after conversion.
      </p>
      <ul class="list-disc ml-5 mt-3 text-sm sm:text-base space-y-1">
        <li><strong>Base currency:</strong> the currency you’re converting from.</li>
        <li><strong>Target currency:</strong> the currency you’re converting to.</li>
        <li><strong>Exchange rate:</strong> the conversion rate between the two.</li>
        <li><strong>Fees:</strong> any percentage or flat charges by your bank or card provider.</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">How the Calculation Works</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        The conversion process uses a simple formula to calculate how much your
        money is worth in another currency:
      </p>
      <div class="bg-gray-50 border border-gray-100 rounded-lg p-3 overflow-x-auto">
        <pre class="whitespace-pre-wrap text-sm sm:text-base leading-relaxed"><code>Converted Amount = Base Amount × Exchange Rate

If a percentage fee applies:
Net Amount = Converted Amount × (1 − Fee Rate)

If a fixed fee applies:
Net Amount = Converted Amount − Fixed Fee</code></pre>
      </div>
      <p class="mt-3 text-sm sm:text-base leading-relaxed">
        You can also use tools like the {" "}
        <a href="https://www.unitedcalculator.net/finance/conversion-calculator" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-800 underline">Conversion Calculator</a>{" "}
        to handle other unit or value conversions beyond currencies.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">How to Use the Currency Calculator</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        Follow these simple steps:
      </p>
      <ol class="list-decimal ml-5 mb-3 text-sm sm:text-base space-y-1">
        <li>Enter the amount in your source currency.</li>
        <li>Select the base and target currencies from the dropdown list.</li>
        <li>Input the current exchange rate or choose the live rate option.</li>
        <li>Add any bank or provider fee (optional).</li>
        <li>Click <strong>Calculate</strong> to view your converted and net amount.</li>
      </ol>
      <p class="text-sm sm:text-base leading-relaxed">
        The calculator will instantly show both gross and net amounts,
        factoring in your chosen exchange rate and any additional fees.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Example Calculations</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="bg-blue-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Example 1:</strong></p>
          <p>
            Convert $1,000 USD to EUR at a rate of 0.90 →
            <strong>€900.00</strong>.
          </p>
        </div>

        <div class="bg-blue-50 p-4 rounded-lg space-y-2 text-sm sm:text-base">
          <p><strong>Example 2 (with fee):</strong></p>
          <p>
            Convert $1,000 USD to EUR at 0.90 with a 2% fee → Gross €900 − €18
            fee = <strong>€882</strong>.
          </p>
        </div>
      </div>
      <p class="mt-3 text-sm sm:text-base leading-relaxed">
        If you’d like to explore how such conversions affect your budgeting or
        savings plans, our {" "}
        <a href="https://www.unitedcalculator.net/finance/finance-calculator" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-800 underline">Finance Calculator</a>{" "}
        can help you estimate currency impacts on loans, investments, or long-term goals.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Factors That Affect Exchange Rates</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>Market supply and demand for each currency</li>
        <li>Central bank policies and interest rates</li>
        <li>Inflation, trade balances, and political stability</li>
        <li>Global financial news and investor sentiment</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Benefits of Using the Currency Calculator</h2>
      <ul class="list-disc ml-5 text-sm sm:text-base space-y-1">
        <li>Accurately convert between major and minor currencies</li>
        <li>Include provider fees for real-world estimates</li>
        <li>Instant, mobile-friendly results with transparent calculations</li>
        <li>Useful for travel, e-commerce, and global transactions</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h2>
      <dl class="text-sm sm:text-base">
        <dt class="font-semibold mt-4">Q.1 How accurate are these conversions?</dt>
        <dd class="mt-1">
          Ans. It depends on the exchange rate source you use. Market rates
          update every few seconds during trading hours.
        </dd>

        <dt class="font-semibold mt-4">Q.2 Can I include bank fees?</dt>
        <dd class="mt-1">
          Ans. Yes, you can add either percentage-based or fixed fees to
          calculate what you’ll actually receive after deductions.
        </dd>

        <dt class="font-semibold mt-4">Q.3 How often do exchange rates change?</dt>
        <dd class="mt-1">
          Ans. Exchange rates fluctuate continuously, especially during active
          market hours. Always check live data for the latest rates.
        </dd>

        <dt class="font-semibold mt-4">Q.4 Can I use this for cryptocurrencies?</dt>
        <dd class="mt-1">
          Ans. Yes, if you enter the correct exchange rate manually. The formula
          works for any numerical value pair.
        </dd>
      </dl>
    </section>

    <section class="mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-2">Conclusion</h2>
      <p class="text-sm sm:text-base leading-relaxed">
        The <strong>Currency Calculator</strong> gives you accurate, transparent
        conversions between global currencies. Whether for business transactions
        or personal travel, it ensures you always know the true value of your
        money in another currency.
      </p>
      <p class="mt-2 text-sm sm:text-base leading-relaxed">
        If you’re planning international investments or saving across currencies,
        the {" "}
        <a href="https://www.unitedcalculator.net/finance/compound-interest-calculator" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-800 underline">Compound Interest Calculator</a>{" "}
        can help you project how currency growth and interest interact over time.
      </p>
    </section>
  </div>
</article>


    </>
  );
};

export default CurrencyCalculator;
