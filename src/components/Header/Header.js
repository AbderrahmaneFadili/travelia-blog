import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { resetCurrentUserState } from "../../redux/store/actions/currentUserActions";
import logoutAction from "../../redux/store/actions/logoutActions";

const Header = () => {
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  //connect redux state
  const state = useSelector((state) => {
    return {
      loading: state.logoutReducer.loading,
      error: state.logoutReducer.error,
      messgae: state.logoutReducer.message,
      currentUser: state.currentUserReducer.currentUser,
    };
  });

  //connect dispatch
  const dispatch = useDispatch();

  console.log("Header state:", state);

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
          {state.currentUser !== null ? (
            <>
              <li className="px-4 py-2 text-lg">
                <NavLink
                  activeClassName="active"
                  to={"/user/" + state.currentUser.user.id}
                >
                  {state.currentUser.user.name}
                </NavLink>
              </li>
              <li className="px-4 py-2 text-lg">
                <button
                  onClick={() => {
                    dispatch(resetCurrentUserState());
                    dispatch(logoutAction());
                    navigate("/login");
                  }}
                  activeClassName="active"
                >
                  Logout
                </button>
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
