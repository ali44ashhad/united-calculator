import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-indigo-700 text-white shadow-md">
      <div className="max-w-[1150px] mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:opacity-90">
          United Calculator
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link
            to="/all-calculators"
            className="hover:text-yellow-300 transition"
          >
            All Calculators
          </Link>
        </nav>

        {/* Mobile Menu Button (☰ / ✖) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm bg-indigo-700">
          <Link
            to="/"
            className="block hover:text-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/all-calculators"
            className="block hover:text-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            All Calculators
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
