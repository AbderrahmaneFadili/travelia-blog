import React, { Component } from "react";
import TitleWrapper from "../components/TitleWrapper/TitleWrapper";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import { registerAction } from "../redux/store/actions/registerActions";
import { connect } from "react-redux";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  }

  //handle value change
  handleValueChange = (event) => {
    const { id, value } = event.target;

    this.setState({
      [id]: value,
    });
  };

  //handle submit
  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, password, password_confirmation } = this.state;

    console.log(name, email, password, password_confirmation);

    //register user
    this.props.registerUser({
      name,
      email,
      password,
      password_confirmation,
    });
  };

  render() {
    return (
      <>
        <TitleWrapper>
          <h1 className="text-6xl">Register your account</h1>
        </TitleWrapper>
        <div className="w-6/12 mx-auto my-10">
          <form onSubmit={this.handleSubmit}>
            {/* name */}
            <Input
              type="text"
              id="name"
              label="Name"
              onChange={this.handleValueChange}
            />
            {/* Email */}
            <Input
              type="email"
              id="email"
              label="Email"
              onChange={this.handleValueChange}
            />
            {/* Password */}
            <Input
              type="password"
              id="password"
              label="Password"
              onChange={this.handleValueChange}
            />
            {/* Password confirmation*/}
            <Input
              type="password"
              id="password_confirmation"
              label="Confirm password"
              onChange={this.handleValueChange}
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loading: state.loading,
    user: state.user,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (user) => dispatch(registerAction(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
