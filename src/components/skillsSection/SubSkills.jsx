const SubSkills = () => {
  return (
    <div className="relative border-y-2 border-lightGrey overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange to-cyan opacity-50 z-10"></div>
      
      {/* Image */}
      <img
        src="/portfolio-web/images/subSkills.jpg"
        alt="Sub Skills"
        className="w-full h-auto object-cover relative z-0"
      />
    </div>
  );
};

export default SubSkills;
