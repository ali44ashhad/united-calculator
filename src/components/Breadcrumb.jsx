import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-400 mb-4">
      <Link to="/" className="hover:underline text-gray-300">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const formatted = value
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());

        return (
          <span key={to}>
            {" / "}
            {isLast ? (
              <span className="text-yellow-500 font-semibold">{formatted}</span>
            ) : (
              <Link to={to} className="hover:underline text-gray-300">
                {formatted}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
