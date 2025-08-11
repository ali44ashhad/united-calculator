import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const BTUCalculator = () => {
  const [roomLength, setRoomLength] = useState("");
  const [roomWidth, setRoomWidth] = useState("");
  const [roomHeight, setRoomHeight] = useState("");
  const [people, setPeople] = useState("1");

  const calculateBTU = () => {
    const length = parseFloat(roomLength);
    const width = parseFloat(roomWidth);
    const height = parseFloat(roomHeight);
    const numPeople = parseInt(people);

    if (isNaN(length) || isNaN(width) || isNaN(height) || isNaN(numPeople))
      return null;

    const roomVolume = length * width * height;

    // Base BTU for room volume (approx. 5 BTU per cubic foot)
    let btu = roomVolume * 5;

    // Add BTU per person beyond the first
    if (numPeople > 1) {
      btu += (numPeople - 1) * 600;
    }

    return {
      roomVolume: roomVolume.toFixed(2),
      requiredBTU: Math.round(btu),
    };
  };

  const result = calculateBTU();

  return (
    <>
      <Helmet>
        <title>
          BTU Calculator | Calculate Heating and Cooling BTU Requirements
        </title>
        <meta
          name="description"
          content="Use our BTU Calculator to estimate the heating or cooling BTU requirements for your space. Ideal for HVAC planning and energy efficiency."
        />
        <meta
          name="keywords"
          content="BTU calculator, heating BTU calculator, cooling BTU calculator, HVAC calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/btu-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="BTU Calculator | Calculate Heating and Cooling BTU Requirements"
        />
        <meta
          property="og:description"
          content="Estimate heating or cooling BTU needs for your room or building quickly with our easy-to-use BTU Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/btu-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BTU Calculator",
  "url": "https://www.unitedcalculator.net/other/btu-calculator",
  "description": "Calculate heating and cooling BTU requirements for your space accurately with our BTU Calculator.",
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
      "name": "What is a BTU Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A BTU Calculator estimates the amount of heating or cooling power required for a space, measured in British Thermal Units (BTUs)."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the BTU Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the room dimensions and other relevant factors, and the calculator will estimate the BTU requirements."
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
      "name": "BTU Calculator",
      "item": "https://www.unitedcalculator.net/other/btu-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Room Length (ft)</label>
            <input
              type="number"
              value={roomLength}
              onChange={(e) => setRoomLength(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 15"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Room Width (ft)</label>
            <input
              type="number"
              value={roomWidth}
              onChange={(e) => setRoomWidth(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 12"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Room Height (ft)</label>
            <input
              type="number"
              value={roomHeight}
              onChange={(e) => setRoomHeight(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 8"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Number of People</label>
            <input
              type="number"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 2"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              BTU Requirement
            </h2>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Room Volume:</span>
                <span>{result.roomVolume} cu ft</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Estimated BTU Needed:</span>
                <span className="text-blue-600">{result.requiredBTU} BTU</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BTUCalculator;
