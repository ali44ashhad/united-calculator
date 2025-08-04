import React, { useState } from "react";

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
              onChange={(e) => handleDebtChange(index, "rate", e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              type="number"
              placeholder="Term (years)"
              value={debt.term}
              onChange={(e) => handleDebtChange(index, "term", e.target.value)}
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
  );
};

export default DebtConsolidationCalculator;
