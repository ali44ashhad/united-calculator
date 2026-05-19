import React from "react";
import { Link } from "react-router-dom";

export default function EngineHorsepowerSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Engine horsepower calculator: HP from torque and RPM
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Automotive specs often list peak horsepower and torque curves. If you
          know <strong>torque in pound-feet (lb-ft)</strong> and{" "}
          <strong>engine speed in RPM</strong> at the same moment, you can
          estimate <strong>horsepower (HP)</strong> with the classic formula. This{" "}
          <strong>free engine horsepower calculator online</strong> applies{" "}
          <strong>HP = (torque × RPM) ÷ 5252</strong>—the standard relation used
          in US automotive engineering.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For electrical power (watts, kWh), use the{" "}
          <Link
            to="/other/electricity-calculator"
            className="text-primary hover:underline"
          >
            Electricity Calculator
          </Link>
          . This page is for mechanical shaft power from torque and rotation
          only.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">The 5252 rule</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          On a dyno chart, peak horsepower and peak torque often cross near{" "}
          <strong>5,252 RPM</strong> because at that speed (with lb-ft and HP
          units) the numeric values match. The constant 5252 comes from unit
          conversion between work per minute and horsepower.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this HP calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-3 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter torque in lb-ft (from a spec sheet or dyno).</li>
          <li>Enter engine RPM at that same operating point.</li>
          <li>Read estimated horsepower in the summary.</li>
          <li>Reset restores 350 lb-ft at 6000 RPM (≈ 399.85 HP).</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Formula</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`HP = (T × RPM) / 5252

T   = torque (lb-ft)
RPM = revolutions per minute
HP  = horsepower

Example: T = 350 lb-ft, RPM = 6000
HP = (350 × 6000) / 5252 ≈ 399.85`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Torque vs horsepower
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Torque</strong> is twisting force—what you feel accelerating
          from low RPM. <strong>Horsepower</strong> is how fast that work is
          done—it rises with RPM when torque is held. Marketing “HP” numbers are
          usually peak values; real-world performance depends on the whole
          curve.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Limitations</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>lb-ft and RPM only (not N·m without conversion)</li>
          <li>Does not measure wheel horsepower or drivetrain loss</li>
          <li>Not a dynamometer—no correction for altitude or temperature</li>
          <li>Negative torque (engine braking) can yield negative HP in math</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is brake horsepower (BHP)?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              BHP is horsepower measured at the crankshaft (or flywheel) on a
              dyno. Wheel HP is lower because of transmission and tire losses.
              This tool is the math link between torque and HP, not a dyno test.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I convert N·m to lb-ft?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Multiply newton-meters by about 0.73756 to get lb-ft, then use this
              calculator. Or use the{" "}
              <Link
                to="/other/conversion-calculator"
                className="text-primary hover:underline"
              >
                Conversion Calculator
              </Link>{" "}
              for length; torque conversion may need a dedicated factor.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why must RPM be positive?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              RPM is a rate of rotation. Zero or negative RPM does not represent
              normal forward engine output for this formula.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
