import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE = "https://unitedcalculator.net";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Use | United Calculator</title>
        <meta
          name="description"
          content="Terms of use for United Calculator: acceptable use, disclaimers, and limitations for our free online calculators."
        />
        <link rel="canonical" href={`${SITE}/terms`} />
      </Helmet>
      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-on-background">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Terms of Use
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: May 14, 2026
        </p>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Agreement
            </h2>
            <p>
              By using United Calculator at{" "}
              <span className="whitespace-nowrap">{SITE.replace("https://", "")}</span>,
              you agree to these terms. If you do not agree, please do not use
              the site.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Not professional advice
            </h2>
            <p>
              Results are for informational and educational purposes only. They
              are not financial, medical, tax, or legal advice. Always verify
              important figures with a qualified professional and official
              sources before making decisions.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Accuracy and availability
            </h2>
            <p>
              We strive for accuracy, but we do not warrant that the site or any
              calculator is error-free, complete, or suitable for your
              situation. The site is provided &quot;as is&quot; without
              warranties of any kind to the extent permitted by law.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Acceptable use
            </h2>
            <p>
              Do not misuse the site: no unlawful activity, no attempt to disrupt
              or overload our systems, and no automated scraping that degrades
              service for others unless we have agreed otherwise in writing.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Changes
            </h2>
            <p>
              We may update these terms or the site from time to time. Continued
              use after changes constitutes acceptance of the updated terms.
              Related:{" "}
              <Link to="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
