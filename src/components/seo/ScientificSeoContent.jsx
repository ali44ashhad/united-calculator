import React from "react";
import { Link } from "react-router-dom";

export default function ScientificSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Scientific calculator online
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>scientific calculator</strong> in your browser for{" "}
          <strong>sin, cos, tan</strong>, <strong>log</strong>, <strong>ln</strong>
          , <strong>sqrt</strong>, <strong>powers</strong>, and constants{" "}
          <strong>π</strong> and <strong>e</strong>. Build an expression on the
          keypad and press <strong>=</strong>.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>arithmetic only</strong>, use the{" "}
          <Link
            to="/math/basic-calculator"
            className="text-primary hover:underline"
          >
            Basic Calculator
          </Link>
          . For dedicated <strong>logs</strong> or <strong>roots</strong>, see the{" "}
          <Link
            to="/math/log-calculator"
            className="text-primary hover:underline"
          >
            Log Calculator
          </Link>{" "}
          and{" "}
          <Link
            to="/math/root-calculator"
            className="text-primary hover:underline"
          >
            Root Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is a scientific calculator?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          A <strong>scientific calculator</strong> goes beyond +, −, ×, ÷. It
          supports trigonometry, logarithms, exponents, and constants needed for
          algebra, science, and engineering homework.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>+, −, ×, ÷, parentheses</li>
              <li>sin, cos, tan (radians)</li>
              <li>log (base 10), ln</li>
              <li>sqrt, powers (^)</li>
              <li>Constants π and e</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>DEG / RAD mode toggle</li>
              <li>Graphing</li>
              <li>Matrices or statistics modes</li>
              <li>Unit conversion</li>
              <li>Calculation history export</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Radians vs degrees</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Trig buttons use <strong>radians</strong>. Example: sin(π/2) = 1. To
          use degrees, convert first (multiply by π/180 inside the expression).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example expressions</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`sin(π/2)        → 1
sqrt(16)        → 4
log(100)        → 2
ln(e)           → 1
2^10            → 1024
(3+4)*sqrt(2)   → combined arithmetic`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this scientific calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Tap numbers and operators to build an expression.</li>
          <li>Use function buttons (sin, log, etc.) and close with ).</li>
          <li>Press = or Calculate Now.</li>
          <li>Continue from the result for chained calculations.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (scientific calculator)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is this scientific calculator free?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—runs in the browser with no sign-up.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is the difference between log and ln?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              <strong>log</strong> is base 10; <strong>ln</strong> is natural log
              (base e).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I enter π or e?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Use the <strong>π</strong> and <strong>e</strong> keys on the keypad.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I type on the keyboard?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              The display is read-only—use the on-screen buttons (including ⌫ and
              C).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why does sin(90) not equal 1?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              90 here means <strong>90 radians</strong>, not degrees. Use sin(π/2)
              for 1.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does ^ mean exponent?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes—<strong>2^3</strong> is 2³ = 8.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is data sent to a server?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—expressions are evaluated locally in your browser.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              When should I use the basic calculator instead?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              For simple +, −, ×, ÷ without trig or logs, the{" "}
              <Link
                to="/math/basic-calculator"
                className="text-primary hover:underline"
              >
                Basic Calculator
              </Link>{" "}
              is simpler.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
