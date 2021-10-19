import React from "react";
import group from "../img_head/Group.svg";
import fav from "../img_head/fav.svg";
import user from "../img_head/user.svg";
import s from "./h_right.module.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

const H_right = () => {
  const { setKorzinaOnOFF, favMainRed, favItemsLocal } =
    React.useContext(AppContext);

  return (
    <nav className={s.hed_right}>
      <a
        onClick={() => {
          setKorzinaOnOFF((prev) => !prev);
        }}
      >
        <img src={group} alt="group" />
      </a>
      <span>12500p.</span>
      {/*{// ! количество избранных}*/}
      <NavLink to="/favorit" className={s._right_a}>
        <img src={fav} alt="fav" />
        {favMainRed != 0 ? (
          <div>
            <span>{favMainRed}</span>
          </div>
        ) : null}
      </NavLink>
      <a>
        <img src={user} alt="user" />
      </a>
    </nav>
  );
};

export default H_right;
