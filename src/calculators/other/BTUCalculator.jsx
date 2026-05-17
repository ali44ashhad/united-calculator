import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PAGE_URL = "https://www.unitedcalculator.net/other/btu-calculator";

const DEFAULTS = {
  roomLength: "15",
  roomWidth: "12",
  roomHeight: "8",
  people: "2",
};

const BTU_PER_CUBIC_FOOT = 5;
const BTU_PER_EXTRA_PERSON = 600;

const inputClassName =
  "w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 text-body-lg font-body-lg transition-all";

const computeBTU = (roomLength, roomWidth, roomHeight, people) => {
  if (
    [roomLength, roomWidth, roomHeight, people].some((v) => v.trim() === "")
  ) {
    return null;
  }

  const length = parseFloat(roomLength);
  const width = parseFloat(roomWidth);
  const height = parseFloat(roomHeight);
  const numPeople = parseInt(people, 10);

  if (
    [length, width, height].some((n) => isNaN(n) || n <= 0) ||
    isNaN(numPeople) ||
    numPeople < 1
  ) {
    return {
      error:
        "Enter positive room dimensions (ft) and at least one person.",
    };
  }

  const roomVolume = length * width * height;
  const volumeBtu = roomVolume * BTU_PER_CUBIC_FOOT;
  const peopleBtu =
    numPeople > 1 ? (numPeople - 1) * BTU_PER_EXTRA_PERSON : 0;
  const requiredBTU = Math.round(volumeBtu + peopleBtu);

  return {
    roomVolume,
    volumeBtu: Math.round(volumeBtu),
    peopleBtu,
    requiredBTU,
    numPeople,
  };
};

const BTUCalculator = () => {
  const [roomLength, setRoomLength] = useState(DEFAULTS.roomLength);
  const [roomWidth, setRoomWidth] = useState(DEFAULTS.roomWidth);
  const [roomHeight, setRoomHeight] = useState(DEFAULTS.roomHeight);
  const [people, setPeople] = useState(DEFAULTS.people);

  const result = computeBTU(roomLength, roomWidth, roomHeight, people);

  const reset = () => {
    setRoomLength(DEFAULTS.roomLength);
    setRoomWidth(DEFAULTS.roomWidth);
    setRoomHeight(DEFAULTS.roomHeight);
    setPeople(DEFAULTS.people);
  };

  return (
    <>
      <Helmet>
        <title>
          BTU Calculator - Room Size & Occupancy Heating/Cooling Estimate
        </title>
        <meta
          name="description"
          content="Estimate BTU needs from room length, width, height in feet and number of people. Uses 5 BTU per cubic foot plus 600 BTU per extra occupant."
        />
        <meta
          name="keywords"
          content="BTU calculator, how many BTU do I need for a room, air conditioner BTU calculator room size, heating BTU calculator cubic feet, HVAC BTU estimate, room BTU requirement calculator"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="BTU Calculator - Room Volume & People"
        />
        <meta
          property="og:description"
          content="Enter room dimensions and occupancy to estimate required BTUs."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="BTU Calculator - HVAC Room Estimate"
        />
        <meta
          name="twitter:description"
          content="Quick BTU estimate from cubic feet and number of people."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "BTU Calculator",
            url: PAGE_URL,
            description:
              "Estimate heating and cooling BTU requirements from room volume and occupancy.",
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
            name: "BTU Calculator",
            url: PAGE_URL,
            description:
              "Web application to estimate BTU requirements using room dimensions in feet and number of occupants.",
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
              "How to Estimate BTU Requirements from Room Size and Occupancy",
            description:
              "Guide to calculating room volume in cubic feet, applying BTU-per-foot rules of thumb, and adding heat load for extra people.",
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
                name: "How does this BTU calculator work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It multiplies room volume (length × width × height in feet) by 5 BTU per cubic foot, then adds 600 BTU for each person beyond the first.",
                },
              },
              {
                "@type": "Question",
                name: "What is a BTU?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A British Thermal Unit (BTU) measures heat energy. HVAC equipment capacity is often rated in BTUs per hour for heating or cooling output.",
                },
              },
              {
                "@type": "Question",
                name: "Does this include insulation and climate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. It is a simplified rule of thumb. Professional load calculations include climate zone, windows, insulation, sun exposure, and more.",
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
                name: "BTU Calculator",
                item: PAGE_URL,
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Length</label>
            <div className="relative">
              <input
                type="number"
                value={roomLength}
                onChange={(e) => setRoomLength(e.target.value)}
                className={`${inputClassName} pr-12`}
                placeholder={DEFAULTS.roomLength}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                ft
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Width</label>
            <div className="relative">
              <input
                type="number"
                value={roomWidth}
                onChange={(e) => setRoomWidth(e.target.value)}
                className={`${inputClassName} pr-12`}
                placeholder={DEFAULTS.roomWidth}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                ft
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">Height</label>
            <div className="relative">
              <input
                type="number"
                value={roomHeight}
                onChange={(e) => setRoomHeight(e.target.value)}
                className={`${inputClassName} pr-12`}
                placeholder={DEFAULTS.roomHeight}
                min="0"
                step="any"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">
                ft
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-h3 text-h3 text-on-surface">
              Number of people
            </label>
            <input
              type="number"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className={inputClassName}
              placeholder={DEFAULTS.people}
              min="1"
              step="1"
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
          <h2 className="font-h3 text-h3 text-on-surface mb-6">BTU Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Room volume</span>
              <span className="font-code-num text-code-num">
                {result?.roomVolume != null
                  ? `${result.roomVolume.toLocaleString()} cu ft`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Volume load ({BTU_PER_CUBIC_FOOT} BTU/cu ft)
              </span>
              <span className="font-code-num text-code-num">
                {result?.volumeBtu != null
                  ? `${result.volumeBtu.toLocaleString()} BTU`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">
                Extra people (
                {result?.numPeople != null && result.numPeople > 1
                  ? result.numPeople - 1
                  : 0}{" "}
                × {BTU_PER_EXTRA_PERSON} BTU)
              </span>
              <span className="font-code-num text-code-num">
                {result?.peopleBtu != null
                  ? `${result.peopleBtu.toLocaleString()} BTU`
                  : "—"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface">Estimated BTU needed</span>
              <span className="font-code-num text-code-num text-primary text-lg">
                {result?.requiredBTU != null
                  ? `${result.requiredBTU.toLocaleString()} BTU`
                  : "—"}
              </span>
            </div>
            {result?.error && (
              <p className="text-sm text-error">{result.error}</p>
            )}
            <p className="text-sm text-on-surface-variant pt-2 border-t border-outline-variant">
              Rule-of-thumb estimate only. For AC sizing, also consider climate,
              insulation, windows, and equipment efficiency (SEER/EER).
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BTUCalculator;
