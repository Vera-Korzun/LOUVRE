import React from "react";

import NavigationStyled from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavigationStyled className="list">
      <li className="navigation-list-item">
        <a className="link navigation-item-link" href="#">
          Visiting
        </a>
      </li>
      <li className="navigation-list-item">
        <a className="link navigation-item-link" href="#">
          Explore
        </a>
      </li>
      <li className="navigation-list-item">
        <a className="link navigation-item-link" href="#">
          Video
        </a>
      </li>
      <li className="navigation-list-item">
        <a className="link navigation-item-link" href="#">
          Gallery
        </a>
      </li>
      <li className="navigation-list-item">
        <a className="link navigation-item-link" href="#">
          Tickets
        </a>
      </li>
      <li className="navigation-list-item">
        <a className="link navigation-item-link" href="#">
          Contacts
        </a>
      </li>
    </NavigationStyled>
  );
};

export default Navigation;
