import { useParams, Link } from "react-router-dom";
import { calculators } from "../data/calculators";
import Breadcrumb from "../components/Breadcrumb";

const CategoryPage = () => {
  const { category } = useParams();
  const categoryCalculators = calculators.filter(
    (c) => c.category.toLowerCase() === category
  );

  return (
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
    </div>
  );
};

export default CategoryPage;
