import React from "react";
import { Link } from "react-router-dom";

export default function PaceSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Pace calculator: running pace per km, mile &amp; speed
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>pace calculator</strong> to find your average{" "}
          <strong>running pace</strong> from <strong>distance</strong> (km) and{" "}
          <strong>finish time</strong>. It shows <strong>minutes per kilometer</strong>
          , <strong>minutes per mile</strong>, and <strong>speed in km/h and mph</strong>
          —ideal after a 5K, 10K, half marathon, or training run.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Whether you need a <strong>running pace calculator</strong>,{" "}
          <strong>race pace calculator</strong>, or want to convert a 30-minute 5K
          into min/km, enter your numbers above. For calories burned on the run, try
          the{" "}
          <Link
            to="/health/calories-burned-calculator"
            className="text-primary hover:underline"
          >
            Calories Burned Calculator
          </Link>
          . For strength cross-training, see the{" "}
          <Link
            to="/health/one-rep-max-calculator"
            className="text-primary hover:underline"
          >
            One Rep Max Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is running pace?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Pace</strong> is time divided by distance—how many minutes and
          seconds you take per kilometer or mile. A <strong>6:00 min/km</strong> pace
          is faster than <strong>7:00 min/km</strong>. <strong>Speed</strong> flips
          the relationship: distance per hour (km/h or mph).
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Lower pace time</strong> = faster running
          </li>
          <li>
            <strong>Higher speed</strong> = faster running
          </li>
          <li>
            <strong>Average pace</strong> = total time ÷ total distance
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this pace calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Pace min/km and min/mile</li>
              <li>Speed km/h and mph</li>
              <li>Distance presets (5K, 10K, half, marathon)</li>
              <li>Time entry as hours, minutes, seconds</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>GPS live tracking or splits per lap</li>
              <li>Elevation-adjusted pace (GAP)</li>
              <li>Training zone tables (VDOT)</li>
              <li>Cadence or heart-rate zones</li>
              <li>Medical exercise prescriptions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Pace formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`Pace (min/km) = Total time (minutes) ÷ Distance (km)

Pace (min/mile) ≈ Pace (min/km) × 1.609344

Speed (km/h) = Distance (km) ÷ Time (hours)

Example: 5 km in 30:00
  Pace = 30 ÷ 5 = 6:00 min/km
  Speed = 10 km/h
  Mile pace ≈ 9:39 min/mi`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Common race distances
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>5K</strong> — 5 km (~3.1 mi)
          </li>
          <li>
            <strong>10K</strong> — 10 km (~6.2 mi)
          </li>
          <li>
            <strong>Half marathon</strong> — 21.0975 km (~13.1 mi)
          </li>
          <li>
            <strong>Marathon</strong> — 42.195 km (~26.2 mi)
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this running pace calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter distance in kilometers (or tap a race preset).</li>
          <li>Enter elapsed time as hours, minutes, and seconds.</li>
          <li>Read min/km, min/mile, and speed.</li>
          <li>
            Use average pace to plan future runs—add buffer for hills, heat, or
            fatigue.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example calculation</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-3">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>10 km</strong> in <strong>52 minutes</strong>:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
            <li>
              Pace = 52 ÷ 10 = <strong>5:12 min/km</strong>
            </li>
            <li>Speed ≈ <strong>11.5 km/h</strong> (~7.2 mph)</li>
            <li>Mile pace ≈ 8:22 min/mi</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Pace vs splits vs negative splits
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This tool gives <strong>one average pace</strong> for the whole effort.
          <strong> Splits</strong> are pace per segment (each km or mile).{" "}
          <strong>Negative splits</strong> mean running the second half faster than
          the first—your average pace still summarizes the full run.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Treadmill vs outdoor pace
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Treadmills display speed (km/h or mph); this calculator accepts distance
          and time the same way. Outdoor GPS may differ slightly from treadmill belt
          distance—use the source you trust for race planning.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (running pace)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a pace calculator?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A tool that converts <strong>total time and distance</strong> into
              average minutes per km/mile and speed.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I calculate my running pace?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Divide run time in minutes by distance in km. Example: 25 min ÷ 5 km ={" "}
              <strong>5:00 min/km</strong>.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I convert min/km to min/mile?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Multiply min/km by <strong>1.609344</strong> (km per mile). This page
              calculates both automatically.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a good 5K pace?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Highly individual. Many recreational runners land between{" "}
              <strong>5:00–7:00 min/km</strong> for 5K. Enter your own race time for
              your personal average.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Pace or speed—which do runners use?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Runners often speak in <strong>pace</strong> (min/km or min/mile).
              Cyclists and treadmills often use <strong>speed</strong> (km/h). This
              calculator shows both.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I enter miles instead of km?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Distance input is <strong>kilometers</strong>. Convert miles × 1.609344
              = km, or use mile pace in the output after entering km.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why is my GPS pace different from this result?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              GPS watches update pace continuously; this tool uses your total average.
              Stops, walk breaks, and signal drift change live readings.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this pace calculator medical advice?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. It is a <strong>fitness calculator</strong> for math only. Heart
              conditions and return-to-run programs need professional guidance.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
