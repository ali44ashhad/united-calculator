const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t mt-10">
      <div className="max-w-[1150px] mx-auto px-4 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} United Calculator. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
