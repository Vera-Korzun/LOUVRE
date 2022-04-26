import React from "react";
import LogoStyled from "./LogoStyled";
import logo from "../images/frame.svg";

const Logo = () => {
  return (
    <LogoStyled>
      <a className="link logo-link" href="/">
        <img className="logo-img" src={logo} alt="logo" />

        <h1 className="logo-title">Louvre</h1>
      </a>
    </LogoStyled>
  );
};

export default Logo;
