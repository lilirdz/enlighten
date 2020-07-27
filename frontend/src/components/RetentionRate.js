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

export default class RetentionRate extends PureComponent {
  render() {
    // console.log(this.props.data.school_years);
    const data = [
      {
        name: this.props.data.school_years[0].year,
        "Retention Rate": this.props.data.school_years[0].retention_rate,
      },
      {
        name: this.props.data.school_years[1].year,
        "Retention Rate": this.props.data.school_years[1].retention_rate,
      },
      {
        name: this.props.data.school_years[2].year,
        "Retention Rate": this.props.data.school_years[2].retention_rate,
      },
      {
        name: this.props.data.school_years[3].year,
        "Retention Rate": this.props.data.school_years[3].retention_rate,
      },
      {
        name: this.props.data.school_years[4].year,
        "Retention Rate": this.props.data.school_years[4].retention_rate,
      },
      {
        name: this.props.data.school_years[5].year,
        "Retention Rate": this.props.data.school_years[5].retention_rate,
      },
      {
        name: this.props.data.school_years[6].year,
        "Retention Rate": this.props.data.school_years[6].retention_rate,
      },
      {
        name: this.props.data.school_years[7].year,
        "Retention Rate": this.props.data.school_years[7].retention_rate,
      },
      {
        name: this.props.data.school_years[8].year,
        "Retention Rate": this.props.data.school_years[8].retention_rate,
      },
      {
        name: this.props.data.school_years[9].year,
        "Retention Rate": this.props.data.school_years[9].retention_rate,
      },
      {
        name: this.props.data.school_years[10].year,
        "Retention Rate": this.props.data.school_years[10].retention_rate,
      },
    ];
    return (
      <div>
        <Card className="chart-card">
          <Card.Title>Retention Rate</Card.Title>
          <Card.Body className="chart-body">
            <LineChart
              width={550}
              height={360}
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
                  value="Retention Rate"
                  offset={0}
                  position="bottom"
                />{" "}
              </XAxis>
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" className="chart-legend" />
              <Line dataKey="Retention Rate" stroke="#F87575" />
            </LineChart>
          </Card.Body>
          <Card.Footer className="chart-text">
            The graph shows the retention rates for students. A higher retention
            rate means more students are choosing to stay at that school.
            Various reasons include good financial aid, good student life, good
            opportunities, etc.
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
