import React from "react";
import SchoolCard from "../components/SchoolCard.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class SchoolList extends React.Component {
  render() {
    let { schools } = this.props;
    schools = schools.slice(0, 18);

    return (
      <div>
        <Row>
          {schools.map((school) => (
            <Col md={4}>
              <SchoolCard
                key={school.id}
                school={school}
                routeProps={this.props.routeProps}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
