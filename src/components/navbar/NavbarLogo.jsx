const NavbarLogo = () => {
  return (
    <div className="flex items-center">
      {/* Desktop Logo */}
      <h1 className="text-white text-2xl font-bold hidden md:block">
        SONU JATAV
      </h1>

      {/* Mobile/Tablet Logo */}
      <h1 className="text-white font-special font-extrabold text-3xl md:hidden block">
        S J.
      </h1>
    </div>
  );
};

export default NavbarLogo;
