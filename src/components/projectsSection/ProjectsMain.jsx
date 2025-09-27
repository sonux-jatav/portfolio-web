import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
 
  {
    name: "TechPrep Project",
    year: "Jul2025",
    align: "left",
    image: "/portfolio-web/images/image (13).png",
    link: "https://job-preparation-3d91.onrender.com",
  },
  {
    name: "React Portfolio Website",
    year: "Jan2024",
    align: "right",
    image: "/portfolio-web/images/skills.avif",
    link: "#",
  },
  {
    name: "Resume Builder",
    year: "May2024",
    align: "left",
    image: "/portfolio-web/images/image (14).png",
    link: "https://resume-maker-project-main.onrender.com/",
  },
  {
    name: "Live Code Editor",
    year: "Mar2023",
    align: "right",
    image: "/portfolio-web/images/code-review-prj..png",
    link: "https://sonux-jatav.github.io/minor-project/",
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

      <div className="flex flex-col gap-20 max-w-[100%] lg:max-w-[600px] mx-auto mt-12 px-2 sm:px-0">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
