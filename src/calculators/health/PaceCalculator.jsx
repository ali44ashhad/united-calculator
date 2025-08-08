import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const PaceCalculator = () => {
  const [distance, setDistance] = useState("5");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("30");
  const [seconds, setSeconds] = useState("0");

  const calculatePace = () => {
    const d = parseFloat(distance);
    const h = parseInt(hours);
    const m = parseInt(minutes);
    const s = parseInt(seconds);

    if (isNaN(d) || d <= 0 || isNaN(h) || isNaN(m) || isNaN(s)) return null;

    const totalMinutes = h * 60 + m + s / 60;
    const pace = totalMinutes / d;

    const paceMin = Math.floor(pace);
    const paceSec = Math.round((pace - paceMin) * 60);

    return `${paceMin} min ${paceSec < 10 ? "0" : ""}${paceSec} sec / km`;
  };

  const result = calculatePace();

  return (
    <>
      <Helmet>
        <title>
          Pace Calculator | Calculate Running Pace per Mile or Kilometer
        </title>
        <meta
          name="description"
          content="Use our Pace Calculator to determine your running pace per mile or kilometer based on your total distance and time. Ideal for runners and athletes tracking performance."
        />
        <meta
          name="keywords"
          content="pace calculator, running pace calculator, mile pace calculator, kilometer pace calculator, running speed calculator, fitness calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/health/pace-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pace Calculator | Calculate Running Pace per Mile or Kilometer"
        />
        <meta
          property="og:description"
          content="Calculate your running pace per mile or kilometer using our Pace Calculator by entering your total time and distance. Perfect for athletes and fitness enthusiasts."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/health/pace-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Pace Calculator",
      "url": "https://www.unitedcalculator.net/health/pace-calculator",
      "description": "Determine your running pace per mile or kilometer by inputting your total distance and time with the Pace Calculator. Useful for tracking and improving your fitness performance.",
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
          "name": "What is a pace calculator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A pace calculator helps runners figure out how fast they run per mile or kilometer based on their total running time and distance."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate my running pace?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To calculate your pace, enter the total time you took and the distance you covered. The calculator will show your average pace per mile or kilometer."
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
          "name": "Pace Calculator",
          "item": "https://www.unitedcalculator.net/health/pace-calculator"
        }
      ]
    }
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Distance (km)</label>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block mb-1 font-medium">Hours</label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Minutes</label>
              <input
                type="number"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Seconds</label>
              <input
                type="number"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>

        {result && (
          <section className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Pace Result
            </h2>
            <p className="text-gray-800">
              <span className="font-medium">Pace:</span> {result}
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default PaceCalculator;
