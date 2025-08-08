import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const DebtConsolidationCalculator = () => {
  const [currentDebts, setCurrentDebts] = useState([
    { balance: "", rate: "", term: "" },
  ]);
  const [consolidationRate, setConsolidationRate] = useState("");
  const [consolidationTerm, setConsolidationTerm] = useState("");
  const [result, setResult] = useState(null);

  const handleDebtChange = (index, field, value) => {
    const updated = [...currentDebts];
    updated[index][field] = value;
    setCurrentDebts(updated);
  };

  const addDebt = () => {
    setCurrentDebts([...currentDebts, { balance: "", rate: "", term: "" }]);
  };

  const calculateConsolidation = () => {
    let totalMonthly = 0;
    let totalOriginalInterest = 0;

    currentDebts.forEach(({ balance, rate, term }) => {
      const P = parseFloat(balance);
      const r = parseFloat(rate) / 100 / 12;
      const n = parseFloat(term) * 12;

      if (isNaN(P) || isNaN(r) || isNaN(n)) return;

      const monthlyPayment = (P * r) / (1 - Math.pow(1 + r, -n));

      totalMonthly += monthlyPayment;
      totalOriginalInterest += monthlyPayment * n - P;
    });

    const totalBalance = currentDebts.reduce((sum, d) => {
      const bal = parseFloat(d.balance);
      return !isNaN(bal) ? sum + bal : sum;
    }, 0);

    const r = parseFloat(consolidationRate) / 100 / 12;
    const n = parseFloat(consolidationTerm) * 12;

    const consolidatedMonthly = (totalBalance * r) / (1 - Math.pow(1 + r, -n));
    const consolidatedInterest = consolidatedMonthly * n - totalBalance;

    setResult({
      totalOriginalInterest: totalOriginalInterest.toFixed(2),
      consolidatedMonthly: consolidatedMonthly.toFixed(2),
      consolidatedInterest: consolidatedInterest.toFixed(2),
    });
  };

  return (
    <>
      <Helmet>
        <title>Debt Consolidation Calculator</title>
        <meta
          name="description"
          content="Use our Debt Consolidation Calculator to find out how much you can save by consolidating multiple debts into one loan. Compare monthly payments and interest savings easily."
        />
        <meta
          name="keywords"
          content="debt consolidation calculator, consolidate debt, debt payoff calculator, debt reduction tool, debt repayment calculator, personal loan calculator, save on debt, credit card consolidation"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/finance/debt-consolidation-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Debt Consolidation Calculator" />
        <meta
          property="og:description"
          content="Use this Debt Consolidation Calculator to understand how combining multiple debts into one can reduce your monthly payments and total interest paid."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/finance/debt-consolidation-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Debt Consolidation Calculator",
      "url": "https://www.unitedcalculator.net/finance/debt-consolidation-calculator",
      "description": "Use the Debt Consolidation Calculator to explore how combining multiple loans into one can lower your interest rates and simplify your payments.",
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
          "name": "What is a debt consolidation calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A debt consolidation calculator helps you determine if consolidating multiple debts into a single loan will save you money by comparing interest rates and payments."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I consolidate my debt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Debt consolidation can simplify your finances by combining several debts into one, often with a lower interest rate and a single monthly payment."
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
          "name": "Debt Consolidation Calculator",
          "item": "https://www.unitedcalculator.net/finance/debt-consolidation-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Debt Consolidation Calculator
        </h1>

        {currentDebts.map((debt, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <h3 className="font-semibold text-gray-700 mb-2">
              Debt #{index + 1}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="number"
                placeholder="Balance"
                value={debt.balance}
                onChange={(e) =>
                  handleDebtChange(index, "balance", e.target.value)
                }
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              <input
                type="number"
                placeholder="Interest Rate (%)"
                value={debt.rate}
                onChange={(e) =>
                  handleDebtChange(index, "rate", e.target.value)
                }
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
              <input
                type="number"
                placeholder="Term (years)"
                value={debt.term}
                onChange={(e) =>
                  handleDebtChange(index, "term", e.target.value)
                }
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
        ))}

        <button
          onClick={addDebt}
          className="mb-6 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition"
        >
          ➕ Add Another Debt
        </button>

        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Consolidation Rate (%)"
            value={consolidationRate}
            onChange={(e) => setConsolidationRate(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="number"
            placeholder="Consolidation Term (years)"
            value={consolidationTerm}
            onChange={(e) => setConsolidationTerm(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          onClick={calculateConsolidation}
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Calculate Consolidation
        </button>

        {result && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-lg text-gray-800 font-medium">
              Total Original Interest: ₹{result.totalOriginalInterest}
            </p>
            <p className="text-lg text-gray-800 font-medium">
              Consolidated Monthly Payment: ₹{result.consolidatedMonthly}
            </p>
            <p className="text-lg text-green-700 font-semibold">
              Consolidated Interest: ₹{result.consolidatedInterest}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default DebtConsolidationCalculator;
