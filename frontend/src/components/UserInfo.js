import React from "react";
import Students from "../images/students.jpg";
import CreateCategory from "../components/CreateCategory";
import BookGif from "../images/book.gif";
import { Container, Row, Col } from "react-bootstrap";

export default class UserInfo extends React.Component {
  render() {
    return (
      <div>
        {this.props.details === null ? (
          <img src={BookGif} alt="book-gif" />
        ) : (
          <div>
            <Container fluid="true">
              <Row>
                <Col xs={8}>
                  <img src={Students} height="300x300" alt="user-pic" />
                </Col>

                <Col xs={3}>
                  <div className="user-welcome">
                    <h2>Hi, {this.props.details.name}!</h2>

                    <CreateCategory
                      addCategory={this.props.addCategory}
                      routeProps={this.props.routeProps}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  {this.props.categories.length !== 0 ? (
                    <h2 className="profile-header">
                      <strong>Check Out Your Prospective Schools</strong>
                    </h2>
                  ) : (
                    <h2 className="profile-header">
                      <strong>Let's Add Some Categories!</strong>
                    </h2>
                  )}
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    );
  }
}
