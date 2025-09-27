import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ExperienceMain = () => {
  return (
    <div
      id="experience"
      className="max-w-[1200px] mx-auto px-4 mt-[100px] flex flex-col gap-12"
    >
      {/* Heading / Text */}
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-center md:text-left"
      >
        <ExperienceText />
      </motion.div>

      {/* Stats / Top Info */}
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <ExperienceTop />
      </motion.div>

      {/* Divider (hidden on mobile) */}
      <div className="hidden lg:block w-full h-[2px] bg-lightBrown my-6"></div>

      {/* Timeline / Experiences */}
      <AllExperiences />
    </div>
  );
};

export default ExperienceMain;
