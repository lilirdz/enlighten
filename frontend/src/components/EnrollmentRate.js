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

export default class EnrollmentRate extends PureComponent {
  render() {
    // console.log(this.props.data.school_years);
    const data = [
      {
        name: this.props.data.school_years[0].year,
        "Enrollment Rate": this.props.data.school_years[0].enrollment_size,
      },
      {
        name: this.props.data.school_years[1].year,
        "Enrollment Rate": this.props.data.school_years[1].enrollment_size,
      },
      {
        name: this.props.data.school_years[2].year,
        "Enrollment Rate": this.props.data.school_years[2].enrollment_size,
      },
      {
        name: this.props.data.school_years[3].year,
        "Enrollment Rate": this.props.data.school_years[3].enrollment_size,
      },
      {
        name: this.props.data.school_years[4].year,
        "Enrollment Rate": this.props.data.school_years[4].enrollment_size,
      },
      {
        name: this.props.data.school_years[5].year,
        "Enrollment Rate": this.props.data.school_years[5].enrollment_size,
      },
      {
        name: this.props.data.school_years[6].year,
        "Enrollment Rate": this.props.data.school_years[6].enrollment_size,
      },
      {
        name: this.props.data.school_years[7].year,
        "Enrollment Rate": this.props.data.school_years[7].enrollment_size,
      },
      {
        name: this.props.data.school_years[8].year,
        "Enrollment Rate": this.props.data.school_years[8].enrollment_size,
      },
      {
        name: this.props.data.school_years[9].year,
        "Enrollment Rate": this.props.data.school_years[9].enrollment_size,
      },
      {
        name: this.props.data.school_years[10].year,
        "Enrollment Rate": this.props.data.school_years[10].enrollment_size,
      },
    ];
    return (
      <BarChart
        width={500}
        height={300}
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
          <Label value="Enrollment Rate" offset={0} position="bottom" />{" "}
        </XAxis>
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" className="chart-legend" />
        <Bar dataKey="Enrollment Rate" fill="#8884d8" />
      </BarChart>
    );
  }
}
