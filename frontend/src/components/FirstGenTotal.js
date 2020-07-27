import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Card from "react-bootstrap/Card";

export default class FirstGenTotal extends PureComponent {
  render() {
    // console.log(this.props.data.school_years);
    const data = [
      {
        name: this.props.data.school_years[0].year,
        "First Gen Total Percentage": this.props.data.school_years[0]
          .first_gen_total_percentage,
        Other: 1 - this.props.data.school_years[0].first_gen_total_percentage,
      },
      {
        name: this.props.data.school_years[1].year,
        "First Gen Total Percentage": this.props.data.school_years[1]
          .first_gen_total_percentage,
        Other: 1 - this.props.data.school_years[0].first_gen_total_percentage,
      },
      {
        name: this.props.data.school_years[2].year,
        "First Gen Total Percentage": this.props.data.school_years[2]
          .first_gen_total_percentage,
        Other: 1 - this.props.data.school_years[0].first_gen_total_percentage,
      },
      {
        name: this.props.data.school_years[3].year,
        "First Gen Total Percentage": this.props.data.school_years[3]
          .first_gen_total_percentage,
        Other: 1 - this.props.data.school_years[0].first_gen_total_percentage,
      },
      {
        name: this.props.data.school_years[4].year,
        "First Gen Total Percentage": this.props.data.school_years[4]
          .first_gen_total_percentage,
        Other: 1 - this.props.data.school_years[0].first_gen_total_percentage,
      },
      {
        name: this.props.data.school_years[5].year,
        "First Gen Total Percentage": this.props.data.school_years[5]
          .first_gen_total_percentage,
        Other: 1 - this.props.data.school_years[0].first_gen_total_percentage,
      },
      {
        name: this.props.data.school_years[6].year,
        "First Gen Total Percentage": this.props.data.school_years[6]
          .first_gen_total_percentage,
        Other: 1 - this.props.data.school_years[0].first_gen_total_percentage,
      },
      {
        name: this.props.data.school_years[7].year,
        "First Gen Total Percentage": this.props.data.school_years[7]
          .first_gen_total_percentage,
        Other: 1 - this.props.data.school_years[0].first_gen_total_percentage,
      },
      {
        name: this.props.data.school_years[8].year,
        "First Gen Total Percentage": this.props.data.school_years[8]
          .first_gen_total_percentage,
        Other: 1 - this.props.data.school_years[0].first_gen_total_percentage,
      },
      {
        name: this.props.data.school_years[9].year,
        "First Gen Total Percentage": this.props.data.school_years[9]
          .first_gen_total_percentage,
        // Other: 1 - this.props.data.school_years[0].first_gen_total_percentage,
      },
      {
        name: this.props.data.school_years[10].year,
        "First Gen Total Percentage": this.props.data.school_years[10]
          .first_gen_total_percentage,
        // Other: 1 - this.props.data.school_years[0].first_gen_total_percentage,
      },
    ];
    return (
      <div>
        <Card className="chart-card">
          <Card.Title>First Gen Total Percentage</Card.Title>

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
                  value="First Gen Total Percentage"
                  offset={0}
                  position="bottom"
                />{" "}
              </XAxis>
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" className="chart-legend" />
              <Bar
                dataKey="First Gen Total Percentage"
                stackId="a"
                fill="#FFA9A3"
              />
              <Bar dataKey="Other" stackId="a" fill="#FED766" />
            </BarChart>
          </Card.Body>
          <Card.Footer className="chart-text">
            The graph shows the percentage of student at the school who are
            first generation college students.
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
