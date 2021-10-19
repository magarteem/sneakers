import React from "react";
import s from "./korzina.module.css";

const ElementKz = () => {
  //                                                    !
  return (
    <>
      <div className={s.korzinaPrise}>
        <span>Итого: </span>
        <span className={s.kzPriseUnder}></span>
        <span>21 498 руб. </span>
      </div>
      <div className={s.korzinaPrise}>
        <span>Налог 5%: </span>
        <span className={s.kzPriseUnder}></span>
        <span>1074 руб. </span>
      </div>
    </>
  );
};

export default ElementKz;
