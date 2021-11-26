import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user-data")) {
      const userData = JSON.parse(localStorage.getItem("user-data"));
      setUserData(userData);
    }
  }, []);

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
            <NavLink activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="px-4 py-2 text-lg">
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
        </ul>
        {/* Register & Login */}
        <ul className="flex ml-auto">
          {userData ? (
            <>
              <li className="px-4 py-2 text-lg">
                <NavLink
                  activeClassName="active"
                  to={"/user/" + userData.user.id}
                >
                  {userData.user.name}
                </NavLink>
              </li>
              <li className="px-4 py-2 text-lg">
                <NavLink activeClassName="active" to="/logout">
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="px-4 py-2 text-lg">
                <NavLink activeClassName="active" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="px-4 py-2 text-lg">
                <NavLink activeClassName="active" to="/login">
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
