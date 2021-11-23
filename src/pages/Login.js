import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitleWrapper from "../components/TitleWrapper/TitleWrapper";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

class Login extends Component {
  render() {
    return (
      <>
        <TitleWrapper>
          <h1 className="text-6xl">Login now</h1>
        </TitleWrapper>
        <div className="w-6/12 mx-auto my-10">
          <form>
            {/* Email */}
            <Input type="email" id="email" label="Email" />
            {/* Password */}
            <Input type="password" id="password" label="Password" />
            {/* Login Button*/}
            <Button
              style={{
                marginTop: "20px",
              }}
              type="submit"
              title="Login"
            />
          </form>
          <p className="text-center text-xl my-3">
            <Link to="/register" className="hover:underline">
              I do not have an account
            </Link>
          </p>
        </div>
      </>
    );
  }
}

export default Login;
