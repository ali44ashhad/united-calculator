import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import AuthModal from "./Forum/AuthModal";

const Header = () => {
  const { user, logout } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState("login");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Open Auth modal
  const showAuthModal = (mode) => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
    setIsMobileOpen(false); // close mobile menu
  };

  // Logout
  const handleLogout = () => {
    logout();
    setIsMobileOpen(false); // close mobile menu
  };

  // Navigation links
  const navLinks = (
    <>
      <Link
        to="/"
        className="block md:inline-block hover:text-yellow-300 transition"
        onClick={() => setIsMobileOpen(false)}
      >
        Home
      </Link>
      <Link
        to="/all-calculators"
        className="block md:inline-block hover:text-yellow-300 transition"
        onClick={() => setIsMobileOpen(false)}
      >
        All Calculators
      </Link>
      <Link
        to="/forum"
        className="block md:inline-block hover:text-yellow-300 transition"
        onClick={() => setIsMobileOpen(false)}
      >
        Community
      </Link>
    </>
  );

  // Auth buttons / user info
  const authButtons = user ? (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-3 space-y-2 md:space-y-0">
      <span className="text-gray-200 md:text-white">Hello, {user.name}</span>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  ) : (
    <div className="flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0">
      <button
        onClick={() => showAuthModal("login")}
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-sm transition"
      >
        Login
      </button>
      <button
        onClick={() => showAuthModal("register")}
        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-sm transition"
      >
        Register
      </button>
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-indigo-700 shadow-md font-sans">
        <div className="max-w-[1150px] mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white tracking-wide hover:opacity-90"
          >
            United Calculator
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-white">
            {navLinks}
            {authButtons}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-white focus:outline-none"
            aria-label="Toggle Menu"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="md:hidden px-4 pb-4 space-y-4 bg-indigo-700 text-white border-t border-indigo-600">
            {navLinks}
            {authButtons}
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authModalMode} // ✅ keep same as your first Header
      />
    </>
  );
};

export default Header;
