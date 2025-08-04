import React, { useState } from "react";

const HouseAffordabilityCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState("80000");
  const [monthlyDebt, setMonthlyDebt] = useState("500");
  const [downPayment, setDownPayment] = useState("20000");
  const [interestRate, setInterestRate] = useState("6.5");
  const [loanTerm, setLoanTerm] = useState("30");

  const calculateAffordability = () => {
    const income = parseFloat(annualIncome) / 12; // monthly income
    const debt = parseFloat(monthlyDebt);
    const down = parseFloat(downPayment);
    const rate = parseFloat(interestRate) / 100 / 12;
    const termMonths = parseFloat(loanTerm) * 12;

    if (
      isNaN(income) ||
      isNaN(debt) ||
      isNaN(down) ||
      isNaN(rate) ||
      isNaN(termMonths)
    )
      return null;

    // Max 36% of income can go to debt payments (standard DTI rule)
    const maxMonthlyPayment = income * 0.36 - debt;

    // Mortgage affordability based on maxMonthlyPayment
    const loanAmount =
      (maxMonthlyPayment * (1 - Math.pow(1 + rate, -termMonths))) / rate;

    const housePrice = loanAmount + down;

    return {
      maxHousePrice: housePrice.toFixed(2),
      maxLoanAmount: loanAmount.toFixed(2),
      monthlyPayment: maxMonthlyPayment.toFixed(2),
    };
  };

  const result = calculateAffordability();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Annual Income ($)</label>
          <input
            type="number"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 80000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Monthly Debt ($)</label>
          <input
            type="number"
            value={monthlyDebt}
            onChange={(e) => setMonthlyDebt(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Down Payment ($)</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 20000"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Interest Rate (%)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 6.5"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Loan Term (Years)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="e.g. 30"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            House Affordability Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-700">Estimated Monthly Payment:</span>
              <span className="text-green-600 font-medium">
                ${result.monthlyPayment}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Loan Amount You Can Afford:</span>
              <span className="text-blue-600 font-medium">
                ${result.maxLoanAmount}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-gray-800">
                Max House Price You Can Afford:
              </span>
              <span className="text-yellow-600">${result.maxHousePrice}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default HouseAffordabilityCalculator;
