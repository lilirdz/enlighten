import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Card from "react-bootstrap/Card";

export default class AdmissionsRate extends PureComponent {
  render() {
    // console.log(this.props.data.school_years);
    const data = [
      {
        name: this.props.data.school_years[0].year,
        "Admissions Rate": this.props.data.school_years[0].admissions_rate,
      },
      {
        name: this.props.data.school_years[1].year,
        "Admissions Rate": this.props.data.school_years[1].admissions_rate,
      },
      {
        name: this.props.data.school_years[2].year,
        "Admissions Rate": this.props.data.school_years[2].admissions_rate,
      },
      {
        name: this.props.data.school_years[3].year,
        "Admissions Rate": this.props.data.school_years[3].admissions_rate,
      },
      {
        name: this.props.data.school_years[4].year,
        "Admissions Rate": this.props.data.school_years[4].admissions_rate,
      },
      {
        name: this.props.data.school_years[5].year,
        "Admissions Rate": this.props.data.school_years[5].admissions_rate,
      },
      {
        name: this.props.data.school_years[6].year,
        "Admissions Rate": this.props.data.school_years[6].admissions_rate,
      },
      {
        name: this.props.data.school_years[7].year,
        "Admissions Rate": this.props.data.school_years[7].admissions_rate,
      },
      {
        name: this.props.data.school_years[8].year,
        "Admissions Rate": this.props.data.school_years[8].admissions_rate,
      },
      {
        name: this.props.data.school_years[9].year,
        "Admissions Rate": this.props.data.school_years[9].admissions_rate,
      },
      {
        name: this.props.data.school_years[10].year,
        "Admissions Rate": this.props.data.school_years[10].admissions_rate,
      },
    ];
    return (
      <div>
        <Card className="chart-card">
          <Card.Title>Admissions Rate</Card.Title>

          <Card.Body className="chart-body">
            <LineChart
              width={550}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 35,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name">
                {" "}
                <Label
                  value="Admissions Rate"
                  offset={0}
                  position="bottom"
                />{" "}
              </XAxis>
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" className="chart-legend" />
              <Line dataKey="Admissions Rate" stroke="#42BFDD" />
            </LineChart>
          </Card.Body>
          <Card.Footer className="chart-text">
            The graph shows the percentage of applicants who were accepted to
            the school. A lower admissions rate can indicate that the school is
            highly selective of who they admit.
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
