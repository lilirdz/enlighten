import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link";
import Logo from "../images/enlighten_logo.png";

const style = {
  color: "#454851",
};

class NavBar extends React.Component {
  render() {
    return (
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="logo" height="40" />
          Enlighten
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={style} as={Link} to="/schools">
              Explore Schools
            </Nav.Link>
            <Nav.Link style={style} as={Link} to="/compare-schools">
              Compare Schools
            </Nav.Link>
            <Nav.Link style={style} as={Link} to="/resources">
              Resources
            </Nav.Link>
            <Nav.Link style={style} as={Link} to="/profile">
              My Profile
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            {!this.props.loggedIn ? (
              <Button as={Link} to="/login" className="login-btn">
                Get Started
              </Button>
            ) : (
              <Button
                as={Link}
                to="/login"
                className="logout-btn"
                onClick={this.props.logout}
              >
                Log Out
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
