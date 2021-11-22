import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="pt-10 px-5 pb-9 items-center flex">
        {/* Travelia Logo */}
        <h1 className="text-4xl">
          <a href="/">Travelia</a>
        </h1>
        {/* Home & About */}
        <ul className="flex ml-8">
          <li className="px-4 py-2 text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 text-lg">
            <Link to="/about">About</Link>
          </li>
        </ul>
        {/* Register & Login */}
        <ul className="flex ml-auto">
          <li className="px-4 py-2 text-lg">
            <Link to="/register">Register</Link>
          </li>
          <li className="px-4 py-2 text-lg">
            <Link to="/login"> Login</Link>
          </li>
          <li className="px-4 py-2 text-lg">
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
