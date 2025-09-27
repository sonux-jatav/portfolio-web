import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded-full text-lg sm:text-xl font-bold text-white border border-cyan bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange hover:shadow-cyanShadow cursor-pointer">
      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        className="flex items-center gap-1"
      >
        Hire Me
        <span className="hidden md:inline-block">
          <LuArrowDownRight />
        </span>
      </Link>
    </button>
  );
};

export default NavbarBtn;
