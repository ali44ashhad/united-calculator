import React from "react";
import { Link } from "react-router-dom";

export default function FuelCostSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Fuel cost calculator: plan your trip petrol or diesel bill in rupees
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Before a highway run, office commute budget, or weekend getaway, most
          drivers ask: <strong>how much will fuel cost for this distance?</strong>{" "}
          This <strong>free fuel cost calculator online</strong> answers in two
          steps—how many <strong>liters</strong> you need, then how many{" "}
          <strong>rupees</strong> that costs at the pump. Enter{" "}
          <strong>trip distance in kilometers</strong>, your car’s{" "}
          <strong>fuel efficiency in km per liter (km/L)</strong>, and the{" "}
          <strong>current fuel price in ₹ per liter</strong>. The summary updates
          as you type.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          The math is the standard travel formula used in India and many markets
          that quote efficiency in km/L and price at the station in ₹/L. It is a
          planning estimate—not a substitute for your dashboard trip computer
          after heavy traffic, hills, or a full load of luggage.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How fuel cost is calculated (formula)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          First, divide distance by mileage to get{" "}
          <strong>liters of fuel consumed</strong>. Then multiply liters by price
          per liter for <strong>total fuel spend</strong>.
        </p>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Fuel (liters) = distance (km) ÷ mileage (km/L)
Total cost (₹) = fuel (L) × price (₹/L)

Cost per km = total cost ÷ distance`}</pre>
        </div>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          If your odometer or map shows distance in miles, convert to kilometers
          before using this page—the{" "}
          <Link
            to="/other/conversion-calculator"
            className="text-primary hover:underline"
          >
            Conversion Calculator
          </Link>{" "}
          handles length units (meters, km, feet, miles) so you do not mix
          formulas mid-trip.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Step-by-step: how to use this trip fuel calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Distance (km):</strong> Use Google Maps total route length,
            highway boards, or planned daily driving. For multi-day tours, add
            each leg—or use the{" "}
            <Link
              to="/other/day-counter"
              className="text-primary hover:underline"
            >
              Day Counter
            </Link>{" "}
            to count calendar days between start and return, then multiply your
            typical daily km.
          </li>
          <li>
            <strong>Mileage (km/L):</strong> Use the manufacturer claim as a
            starting point, but real-world km/L from your last few tankfuls is
            better. Highway trips often beat city traffic figures on the brochure.
          </li>
          <li>
            <strong>Fuel price (₹/L):</strong> Check today’s petrol or diesel
            rate in your city (IOC, BPCL, HP, or app listings). Diesel and petrol
            differ—run the calculator twice if you compare vehicles.
          </li>
          <li>
            Read <strong>fuel liters</strong>, <strong>total ₹</strong>, and{" "}
            <strong>cost per km</strong> in the summary panel.
          </li>
          <li>
            Click <strong>Reset</strong> to restore the sample: 150 km, 18 km/L,
            ₹105/L → about 8.33 L and ₹875 total.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Worked example</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            You plan a <strong>150 km</strong> one-way drive. Your hatchback
            averages <strong>18 km/L</strong> on the highway. Petrol is{" "}
            <strong>₹105 per liter</strong> today.
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Fuel needed = 150 ÷ 18 = <strong>8.33 liters</strong>
            <br />
            Fuel cost = 8.33 × 105 = <strong>₹875.00</strong> (rounded in the tool)
            <br />
            Cost per km = 875 ÷ 150 ≈ <strong>₹5.83/km</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            A return trip doubles distance to 300 km if conditions are similar—
            about ₹1,750 fuel only, before tolls and food stops.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          km/L vs MPG — getting the right efficiency number
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Indian buyers usually see <strong>km per liter</strong> on brochures
          and owner forums. US listings use <strong>miles per gallon (MPG)</strong>.
          To use this calculator, convert MPG to km/L (divide 235.215 by MPG for
          a rough inverse, or look up a conversion table) so your distance and
          efficiency share the same system.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Hybrids and EVs need different tools for electricity cost; for home
          charging or kWh estimates, try the{" "}
          <Link
            to="/other/electricity-calculator"
            className="text-primary hover:underline"
          >
            Electricity Calculator
          </Link>
          . This fuel page is for petrol, diesel, or CNG quoted in ₹/liter and
          km/L only.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Building a full road-trip budget (beyond fuel)
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Fuel is often the largest variable on a drive, but not the whole story.
          Add <strong>state highway tolls</strong>, FASTag balances, parking,
          meals, and hotel stays. If you are comparing buying a car versus
          rideshare, pair this fuel estimate with the{" "}
          <Link
            to="/finance/auto-loan-calculator"
            className="text-primary hover:underline"
          >
            Auto Loan Calculator
          </Link>{" "}
          for EMI and the{" "}
          <Link
            to="/finance/budget-calculator"
            className="text-primary hover:underline"
          >
            Budget Calculator
          </Link>{" "}
          to see monthly room for fuel, insurance, and maintenance together.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Fleet drivers and delivery routes sometimes track cost per km every
          week—if your total rises while distance stays flat, check tire pressure,
          air filter, and whether city traffic crept into the mix.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Tips to lower real-world fuel spend
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Maintain steady highway speeds; aggressive acceleration burns more L/100 km equivalent.</li>
          <li>Remove roof racks and excess weight when not needed.</li>
          <li>Keep tires inflated to the door-placard PSI.</li>
          <li>Combine errands into one loop instead of many cold starts.</li>
          <li>Compare petrol vs diesel only if you already own both—purchase price and resale differ.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator does not include
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Tolls, parking, fines, or vehicle EMI</li>
          <li>CNG in kg or electricity in kWh</li>
          <li>Idle time with engine on (traffic) beyond your average km/L guess</li>
          <li>US gallons or miles without conversion</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate fuel cost for a trip?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Divide trip km by your car’s km/L to get liters, then multiply
              liters by the pump price in ₹/L. This tool does both steps and shows
              total rupees plus cost per kilometer.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a good km/L for a car in India?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Small petrol hatchbacks often land roughly 15–22 km/L in mixed use;
              diesels and hybrids can differ. Use your own tank-to-tank average
              for the most accurate fuel cost estimate.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Should I use one-way or round-trip distance?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Enter the km you will actually drive for the trip segment you are
              budgeting. For a return journey, use total km (out + back) or run
              the calculator twice and add the results.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is my actual fuel bill higher than the estimate?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Traffic jams, AC on max, mountain roads, extra passengers, and
              under-inflated tires all reduce km/L. Fuel prices also change
              between cities and over time.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I use this for diesel and petrol?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—enter the correct ₹/L for the fuel type you buy and the km/L
              you achieve on that fuel. Do not mix petrol efficiency with diesel
              price in one run.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
