import React from "react";

import NavigationStyled from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavigationStyled className="list">
      <li className="navigation-list-item">Visiting</li>
      <li className="navigation-list-item">Explore</li>
      <li className="navigation-list-item">Video</li>
      <li className="navigation-list-item">Gallery</li>
      <li className="navigation-list-item">Tickets</li>
      <li className="navigation-list-item">Contacts</li>
    </NavigationStyled>
  );
};

export default Navigation;
