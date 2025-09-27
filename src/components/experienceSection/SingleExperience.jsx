import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="w-full sm:w-[80%] md:w-[240px] border-2 border-orange border-dashed rounded-2xl mt-8 md:mt-12 p-4 mx-auto sm:mx-0"
    >
      <p className="font-bold text-cyan text-lg sm:text-xl">{experience.job}</p>
      <p className="text-orange text-sm sm:text-base">{experience.company}</p>
      <p className="text-lightGrey text-sm sm:text-base">{experience.date}</p>

      <ul className="list-disc mt-3 sm:mt-4 pl-5 text-sm sm:text-base leading-relaxed">
        {experience.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
