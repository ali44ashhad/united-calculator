import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE = "https://unitedcalculator.net";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | United Calculator</title>
        <meta
          name="description"
          content="Learn about United Calculator: free online calculators for math, finance, health, geometry, and everyday use."
        />
        <link rel="canonical" href={`${SITE}/about`} />
      </Helmet>
      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-on-background">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          About United Calculator
        </h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            United Calculator is a collection of free, browser-based tools for
            math, finance, health, geometry, statistics, and everyday tasks. Our
            goal is precision and clarity: inputs you can trust, outputs that
            are easy to read, and interfaces that stay out of your way.
          </p>
          <p>
            We add and refine calculators over time. If something looks off or
            you have a suggestion, we would be glad to hear from you on our{" "}
            <Link to="/contact" className="text-blue-600 hover:underline">
              contact page
            </Link>
            .
          </p>
          <p>
            Ready to calculate? Start from the{" "}
            <Link to="/" className="text-blue-600 hover:underline">
              home page
            </Link>{" "}
            or browse{" "}
            <Link to="/all-calculators" className="text-blue-600 hover:underline">
              all calculators
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
