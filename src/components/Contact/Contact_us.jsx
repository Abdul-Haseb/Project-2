import styels from "./contact.module.css";

const Contactus = () => {
  return (
    <div className={styels.contact_us}>
      <h1 className={styels.contact_us_h1}>CONTACT US</h1>
      <p className={styels.contact_us_p}>
        LETS CONNECT: WE ARE HERE TO HELP, AND WED LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OFTHIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
    </div>
  );
};

export default Contactus;
