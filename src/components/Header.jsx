import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = (
    <>
      <Link
        to="/finance"
        className="block md:inline-flex items-center gap-2 px-2 py-1 rounded hover:text-blue-600 hover:bg-gray-50 transition-colors"
        onClick={() => setIsMobileOpen(false)}
      >
        Financial
      </Link>
      <Link
        to="/health"
        className="block md:inline-flex items-center gap-2 px-2 py-1 rounded hover:text-blue-600 hover:bg-gray-50 transition-colors"
        onClick={() => setIsMobileOpen(false)}
      >
        Health
      </Link>
      <Link
        to="/math"
        className="block md:inline-flex items-center gap-2 px-2 py-1 rounded hover:text-blue-600 hover:bg-gray-50 transition-colors"
        onClick={() => setIsMobileOpen(false)}
      >
        Math
      </Link>
      <Link
        to="/geometry"
        className="block md:inline-flex items-center gap-2 px-2 py-1 rounded hover:text-blue-600 hover:bg-gray-50 transition-colors"
        onClick={() => setIsMobileOpen(false)}
      >
        Geometry
      </Link>
      <Link
        to="/statistics"
        className="block md:inline-flex items-center gap-2 px-2 py-1 rounded hover:text-blue-600 hover:bg-gray-50 transition-colors"
        onClick={() => setIsMobileOpen(false)}
      >
        Statistics
      </Link>
    </>
  );

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm font-sans antialiased tracking-tight font-medium">
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-xl font-bold tracking-tighter text-blue-600 hover:opacity-90"
              onClick={() => setIsMobileOpen(false)}
            >
              United Calculator
            </Link>

            <nav className="hidden md:flex items-center gap-4 text-sm text-gray-600">
              {navLinks}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            

            <Link
              to="/all-calculators"
              className="px-4 py-2 rounded bg-blue-600 text-white font-semibold active:scale-95 transition-transform"
            >
              Explore Tools
            </Link>
          </div>

          <button
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? "✖" : "☰"}
          </button>
        </div>

        {isMobileOpen && (
          <div className="md:hidden px-6 pb-4 space-y-3 bg-white text-gray-700 border-t border-gray-200">
            <div className="pt-3 flex flex-col gap-2">{navLinks}</div>
            <Link
              to="/all-calculators"
              className="inline-flex justify-center w-full px-4 py-2 rounded bg-blue-600 text-white font-semibold active:scale-95 transition-transform"
              onClick={() => setIsMobileOpen(false)}
            >
              Explore Tools
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   // Navigation links
//   const navLinks = (
//     <>
//       <Link
//         to="/"
//         className="block md:inline-block hover:text-yellow-300 transition"
//         onClick={() => setIsMobileOpen(false)}
//       >
//         Home
//       </Link>
//       <Link
//         to="/all-calculators"
//         className="block md:inline-block hover:text-yellow-300 transition"
//         onClick={() => setIsMobileOpen(false)}
//       >
//         All Calculators
//       </Link>
//     </>
//   );

//   return (
//     <>
//       <header className="sticky top-0 z-50 w-full bg-indigo-700 shadow-md font-sans">
//         <div className="max-w-[1150px] mx-auto px-4 py-3 flex justify-between items-center">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="text-2xl font-bold text-white tracking-wide hover:opacity-90"
//           >
//             United Calculator
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-white">
//             {navLinks}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-2xl text-white focus:outline-none"
//             aria-label="Toggle Menu"
//             onClick={() => setIsMobileOpen(!isMobileOpen)}
//           >
//             {isMobileOpen ? "✖" : "☰"}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileOpen && (
//           <div className="md:hidden px-4 pb-4 space-y-4 bg-indigo-700 text-white border-t border-indigo-600">
//             {navLinks}
//           </div>
//         )}
//       </header>
//     </>
//   );
// };

// export default Header;
