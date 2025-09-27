const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center group">
      {/* Number */}
      <p className="font-extrabold text-6xl text-cyan group-hover:scale-110 transition-transform duration-300">
        {number}
      </p>

      {/* Text */}
      <p className="font-semibold text-lg text-lightGrey uppercase tracking-wide -mt-2">
        {text}
      </p>
    </div>
  );
};

export default ExperienceInfo;
