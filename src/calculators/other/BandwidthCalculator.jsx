import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const BandwidthCalculator = () => {
  const [fileSize, setFileSize] = useState("100"); // in MB
  const [internetSpeed, setInternetSpeed] = useState("10"); // in Mbps

  const calculateDownloadTime = () => {
    const sizeInMb = parseFloat(fileSize) * 8; // Convert MB to Megabits
    const speedInMbps = parseFloat(internetSpeed);

    if (isNaN(sizeInMb) || isNaN(speedInMbps) || speedInMbps === 0) return null;

    const timeInSeconds = sizeInMb / speedInMbps;
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.round(timeInSeconds % 60);

    return {
      minutes,
      seconds,
      totalSeconds: timeInSeconds.toFixed(2),
    };
  };

  const result = calculateDownloadTime();

  return (
    <>
      <Helmet>
        <title>Bandwidth Calculator | Calculate Network Bandwidth Easily</title>
        <meta
          name="description"
          content="Use our Bandwidth Calculator to quickly estimate network bandwidth requirements and data transfer speeds. Ideal for IT professionals and network planners."
        />
        <meta
          name="keywords"
          content="bandwidth calculator, network bandwidth calculator, data transfer calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/bandwidth-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bandwidth Calculator | Calculate Network Bandwidth Easily"
        />
        <meta
          property="og:description"
          content="Quickly estimate network bandwidth and data transfer speeds with our easy-to-use Bandwidth Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/bandwidth-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Bandwidth Calculator",
  "url": "https://www.unitedcalculator.net/other/bandwidth-calculator",
  "description": "Estimate network bandwidth requirements and data transfer speeds quickly and accurately with our Bandwidth Calculator.",
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
      "name": "What is a Bandwidth Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Bandwidth Calculator helps estimate the network bandwidth needed based on data transfer requirements and connection speeds."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Bandwidth Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Input your data size and transfer time, and the calculator will estimate the required bandwidth."
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
      "name": "Bandwidth Calculator",
      "item": "https://www.unitedcalculator.net/other/bandwidth-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md ">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">File Size (in MB)</label>
            <input
              type="number"
              value={fileSize}
              onChange={(e) => setFileSize(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 100"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Internet Speed (in Mbps)
            </label>
            <input
              type="number"
              value={internetSpeed}
              onChange={(e) => setInternetSpeed(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g. 10"
            />
          </div>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Download Time Estimate
            </h2>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Total Time:</span>
                <span>
                  {result.minutes} min {result.seconds} sec
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total Seconds:</span>
                <span>{result.totalSeconds} sec</span>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BandwidthCalculator;
