import React from "react";

import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";

import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="container header-container">
        <Logo />
        <Navigation />
      </div>
    </HeaderStyled>
  );
};

export default Header;
