import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-center">
          <ul class="uk-navbar-nav uk-navbar-center">
            <li>
              <a href="#">Item</a>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
