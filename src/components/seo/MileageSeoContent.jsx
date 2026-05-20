import React from "react";
import { Link } from "react-router-dom";

export default function MileageSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Mileage calculator: km/L and L/100 km from distance and fuel
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Outside the US, drivers often quote <strong>liters per 100
          kilometers</strong> on window stickers and forum posts; elsewhere you
          still see <strong>kilometers per liter</strong> from a single tank.
          This <strong>free mileage calculator online</strong> takes{" "}
          <strong>distance in km</strong> and <strong>fuel in liters</strong> from
          one trip (or a careful fill-up cycle) and returns both{" "}
          <strong>km/L</strong> and <strong>L/100 km</strong>, plus an{" "}
          <strong>approximate US MPG</strong> for comparison with American specs.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>mileage calculator</strong>,{" "}
          <strong>fuel efficiency calculator</strong>,{" "}
          <strong>km per liter</strong>. Long-tail:{" "}
          <strong>calculate fuel economy from km and liters used</strong>,{" "}
          <strong>convert km/L to L per 100 km</strong>,{" "}
          <strong>trip fuel consumption calculator metric</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The formulas</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`km/L = kilometers driven ÷ liters used
L/100 km = 100 ÷ (km/L)

Example: 100 km on 8 L → 12.5 km/L → 8 L/100 km`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Metric vs US (Gas Mileage Calculator)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This page is <strong>kilometers + liters</strong>. If your odometer is
          in <strong>miles</strong> and you pump <strong>US gallons</strong>, use
          the{" "}
          <Link
            to="/other/gas-mileage-calculator"
            className="text-primary hover:underline"
          >
            Gas Mileage Calculator
          </Link>{" "}
          for native <strong>MPG</strong>. To estimate trip cost from consumption,
          try the{" "}
          <Link
            to="/other/fuel-cost-calculator"
            className="text-primary hover:underline"
          >
            Fuel Cost Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Related tools</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <Link
              to="/other/gas-mileage-calculator"
              className="text-primary hover:underline"
            >
              Gas Mileage Calculator
            </Link>{" "}
            — MPG from miles and US gallons.
          </li>
          <li>
            <Link
              to="/other/fuel-cost-calculator"
              className="text-primary hover:underline"
            >
              Fuel Cost Calculator
            </Link>{" "}
            — money for a journey.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              Is lower or higher better for km/L?
            </dt>
            <dd className="mt-1">
              <strong>Higher km/L</strong> is better (more distance per liter). For{" "}
              <strong>L/100 km</strong>, <strong>lower</strong> is better—the
              inverse scale.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Why does my km/L change every week?
            </dt>
            <dd className="mt-1">
              Traffic, AC load, tire pressure, roof racks, and cold starts all
              move real-world consumption. Average several full tanks.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
