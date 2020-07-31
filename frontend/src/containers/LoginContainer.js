import React from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link";
import { Container, Row, Col } from "react-bootstrap";
import LandingLottie from "../components/LandingLottie.js";

export default class LoginContainer extends React.Component {
  state = {
    name: "",
    username: "",
    password: "",
    error: false,
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

  render() {
    return (
      <div>
        <Container fluid="true">
          <Row>
            <Col md={6}>
              <div
                style={{
                  height: "1000px",
                  width: "1000px",
                  position: "absolute",
                  marginTop: "30px",
                  transform: "translate(-12.5%,0)",
                }}
              >
                <LandingLottie />
              </div>
              <div
                style={{
                  // transform: "translate(0,70%)",
                  marginTop: "85%",
                }}
              >
                <h2 className="landing-pg-text">
                  First Generation College Bound Students <br />
                  Find the Right School For You
                </h2>
              </div>
            </Col>
            <Col md={6}>
              <Form className="credentials-form">
                <div className="form-text">
                  <h3>Log In</h3>

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
                    onClick={this.handleLogin}
                    className="login-btn"
                    type="submit"
                  >
                    Log In
                  </Button>
                  {this.state.error ? (
                    <p className="error">{this.state.error}</p>
                  ) : null}

                  <Form.Text className="text-muted" as={Link} to={"/signup"}>
                    Don't have an account? Click here to sign up.
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
