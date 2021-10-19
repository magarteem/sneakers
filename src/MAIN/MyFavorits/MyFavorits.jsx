import React, { useState } from "react";
import { AppContext } from "../../App";
import Card from "../card";
import { imgArry } from "../_Main";
import s from "./myFavorits.module.css";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg";
import eee from "./img4.jpg";

const MyFavorits = () => {
  const { favItemsLocal } = React.useContext(AppContext);
  //console.log(imgArry);
  //console.log(favItemsLocal);
  //console.log(imgArry);
  //
  return (
    <div className={s.myFavorits}>

      {/*<img src={require('../img/img8.jpg').default} alt="ddd" />*/}
      {favItemsLocal.map((el) => (
        <Card
          key={el.id}
          id={el.id}
          h3={el.h3}
          ss={imgArry.filter((ff) => console.log(ff + " " + el.src))}

          src={imgArry.filter((im) => im === el.src ? `${im.match(/\bimg\d\b/)[0]}`.default : null)}

          howMatch={el.howMatch}
        />
      ))}
    </div>
  );
};

export default MyFavorits;
