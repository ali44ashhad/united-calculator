import { useParams, Link } from "react-router-dom";
import { calculators } from "../data/calculators";
import Breadcrumb from "../components/Breadcrumb";
import { Helmet } from "react-helmet-async";
const CategoryPage = () => {
  const { category } = useParams();
  const categoryCalculators = calculators.filter(
    (c) => c.category.toLowerCase() === category
  );

  // Capitalize first letter for nice display
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <>
      <Helmet>
        <title>{`${categoryName} Calculators | Free Online Tools`}</title>
        <meta
          name="description"
          content={`Browse our free ${categoryName.toLowerCase()} calculators. Instantly solve problems, convert units, and perform accurate calculations online.`}
        />
        <meta
          name="keywords"
          content={`${categoryName.toLowerCase()} calculators, online ${categoryName.toLowerCase()} tools, free ${categoryName.toLowerCase()} calculator`}
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://unitedcalculator.net/${category.toLowerCase()}`}
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${categoryName} Calculators | Free Online Tools`}
        />
        <meta
          property="og:description"
          content={`Explore our ${categoryName.toLowerCase()} calculators to quickly solve problems and make accurate calculations.`}
        />
        <meta
          property="og:url"
          content={`https://unitedcalculator.net/${category.toLowerCase()}`}
        />

        {/* JSON-LD: WebPage */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "${categoryName} Calculators",
  "url": "https://unitedcalculator.net/${category.toLowerCase()}",
  "description": "Browse our collection of free ${categoryName.toLowerCase()} calculators to solve problems quickly and accurately.",
  "publisher": {
    "@type": "Organization",
    "name": "United Calculator",
    "url": "https://unitedcalculator.net"
  }
}
          `}
        </script>

        {/* JSON-LD: Breadcrumb */}
        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://unitedcalculator.net"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "${categoryName} Calculators",
      "item": "https://unitedcalculator.net/${category.toLowerCase()}"
    }
  ]
}
          `}
        </script>
      </Helmet>
      <div>
        <Breadcrumb />
        <h1 className="text-2xl font-bold mb-4">{category} Calculators</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryCalculators.map((calc) => (
            <Link
              key={calc.id}
              to={`/${category}/${calc.id}`}
              className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow "
            >
              <h2 className="text-indigo-700 font-semibold">{calc.title}</h2>
              <p className="text-sm text-gray-400">{calc.description}</p>
            </Link>
          ))}
        </div>
      </div>{" "}
    </>
  );
};

export default CategoryPage;
