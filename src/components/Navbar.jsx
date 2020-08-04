import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div uk-sticky>
      <nav class="uk-navbar-transparent" uk-navbar>
        <div class="uk-navbar-center">
          <ul class="uk-navbar-nav uk-navbar-center">
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
