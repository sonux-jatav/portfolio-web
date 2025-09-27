import NavbarLogo from "./NavbarLogo";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";
import { Link } from "react-scroll";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleMenu());
  };

  const links = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Certifications", section: "experience" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" },
  ];

  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 w-full z-50 px-4">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto bg-black rounded-full border border-orange p-4 lg:p-6 gap-4 relative">
        <NavbarLogo />

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-8">
          {links.map((link, idx) => (
            <Link
              key={idx}
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              to={link.section}
              className="text-white hover:text-orange cursor-pointer transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Hire Me Button */}
        <div className="hidden lg:block">
          <NavbarBtn />
        </div>

        {/* Mobile Toggler */}
        <div className="lg:hidden flex items-center">
          <NavbarToggler />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col bg-black mt-2 rounded-b-lg border border-orange overflow-hidden">
          {links.map((link, idx) => (
            <Link
              key={idx}
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              to={link.section}
              onClick={handleClose}
              className="text-white px-6 py-3 border-b border-orange last:border-b-0 hover:bg-orange hover:text-black transition-all cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
