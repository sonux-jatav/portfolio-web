import SingleSkill from "./SingleSkill";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

const skills = [
  {
    skill: "C++",
    icon: TbBrandCpp,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "Express js",
    icon: SiRedux  ,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Node js",
    icon: IoLogoNodejs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Mongo DB",
    icon: SiMongodb,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
