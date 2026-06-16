import React from "react";
import { Link } from "react-router-dom";

export default function HexSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="font-h2 text-h2 text-on-surface">
          Hex calculator: hexadecimal to decimal, binary &amp; octal
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Use this free <strong>hex calculator</strong> to convert a{" "}
          <strong>hexadecimal</strong> (<strong>base-16</strong>) value into{" "}
          <strong>decimal</strong>, <strong>binary</strong>, and{" "}
          <strong>octal</strong>. Type digits <strong>0–9</strong> and{" "}
          <strong>A–F</strong> (with optional <strong>0x</strong> prefix)—for
          example <strong>1F</strong> → <strong>31</strong> decimal,{" "}
          <strong>11111</strong> binary, <strong>37</strong> octal.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          For <strong>binary arithmetic</strong> (+ − × ÷), use the{" "}
          <Link
            to="/math/binary-calculator"
            className="text-primary hover:underline"
          >
            Binary Calculator
          </Link>
          . For general conversions, see the{" "}
          <Link
            to="/other/conversion-calculator"
            className="text-primary hover:underline"
          >
            Conversion Calculator
          </Link>
          . For very large integers in decimal, try the{" "}
          <Link
            to="/math/big-number-calculator"
            className="text-primary hover:underline"
          >
            Big Number Calculator
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What is hexadecimal?
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          <strong>Hexadecimal</strong> is a <strong>base-16</strong> number
          system. Sixteen symbols: <strong>0–9</strong> then{" "}
          <strong>A (10)</strong> through <strong>F (15)</strong>. Programmers use
          hex for <strong>memory addresses</strong>, <strong>color codes</strong>{" "}
          (#FF00AA), and compact views of <strong>binary data</strong>—each hex
          digit equals exactly <strong>four bits</strong>.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>Hex → decimal</strong> base-10 value
          </li>
          <li>
            <strong>Hex → binary</strong> bit string
          </li>
          <li>
            <strong>Hex → octal</strong> base-8 value
          </li>
          <li>
            <strong>0x</strong> prefix accepted
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          What this hex calculator includes (and excludes)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>One hex string → dec/bin/oct</li>
              <li>0x prefix stripping</li>
              <li>Hex digit and bit counts</li>
              <li>Large values via BigInt decimal string</li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 space-y-2">
            <h4 className="font-h3 text-h3 text-on-surface">Not included</h4>
            <ul className="list-disc pl-6 space-y-1 text-body-lg font-body-lg text-on-surface-variant">
              <li>Decimal-to-hex input field</li>
              <li>Hex addition, subtraction, multiply, divide</li>
              <li>Signed two&apos;s complement interpretation</li>
              <li>Floating-point hex (IEEE formats)</li>
              <li>RGB color picker UI</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Hex digit to decimal value
        </h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 overflow-auto">
          <pre className="font-code text-sm text-on-surface whitespace-pre-wrap">{`0=0  1=1  2=2  3=3  4=4  5=5  6=6  7=7
8=8  9=9  A=10 B=11 C=12 D=13 E=14 F=15

Example: 2A = 2×16 + 10 = 42
Example: FF = 15×16 + 15 = 255`}</pre>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Hex and binary</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Because <strong>16 = 2⁴</strong>, every hex digit maps to four binary
          bits. <strong>1F</strong> → <strong>0001</strong> + <strong>1111</strong>{" "}
          = <strong>00011111</strong> (31 in decimal). This nibble alignment is why
          hex appears in dumps and register views.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to convert hex to decimal by hand
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Write each hex digit&apos;s decimal value (A=10, F=15).</li>
          <li>
            Multiply by powers of 16 from right to left (16⁰, 16¹, 16²…).
          </li>
          <li>Add the products. For <strong>1F</strong>: 1×16 + 15×1 = 31.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          How to use this hex calculator
        </h3>
        <ol className="list-decimal pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>Enter a hex string (e.g. FF, 0x2A, DEADBEEF).</li>
          <li>Read decimal, binary, and octal in the summary.</li>
          <li>Check hex digit count and bit length for byte alignment.</li>
          <li>Use Reset to try another value.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Example conversions</h3>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 space-y-4">
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>FF</strong> → decimal <strong>255</strong>, binary{" "}
            <strong>11111111</strong>
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>10</strong> → decimal <strong>16</strong> (one hex &quot;ten&quot;
            = sixteen in decimal)
          </p>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            <strong>A</strong> → decimal <strong>10</strong>, octal{" "}
            <strong>12</strong>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Hex vs binary calculator
        </h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          This page is a <strong>hex converter</strong> (one input, multiple bases
          out). The{" "}
          <Link
            to="/math/binary-calculator"
            className="text-primary hover:underline"
          >
            Binary Calculator
          </Link>{" "}
          performs <strong>math on two binary strings</strong> and shows hex as a
          readout of the result.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">
          Frequently asked questions (hexadecimal)
        </h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What is a hexadecimal number?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A <strong>base-16</strong> number using digits 0–9 and A–F, common in
              computing and digital electronics.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I convert hex to decimal?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Enter the hex value here, or expand each digit with powers of 16 by
              hand.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Is hex the same as decimal?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No. <strong>10</strong> in hex means <strong>16</strong> in
              decimal—different bases, same symbols.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Why do programmers use hex?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Shorter than binary, aligns with bytes (two hex digits = one byte),
              and matches how debuggers show memory.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Can I type lowercase a–f?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Yes. Input is normalized to uppercase for display.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              Does this do hex math?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              No—conversion only. Use the{" "}
              <Link
                to="/math/binary-calculator"
                className="text-primary hover:underline"
              >
                Binary Calculator
              </Link>{" "}
              for base-2 arithmetic with hex output.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              What does 0x mean?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              A common prefix marking a <strong>hex literal</strong> in C, C++,
              Java, and JavaScript (0x1F = 31).
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-h3 text-h3 text-on-surface">
              How do I go from decimal to hex?
            </p>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              This form accepts <strong>hex in</strong> only. Divide decimal by 16
              repeatedly and read remainders as hex digits—or use a programming
              language&apos;s toString(16).
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
