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

export default class CompletionRate extends PureComponent {
  render() {
    // console.log(this.props.data.school_years);
    const data = [
      {
        name: this.props.data.school_years[0].year,
        "4 Year Completion Rate": this.props.data.school_years[0]
          .first_gen_4_year_completion,
        "6 Year Completion Rate": this.props.data.school_years[0]
          .first_gen_6_year_completion,
      },
      {
        name: this.props.data.school_years[1].year,
        "4 Year Completion Rate": this.props.data.school_years[1]
          .first_gen_4_year_completion,
        "6 Year Completion Rate": this.props.data.school_years[1]
          .first_gen_6_year_completion,
      },
      {
        name: this.props.data.school_years[2].year,
        "4 Year Completion Rate": this.props.data.school_years[2]
          .first_gen_4_year_completion,
        "6 Year Completion Rate": this.props.data.school_years[2]
          .first_gen_6_year_completion,
      },
      {
        name: this.props.data.school_years[3].year,
        "4 Year Completion Rate": this.props.data.school_years[3]
          .first_gen_4_year_completion,
        "6 Year Completion Rate": this.props.data.school_years[3]
          .first_gen_6_year_completion,
      },
      {
        name: this.props.data.school_years[4].year,
        "4 Year Completion Rate": this.props.data.school_years[4]
          .first_gen_4_year_completion,
        "6 Year Completion Rate": this.props.data.school_years[4]
          .first_gen_6_year_completion,
      },
      {
        name: this.props.data.school_years[5].year,
        "4 Year Completion Rate": this.props.data.school_years[5]
          .first_gen_4_year_completion,
        "6 Year Completion Rate": this.props.data.school_years[5]
          .first_gen_6_year_completion,
      },
      {
        name: this.props.data.school_years[6].year,
        "4 Year Completion Rate": this.props.data.school_years[6]
          .first_gen_4_year_completion,
        "6 Year Completion Rate": this.props.data.school_years[6]
          .first_gen_6_year_completion,
      },
      {
        name: this.props.data.school_years[7].year,
        "4 Year Completion Rate": this.props.data.school_years[7]
          .first_gen_4_year_completion,
        "6 Year Completion Rate": this.props.data.school_years[7]
          .first_gen_6_year_completion,
      },
      {
        name: this.props.data.school_years[8].year,
        "4 Year Completion Rate": this.props.data.school_years[8]
          .first_gen_4_year_completion,
        "6 Year Completion Rate": this.props.data.school_years[8]
          .first_gen_6_year_completion,
      },
      {
        name: this.props.data.school_years[9].year,
        "4 Year Completion Rate": this.props.data.school_years[9]
          .first_gen_4_year_completion,
        "6 Year Completion Rate": this.props.data.school_years[9]
          .first_gen_6_year_completion,
      },
      {
        name: this.props.data.school_years[10].year,
        "4 Year Completion Rate": this.props.data.school_years[10]
          .first_gen_4_year_completion,
        "6 Year Completion Rate": this.props.data.school_years[10]
          .first_gen_6_year_completion,
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
          <Label
            value="First Generation Students Completion Rate"
            offset={0}
            position="bottom"
          />{" "}
        </XAxis>
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" className="chart-legend" />
        <Bar dataKey="4 Year Completion Rate" fill="#8884d8" />
        <Bar dataKey="6 Year Completion Rate" fill="#82ca9d" />
      </BarChart>
    );
  }
}
