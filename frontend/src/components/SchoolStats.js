import React from "react";

export default class SchoolStats extends React.Component {
  render() {
    // console.log(this.props);

    return (
      <div>
        <p>
          Enrollment Rate {this.props.schoolYear.year}:{" "}
          {this.props.schoolYear.enrollment_size}
        </p>
        <p> Admissions Rate: {this.props.schoolYear.admissions_rate}</p>
        <p>Tuition In-State: {this.props.schoolYear.tuition_in_state}</p>
        <p>
          Tuition Out-of-State: {this.props.schoolYear.tuition_out_of_state}
        </p>
        <p>Retention Rate: {this.props.schoolYear.retention_rate}</p>
        <p>
          First Gen Total: {this.props.schoolYear.first_gen_total_percentage}
        </p>
        <p>
          First Gen Median Debt: {this.props.schoolYear.first_gen_median_debt}
        </p>
        <p>
          First Gen 4 Year Completion:{" "}
          {this.props.schoolYear.first_gen_4_year_completion === null
            ? "-"
            : this.props.schoolYear.first_gen_4_year_completion}
        </p>
        <p>
          First Gen 6 Year Completion:{" "}
          {this.props.schoolYear.first_gen_6_year_completion === null
            ? "-"
            : this.props.schoolYear.first_gen_6_year_completion}
        </p>
        <p>
          Alumni Earnings After 10 Years:{" "}
          {this.props.schoolYear.alumni_earnings_10_years === null
            ? "-"
            : this.props.schoolYear.alumni_earnings_10_years}
        </p>
      </div>
    );
  }
}
