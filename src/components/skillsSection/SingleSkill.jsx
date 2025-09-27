const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-5 transition-all duration-500 relative sm:w-[80px] md:w-[100px] mx-auto">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-gray-500 text-cyan h-[80px] w-[80px] sm:h-[60px] sm:w-[60px] md:h-[100px] md:w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-4xl sm:text-3xl md:text-6xl border-4 border-orange">
          {imgSvg}
        </div>
        <p className="text-white font-bold text-sm sm:text-xs md:text-base">{text}</p>
      </div>
      <div className="w-[80px] h-[160px] sm:w-[60px] sm:h-[120px] md:w-[100px] md:h-[200px] bg-orange absolute top-[40px] sm:top-[30px] md:top-[50px] -z-10"></div>
    </div>
  );
};

export default SingleSkill;
