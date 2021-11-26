import React, { Component } from "react";
import TitleWrapper from "../components/TitleWrapper/TitleWrapper";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import { registerAction } from "../redux/store/actions/registerActions";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

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
    const { name, email, password } = this.props.error;

    console.log(this.props);
    if (this.props.user) {
      return <Navigate to="/" />;
    } else {
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
                error={name && name[0]}
                onChange={this.handleValueChange}
              />
              {/* Email */}
              <Input
                type="email"
                id="email"
                label="Email"
                error={email && email[0]}
                onChange={this.handleValueChange}
              />
              {/* Password */}
              <Input
                type="password"
                id="password"
                label="Password"
                error={password && password[0]}
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
}

const mapStateToProps = ({ registerReducer }) => {
  return {
    loading: registerReducer.loading,
    user: registerReducer.user,
    error: registerReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (user) => dispatch(registerAction(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
