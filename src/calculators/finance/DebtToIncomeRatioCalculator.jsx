import React, { useState } from "react";

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
              <span className="text-blue-600 font-medium">{result.dti} %</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">Category:</span>
              <span className="text-green-600">{result.category}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DebtToIncomeRatioCalculator;
