/* eslint-disable react/prop-types */
import styles from "./Btn.module.css";
// const Button = (props) => {
//   return (
//     <button className={props.emailButton ? styles.email_btn : styles.btn}>
//       {props.icon}
//       {props.text}
//     </button>
//   );
// };

const Button = ({ emailButton, icon, text, ...rest }) => {
  return (
    <button {...rest} className={emailButton ? styles.email_btn : styles.btn}>
      {icon}
      {text}
    </button>
  );
};
export default Button;
