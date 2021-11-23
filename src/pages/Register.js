import React, { Component } from "react";
import TitleWrapper from "../components/TitleWrapper/TitleWrapper";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <>
        <TitleWrapper>
          <h1 className="text-6xl">Register your account</h1>
        </TitleWrapper>
        <div className="w-6/12 mx-auto my-10">
          <form>
            {/* Username */}
            <Input type="text" id="username" label="Username" />
            {/* Email */}
            <Input type="email" id="email" label="Email" />
            {/* Password */}
            <Input type="password" id="password" label="Password" />
            {/* Password Confirmation*/}
            <Input
              type="password"
              id="password_confirmation"
              label="Confirm password"
            />
            {/* Register Button*/}
            <Button
              style={{
                marginTop: "20px",
              }}
              type="submit"
              title="Register"
            />
          </form>
          <p className="text-center text-xl my-3">
            <Link to="/login" className="hover:underline">
              I have an account
            </Link>
          </p>
        </div>
      </>
    );
  }
}

export default Register;
