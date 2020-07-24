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

export default class AlumniEarnings extends PureComponent {
  render() {
    // console.log(this.props.data.school_years);
    const data = [
      {
        name: this.props.data.school_years[0].year,
        "Alumni Earnings": this.props.data.school_years[0]
          .alumni_earnings_10_years,
      },
      {
        name: this.props.data.school_years[1].year,
        "Alumni Earnings": this.props.data.school_years[1]
          .alumni_earnings_10_years,
      },
      {
        name: this.props.data.school_years[2].year,
        "Alumni Earnings": this.props.data.school_years[2]
          .alumni_earnings_10_years,
      },
      {
        name: this.props.data.school_years[3].year,
        "Alumni Earnings": this.props.data.school_years[3]
          .alumni_earnings_10_years,
      },
      {
        name: this.props.data.school_years[4].year,
        "Alumni Earnings": this.props.data.school_years[4]
          .alumni_earnings_10_years,
      },
      {
        name: this.props.data.school_years[5].year,
        "Alumni Earnings": this.props.data.school_years[5]
          .alumni_earnings_10_years,
      },
      {
        name: this.props.data.school_years[6].year,
        "Alumni Earnings": this.props.data.school_years[6]
          .alumni_earnings_10_years,
      },
      {
        name: this.props.data.school_years[7].year,
        "Alumni Earnings": this.props.data.school_years[7]
          .alumni_earnings_10_years,
      },
      {
        name: this.props.data.school_years[8].year,
        "Alumni Earnings": this.props.data.school_years[8]
          .alumni_earnings_10_years,
      },
      {
        name: this.props.data.school_years[9].year,
        "Alumni Earnings": this.props.data.school_years[9]
          .alumni_earnings_10_years,
      },
      {
        name: this.props.data.school_years[10].year,
        "Alumni Earnings": this.props.data.school_years[10]
          .alumni_earnings_10_years,
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
          <Label value="Alumni Earnings" offset={0} position="bottom" />{" "}
        </XAxis>
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" className="chart-legend" />
        <Bar dataKey="Alumni Earnings" fill="#8884d8" />
      </BarChart>
    );
  }
}
