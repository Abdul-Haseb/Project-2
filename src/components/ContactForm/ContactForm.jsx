import Button from "../Button/Button";
import styles from "./ContForm.module.css";
import { TbMessageStar } from "react-icons/tb";
import { TbPhoneCall } from "react-icons/tb";
import { RiMailSendLine } from "react-icons/ri";
import { useState } from "react";
const Contactform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  const viaCall = () => {
    console.log("Call button Clicked");
  };
  const viaChat = () => {
    console.log("Chat button Clicked");
  };
  const viaEmail = () => {
    console.log("Email Button Clicked");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setDesc(e.target[2].value);
    console.log(`Description ${e.target[2].value}`);
  };
  return (
    <section className={styles.container}>
      <div className={styles.whole}>
        <div className={styles.chat_call_btn}>
          <Button
            onClick={viaChat}
            icon={<TbMessageStar fontSize={24} />}
            text="VIA SUPPORT CHAT"
          />
          <Button
            onClick={viaCall}
            text="VIA CALL"
            icon={<TbPhoneCall fontSize={24} />}
          />
        </div>
        <Button
          onClick={viaEmail}
          emailButton={true}
          text="VIA EMAIL"
          icon={<RiMailSendLine fontSize={24} />}
        />
        <form onSubmit={handleSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" />
            <div className={styles.form_control}>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="textarea">Description</label>
              <textarea name="textarea" id="textarea" rows={6}></textarea>
            </div>
          </div>
          <div className={styles.submit}>
            <Button text="SUBMIT" />
          </div>
        </form>
        <div>{`Name: ${name}
      Email : ${email}
      Description ${desc}`}</div>
      </div>
      <div>
        <img src="./images/img.png" alt="main img" />
      </div>
    </section>
  );
};

export default Contactform;
