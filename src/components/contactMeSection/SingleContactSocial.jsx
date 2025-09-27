const SingleContactSocial = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl h-12 w-12 border border-orange text-orange rounded-full 
                 flex items-center justify-center transition-all duration-300
                 hover:bg-orange hover:text-white"
    >
      <Icon />
    </a>
  );
};

export default SingleContactSocial;
