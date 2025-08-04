import React, { useState } from "react";

const GradeCalculator = () => {
  const [marks, setMarks] = useState("");
  const [totalMarks, setTotalMarks] = useState("");

  const calculateGrade = () => {
    const obtained = parseFloat(marks);
    const total = parseFloat(totalMarks);

    if (isNaN(obtained) || isNaN(total) || total === 0) return null;

    const percentage = (obtained / total) * 100;
    let grade = "";

    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";
    else grade = "F";

    return { percentage: percentage.toFixed(2), grade };
  };

  const result = calculateGrade();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Marks Obtained</label>
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            placeholder="e.g. 85"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Total Marks</label>
          <input
            type="number"
            value={totalMarks}
            onChange={(e) => setTotalMarks(e.target.value)}
            placeholder="e.g. 100"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {result && (
        <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Grade Result
          </h2>
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-800">Percentage:</span>
            <span className="text-blue-600">{result.percentage}%</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-2">
            <span className="text-gray-800">Grade:</span>
            <span className="text-green-600">{result.grade}</span>
          </div>
        </section>
      )}
    </div>
  );
};

export default GradeCalculator;
