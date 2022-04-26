import React from "react";

import Logo from "./Logo";
import Navigation from "./Navigation";

import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled className="container">
      <Logo />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
