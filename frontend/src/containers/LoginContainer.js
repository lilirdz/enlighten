import React from "react";
import "../App.css";

export default class LoginContainer extends React.Component {
  state = {
    form: "Login",
    name: "",
    username: "",
    password: "",
    error: false,
  };

  handleSignUp = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((r) => r.json())
      .then(() => {
        this.handleLogin();
      });
  };

  handleLogin = (e = null) => {
    if (e !== null) e.preventDefault();
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((r) => r.json())
      .then((userInfo) => {
        if (userInfo.error) {
          this.setState({
            error: userInfo.error,
          });
        } else {
          localStorage.token = userInfo.token;
          localStorage.user_id = userInfo.user_id;
          this.props.login();
          this.props.history.push("/");
        }
      });
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  switchForm = () => {
    const newState = this.state.form === "Login" ? "Sign Up" : "Login";
    this.setState({
      form: newState,
      error: false,
    });
  };

  render() {
    return <div></div>;
  }
}
