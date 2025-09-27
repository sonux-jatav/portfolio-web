import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-center sm:flex-col`}
    >
      {/* Text Section */}
      <div className="flex flex-col gap-2 sm:items-center md:items-start">
        <h2 className="md:text-3xl sm:text-2xl text-orange text-center md:text-left">
          {name}
        </h2>
        <h2
          className={`text-xl font-thin text-white font-special text-center md:text-left`}
        >
          {year}
        </h2>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer justify-center md:justify-start"
        >
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-[400px] sm:max-w-full h-auto rounded-xl overflow-hidden border border-white relative transform transition-transform duration-500 hover:scale-105">
        <div className="absolute top-0 left-0 w-full h-full bg-cyan opacity-50 md:block sm:hidden hover:opacity-0 transition-all duration-500"></div>
        <img src={image} alt="website image" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
