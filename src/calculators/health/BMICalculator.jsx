import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const BMICalculator = () => {
  const [weight, setWeight] = useState("70"); // in kg
  const [height, setHeight] = useState("170"); // in cm

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to meters

    if (isNaN(w) || isNaN(h) || h === 0) return null;

    const bmi = w / (h * h);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) category = "Normal weight";
    else if (bmi >= 25 && bmi < 29.9) category = "Overweight";
    else category = "Obese";

    return {
      bmi: bmi.toFixed(2),
      category,
    };
  };

  const result = calculateBMI();

  return (
    <>
      <Helmet>
        <title>BMI Calculator | Calculate Body Mass Index Instantly</title>
        <meta
          name="description"
          content="Use our BMI Calculator to find your Body Mass Index based on your height and weight. Determine your BMI category—underweight, normal, overweight, or obese—in seconds."
        />
        <meta
          name="keywords"
          content="bmi calculator, body mass index calculator, health calculator, weight calculator, check bmi, height weight calculator, underweight bmi, overweight bmi, obesity calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/health/bmi-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="BMI Calculator | Calculate Body Mass Index Instantly"
        />
        <meta
          property="og:description"
          content="Calculate your BMI using height and weight to know if you are underweight, healthy, overweight, or obese. Fast and accurate Body Mass Index Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/health/bmi-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "BMI Calculator",
      "url": "https://www.unitedcalculator.net/health/bmi-calculator",
      "description": "Find your Body Mass Index (BMI) using our accurate BMI Calculator. Enter your height and weight to instantly get your BMI score and understand your health category.",
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
          "name": "What is BMI (Body Mass Index)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BMI stands for Body Mass Index. It is a number calculated from your height and weight that helps determine your weight category, such as underweight, normal, overweight, or obese."
          }
        },
        {
          "@type": "Question",
          "name": "How is BMI calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BMI is calculated using the formula: weight (kg) divided by height (m) squared. For example, BMI = weight / (height × height)."
          }
        },
        {
          "@type": "Question",
          "name": "Is BMI an accurate measure of health?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BMI is a useful general indicator but does not take muscle mass, bone density, or body composition into account. Consult a healthcare professional for a full health assessment."
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
          "name": "Health Calculators",
          "item": "https://www.unitedcalculator.net/health"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "BMI Calculator",
          "item": "https://www.unitedcalculator.net/health/bmi-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 70"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 170"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              BMI Result Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Your BMI:</span>
                <span className="text-blue-600 font-medium">{result.bmi}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-gray-800">Category:</span>
                <span className="text-green-600">{result.category}</span>
              </div>
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
        <p class="mb-6">
          This <strong>BMI Calculator</strong> is a simple and powerful tool
          which helps you to find out your Body mass index whether you’re
          underweight, at a healthy weight, overweight, or obese based on your
          height and weight. BMI (Body Mass Index) is a quick way to get a
          result of your overall health risk, and it’s used by doctors,
          trainers, and health experts all over the world.
        </p>

        <p class="mb-6">
          Your BMI doesn’t measure body fat directly, but it gives you a strong
          indicator of where you stand compared to healthy ranges. If you want
          to go one step further and measure your fat percentage, try our{" "}
          <a
            href="https://www.unitedcalculator.net/health/body-fat-calculator"
            target="_blank"
            class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
          >
            Body Fat Calculator
          </a>
          for more detailed insights.
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            What is BMI and Why Does it Matter?
          </h2>
          <p>
            BMI (Body Mass Index) is a number calculated using your height and
            weight. It’s an easy way to estimate whether you’re in a healthy
            range or at risk for weight-related health problems such as heart
            disease, type 2 diabetes, or high blood pressure.
          </p>
          <p class="mt-2">
            While it’s not perfect because it doesn’t account for muscle mass or
            body composition it’s still one of the most widely used health
            metrics in the world. If you're aiming for a healthy lifestyle, you
            might also want to estimate your daily calorie needs with our{" "}
            <a
              href="https://www.unitedcalculator.net/health/calorie-calculator"
              target="_blank"
              class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
            >
              Calorie Calculator
            </a>
            .
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">BMI Formula</h2>
          <p>
            There are two standard formulas for BMI, depending on your
            measurement system:
          </p>
          <pre class="bg-gray-100 p-3 rounded-lg overflow-auto mb-3">
            <code>
              Metric: BMI = weight (kg) ÷ [height (m)]² Imperial: BMI = (weight
              (lb) ÷ [height (in)]²) × 703
            </code>
          </pre>
          <ul class="list-disc ml-5 mb-3">
            <li>
              <code>Weight</code> — Your body weight in kilograms or pounds
            </li>
            <li>
              <code>Height</code> — Your height in meters or inches
            </li>
          </ul>
          <p>
            For example, a person weighing 70 kg with a height of 1.75 m would
            have:
            <code>70 ÷ (1.75 × 1.75) = 22.86</code>, which is considered a
            healthy BMI. To know how many calories your body burns at rest,
            check our{" "}
            <a
              href="https://www.unitedcalculator.net/health/bmr-calculator"
              target="_blank"
              class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
            >
              BMR Calculator
            </a>
            .
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            How to Use the BMI Calculator
          </h2>
          <ol class="list-decimal ml-5 mb-3">
            <li>Enter your weight (in kg or lb).</li>
            <li>Enter your height (in cm/m or ft/in).</li>
            <li>
              Click <strong>Calculate</strong>.
            </li>
            <li>Check your result against the BMI categories below.</li>
          </ol>
          <ul class="list-disc ml-5">
            <li>Below 18.5 — Underweight</li>
            <li>18.5 – 24.9 — Healthy weight</li>
            <li>25.0 – 29.9 — Overweight</li>
            <li>30.0 and above — Obese</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Example BMI Calculation</h2>
          <div class="bg-blue-50 p-4 rounded-lg space-y-2">
            <p>
              <strong>Example:</strong> Let’s say you weigh{" "}
              <strong>65 kg</strong> and your height is <strong>1.70 m</strong>.
            </p>
            <p>Step 1: Square your height → 1.70 × 1.70 = 2.89</p>
            <p>
              Step 2: Divide your weight by squared height → 65 ÷ 2.89 = 22.49
            </p>
            <p>
              Your BMI is <strong>22.5</strong>, which falls in the “Healthy
              weight” range.
            </p>
            <p>
              If you prefer imperial units, a person weighing 150 lb at 5 ft 6
              in would have: (150 ÷ (66 × 66)) × 703 ≈ <strong>24.2</strong>.
            </p>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Tips for Maintaining a Healthy BMI
          </h2>
          <ul class="list-disc ml-5">
            <li>
              Follow a balanced diet rich in fruits, vegetables, and lean
              proteins.
            </li>
            <li>
              Engage in at least 150 minutes of moderate exercise each week.
            </li>
            <li>
              Limit processed foods, sugary drinks, and excessive snacking.
            </li>
            <li>Stay hydrated and get enough quality sleep.</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Frequently Asked Questions
          </h2>
          <dl>
            <dt class="font-semibold mt-4">
              Q.1 Is BMI an accurate measure of health?
            </dt>
            <dd>
              Ans. BMI is a useful screening tool but not a perfect measure.
              Athletes or people with high muscle mass may have a high BMI but
              low body fat.
            </dd>

            <dt class="font-semibold mt-4">
              Q.2 What’s the healthiest BMI range?
            </dt>
            <dd>
              Ans. For most adults a BMI between 18.5 and 24.9 is considered
              healthy.
            </dd>

            <dt class="font-semibold mt-4">
              Q.3 Can BMI be used for children?
            </dt>
            <dd>
              Ans. Yes, but children’s BMI is interpreted differently using age
              and sex-specific percentiles.
            </dd>

            <dt class="font-semibold mt-4">
              Q.4 How often should I check my BMI?
            </dt>
            <dd>
              Ans. Checking every few months is enough unless you’re on a
              specific weight-loss or muscle-gain program.
            </dd>

            <dt class="font-semibold mt-4">
              Q.5 Does a healthy BMI mean I’m fit?
            </dt>
            <dd>
              Ans. Not necessarily BMI doesn’t measure fitness levels or muscle
              strength so it’s best to combine it with other health indicators.
            </dd>
          </dl>
        </section>
      </article>
    </>
  );
};

export default BMICalculator;
