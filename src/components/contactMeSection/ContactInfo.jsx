import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-8 md:gap-12 w-full max-w-[800px] mx-auto">
      <SingleInfo text="sonuj22661@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 7999112389" Image={FiPhone} />
      <SingleInfo text="Jabalpur, MP." Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
