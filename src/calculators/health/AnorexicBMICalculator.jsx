import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const AnorexicBMICalculator = () => {
  const [weight, setWeight] = useState("45"); // kg
  const [height, setHeight] = useState("160"); // cm

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to meters

    if (isNaN(w) || isNaN(h) || h === 0) return null;

    const bmi = w / (h * h);

    let category = "";
    let warning = "";

    if (bmi < 16) {
      category = "Severely Underweight (Anorexic Range)";
      warning = "⚠️ Warning: BMI indicates severe underweight/anorexia risk.";
    } else if (bmi >= 16 && bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    return {
      bmi: bmi.toFixed(2),
      category,
      warning,
    };
  };

  const result = calculateBMI();

  return (
    <>
      <Helmet>
        <title>Anorexic BMI Calculator | Check for Anorexia Risk by BMI</title>
        <meta
          name="description"
          content="Use our Anorexic BMI Calculator to determine if your body mass index falls into the anorexic range. Instantly check BMI health status and understand your body weight classification."
        />
        <meta
          name="keywords"
          content="anorexic bmi calculator, bmi calculator for anorexia, underweight bmi calculator, health risk calculator, eating disorder calculator, body mass index tool"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/health/anorexic-bmi-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Anorexic BMI Calculator | Check for Anorexia Risk by BMI"
        />
        <meta
          property="og:description"
          content="Determine if your BMI falls in the anorexic range using our accurate Anorexic BMI Calculator. Know your health risk instantly based on weight and height."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/health/anorexic-bmi-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Anorexic BMI Calculator",
      "url": "https://www.unitedcalculator.net/health/anorexic-bmi-calculator",
      "description": "Use the Anorexic BMI Calculator to assess whether your Body Mass Index (BMI) indicates an anorexic range. Helpful for identifying eating disorder-related risks and understanding body weight classification.",
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
          "name": "What is an anorexic BMI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An anorexic BMI typically falls below 17.5, indicating a severely underweight status that may be associated with anorexia nervosa or other eating disorders."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is the Anorexic BMI Calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Anorexic BMI Calculator provides a reliable indication of your BMI status based on your height and weight, but it is not a medical diagnosis. Always consult a healthcare provider for professional assessment."
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
          "name": "Anorexic BMI Calculator",
          "item": "https://www.unitedcalculator.net/health/anorexic-bmi-calculator"
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
              placeholder="e.g. 45"
              min="0"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 160"
              min="0"
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
                <span
                  className={`${
                    result.warning ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {result.category}
                </span>
              </div>
              {result.warning && (
                <p className="mt-3 text-red-700 font-semibold">
                  {result.warning}
                </p>
              )}
            </div>
          </section>
        )}
      </div>
      <article class="py-6">
        <p class="mb-6">
          This <strong>Anorexic BMI Calculator</strong> is a specialized free
          tool which will helps you to determine if your Body Mass Index (BMI)
          falls into the severely underweight range often associated with
          anorexia or other health risks. this calculator is specially designed
          to raise awareness about dangerously low BMI values so you can take
          action early by checking your anorexic with this calculator.
        </p>

        <p class="mb-6">
          You should aware that only BMI alone doesn’t diagnose anorexia, it’s
          only a way to see that your weight is too below the healthy range for
          your height which is average for your height. For a more complete
          picture of your body composition, you can also check your{" "}
          <a
            href="https://www.unitedcalculator.net/health/body-fat-calculator"
            target="_blank"
            class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
          >
            Body Fat Percentage
          </a>
          .
        </p>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">What is an Anorexic BMI?</h2>
          <p>
            BMI (Body Mass Index) is calculated by using your weight and
            height.if your BMI below 18.5 then you are considered as
            underweight, and below 17.5 is often considered as a warning sign
            for anorexia or severe malnutrition.
          </p>
          <p class="mt-2">
            Extremely low BMI can harm your in ealy stages of life span and
            serious health risks such as weakened immunity system , nutrient
            deficiencies effect, or heart complications for long time. If you
            want to understand how many calories you need to regain healthy
            weight, our{" "}
            <a
              href="https://www.unitedcalculator.net/health/calorie-calculator"
              target="_blank"
              class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
            >
              Calorie Calculator
            </a>
            can be a helpful guide.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Anorexic BMI Formula</h2>
          <p>Standard BMI formula is given below</p>
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
            Example: A person who has 42 kg weight and 1.65 m height would have:
            <code>42 ÷ (1.65 × 1.65) = 15.43</code> → Severely underweight. To
            know your body’s energy needs in recovery, also check our{" "}
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
            How to Use the Anorexic BMI Calculator
          </h2>
          <ol class="list-decimal ml-5 mb-3">
            <li>Enter your weight (kg or lb).</li>
            <li>Enter your height in (cm/m or ft/in).</li>
            <li>
              Click <strong>Calculate</strong>.
            </li>
            <li>Check if your BMI is in the severely underweight range.</li>
          </ol>
          <ul class="list-disc ml-5">
            <li>Below 17.5 — Possible anorexia risk</li>
            <li>17.5 – 18.4 — Underweight</li>
            <li>18.5 – 24.9 — Healthy weight</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Example Calculation</h2>
          <div class="bg-blue-50 p-4 rounded-lg space-y-2">
            <p>
              <strong>Example:</strong> You weigh <strong>40 kg</strong> and
              your height is <strong>1.60 m</strong>.
            </p>
            <p>Step 1: Square your height → 1.60 × 1.60 = 2.56</p>
            <p>Step 2: Divide weight by squared height → 40 ÷ 2.56 = 15.62</p>
            <p>
              Your BMI is <strong>15.6</strong>, which is in the severely
              underweight range and may require medical attention.
            </p>
            <p>
              Using imperial units: 88 lb at 5 ft 3 in → (88 ÷ (63 × 63)) × 703
              ≈ <strong>15.6</strong>.
            </p>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">Risks of Low BMI</h2>
          <ul class="list-disc ml-5">
            <li>Weakened immune system and higher risk of infections</li>
            <li>Loss of bone density leading to fractures</li>
            <li>Hormonal imbalances affecting metabolism and fertility</li>
            <li>Potential heart complications due to malnutrition</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-2">
            Frequently Asked Questions (FAQs)
          </h2>
          <dl>
            <dt class="font-semibold mt-4">
              Q.1 Is a low BMI always mean anorexia disease?
            </dt>
            <dd>
              Ans. Not always. A low BMI can result from genetics, high
              metabolism, illness, or eating disorders. Professional evaluation
              is necessary for a proper diagnosis.
            </dd>

            <dt class="font-semibold mt-4">Q.2 What BMI indicates anorexia?</dt>
            <dd>
              Ans. A BMI below 17.5 is often considered a marker for anorexia
              risk, though diagnosis involves more factors than BMI alone.
            </dd>

            <dt class="font-semibold mt-4">
              Q.3 Can you recover from a severely low BMI?
            </dt>
            <dd>
              Ans. Yes, with proper nutrition, medical support, and sometimes
              therapy, healthy weight can be restored.
            </dd>

            <dt class="font-semibold mt-4">
              Q.4 How quickly should I gain weight if my BMI is very low?
            </dt>
            <dd>
              Ans. Weight gain should be gradual under the guidance of a
              healthcare professional to avoid refeeding syndrome and other
              complications.
            </dd>

            <dt class="font-semibold mt-4">
              Q.5 Should I track other health metrics too?
            </dt>
            <dd>
              Ans. Absolutely — monitoring body fat percentage, muscle mass, and
              calorie intake is crucial for recovery. Tools like our{" "}
              <a
                href="https://www.unitedcalculator.net/health/macro-calculator"
                target="_blank"
                class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition duration-200"
              >
                Macro Calculator
              </a>
              can help plan balanced meals.
            </dd>
          </dl>
        </section>
      </article>
    </>
  );
};

export default AnorexicBMICalculator;
