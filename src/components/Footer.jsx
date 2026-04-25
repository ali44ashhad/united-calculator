const Footer = () => {
  return (
    <footer className="w-full mt-auto bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-lg font-bold text-gray-900">
            United Calculator
          </span>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} United Calculator. Precision and
            functional clarity for every calculation.
          </p>
        </div>

        <nav className="flex items-center gap-6 md:gap-8 text-sm text-gray-500 flex-wrap justify-center">
          <a
            className="hover:text-blue-600 underline-offset-4 hover:underline"
            href="#"
          >
            Home
          </a>
          <a
            className="hover:text-blue-600 underline-offset-4 hover:underline"
            href="#"
          >
            About
          </a>
          <a
            className="hover:text-blue-600 underline-offset-4 hover:underline"
            href="#"
          >
            Privacy
          </a>
          <a
            className="hover:text-blue-600 underline-offset-4 hover:underline"
            href="#"
          >
            Terms
          </a>
          <a
            className="hover:text-blue-600 underline-offset-4 hover:underline"
            href="#"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
