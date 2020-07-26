import React from "react";
import SchoolCard from "../components/SchoolCard.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

export default class SchoolList extends React.Component {
  render() {
    let { schools } = this.props;
    schools = schools.slice(0, 18);

    return (
      <div>
        <Container>
          <Row>
            {schools.map((school) => (
              <SchoolCard
                key={school.id}
                school={school}
                routeProps={this.props.routeProps}
              />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
