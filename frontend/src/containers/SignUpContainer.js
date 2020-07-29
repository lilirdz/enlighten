import React from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link";

export default class SignUpContainer extends React.Component {
  state = {
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
      .then((res) => res.json())
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
      .then((res) => res.json())
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

  render() {
    return (
      <div>
        <Form>
          <h3>Sign Up</h3>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={this.handleInput}
              type="name"
              name="name"
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={this.handleInput}
              type="username"
              name="username"
              placeholder="Enter Username"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.handleInput}
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button
            onClick={this.handleSignUp}
            className="edit-btn"
            style={{ width: "100%" }}
            variant="primary"
            type="submit"
          >
            Sign Up
          </Button>
          <Form.Text className="text-muted" as={Link} to={"/login"}>
            Already have an account? Click here to log in.
          </Form.Text>
        </Form>
        {this.state.error ? <p className="error">{this.state.error}</p> : null}
      </div>
    );
  }
}
