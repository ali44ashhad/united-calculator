import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const IPSubnetCalculator = () => {
  const [ip, setIp] = useState("192.168.1.1");
  const [subnetMask, setSubnetMask] = useState("255.255.255.0");
  const [result, setResult] = useState(null);

  const calculateSubnet = () => {
    try {
      const ipParts = ip.split(".").map(Number);
      const maskParts = subnetMask.split(".").map(Number);

      if (ipParts.length !== 4 || maskParts.length !== 4) {
        setResult({ error: "Invalid IP or Subnet Mask" });
        return;
      }

      const networkAddress = ipParts.map((part, i) => part & maskParts[i]);
      const broadcastAddress = ipParts.map(
        (part, i) => part | (~maskParts[i] & 255)
      );
      const hostBits =
        32 -
        maskParts.reduce(
          (acc, part) => acc + part.toString(2).split("1").length - 1,
          0
        );
      const numHosts = Math.pow(2, hostBits) - 2;

      setResult({
        networkAddress: networkAddress.join("."),
        broadcastAddress: broadcastAddress.join("."),
        numberOfHosts: numHosts,
      });
    } catch (err) {
      setResult({ error: "Invalid input" });
    }
  };

  return (
    <>
      <Helmet>
        <title>IP Subnet Calculator | Calculate Subnet Masks & IP Ranges</title>
        <meta
          name="description"
          content="Use our IP Subnet Calculator to quickly calculate subnet masks, IP ranges, and other subnetting details."
        />
        <meta
          name="keywords"
          content="IP subnet calculator, subnet mask calculator, IP range calculator, network calculator, other calculator"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unitedcalculator.net/other/ip-subnet-calculator"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="IP Subnet Calculator | Calculate Subnet Masks & IP Ranges"
        />
        <meta
          property="og:description"
          content="Calculate subnet masks, IP ranges, and subnet details quickly and accurately with our IP Subnet Calculator."
        />
        <meta
          property="og:url"
          content="https://www.unitedcalculator.net/other/ip-subnet-calculator"
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "IP Subnet Calculator",
  "url": "https://www.unitedcalculator.net/other/ip-subnet-calculator",
  "description": "Quickly calculate subnet masks, IP ranges, and other subnetting details using our IP Subnet Calculator.",
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
      "name": "What is an IP Subnet Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An IP Subnet Calculator helps you calculate subnet masks, IP ranges, and other details for network subnetting."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the IP Subnet Calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the IP address and subnet mask or prefix length, and the calculator will provide subnetting details."
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
      "name": "IP Subnet Calculator",
      "item": "https://www.unitedcalculator.net/other/ip-subnet-calculator"
    }
  ]
}
    `}
        </script>
      </Helmet>

      <div className="mx-auto mt-10 p-6 bg-white rounded-xl border border-gray-200 shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">IP Address</label>
            <input
              type="text"
              value={ip}
              onChange={(e) => setIp(e.target.value)}
              placeholder="e.g. 192.168.1.1"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Subnet Mask</label>
            <input
              type="text"
              value={subnetMask}
              onChange={(e) => setSubnetMask(e.target.value)}
              placeholder="e.g. 255.255.255.0"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            onClick={calculateSubnet}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Calculate
          </button>
        </div>

        {result && (
          <section className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6 space-y-2">
            {result.error ? (
              <p className="text-red-600 font-medium">{result.error}</p>
            ) : (
              <>
                <div className="flex justify-between">
                  <span className="font-medium">Network Address:</span>
                  <span className="text-blue-600">{result.networkAddress}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Broadcast Address:</span>
                  <span className="text-blue-600">
                    {result.broadcastAddress}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Number of Hosts:</span>
                  <span className="text-blue-600">{result.numberOfHosts}</span>
                </div>
              </>
            )}
          </section>
        )}
      </div>
    </>
  );
};

export default IPSubnetCalculator;
