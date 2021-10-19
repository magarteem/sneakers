import React from "react";
import s from "./section_1.module.css";
import search from "../img/search.svg";
import dell from "../img/dell.svg";

const Section_1 = ({ inpSearch, setInpSearch }) => {
  //                                                    !
  return (
    <section className={s.sec_1}>
      <h1>{inpSearch ? `Поиск по: ${inpSearch}` : "Все кроссовки"}</h1>
      <label>
        <img className={s.search} src={search} alt="search" />
        <input
          type="text"
          value={inpSearch}
          onChange={(event) => {
            setInpSearch(event.target.value);
          }}
        ></input>

        {inpSearch && (
          <img
            className={s.dell}
            src={dell}
            alt="dell"
            onClick={() => {
              setInpSearch("");
            }}
          />
        )}
      </label>
    </section>
  );
};

export default Section_1;
