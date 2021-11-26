import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    return (
      <>
        <TitleWrapper>
          <h1 className="text-6xl">Login now</h1>
        </TitleWrapper>
        <div className="w-6/12 mx-auto my-10">
          <form onSubmit={this.handleSubmit}>
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
//map state to props
const mapStateToProps = (state) => {
  console.log(state.loginReducer);
  return {
    loading: state.loading,
    error: state.error,
    user: state.user,
  };
};
//map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
