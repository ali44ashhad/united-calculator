import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const SleepCalculator = () => {
  const [wakeUpTime, setWakeUpTime] = useState("");
  const [suggestedTimes, setSuggestedTimes] = useState([]);

  const calculateSleepTimes = () => {
    if (!wakeUpTime) return;

    const [hours, minutes] = wakeUpTime.split(":").map(Number);
    const wake = new Date();
    wake.setHours(hours);
    wake.setMinutes(minutes);
    wake.setSeconds(0);

    const cycles = 6;
    const cycleMinutes = 90;
    const fallAsleepBuffer = 14;

    const times = [];
    for (let i = cycles; i >= 1; i--) {
      const totalMinutes = i * cycleMinutes + fallAsleepBuffer;
      const sleepTime = new Date(wake.getTime() - totalMinutes * 60000);
      const formatted = sleepTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      times.push(formatted);
    }

    setSuggestedTimes(times);
  };

  return (
    <>
      <Helmet>
        <title>Sleep Calculator | Calculate Optimal Sleep Schedule</title>
        <meta
          name="description"
          content="Use our Sleep Calculator to determine your optimal sleep schedule and improve your sleep quality."
        />
        <meta
          name="keywords"
          content="sleep calculator, sleep schedule calculator, optimal sleep calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/sleep-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sleep Calculator | Calculate Optimal Sleep Schedule"
        />
        <meta
          property="og:description"
          content="Determine your optimal sleep schedule and improve sleep quality with our easy-to-use Sleep Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/sleep-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Sleep Calculator",
  "url": "https://www.unitedcalculator.net/other/sleep-calculator",
  "description": "Calculate your optimal sleep schedule to improve sleep quality using our Sleep Calculator.",
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
      "name": "What is a Sleep Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Sleep Calculator helps you determine the best sleep schedule based on sleep cycles to improve rest and alertness."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Sleep Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter your desired wake-up time or bedtime, and the calculator will suggest optimal times for sleep cycles."
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
      "name": "Sleep Calculator",
      "item": "https://www.unitedcalculator.net/other/sleep-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className=" mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Sleep Calculator
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">
            When do you want to wake up?
          </label>
          <input
            type="time"
            value={wakeUpTime}
            onChange={(e) => setWakeUpTime(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          onClick={calculateSleepTimes}
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Calculate Sleep Times
        </button>

        {suggestedTimes.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 text-center">
              You should try to fall asleep at:
            </h3>
            <ul className="space-y-1 text-center text-blue-600 font-medium">
              {suggestedTimes.map((time, idx) => (
                <li key={idx}>{time}</li>
              ))}
            </ul>
            <p className="text-sm mt-2 text-center text-gray-500">
              These times help you complete full 90-minute sleep cycles.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default SleepCalculator;
