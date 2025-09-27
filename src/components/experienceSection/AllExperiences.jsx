import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Data Structures & Algorithms in C++",
    company: "Platform: CodeHelp by Love Babbar",
    date: "2024 - Present",
    responsibilities: [
      "Mastered recursion, linked lists, trees, graphs, and DP.",
      "Solved 500+ DSA problems on LeetCode & CodeChef.",
      "Participated in coding competitions & hackathons.",
    ],
  },
  {
    job: "Advanced React & Redux",
    company: "Platform: Coursera",
    date: "2024 - Present",
    responsibilities: [
      "Explored React Hooks, Context API, and Redux Toolkit.",
      "Built performance-optimized web applications.",
      "Worked on Next.js & Server-Side Rendering (SSR).",
    ],
  },
  {
    job: "Python for Data Science & Machine Learning",
    company: "Platform: YouTube",
    date: "2023 - Present",
    responsibilities: [
      "Learned NumPy, Pandas, Matplotlib, and Scikit-Learn.",
      "Built data analysis projects using Jupyter Notebook.",
      "Implemented ML models like Linear Regression, Decision Trees.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      {experiences.map((experience, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center gap-6">
          <SingleExperience experience={experience} />

          {/* Arrow only for desktop */}
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="hidden md:block"
            >
              <FaArrowRightLong className="text-5xl text-orange" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;
