import { Link, useLocation } from "react-router-dom";
import { calculators } from "../data/calculators";

const categories = [...new Set(calculators.map((c) => c.category))];

const Sidebar = () => {
  const location = useLocation();

  // Don't render Sidebar on home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <aside className="w-full md:w-64 bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-md h-fit sticky top-[90px]">
      <h3 className="text-lg font-semibold mb-3 text-indigo-600">Categories</h3>
      <ul className="space-y-2 text-sm">
        {categories.map((cat) => (
          <li key={cat}>
            <Link
              to={`/${cat.toLowerCase()}`}
              className="hover:underline text-gray-700"
            >
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
