import React from "react";

const SkillsCircle = () => {
  return (
    <div className="rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-2 border-orange overflow-hidden
      sm:h-[120px] sm:w-[120px]
      md:h-[160px] md:w-[160px]
      lg:h-[200px] lg:w-[200px]
    ">
      <img
        src="/portfolio-web/images/skills.avif"
        alt="my skills"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default SkillsCircle;
