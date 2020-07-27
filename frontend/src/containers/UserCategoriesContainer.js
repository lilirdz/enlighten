import React from "react";
import UserCategoryCard from "../components/UserCategoryCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

export default class UserCategoriesContainer extends React.Component {
  render() {
    // console.log(this.props);
    // if (this.props.data === null) return <h1>Loading</h1>;
    return (
      <div>
        <Container fluid="true" className="categories-container">
          <Row className="categories-row">
            {this.props.data.categories.map((category) => (
              <Col md={3}>
                <UserCategoryCard
                  category={category}
                  schools={this.props.data.schools}
                  removeSchool={this.props.removeSchool}
                  removeCategory={this.props.removeCategory}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
