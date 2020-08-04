import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div uk-sticky>
      <nav className="uk-navbar-transparent" uk-navbar>
        <div className="uk-navbar-center">
          <ul className="uk-navbar-nav uk-navbar-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
