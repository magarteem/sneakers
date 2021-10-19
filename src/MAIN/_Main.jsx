import React, { useState, useEffect } from "react";
import s from "./_Main.module.css";
import upMainImg from "./img/upMainImg.jpg";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import Card from "./card";
import Section_1 from "./section_1/section_1";

export const imgArry = [img1, img2, img3, img4, img5, img6, img7, img8];

const Main = ({ items }) => {
  const [inpSearch, setInpSearch] = useState(""); //input

  //                            !==========
  return (
    <div className={s.main}>
      <div className={s.upMainImg}>
        <img src={upMainImg} alt="upMainImg" />
      </div>

      <Section_1 inpSearch={inpSearch} setInpSearch={setInpSearch} />

      <section className={s.sec_2}>
        {items
          .filter((e) => e.h3.toLowerCase().includes(inpSearch.toLowerCase()))
          .map((el) => (
            <Card
              key={el.id}
              id={el.id}
              h3={el.h3}
              src={imgArry.filter((im) => im.match(/\bimg\d\b/)[0] === el.src)}
              howMatch={el.howMatch}
            />
          ))}
      </section>
    </div>
  );
};

export default Main;
