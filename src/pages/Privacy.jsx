import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE = "https://unitedcalculator.net";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | United Calculator</title>
        <meta
          name="description"
          content="Privacy policy for United Calculator: how we handle information when you use our free online calculators."
        />
        <link rel="canonical" href={`${SITE}/privacy`} />
      </Helmet>
      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-on-background">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: May 14, 2026
        </p>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Overview
            </h2>
            <p>
              United Calculator (&quot;we&quot;, &quot;us&quot;) provides this
              website and its calculators for general informational use. This
              policy describes how we approach privacy when you visit{" "}
              <span className="whitespace-nowrap">{SITE.replace("https://", "")}</span>.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Information you enter
            </h2>
            <p>
              Calculations run in your browser. We do not require an account to
              use the tools. Unless a specific feature states otherwise, values
              you type are not stored on our servers as part of using a
              calculator.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Analytics and cookies
            </h2>
            <p>
              Like many sites, we may use cookies or similar technologies and
              third-party analytics to understand traffic and improve the
              service. Those providers process data according to their own
              policies. You can control cookies through your browser settings.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Contact
            </h2>
            <p>
              Questions about this policy? See{" "}
              <Link to="/contact" className="text-blue-600 hover:underline">
                Contact
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
