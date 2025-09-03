import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthModal from "./Forum/AuthModal";

const Header = () => {
  const { currentUser, logout } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState("login");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const showAuthModal = (mode) => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
    setIsMobileOpen(false); // close mobile menu when opening modal
  };

  const handleLogout = () => {
    logout();
    setIsMobileOpen(false); // close mobile menu after logout
  };

  const stringToColor = (str) => {
    if (!str) return "#6b7280";
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += ("00" + value.toString(16)).substr(-2);
    }
    return color;
  };

  const navLinks = (
    <>
      <Link
        to="/"
        className="hover:text-yellow-300 transition"
        onClick={() => setIsMobileOpen(false)}
      >
        Home
      </Link>
      <Link
        to="/all-calculators"
        className="hover:text-yellow-300 transition"
        onClick={() => setIsMobileOpen(false)}
      >
        All Calculators
      </Link>
      <Link
        to="/community"
        className="hover:text-yellow-300 transition"
        onClick={() => setIsMobileOpen(false)}
      >
        Community
      </Link>
    </>
  );

  const authButtons = currentUser ? (
    <div className="flex items-center space-x-3">
      <Link
        to={`/community/profile/${currentUser.id}`}
        className="flex items-center space-x-2 hover:text-yellow-300"
        onClick={() => setIsMobileOpen(false)}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
          style={{ backgroundColor: stringToColor(currentUser.name) }}
        >
          {currentUser.name.charAt(0).toUpperCase()}
        </div>
        <span className="hidden sm:inline">{currentUser.name}</span>
      </Link>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm transition"
      >
        Logout
      </button>
    </div>
  ) : (
    <div className="flex items-center space-x-2">
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
      <header className="sticky top-0 z-50 w-full bg-indigo-700 text-white shadow-md">
        <div className="max-w-[1150px] mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold hover:opacity-90">
            United Calculator
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
            {navLinks}
            {authButtons}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 text-sm bg-indigo-700">
            {navLinks}
            <div>{authButtons}</div>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
      />
    </>
  );
};

export default Header;
