import React from "react";
import SchoolBasicInfo from "../components/SchoolBasicInfo";
import AddSchoolToCategory from "../components/AddSchoolToCategory";
import CircularProgress from "@material-ui/core/CircularProgress";
import DemoChart from "../components/DemoChart";
import Tuition from "../components/Tuition";
import CompletionRate from "../components/CompletionRate";
import EnrollmentRate from "../components/EnrollmentRate";
import AdmissionsRate from "../components/AdmissionsRate";
import RetentionRate from "../components/RetentionRate";
import FirstGenTotal from "../components/FirstGenTotal";
import FirstGenMedianDebt from "../components/FirstGenMedianDebt";
import AlumniEarnings from "../components/AlumniEarnings";
import { Container, Row, Col } from "react-bootstrap";

const style = {
  color: "#9FA0FF",
  marginTop: 300,
};

export default class IndividualSchoolContainer extends React.Component {
  state = {
    school: null,
  };

  componentDidMount() {
    fetch(
      `http://localhost:3000/api/v1/schools/${this.props.match.params.id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          school: data,
        })
      );
  }
  render() {
    console.log(this.state.school);

    return (
      <div>
        {this.state.school === null ? (
          <CircularProgress style={style} />
        ) : (
          <div>
            <SchoolBasicInfo school={this.state.school} />

            <AddSchoolToCategory
              school={this.state.school}
              routeProps={this.props}
            />
            <Container fluid="true">
              <Row>
                <Col xs={6}>
                  <DemoChart data={this.state.school} />
                </Col>
                <Col xs={6}>
                  <Tuition data={this.state.school} />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <CompletionRate data={this.state.school} />
                </Col>
                <Col xs={6}>
                  <EnrollmentRate data={this.state.school} />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <AdmissionsRate data={this.state.school} />
                </Col>
                <Col xs={6}>
                  <RetentionRate data={this.state.school} />
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <FirstGenTotal data={this.state.school} />
                </Col>
                <Col xs={4}>
                  <FirstGenMedianDebt data={this.state.school} />
                </Col>
                <Col xs={4}>
                  <AlumniEarnings data={this.state.school} />
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    );
  }
}
