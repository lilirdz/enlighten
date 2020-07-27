import React, { PureComponent } from "react";
import Card from "react-bootstrap/Card";

import {
  BarChart,
  Bar,
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  //   Legend,
} from "recharts";

export default class DemoChart extends PureComponent {
  render() {
    const data = [
      {
        name: this.props.data.school_years[0].year,
        Black: this.props.data.school_years[0].demographics_black,
        Hispanic: this.props.data.school_years[0].demographics_hispanic,
        Asian: this.props.data.school_years[0].demographics_asian,
        "Native Hawaiian Pacific Islander": this.props.data.school_years[0]
          .demographics_nhpi,
        White: this.props.data.school_years[0].demographics_white,
      },
      {
        name: this.props.data.school_years[1].year,
        Black: this.props.data.school_years[1].demographics_black,
        Hispanic: this.props.data.school_years[1].demographics_hispanic,
        Asian: this.props.data.school_years[1].demographics_asian,
        "Native Hawaiian Pacific Islander": this.props.data.school_years[1]
          .demographics_nhpi,
        White: this.props.data.school_years[1].demographics_white,
      },
      {
        name: this.props.data.school_years[2].year,
        Black: this.props.data.school_years[2].demographics_black,
        Hispanic: this.props.data.school_years[2].demographics_hispanic,
        Asian: this.props.data.school_years[2].demographics_asian,
        "Native Hawaiian Pacific Islander": this.props.data.school_years[2]
          .demographics_nhpi,
        White: this.props.data.school_years[2].demographics_white,
      },
      {
        name: this.props.data.school_years[3].year,
        Black: this.props.data.school_years[3].demographics_black,
        Hispanic: this.props.data.school_years[3].demographics_hispanic,
        Asian: this.props.data.school_years[3].demographics_asian,
        "Native Hawaiian Pacific Islander": this.props.data.school_years[3]
          .demographics_nhpi,
        White: this.props.data.school_years[3].demographics_white,
      },
      {
        name: this.props.data.school_years[4].year,
        Black: this.props.data.school_years[4].demographics_black,
        Hispanic: this.props.data.school_years[4].demographics_hispanic,
        Asian: this.props.data.school_years[4].demographics_asian,
        "Native Hawaiian Pacific Islander": this.props.data.school_years[4]
          .demographics_nhpi,
        White: this.props.data.school_years[4].demographics_white,
      },
      {
        name: this.props.data.school_years[5].year,
        Black: this.props.data.school_years[5].demographics_black,
        Hispanic: this.props.data.school_years[5].demographics_hispanic,
        Asian: this.props.data.school_years[5].demographics_asian,
        "Native Hawaiian Pacific Islander": this.props.data.school_years[5]
          .demographics_nhpi,
        White: this.props.data.school_years[5].demographics_white,
      },
      {
        name: this.props.data.school_years[6].year,
        Black: this.props.data.school_years[6].demographics_black,
        Hispanic: this.props.data.school_years[6].demographics_hispanic,
        Asian: this.props.data.school_years[6].demographics_asian,
        "Native Hawaiian Pacific Islander": this.props.data.school_years[6]
          .demographics_nhpi,
        White: this.props.data.school_years[6].demographics_white,
      },
      {
        name: this.props.data.school_years[7].year,
        Black: this.props.data.school_years[7].demographics_black,
        Hispanic: this.props.data.school_years[7].demographics_hispanic,
        Asian: this.props.data.school_years[7].demographics_asian,
        "Native Hawaiian Pacific Islander": this.props.data.school_years[7]
          .demographics_nhpi,
        White: this.props.data.school_years[7].demographics_white,
      },
      {
        name: this.props.data.school_years[8].year,
        Black: this.props.data.school_years[8].demographics_black,
        Hispanic: this.props.data.school_years[8].demographics_hispanic,
        Asian: this.props.data.school_years[8].demographics_asian,
        "Native Hawaiian Pacific Islander": this.props.data.school_years[8]
          .demographics_nhpi,
        White: this.props.data.school_years[8].demographics_white,
      },
      {
        name: this.props.data.school_years[9].year,
        Black: this.props.data.school_years[9].demographics_black,
        Hispanic: this.props.data.school_years[9].demographics_hispanic,
        Asian: this.props.data.school_years[9].demographics_asian,
        "Native Hawaiian Pacific Islander": this.props.data.school_years[9]
          .demographics_nhpi,
        White: this.props.data.school_years[9].demographics_white,
      },
      {
        name: this.props.data.school_years[10].year,
        Black: this.props.data.school_years[10].demographics_black,
        Hispanic: this.props.data.school_years[10].demographics_hispanic,
        Asian: this.props.data.school_years[10].demographics_asian,
        "Native Hawaiian Pacific Islander": this.props.data.school_years[10]
          .demographics_nhpi,
        White: this.props.data.school_years[10].demographics_white,
      },
    ];
    return (
      <div>
        <Card className="chart-card">
          <Card.Title>Student Body Demographics</Card.Title>
          <Card.Body className="chart-body">
            <BarChart
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
                  value="Student Body Demographics"
                  // offset={0}
                  position="bottom"
                />{" "}
              </XAxis>
              <YAxis />
              <Tooltip />
              {/* <Legend /> */}
              <Bar dataKey="Hispanic" stackId="a" fill="#8E94F2" />
              <Bar dataKey="Asian" stackId="a" fill="#84D2F6" />
              <Bar dataKey="Black" stackId="a" fill="#0E9C97" />
              <Bar
                dataKey="Native Hawaiian Pacific Islander"
                stackId="a"
                fill="#FFA9A3"
              />
              <Bar dataKey="White" stackId="a" fill="#FFC312" />
            </BarChart>
          </Card.Body>
          <Card.Footer className="chart-text">
            Above you can see a breakdown of the student body based on race and
            ethnicity.
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
