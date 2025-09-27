import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "C++", icon: TbBrandCpp },
  { skill: "Python", icon: FaPython },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "Express js", icon: SiRedux },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Node js", icon: IoLogoNodejs },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "Mongo DB", icon: SiMongodb },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-8 md:gap-12 my-12 px-4">
      {skills.map((item, index) => (
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          key={index}
          className="flex flex-col items-center"
        >
          <item.icon className="text-5xl sm:text-4xl xs:text-3xl text-orange" />
          <p className="text-center mt-2 text-sm sm:text-base md:text-lg">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
