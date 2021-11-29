import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import TitleWrapper from "../components/TitleWrapper/TitleWrapper";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import loginAction from "../redux/store/actions/loginActions";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleValueChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser({ email, password });
  };

  render() {
    console.log(this.props);

    if (this.props.currentUser) {
      return <Navigate to="/" />;
    } else {
      return (
        <>
          <TitleWrapper>
            <h1 className="text-6xl">Login now</h1>
          </TitleWrapper>
          <div className="w-6/12 mx-auto my-10">
            {this.props.error && (
              <p className="py-1 text-red-800 text-xl text-center">
                {this.props.error.message}
              </p>
            )}
            <form onSubmit={this.handleSubmit}>
              {/* Email */}
              <Input
                type="email"
                id="email"
                label="Email"
                error={
                  this.props.error.errors && this.props.error.errors.email[0]
                }
                onChange={this.handleValueChange}
              />
              {/* Password */}
              <Input
                type="password"
                id="password"
                label="Password"
                error={
                  this.props.error.errors && this.props.error.errors.password[0]
                }
                onChange={this.handleValueChange}
              />
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
}

//map state to props
const mapStateToProps = ({ loginReducer, currentUserReducer }) => {
  return {
    loading: loginReducer.loading,
    error: loginReducer.error,
    currentUser: currentUserReducer.currentUser,
  };
};

//map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
