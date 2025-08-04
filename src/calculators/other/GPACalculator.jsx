import React, { useState } from "react";

const GPACalculator = () => {
  const [courses, setCourses] = useState([{ grade: "", credit: "" }]);

  const handleCourseChange = (index, field, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  };

  const addCourse = () => {
    setCourses([...courses, { grade: "", credit: "" }]);
  };

  const removeCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    for (let course of courses) {
      const grade = parseFloat(course.grade);
      const credit = parseFloat(course.credit);

      if (!isNaN(grade) && !isNaN(credit)) {
        totalPoints += grade * credit;
        totalCredits += credit;
      }
    }

    if (totalCredits === 0) return 0;

    return (totalPoints / totalCredits).toFixed(2);
  };

  const result = calculateGPA();

  return (
    <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
      <h1 className="text-xl font-semibold mb-4">GPA Calculator</h1>

      {courses.map((course, index) => (
        <div key={index} className="mb-4 space-y-2">
          <div className="flex space-x-2">
            <input
              type="number"
              step="0.01"
              placeholder="Grade (e.g. 3.7)"
              value={course.grade}
              onChange={(e) =>
                handleCourseChange(index, "grade", e.target.value)
              }
              className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="number"
              step="0.5"
              placeholder="Credit Hours"
              value={course.credit}
              onChange={(e) =>
                handleCourseChange(index, "credit", e.target.value)
              }
              className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          {courses.length > 1 && (
            <button
              onClick={() => removeCourse(index)}
              className="text-sm text-red-500 hover:underline"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        onClick={addCourse}
        className="mb-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
      >
        + Add Course
      </button>

      <section className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Result</h2>
        <div className="flex justify-between text-lg font-semibold">
          <span className="text-gray-800">GPA:</span>
          <span className="text-green-600">{result}</span>
        </div>
      </section>
    </div>
  );
};

export default GPACalculator;
