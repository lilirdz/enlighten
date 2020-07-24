import React, { PureComponent } from "react";
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
    console.log(this.props.data.school_years);
    const data = [
      {
        name: this.props.data.school_years[0].year,
        black: this.props.data.school_years[0].demographics_black,
        hispanic: this.props.data.school_years[0].demographics_hispanic,
        asian: this.props.data.school_years[0].demographics_asian,
        pacificIslander: this.props.data.school_years[0].demographics_nhpi,
        white: this.props.data.school_years[0].demographics_white,
      },
      {
        name: this.props.data.school_years[1].year,
        black: this.props.data.school_years[1].demographics_black,
        hispanic: this.props.data.school_years[1].demographics_hispanic,
        asian: this.props.data.school_years[1].demographics_asian,
        pacificIslander: this.props.data.school_years[1].demographics_nhpi,
        white: this.props.data.school_years[1].demographics_white,
      },
      {
        name: this.props.data.school_years[2].year,
        black: this.props.data.school_years[2].demographics_black,
        hispanic: this.props.data.school_years[2].demographics_hispanic,
        asian: this.props.data.school_years[2].demographics_asian,
        pacificIslander: this.props.data.school_years[2].demographics_nhpi,
        white: this.props.data.school_years[2].demographics_white,
      },
      {
        name: this.props.data.school_years[3].year,
        black: this.props.data.school_years[3].demographics_black,
        hispanic: this.props.data.school_years[3].demographics_hispanic,
        asian: this.props.data.school_years[3].demographics_asian,
        pacificIslander: this.props.data.school_years[3].demographics_nhpi,
        white: this.props.data.school_years[3].demographics_white,
      },
      {
        name: this.props.data.school_years[4].year,
        black: this.props.data.school_years[4].demographics_black,
        hispanic: this.props.data.school_years[4].demographics_hispanic,
        asian: this.props.data.school_years[4].demographics_asian,
        pacificIslander: this.props.data.school_years[4].demographics_nhpi,
        white: this.props.data.school_years[4].demographics_white,
      },
      {
        name: this.props.data.school_years[5].year,
        black: this.props.data.school_years[5].demographics_black,
        hispanic: this.props.data.school_years[5].demographics_hispanic,
        asian: this.props.data.school_years[5].demographics_asian,
        pacificIslander: this.props.data.school_years[5].demographics_nhpi,
        white: this.props.data.school_years[5].demographics_white,
      },
      {
        name: this.props.data.school_years[6].year,
        black: this.props.data.school_years[6].demographics_black,
        hispanic: this.props.data.school_years[6].demographics_hispanic,
        asian: this.props.data.school_years[6].demographics_asian,
        pacificIslander: this.props.data.school_years[6].demographics_nhpi,
        white: this.props.data.school_years[6].demographics_white,
      },
      {
        name: this.props.data.school_years[7].year,
        black: this.props.data.school_years[7].demographics_black,
        hispanic: this.props.data.school_years[7].demographics_hispanic,
        asian: this.props.data.school_years[7].demographics_asian,
        pacificIslander: this.props.data.school_years[7].demographics_nhpi,
        white: this.props.data.school_years[7].demographics_white,
      },
      {
        name: this.props.data.school_years[8].year,
        black: this.props.data.school_years[8].demographics_black,
        hispanic: this.props.data.school_years[8].demographics_hispanic,
        asian: this.props.data.school_years[8].demographics_asian,
        pacificIslander: this.props.data.school_years[8].demographics_nhpi,
        white: this.props.data.school_years[8].demographics_white,
      },
      {
        name: this.props.data.school_years[9].year,
        black: this.props.data.school_years[9].demographics_black,
        hispanic: this.props.data.school_years[9].demographics_hispanic,
        asian: this.props.data.school_years[9].demographics_asian,
        pacificIslander: this.props.data.school_years[9].demographics_nhpi,
        white: this.props.data.school_years[9].demographics_white,
      },
      {
        name: this.props.data.school_years[10].year,
        black: this.props.data.school_years[10].demographics_black,
        hispanic: this.props.data.school_years[10].demographics_hispanic,
        asian: this.props.data.school_years[10].demographics_asian,
        pacificIslander: this.props.data.school_years[10].demographics_nhpi,
        white: this.props.data.school_years[10].demographics_white,
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
            value="Student Body Demographics"
            // offset={0}
            position="bottom"
          />{" "}
        </XAxis>
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="hispanic" stackId="a" fill="#8884d8" />
        <Bar dataKey="asian" stackId="a" fill="#7353ba" />
        <Bar dataKey="black" stackId="a" fill="#82ca9d" />
        <Bar dataKey="pacificIslander" stackId="a" fill="#efc3f5" />
        <Bar dataKey="white" stackId="a" fill="#d1603d" />
      </BarChart>
    );
  }
}
