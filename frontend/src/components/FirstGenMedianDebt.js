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

export default class FirstGenMedianDebt extends PureComponent {
  render() {
    // console.log(this.props.data.school_years);
    const data = [
      {
        name: this.props.data.school_years[0].year,
        "First Gen Median Debt": this.props.data.school_years[0]
          .first_gen_median_debt,
      },
      {
        name: this.props.data.school_years[1].year,
        "First Gen Median Debt": this.props.data.school_years[1]
          .first_gen_median_debt,
      },
      {
        name: this.props.data.school_years[2].year,
        "First Gen Median Debt": this.props.data.school_years[2]
          .first_gen_median_debt,
      },
      {
        name: this.props.data.school_years[3].year,
        "First Gen Median Debt": this.props.data.school_years[3]
          .first_gen_median_debt,
      },
      {
        name: this.props.data.school_years[4].year,
        "First Gen Median Debt": this.props.data.school_years[4]
          .first_gen_median_debt,
      },
      {
        name: this.props.data.school_years[5].year,
        "First Gen Median Debt": this.props.data.school_years[5]
          .first_gen_median_debt,
      },
      {
        name: this.props.data.school_years[6].year,
        "First Gen Median Debt": this.props.data.school_years[6]
          .first_gen_median_debt,
      },
      {
        name: this.props.data.school_years[7].year,
        "First Gen Median Debt": this.props.data.school_years[7]
          .first_gen_median_debt,
      },
      {
        name: this.props.data.school_years[8].year,
        "First Gen Median Debt": this.props.data.school_years[8]
          .first_gen_median_debt,
      },
      {
        name: this.props.data.school_years[9].year,
        "First Gen Median Debt": this.props.data.school_years[9]
          .first_gen_median_debt,
      },
      {
        name: this.props.data.school_years[10].year,
        "First Gen Median Debt": this.props.data.school_years[10]
          .first_gen_median_debt,
      },
    ];
    return (
      <div>
        <Card className="chart-card">
          <Card.Title>First Gen Median Debt</Card.Title>
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
                  value="First Gen Median Debt"
                  offset={0}
                  position="bottom"
                />{" "}
              </XAxis>
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" className="chart-legend" />
              <Bar dataKey="First Gen Median Debt" fill="#FFA9A3" />
            </BarChart>
          </Card.Body>
          <Card.Footer className="chart-text">
            The graph shows the median debt for a first generation college
            student after graduating from this school.
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
