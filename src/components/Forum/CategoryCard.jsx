import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  // Function to generate gradient based on category ID
  const getGradient = (id) => {
    switch (id) {
      case "general":
        return "from-blue-500 to-blue-700";
      case "financial":
        return "from-green-500 to-green-700";
      case "scientific":
        return "from-purple-500 to-purple-700";
      case "programming":
        return "from-red-500 to-red-700";
      default:
        return "from-gray-500 to-gray-700";
    }
  };

  // Function to get appropriate icon for each category
  const getIcon = (id) => {
    switch (id) {
      case "general":
        return "fas fa-calculator";
      case "financial":
        return "fas fa-chart-line";
      case "scientific":
        return "fas fa-flask";
      case "programming":
        return "fas fa-code";
      default:
        return "fas fa-folder";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div
        className={`bg-gradient-to-r ${getGradient(
          category.id
        )} p-4 text-white`}
      >
        <div className="flex items-center">
          <i className={`${getIcon(category.id)} text-2xl mr-3`}></i>
          <h3 className="text-xl font-semibold">{category.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-4">{category.description}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{category.threads} threads</span>
          <span>Last post: 2 hours ago</span>
        </div>
        <div className="mt-4">
          <Link
            to={`/community/category/${category.id}`}
            className="text-blue-500 hover:text-blue-700 font-medium text-sm"
          >
            View discussions →
          </Link>
        </div>
      </div>
    </div>
  );
}
