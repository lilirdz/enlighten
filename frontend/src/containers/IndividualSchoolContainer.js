import React from "react";
import SchoolBasicInfo from "../components/SchoolBasicInfo";
// import SchoolData from "../components/SchoolData";
import AddSchoolToCategory from "../components/AddSchoolToCategory";
import DemoChart from "../components/DemoChart";
import Tuition from "../components/Tuition";
import CompletionRate from "../components/CompletionRate";
import EnrollmentRate from "../components/EnrollmentRate";
import AdmissionsRate from "../components/AdmissionsRate";
import RetentionRate from "../components/RetentionRate";
import FirstGenTotal from "../components/FirstGenTotal";
import FirstGenMedianDebt from "../components/FirstGenMedianDebt";
import AlumniEarnings from "../components/AlumniEarnings";

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
          <h1>Loading...</h1>
        ) : (
          <div>
            <SchoolBasicInfo school={this.state.school} />
            <AddSchoolToCategory
              school={this.state.school}
              routeProps={this.props}
            />
            <DemoChart data={this.state.school} />
            <Tuition data={this.state.school} />
            <CompletionRate data={this.state.school} />
            <EnrollmentRate data={this.state.school} />
            <AdmissionsRate data={this.state.school} />
            <RetentionRate data={this.state.school} />
            <FirstGenTotal data={this.state.school} />
            <FirstGenMedianDebt data={this.state.school} />
            <AlumniEarnings data={this.state.school} />
            {/* <SchoolData school={this.state.school} /> */}
          </div>
        )}
      </div>
    );
  }
}
