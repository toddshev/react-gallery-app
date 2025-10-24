import React from "react";
import {NavLink} from 'react-router-dom';

const Nav = ({btnClick}) => {

  return (
    <nav className="main-nav">
      <ul>
        <li>
        <NavLink onClick={() => btnClick("cats")} to="/cats">Cats</NavLink>
        </li>
        <li>
          <NavLink onClick={() =>btnClick("dogs")} to="/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink onClick={() =>btnClick("computers")} to="/computers">Computers</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;