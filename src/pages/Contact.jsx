import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE = "https://unitedcalculator.net";
const CONTACT_EMAIL = "hello@unitedcalculator.net";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | United Calculator</title>
        <meta
          name="description"
          content="Contact United Calculator for feedback, bug reports, or calculator suggestions."
        />
        <link rel="canonical" href={`${SITE}/contact`} />
      </Helmet>
      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-on-background">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Contact us
        </h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            We welcome feedback, bug reports, and ideas for new calculators or
            improvements.
          </p>
          <p>
            Email:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-blue-600 hover:underline font-medium"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p>
            <Link to="/" className="text-blue-600 hover:underline">
              Back to home
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
