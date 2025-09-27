import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <section className="pt-32 sm:pt-40 pb-16 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto relative px-4 gap-8 md:gap-16">
        <HeroText />
        <HeroPic />
      </div>
    </section>
  );
};

export default HeroMain;
