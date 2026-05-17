import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL =
  "https://www.unitedcalculator.net/other/shoe-size-conversion";

const DEFAULT_US_SIZE = "9";

const EU_OFFSET = 30;
const UK_OFFSET = 0.5;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeShoeSizes = (usSize) => {
  if (usSize.trim() === "") {
    return null;
  }

  const us = parseFloat(usSize);
  if (isNaN(us) || us <= 0) {
    return { error: "Enter a valid positive US shoe size." };
  }

  const eu = us + EU_OFFSET;
  const uk = us - UK_OFFSET;

  return {
    us,
    eu,
    uk,
  };
};

const formatSize = (n) =>
  parseFloat(n.toFixed(1)).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });

const ShoeSizeConverter = () => {
  const [usSize, setUsSize] = useState(DEFAULT_US_SIZE);

  const result = computeShoeSizes(usSize);

  const reset = () => setUsSize(DEFAULT_US_SIZE);

  return (
    <>
      <Helmet>
        <title>
          Shoe Size Conversion - US to EU & UK (Approximate)
        </title>
        <meta
          name="description"
          content="Convert US shoe size to approximate EU and UK sizes. Enter US size; EU = US + 30, UK = US − 0.5. Rule-of-thumb only."
        />
        <meta
          name="keywords"
          content="shoe size converter US to EU, US to UK shoe size calculator, international shoe size conversion chart, men's shoe size EU conversion, shoe size conversion calculator online"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Shoe Size Conversion - US, EU, UK"
        />
        <meta
          property="og:description"
          content="Approximate shoe size conversion from US to EU and UK."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shoe Size Converter"
        />
        <meta
          name="twitter:description"
          content="US to EU and UK shoe size estimates in one step."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Shoe Size Conversion",
            url: PAGE_URL,
            description:
              "Convert US shoe sizes to approximate EU and UK equivalents.",
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
            name: "Shoe Size Conversion",
            url: PAGE_URL,
            description:
              "Web application to convert US shoe size to approximate EU and UK sizes.",
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
            headline: "How to Convert US Shoe Sizes to EU and UK",
            description:
              "Guide to approximate international shoe size conversion formulas and when to try shoes on in person.",
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
                name: "How does this shoe size converter work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Enter a US shoe size. EU size is estimated as US + 30. UK size is estimated as US − 0.5. These are approximations, not official brand charts.",
                },
              },
              {
                "@type": "Question",
                name: "Is US women's the same as US men's?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. This tool uses one US number with simple offsets. Women's and kids' sizing differ by brand; try shoes on when possible.",
                },
              },
              {
                "@type": "Question",
                name: "What is US size 9 in EU?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "With this formula, US 9 ≈ EU 39 (9 + 30). Brand charts may list 42 or other values—always check the label.",
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
                name: "Shoe Size Conversion",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-2 max-w-md">
          <label className="font-h3 text-h3 text-on-surface">US shoe size</label>
          <input
            type="number"
            value={usSize}
            onChange={(e) => setUsSize(e.target.value)}
            className={inputClassName}
            placeholder={DEFAULT_US_SIZE}
            min="0"
            step="0.5"
          />
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
            Shoe Size Summary
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">US size</span>
              <span className="font-code-num text-code-num">
                {result?.us != null && !result.error
                  ? formatSize(result.us)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                EU size (US + {EU_OFFSET})
              </span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.eu != null && !result.error
                  ? formatSize(result.eu)
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                UK size (US − {UK_OFFSET})
              </span>
              <span className="font-code-num text-code-num">
                {result?.uk != null && !result.error
                  ? formatSize(result.uk)
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Approximate conversion only. Brands and widths vary; try shoes on
              when you can. Not for kids’ or official ISO sizing.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ShoeSizeConverter;
