import React from "react";
import { Link } from "react-router-dom";

export default function PasswordGeneratorSeoContent() {
  return (
    <article className="mt-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface">
          Password generator: random strong passwords with length and symbols
        </h2>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Reused passwords are still the fastest way to lose an account. This{" "}
          <strong>free password generator online</strong> builds a{" "}
          <strong>random password</strong> from the character sets you tick:
          uppercase, lowercase, numbers, and optional symbols. Set{" "}
          <strong>length</strong> (4–128), click regenerate if you want another
          draw, and copy the result. Everything runs locally—nothing is uploaded
          for storage.
        </p>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Short-tail: <strong>password generator</strong>,{" "}
          <strong>strong password generator</strong>,{" "}
          <strong>random password maker</strong>. Long-tail:{" "}
          <strong>password generator 16 characters with symbols</strong>,{" "}
          <strong>secure password generator no signup</strong>,{" "}
          <strong>alphanumeric password generator free</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Length and entropy</h3>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Each extra character multiplies guesswork. Mixing four character classes
          widens the pool beyond plain lowercase words. The summary shows an{" "}
          <strong>approximate entropy in bits</strong> (length × log₂ of pool
          size)—a teaching aid, not a formal audit. For PINs or lottery-style
          integers, the{" "}
          <Link
            to="/math/random-number-generator"
            className="text-primary hover:underline"
          >
            Random Number Generator
          </Link>{" "}
          picks values in a numeric range instead of keyboard characters.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">Good habits after you generate</h3>
        <ul className="list-disc pl-6 space-y-2 text-body-lg font-body-lg text-on-surface-variant">
          <li>
            <strong>One password per site</strong>—generators help create them;
            a password manager remembers them.
          </li>
          <li>
            <strong>Check site rules</strong>—some forms cap length or ban certain
            symbols.
          </li>
          <li>
            <strong>Prefer 12+ characters</strong> for email and banking when the
            site allows it.
          </li>
          <li>
            <strong>Do not email passwords</strong> or leave them in chat logs.
          </li>
        </ul>
        <p className="text-body-lg font-body-lg text-on-surface-variant">
          Need dice or tabletop randomness instead of credentials? The{" "}
          <Link
            to="/other/dice-roller"
            className="text-primary hover:underline"
          >
            Dice Roller
          </Link>{" "}
          rolls physical die shapes; it is unrelated to login security but uses
          the same “surprise me” instinct. For lighthearted name-based scores (not
          security), the{" "}
          <Link
            to="/other/love-calculator"
            className="text-primary hover:underline"
          >
            Love Calculator
          </Link>{" "}
          is a different toy entirely.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-h3 text-h3 text-on-surface">FAQs</h3>
        <dl className="space-y-6 text-body-lg font-body-lg text-on-surface-variant">
          <div>
            <dt className="font-semibold text-on-surface">
              How long should my password be?
            </dt>
            <dd className="mt-1">
              <strong>12–16+ characters</strong> with mixed types is a common
              target for general accounts. Longer is better if the site accepts it.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Is the password saved anywhere?
            </dt>
            <dd className="mt-1">
              No. Generation uses your browser; clear the field or navigate away
              when finished.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Why offer symbols as optional?
            </dt>
            <dd className="mt-1">
              Symbols boost strength but some legacy systems reject them. Toggle
              on when allowed.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Can I regenerate the same password again?
            </dt>
            <dd className="mt-1">
              Each click produces a new random string. There is no “seed” to replay
              a prior result—by design.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-on-surface">
              Is this a replacement for a password manager?
            </dt>
            <dd className="mt-1">
              No. Use this to <strong>create</strong> secrets; use a reputable
              manager to <strong>store</strong> and autofill them.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
