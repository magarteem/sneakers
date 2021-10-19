import React from "react";
import s from "./_header.module.css";
import logo from "./img_head/logo.png";
import H_right from "./h_right/h_right";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.header}>
      <NavLink to="/" href="#" className={s.hed_left}>
        <img src={logo} alt="logo" />
      </NavLink>
      <H_right />
    </div>
  );
};

export default Header;
