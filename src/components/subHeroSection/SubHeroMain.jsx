const SubHeroMain = () => {
  return (
    <div className="w-full border-y bg-brown border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4">
      <p className="md:block sm:hidden hover:scale-105 transition-transform duration-300">Fast Learner</p>
      <p className="md:block sm:hidden hover:scale-105 transition-transform duration-300">Team Work</p>
      <p className="hover:scale-105 transition-transform duration-300">INNOVATIVE THINKER</p>
    </div>
  );
};

export default SubHeroMain;
