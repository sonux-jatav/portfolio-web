import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Live Code Editor",
    year: "Mar2023",
    align: "right",
    image: "../../public/images/code-review-prj..png",
    link: "#",
  },
  {
    name: "Uber Clone",
    year: "Sept2023",
    align: "left",
    image: "../../public/images/uber-prj.png",
    link: "#",
  },
  {
    name: "React Portfolio Website",
    year: "Jan2024",
    align: "right",
    image: "../../public/images/skills.avif",
    link: "#",
  },
  {
    name: "Employee Management System",
    year: "May2024",
    align: "left",
    image: "../../public/images/employe-mgt-prj..png",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
