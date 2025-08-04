import { useState } from "react";
import { calculators } from "../data/calculators";
import { Link } from "react-router-dom";

const AllCalculators = () => {
  const [query, setQuery] = useState("");

  const filtered = calculators.filter((calc) =>
    calc.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-indigo-700">
        All Calculators
      </h1>

      <input
        type="text"
        placeholder="Search calculators..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((calc) => (
          <Link
            key={calc.id}
            to={`/${calc.category.toLowerCase()}/${calc.id}`}
            className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow"
          >
            <h3 className="font-semibold text-indigo-700">{calc.title}</h3>
            <p className="text-sm text-gray-600">{calc.description}</p>
            <p className="text-xs text-gray-400 mt-1">
              Category: {calc.category}
            </p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-gray-500 mt-6">No calculators found.</p>
      )}
    </div>
  );
};

export default AllCalculators;
