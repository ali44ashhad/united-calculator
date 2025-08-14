import React, { useState } from "react";

const SquareFootageCalculator = () => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [squareFootage, setSquareFootage] = useState(null);

  const calculateSquareFootage = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);

    if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) {
      setSquareFootage(null);
      return;
    }

    const result = l * w;
    setSquareFootage(result.toFixed(2));
  };

  const resetFields = () => {
    setLength("");
    setWidth("");
    setSquareFootage(null);
  };

  return (
    <>
      <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Square Footage Calculator
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Length (feet)</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="e.g., 12"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Width (feet)</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="e.g., 10"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={calculateSquareFootage}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Calculate
          </button>
          <button
            onClick={resetFields}
            className="w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400 transition"
          >
            Reset
          </button>
        </div>

        {squareFootage !== null && (
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold text-green-600">
              Total Area: {squareFootage} ft²
            </h3>
          </div>
        )}
      </div>
      <article class="py-6">
        <p class="mb-6">
          Our <strong>Square Footage Calculator</strong> is a fast, reliable
          tool to help you measure area for rooms, houses, gardens, or any
          rectangular and irregular spaces. Whether you’re planning flooring,
          budgeting for paint, or checking property size, this calculator
          converts dimensions into square feet so you can plan with confidence.
        </p>

        <p class="mb-6">
          The tool works for simple rectangles as well as shapes that can be
          split into smaller rectangles and triangles. If you need to estimate
          how much paint or carpet to buy after measuring area, you can try our{" "}
          <a
            href="https://www.unitedcalculator.net/other/tile-calculator"
            target="_blank"
            class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
          >
            Tile Calculator
          </a>
          .
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">What is Square Footage?</h2>
          <p>
            Square footage (sq ft) is a tool from which users can calculate area
            of a place, tile or terrace. It`s commonly used in real estate and
            construction in the US and all over the world. It tells us that how
            much two-dimensional space covers a surface. for example - the floor
            area of a room. iIts measurement always takes place in ordering
            materials, estimating costs, and comparing spaces.
          </p>
          <p class="mt-2">
            If you’re working with metric units, you should also try Area
            Converter tool to switch between square meters and square feet.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Square Footage Formula</h2>
          <p>Square Footage Formula for standard rectangular spaces:</p>
          <pre class="bg-gray-100 p-3 rounded-lg overflow-auto mb-3">
            <code>Area = Length × Width </code>
          </pre>
          <p class="mt-2">
            For irregular shapes, divide the area into rectangles like triangles
            or circles, calculate each part separately, then add them together.
            For circular areas:
          </p>
          <pre class="bg-gray-100 p-3 rounded-lg overflow-auto mb-3">
            <code>Area (circle) = π × radius²</code>
          </pre>
          <ul class="list-disc ml-5 mb-3">
            <li>Use feet and inches for imperial inputs</li>
            <li>Convert centimeters/meters to feet if necessary</li>
          </ul>
          <p>
            If you need help converting measurements before calculating area,
            check our Length Converter .
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            How to Use the Square Footage Calculator in 2025
          </h2>
          <ol class="list-decimal ml-5 mb-3">
            <li>
              Measure the length and width of the area in feet if you are
              calculating in feets otherwise you also can measure area in
              metere.
            </li>
            <li>Enter the values into the calculator.</li>
            <li>
              For irregular rooms split the space into simple shapes and measure
              each one.
            </li>
            <li>
              Click <strong>Calculate</strong> to get the total square footage.
            </li>
          </ol>
          <ul class="list-disc ml-5">
            <li>Works for rooms, yards, patios, and more</li>
            <li>Helps estimate materials like flooring, tile, and carpet</li>
            <li>Include or exclude closet and alcove areas as needed</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Example Calculations</h2>
          <div class="bg-blue-50 p-4 rounded-lg space-y-2">
            <p>
              <strong>Rectangle example:</strong> A room 15 ft long and 12 ft
              wide → 15 × 12 = <strong>180 sq ft</strong>.
            </p>
            <p>
              <strong>Split-shape example:</strong> A living area that’s 20 × 12
              ft plus an adjoining 6 × 8 ft alcove → (20 × 12) + (6 × 8) = 240 +
              48 = <strong>288 sq ft</strong>.
            </p>
            <p>
              <strong>Circle example:</strong> A round patio with a 6 ft radius
              → π × 6² ≈ 3.1416 × 36 ≈ <strong>113.1 sq ft</strong>.
            </p>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Practical Tips</h2>
          <ul class="list-disc ml-5">
            <li>Always measure at least twice to avoid errors.</li>
            <li>
              Round up slightly when ordering materials to account for cuts and
              waste (usually 5–10% extra).
            </li>
            <li>
              When measuring irregular spaces, sketch the floor plan and label
              dimensions — it reduces mistakes.
            </li>
            <li>
              For flooring, consider the plank or tile size when estimating to
              reduce leftover waste.
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Frequently Asked Questions (FAQs)
          </h2>
          <dl>
            <dt class="font-semibold mt-4">
              Q.1 What is included in square footage?
            </dt>
            <dd>
              Ans. Square footage usually measures the usable floor area. Some
              property listings include finished basements or balconies, while
              others do not check the definition used in your market or
              contract.
            </dd>

            <dt class="font-semibold mt-4">
              Q.2 How do I convert square meters to square feet?
            </dt>
            <dd>
              Ans. Multiply square meters by 10.7639 to get square feet. For
              quick conversions, use our Area Converter .
            </dd>

            <dt class="font-semibold mt-4">
              Q.3 Do I include closets and staircases?
            </dt>
            <dd>
              Ans. It depends for usable living area, include closets if they
              are finished and heated. Stairwells and utility spaces are
              sometimes excluded; follow local real estate conventions.
            </dd>

            <dt class="font-semibold mt-4">
              Q.4 How much extra material should I buy?
            </dt>
            <dd>
              Ans. Typically add 5–10% extra for cuts and mistakes. For complex
              patterns or diagonal installations consider 10–15% extra.
            </dd>

            <dt class="font-semibold mt-4">
              Q.5 Can I use the calculator for outdoor spaces?
            </dt>
            <dd>
              Ans. Yes it’s great for patios, decks, and yards. For landscaping
              materials like mulch or soil, you may need volume calculators
              rather than square footage.
            </dd>
          </dl>
        </section>
      </article>
    </>
  );
};

export default SquareFootageCalculator;
