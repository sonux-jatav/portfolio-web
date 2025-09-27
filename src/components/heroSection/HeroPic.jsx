import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src="/portfolio-web/images/cropped_circle_image (3).png"
        alt="Sonu jatav photo."
        className="max-h-[450px] w-auto"
      />

      <div className=" absolute flex justify-center items-center animate-pulse ">
        <PiHexagonThin className=" text-blue-300 md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan
         blur-md  animate-[spin_50s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
