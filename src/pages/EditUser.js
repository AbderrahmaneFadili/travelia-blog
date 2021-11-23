import React, { Component } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import TitleWrapper from "../components/TitleWrapper/TitleWrapper";

class Home extends Component {
  render() {
    return (
      <>
        {/* Title Wrapper */}
        <TitleWrapper>
          <h1 className="text-6xl text-center font-light">Edit your account</h1>
        </TitleWrapper>
        {/* Edit User */}
        <div className="w-6/12 mx-auto my-10">
          <form>
            {/* Username */}
            <Input type="text" id="username" label="Username" />
            {/* Email */}
            <Input type="email" id="email" label="Email" />
            {/* New Password */}
            <Input type="password" id="password" label="New password" />
            {/* Password new confirmation*/}
            <Input
              type="password"
              id="password_confirmation"
              label="Confirm new password"
            />
            {/* Register Button*/}
            <Button
              style={{
                marginTop: "20px",
              }}
              type="submit"
              title="Create"
            />
          </form>
        </div>
      </>
    );
  }
}
export default Home;
