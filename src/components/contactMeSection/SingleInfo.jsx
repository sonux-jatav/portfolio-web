const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="text-orange bg-lightBrown p-3 rounded-full shadow-md">
        <Image className="text-2xl" />
      </div>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default SingleInfo;
