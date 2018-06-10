import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="register.html">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login.html">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
