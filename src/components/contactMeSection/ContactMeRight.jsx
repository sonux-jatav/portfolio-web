import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12 w-full max-w-[400px] mx-auto">
      <img
        src="/portfolio-web/images/email-image.png"
        alt="email image"
        className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
