const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative 
                    sm:h-[400px] sm:w-[250px] 
                    xs:h-[300px] xs:w-[200px]">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden 
                      sm:h-[400px] sm:w-[250px] sm:rounded-[80px] 
                      xs:h-[300px] xs:w-[200px] xs:rounded-[60px]">
        <img
          src="/portfolio-web/images/Sonu-img2.png"
          alt="About Me Image"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] 
                      rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10
                      sm:h-[400px] sm:w-[200px] sm:bottom-[-20px] sm:left-[-20px] sm:rounded-bl-[100px] sm:rounded-tr-[100px] 
                      xs:h-[300px] xs:w-[150px] xs:bottom-[-15px] xs:left-[-15px] xs:rounded-bl-[80px] xs:rounded-tr-[80px]">
      </div>
    </div>
  );
};

export default AboutMeImage;
