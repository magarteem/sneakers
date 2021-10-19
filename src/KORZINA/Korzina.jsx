import React from "react";
import s from "./korzina.module.css";
import KorzinaItem from "./korzinaItem";
import right from "./imgKz/right.svg";
import closed from "./imgKz/closed.png";
import closedHover from "./imgKz/closedHover.png";
import ElementKz from "./elementKorzina";
import { AppContext } from "../App";

const Korzina = () => {
  const { setKorzinaOnOFF } = React.useContext(AppContext);
  //                                                    !
  return (
    <>
      <div className={s.bkg_korzina}></div>
      <section className={s.korzina}>
        <div className={s.kzHead}>
          <h1>Корзина</h1>
          <img
            onClick={() => {
              setKorzinaOnOFF((prev) => !prev);
            }}
            src={closed}
            alt=""
          />
        </div>

        <div className={s.MainKorzina}>
          <KorzinaItem />
          <KorzinaItem />
          <KorzinaItem />
        </div>

        <div className={s.korzinaDoun}>
          <ElementKz />
          <button className={s.kzDounBtn}>
            Оформить заказ
            <img src={right} alt="right" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Korzina;
