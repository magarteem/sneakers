import React from "react";
import s from "./korzina.module.css";
import Img1 from "../MAIN/img/img1.jpg";
import dell from "../MAIN/img/dell.svg";

const KorzinaItem = () => {
  //                                                    !
  return (
    <>
      <div className={s.kzCard}>
        <div className={s.kzImg}>
          <img src={Img1} alt="" />
        </div>
        <div className={s.kzTitle}>
          <p>Мужские Кроссовки Nike Air Max 270</p>
          <h3>12 999 руб.</h3>
        </div>
        <div className={s.kzDell}>
          <img src={dell} alt="" />
        </div>
      </div>
    </>
  );
};

export default KorzinaItem;
