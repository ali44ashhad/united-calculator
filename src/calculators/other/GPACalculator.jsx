import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>
          GPA Calculator | Calculate Your Grade Point Average Easily
        </title>
        <meta
          name="description"
          content="Use our GPA Calculator to quickly calculate your Grade Point Average based on your course grades and credits."
        />
        <meta
          name="keywords"
          content="GPA calculator, grade point average calculator, calculate GPA, academic calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/gpa-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="GPA Calculator | Calculate Your Grade Point Average Easily"
        />
        <meta
          property="og:description"
          content="Quickly calculate your GPA using course grades and credits with our easy-to-use GPA Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/gpa-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "GPA Calculator",
  "url": "https://www.unitedcalculator.net/other/gpa-calculator",
  "description": "Calculate your Grade Point Average (GPA) accurately based on your course grades and credits using our GPA Calculator.",
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
      "name": "What is a GPA Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A GPA Calculator helps you compute your Grade Point Average based on course grades and credit hours."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the GPA Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter your course grades and corresponding credit hours, and the calculator will provide your GPA."
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
      "name": "Other Calculators",
      "item": "https://www.unitedcalculator.net/other"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "GPA Calculator",
      "item": "https://www.unitedcalculator.net/other/gpa-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

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
    </>
  );
};

export default GPACalculator;
