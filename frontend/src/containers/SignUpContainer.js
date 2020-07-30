import React from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link";
import Graduates from "../images/graduates.jpg";
import { Container, Row, Col } from "react-bootstrap";

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
      .then((response) => {
        console.log(response);
        if (response.user) {
          this.handleLogin();
        } else {
          this.setState({
            error: response[0],
          });
        }
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
        <Container fluid="true">
          <Row>
            <Col md={6}>
              <img src={Graduates} alt="college graduates" height="550x550" />

              <h2 className="landing-pg-text">
                First Generation College Bound Students <br />
                Find the Right School For You
              </h2>
            </Col>
            <Col md={6}>
              <Form className="credentials-form">
                <div className="form-text">
                  <h3>Sign Up</h3>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      onChange={this.handleInput}
                      type="name"
                      name="name"
                      placeholder="Enter Name"
                      className="creds-label"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      onChange={this.handleInput}
                      type="username"
                      name="username"
                      placeholder="Enter Username"
                      className="creds-label"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      onChange={this.handleInput}
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="creds-label"
                    />
                  </Form.Group>

                  <Button
                    onClick={this.handleSignUp}
                    className="login-btn"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                  {this.state.error ? (
                    <p className="error">{this.state.error}</p>
                  ) : null}

                  <Form.Text className="text-muted" as={Link} to={"/login"}>
                    Already have an account? Click here to log in.
                  </Form.Text>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
