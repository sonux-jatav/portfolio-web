import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    { name: "About Me", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Experience", section: "experience" },
    { name: "Projects", section: "projects" },
  ];

  return (
    <footer className="px-4 mt-24">
      {/* Divider */}
      <div className="w-full h-[1px] bg-lightGrey"></div>

      {/* Links and Name */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 max-w-[1200px] mx-auto gap-4">
        <p className="text-2xl sm:text-3xl text-lightGrey font-semibold">
          Sonu Jatav
        </p>

        <ul className="flex flex-wrap gap-4 text-lightGrey text-lg sm:text-xl justify-center md:justify-end">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <p className="max-w-[1200px] mx-auto text-center md:text-right mt-2 mb-12 text-sm text-lightBrown">
        sonuj22661@gmail.com | 7999112389
      </p>
    </footer>
  );
};

export default FooterMain;
