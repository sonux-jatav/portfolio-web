import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-cyan mb-6 sm:mb-8 md:mb-10">
        About Me
      </h2>
      <p className="text-base sm:text-lg leading-relaxed max-w-[700px]">
        I’m Sonu Jatav, a passionate Full-Stack Developer with expertise in MERN
        Stack, DSA in C++, Python, Backend, Frontend, and React. Currently, I’m
        pursuing a Bachelor’s degree in Information Technology at Jabalpur
        Engineering College.
        
        <br />
        I have a strong foundation in Data Structures & Algorithms (DSA) and
        enjoy solving complex problems efficiently. My focus is on building
        scalable, optimized, and user-friendly web applications by leveraging my
        full-stack development skills.
        <br />
        <br />
        I am always eager to learn, explore new technologies, and collaborate on
        innovative projects that push the boundaries of web development.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-base sm:text-lg flex gap-2 items-center mt-6 sm:mt-8 md:mt-10 hover:bg-orange transition-all duration-500 cursor-pointer self-center md:self-start">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
