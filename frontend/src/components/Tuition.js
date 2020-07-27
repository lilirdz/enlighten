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

export default class Tuition extends PureComponent {
  render() {
    const data = [
      {
        name: this.props.data.school_years[0].year,
        "Out of State": this.props.data.school_years[0].tuition_out_of_state,
        "In State": this.props.data.school_years[0].tuition_in_state,
      },
      {
        name: this.props.data.school_years[1].year,
        "Out of State": this.props.data.school_years[1].tuition_out_of_state,
        "In State": this.props.data.school_years[1].tuition_in_state,
      },
      {
        name: this.props.data.school_years[2].year,
        "Out of State": this.props.data.school_years[2].tuition_out_of_state,
        "In State": this.props.data.school_years[2].tuition_in_state,
      },
      {
        name: this.props.data.school_years[3].year,
        "Out of State": this.props.data.school_years[3].tuition_out_of_state,
        "In State": this.props.data.school_years[3].tuition_in_state,
      },
      {
        name: this.props.data.school_years[4].year,
        "Out of State": this.props.data.school_years[4].tuition_out_of_state,
        "In State": this.props.data.school_years[4].tuition_in_state,
      },
      {
        name: this.props.data.school_years[5].year,
        "Out of State": this.props.data.school_years[5].tuition_out_of_state,
        "In State": this.props.data.school_years[5].tuition_in_state,
      },
      {
        name: this.props.data.school_years[6].year,
        "Out of State": this.props.data.school_years[6].tuition_out_of_state,
        "In State": this.props.data.school_years[6].tuition_in_state,
      },
      {
        name: this.props.data.school_years[7].year,
        "Out of State": this.props.data.school_years[7].tuition_out_of_state,
        "In State": this.props.data.school_years[7].tuition_in_state,
      },
      {
        name: this.props.data.school_years[8].year,
        "Out of State": this.props.data.school_years[8].tuition_out_of_state,
        "In State": this.props.data.school_years[8].tuition_in_state,
      },
      {
        name: this.props.data.school_years[9].year,
        "Out of State": this.props.data.school_years[9].tuition_out_of_state,
        "In State": this.props.data.school_years[9].tuition_in_state,
      },
      {
        name: this.props.data.school_years[10].year,
        "Out of State": this.props.data.school_years[10].tuition_out_of_state,
        "In State": this.props.data.school_years[10].tuition_in_state,
      },
    ];
    return (
      <div>
        <Card className="chart-card">
          <Card.Title>Tuition</Card.Title>
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
                <Label value="Tuition" offset={0} position="bottom" />{" "}
              </XAxis>
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" className="chart-legend" />
              <Bar dataKey="Out of State" fill="#8E94F2" />
              <Bar dataKey="In State" fill="#84D2F6" />
            </BarChart>
          </Card.Body>
          <Card.Footer className="chart-text">
            Above you can see the cost of tuition depending if you live in the
            same state as the school or not.
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
