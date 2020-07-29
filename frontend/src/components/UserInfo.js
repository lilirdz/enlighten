import React from "react";
import Students from "../images/students.jpg";
import CreateCategory from "../components/CreateCategory";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container, Row, Col } from "react-bootstrap";

const style = {
  color: "#9FA0FF",
  marginTop: 300,
};

export default class UserInfo extends React.Component {
  render() {
    return (
      <div>
        {this.props.details === null ? (
          <CircularProgress style={style} />
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
                  <h2 className="profile-header">
                    <strong>Check Out Your Prospective Schools</strong>
                  </h2>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    );
  }
}
