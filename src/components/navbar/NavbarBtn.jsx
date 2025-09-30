import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a
      href="https://www.linkedin.com/in/sonujatav/" // apna LinkedIn link yaha daalna
      target="_blank" // new tab me khulega
      rel="noopener noreferrer" // security best practice
      className="flex items-center gap-2 px-4 py-2 rounded-full text-lg sm:text-xl font-bold text-white border border-cyan bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange hover:shadow-cyanShadow cursor-pointer"
    >
      Hire Me
      <span className="hidden md:inline-block">
        <LuArrowDownRight />
      </span>
    </a>
  );
};

export default NavbarBtn;
