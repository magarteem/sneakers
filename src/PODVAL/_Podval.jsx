import React from "react";
import s from "./_Podval.module.css";
import footerImg from "./img_footer/footer.png";

const Podval = () => {
  return (
    <div className={s.footer}>
      <img src={footerImg} alt="footerImg" />
    </div>
  );
};

export default Podval;
