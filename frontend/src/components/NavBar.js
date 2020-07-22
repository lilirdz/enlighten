import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand as={Link} to="/">
          Enlighten
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/schools">
              Explore Schools
            </Nav.Link>
            <Nav.Link as={Link} to="/resources">
              Resources
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              My Profile
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            {!this.props.loggedIn ? (
              <Button as={Link} to="/login" className="edit-btn">
                Get Started
              </Button>
            ) : (
              <Button
                as={Link}
                to="/login"
                className="delete-btn"
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
