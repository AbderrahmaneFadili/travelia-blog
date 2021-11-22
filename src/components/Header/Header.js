import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        {/* Logo */}
        <h1>
          <a href="/">Travelia</a>
        </h1>
        <hr />
        {/* Menu */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" title="About">
              About
            </Link>
          </li>
        </ul>
        {/* Register & Login */}
        <ul>
          <li>
            <Link to="/register" title="Register">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" title="Login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/logout" title="Logout">
              Logout
            </Link>
          </li>
        </ul>
        <br />
      </nav>
      <hr />
    </header>
  );
};

export default Header;
