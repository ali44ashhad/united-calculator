import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/bandwidth-calculator";

const DEFAULTS = {
  fileSize: "100",
  internetSpeed: "10",
};

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeDownloadTime = (fileSize, internetSpeed) => {
  const sizeMb = parseFloat(fileSize);
  const speedMbps = parseFloat(internetSpeed);

  if (
    fileSize.trim() === "" ||
    internetSpeed.trim() === "" ||
    isNaN(sizeMb) ||
    isNaN(speedMbps) ||
    sizeMb <= 0 ||
    speedMbps <= 0
  ) {
    return { error: "Enter positive file size (MB) and speed (Mbps)." };
  }

  const sizeMegabits = sizeMb * 8;
  const timeInSeconds = sizeMegabits / speedMbps;
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.round(timeInSeconds % 60);

  return {
    sizeMegabits,
    minutes,
    seconds,
    totalSeconds: timeInSeconds,
  };
};

const BandwidthCalculator = () => {
  const [fileSize, setFileSize] = useState(DEFAULTS.fileSize);
  const [internetSpeed, setInternetSpeed] = useState(DEFAULTS.internetSpeed);

  const result = computeDownloadTime(fileSize, internetSpeed);

  const reset = () => {
    setFileSize(DEFAULTS.fileSize);
    setInternetSpeed(DEFAULTS.internetSpeed);
  };

  return (
    <>
      <Helmet>
        <title>
          Download Time Calculator - File Size MB & Internet Speed Mbps
        </title>
        <meta
          name="description"
          content="Estimate how long a download takes from file size in MB and connection speed in Mbps. Converts to megabits and shows minutes, seconds, and total seconds."
        />
        <meta
          name="keywords"
          content="download time calculator, how long to download file calculator, Mbps download time, file size MB download speed, bandwidth download estimator, megabits transfer time"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Download Time Calculator - MB & Mbps"
        />
        <meta
          property="og:description"
          content="Enter file size and internet speed to estimate download duration."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="How Long to Download? Mbps Calculator"
        />
        <meta
          name="twitter:description"
          content="Free download time estimate from file size and Mbps."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Bandwidth Calculator",
            url: PAGE_URL,
            description:
              "Estimate download time from file size in megabytes and internet speed in megabits per second.",
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
            name: "Bandwidth Calculator",
            url: PAGE_URL,
            description:
              "Web application to estimate file download duration using MB file size and Mbps connection speed.",
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
            headline:
              "How to Calculate Download Time from File Size and Mbps Speed",
            description:
              "Guide to converting megabytes to megabits and estimating download duration for home and office internet connections.",
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
                name: "How is download time calculated from Mbps?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Convert file size from megabytes to megabits (multiply by 8), then divide by download speed in Mbps. Time in seconds = (MB × 8) / Mbps.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between MB and Mbps?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "MB is megabytes (file size). Mbps is megabits per second (speed). There are 8 megabits in one megabyte.",
                },
              },
              {
                "@type": "Question",
                name: "Does this include real-world overhead?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. It is a theoretical best-case estimate. Actual downloads may take longer due to protocol overhead, Wi-Fi, and server limits.",
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
                name: "Bandwidth Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              File size
            </label>
            <div className="relative">
              <input
                type="number"
                value={fileSize}
                onChange={(e) => setFileSize(e.target.value)}
                className={`${inputClassName} pr-14`}
                placeholder={DEFAULTS.fileSize}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                MB
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Download speed
            </label>
            <div className="relative">
              <input
                type="number"
                value={internetSpeed}
                onChange={(e) => setInternetSpeed(e.target.value)}
                className={`${inputClassName} pr-16`}
                placeholder={DEFAULTS.internetSpeed}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                Mbps
              </span>
            </div>
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
            Download Time Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">File size (megabits)</span>
              <span className="font-code-num text-code-num">
                {result?.sizeMegabits != null
                  ? `${result.sizeMegabits.toFixed(2)} Mb`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Estimated time</span>
              <span className="font-code-num text-code-num text-primary">
                {result?.minutes != null
                  ? `${result.minutes} min ${result.seconds} sec`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Total seconds</span>
              <span className="font-code-num text-code-num">
                {result?.totalSeconds != null
                  ? result.totalSeconds.toFixed(2)
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Formula: time (sec) = (file MB × 8) ÷ speed Mbps. Ideal
              conditions only—real downloads may be slower.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BandwidthCalculator;
