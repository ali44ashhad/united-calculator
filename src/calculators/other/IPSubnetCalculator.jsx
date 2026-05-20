import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/ip-subnet-calculator";

const DEFAULTS = {
  ip: "192.168.1.1",
  subnetMask: "255.255.255.0",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const parseIpv4 = (value) => {
  const trimmed = value.trim();
  if (!trimmed) return null;
  const parts = trimmed.split(".");
  if (parts.length !== 4) return null;
  const octets = parts.map((p) => {
    if (!/^\d+$/.test(p)) return NaN;
    const n = Number(p);
    if (n < 0 || n > 255) return NaN;
    return n;
  });
  if (octets.some((n) => isNaN(n))) return null;
  return octets;
};

const prefixLengthFromMask = (maskParts) => {
  const binary = maskParts
    .map((p) => p.toString(2).padStart(8, "0"))
    .join("");
  if (!/^1*0*$/.test(binary)) return null;
  return (binary.match(/1/g) || []).length;
};

const octetsToIp = (octets) => octets.join(".");

const incrementOctets = (octets, delta) => {
  let carry = delta;
  const next = [...octets];
  for (let i = 3; i >= 0 && carry > 0; i--) {
    const sum = next[i] + carry;
    next[i] = sum % 256;
    carry = Math.floor(sum / 256);
  }
  return next;
};

const computeSubnet = (ip, subnetMask) => {
  if (ip.trim() === "" || subnetMask.trim() === "") {
    return null;
  }

  const ipParts = parseIpv4(ip);
  const maskParts = parseIpv4(subnetMask);

  if (!ipParts || !maskParts) {
    return {
      error:
        "Enter valid IPv4 addresses (four octets, 0–255 each) for IP and subnet mask.",
    };
  }

  const prefix = prefixLengthFromMask(maskParts);
  if (prefix === null) {
    return {
      error:
        "Subnet mask must be contiguous (ones then zeros), e.g. 255.255.255.0.",
    };
  }

  const networkAddress = ipParts.map((part, i) => part & maskParts[i]);
  const broadcastAddress = ipParts.map(
    (part, i) => part | (~maskParts[i] & 255)
  );
  const wildcardMask = maskParts.map((part) => (~part & 255));
  const hostBits = 32 - prefix;
  const numberOfHosts =
    hostBits >= 31 ? null : Math.pow(2, hostBits) - 2;

  let firstHost = null;
  let lastHost = null;
  if (hostBits > 1 && numberOfHosts != null && numberOfHosts > 0) {
    firstHost = incrementOctets(networkAddress, 1);
    lastHost = incrementOctets(broadcastAddress, -1);
  }

  return {
    ipParts,
    maskParts,
    prefix,
    networkAddress,
    broadcastAddress,
    wildcardMask,
    hostBits,
    numberOfHosts,
    firstHost,
    lastHost,
  };
};

const IPSubnetCalculator = () => {
  const [ip, setIp] = useState(DEFAULTS.ip);
  const [subnetMask, setSubnetMask] = useState(DEFAULTS.subnetMask);

  const result = computeSubnet(ip, subnetMask);

  const reset = () => {
    setIp(DEFAULTS.ip);
    setSubnetMask(DEFAULTS.subnetMask);
  };

  const networkStr =
    result?.networkAddress && !result.error
      ? octetsToIp(result.networkAddress)
      : null;
  const broadcastStr =
    result?.broadcastAddress && !result.error
      ? octetsToIp(result.broadcastAddress)
      : null;

  return (
    <>
      <Helmet>
        <title>
          IP Subnet Calculator - Network, Broadcast & Host Count (/24 etc.)
        </title>
        <meta
          name="description"
          content="IPv4 subnet calculator from IP address and subnet mask: network address, broadcast, CIDR prefix, wildcard mask, usable hosts, and first/last host."
        />
        <meta
          name="keywords"
          content="IP subnet calculator IPv4, subnet mask to network address, broadcast address calculator, CIDR prefix calculator, usable hosts subnet, 255.255.255.0 calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="IP Subnet Calculator"
        />
        <meta
          property="og:description"
          content="Network and broadcast from IP + subnet mask with host count."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IP Subnet Calculator" />
        <meta
          name="twitter:description"
          content="IPv4 subnetting from mask and address."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "IP Subnet Calculator",
            url: PAGE_URL,
            description:
              "Calculate IPv4 network address, broadcast address, CIDR prefix, and usable host count from an IP and subnet mask.",
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "IP Subnet Calculator",
            url: PAGE_URL,
            description:
              "Web tool for IPv4 subnetting: network, broadcast, wildcard mask, and host range.",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "IPv4 Subnetting from an IP Address and Subnet Mask",
            description:
              "AND the IP with the mask for the network address; OR with the inverted mask for broadcast; subtract two for classic usable host count on LAN-sized subnets.",
            author: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
            publisher: {
              "@type": "Organization",
              name: "United Calculator",
              url: "https://www.unitedcalculator.net",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": PAGE_URL,
            },
            inLanguage: "en",
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How is the network address found?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Each octet of the IP is bitwise ANDed with the corresponding subnet mask octet. The result is the network (subnet) address.",
                },
              },
              {
                "@type": "Question",
                name: "How is usable host count calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For typical subnets, usable hosts = 2^(host bits) − 2, reserving the network and broadcast addresses. /31 and /32 use different rules on real networks.",
                },
              },
              {
                "@type": "Question",
                name: "Does this accept CIDR notation like /24?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Enter the dotted subnet mask (e.g. 255.255.255.0). The summary shows the equivalent CIDR prefix length such as /24.",
                },
              },
              {
                "@type": "Question",
                name: "Does this support IPv6?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. This calculator is for IPv4 dotted-decimal addresses and masks only.",
                },
              },
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.unitedcalculator.net",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Other Calculators",
                item: "https://www.unitedcalculator.net/other",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "IP Subnet Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">IP address</label>
            <input
              type="text"
              value={ip}
              onChange={(e) => setIp(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.ip}
              autoComplete="off"
              spellCheck={false}
            />
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Subnet mask
            </label>
            <input
              type="text"
              value={subnetMask}
              onChange={(e) => setSubnetMask(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.subnetMask}
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        </div>

        <div className="pt-2 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-lg font-h3 text-h3 shadow-md active:scale-95 transition-all"
            >
              Calculate Now
            </button>
            <button
              type="button"
              onClick={reset}
              className="text-secondary font-medium px-4 py-2 hover:bg-surface-container transition-colors rounded-lg"
            >
              Reset
            </button>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              lock
            </span>
            <span className="text-sm">Secure and private calculation</span>
          </div>
        </div>

        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
          <h2 className="font-h3 text-h3 text-on-surface mb-6">
            Subnet summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">CIDR prefix</span>
              <span className="font-code-num text-code-num">
                {result?.prefix != null && !result.error
                  ? `/${result.prefix}`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Network address</span>
              <span className="font-code-num text-code-num">
                {networkStr ?? "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Broadcast address</span>
              <span className="font-code-num text-code-num">
                {broadcastStr ?? "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Wildcard mask</span>
              <span className="font-code-num text-code-num">
                {result?.wildcardMask && !result.error
                  ? octetsToIp(result.wildcardMask)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">First usable host</span>
              <span className="font-code-num text-code-num">
                {result?.firstHost && !result.error
                  ? octetsToIp(result.firstHost)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Last usable host</span>
              <span className="font-code-num text-code-num">
                {result?.lastHost && !result.error
                  ? octetsToIp(result.lastHost)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-on-surface">Usable hosts (classic)</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.numberOfHosts != null && !result.error
                  ? result.numberOfHosts.toLocaleString()
                  : result?.prefix != null && !result.error
                    ? "See note (/31 or /32)"
                    : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Host count uses the usual <strong>2<sup>n</sup> − 2</strong> rule
              for prefixes /1–/30. Point-to-point /31 and host routes /32 follow
              different conventions in production networks.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPSubnetCalculator;
