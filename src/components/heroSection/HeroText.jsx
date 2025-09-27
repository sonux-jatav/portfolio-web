import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      {/* Subtitle */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lightGrey uppercase lg:text-2xl md:text-xl sm:text-lg"
      >
        Full-Stack MERN Developer <br /> DSA for Efficient Problem Solving
      </motion.h2>

      {/* Main Name */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-orange font-bold uppercase sm:text-xl md:text-[3rem] lg:text-6xl"
      >
        SONU JATAV
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base sm:text-lg md:text-xl mt-4 leading-relaxed"
      >
        Passionate about building scalable web applications <br />
        and solving complex problems with DSA. Constantly learning <br /> 
        and improving in the world of full-stack development.
      </motion.p>
    </div>
  );
};

export default HeroText;
