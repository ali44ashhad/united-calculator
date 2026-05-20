import React from "react";
import { Link } from "react-router-dom";

export default function GasMileageSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Gas mileage calculator: MPG from miles driven and gallons pumped
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Whether you are logging a road trip, comparing two fill-ups, or
          checking whether your SUV still hits the window sticker after new
          tires, <strong>miles per gallon (MPG)</strong> is the classic US fuel
          economy number. This <strong>free gas mileage calculator online</strong>{" "}
          divides <strong>distance in miles</strong> by <strong>fuel used in US
          gallons</strong> to give <strong>MPG</strong>. It also shows an{" "}
          <strong>approximate L/100 km</strong> figure so you can compare with
          European reviews or EPA metric labels.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If you already know km/L and fuel price in rupees, use the{" "}
          <Link
            to="/other/fuel-cost-calculator"
            className="text-primary hover:underline"
          >
            Fuel Cost Calculator
          </Link>{" "}
          for trip spend. For length conversions (miles ↔ km), the{" "}
          <Link
            to="/other/conversion-calculator"
            className="text-primary hover:underline"
          >
            Conversion Calculator
          </Link>{" "}
          helps align units before you enter this MPG tool.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The MPG formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`MPG (US) = miles driven ÷ US gallons used

Example: 300 mi ÷ 10 gal = 30 MPG

L/100 km ≈ 235.214583 ÷ MPG (US)`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Lower <strong>L/100 km</strong> means better economy (less fuel per
          hundred km). Higher <strong>MPG</strong> means the same thing in US
          units—more miles squeezed from each gallon.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to measure MPG on one tank (honest method)
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>Fill until the pump clicks off (same station if possible).</li>
          <li>Reset trip odometer or note main odometer miles.</li>
          <li>Drive normally until the next fill.</li>
          <li>
            Fill again to the same click-off habit; record gallons from the
            receipt.
          </li>
          <li>
            MPG = miles between fills ÷ gallons for the second fill only (that
            batch replaced what you burned).
          </li>
        </ol>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short trips, winter warm-up, and A/C load can swing MPG more than any
          calculator can predict—track a few tanks for a stable average.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          US gallons vs imperial (UK) gallons
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>UK gallon</strong> is about 1.2× a US gallon. If you divide
          miles by UK gallons you get <strong>MPG (imperial)</strong>, which is
          a higher number for the same drive. This page assumes{" "}
          <strong>US gallons</strong>—the kind sold at American gas pumps.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Related: power and long trips
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Fuel economy and engine output are different questions. If you are
          sizing power from torque and RPM, try the{" "}
          <Link
            to="/other/engine-horsepower-calculator"
            className="text-primary hover:underline"
          >
            Engine Horsepower Calculator
          </Link>
          . For calendar span between two trip dates, the{" "}
          <Link
            to="/other/day-counter"
            className="text-primary hover:underline"
          >
            Day Counter
          </Link>{" "}
          can help plan multi-day mileage logs.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Limitations</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>US miles and US gallons only (no liters-in field on this page)</li>
          <li>One segment average—not EPA combined label simulation</li>
          <li>L/100 km is a rounded conversion from US MPG</li>
          <li>Does not estimate cost; use Fuel Cost for ₹/liter trips</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is good gas mileage?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              It depends on vehicle class. Compact hybrids may exceed 40 MPG
              highway; large trucks may be mid-teens. Compare to your own past
              tanks and the EPA label for your VIN class, not random forum brags.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why did my MPG drop in winter?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Cold fuel, longer warm-up, denser air, and winter blend gasoline
              can all reduce MPG slightly. Short commutes hurt most because the
              engine spends more time rich before closed-loop fueling.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use the trip computer instead of math?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes, but trip computers can drift from pump-calculated MPG. This
              calculator matches the pump-and-odometer method many owners trust.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I convert MPG to km/L?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Multiply US MPG by 0.425144: km/L ≈ MPG × 0.425144. Or use L/100 km
              from this tool and invert: km/L = 100 ÷ (L/100 km).
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
