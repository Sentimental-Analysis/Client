import * as React from "react";
import * as d3 from "d3";
import { Chart } from "./chart";
import { Axis } from "./axis";
import { Path } from "./path";
import { ToolTip } from "./tooltip";
import { DataSet } from "./dataSet";

export interface ILineChartProps extends React.HTMLAttributes {

}

export class LineChart extends React.Component<ILineChartProps, any> {
    public render() {
        const {
            height,
            width,
            margin,
            colorScale,
            interpolate,
            defined,
            stroke,
            values,
            label,
            x,
            y,
            xAxis,
            yAxis,
            shape,
            shapeColor
        } = this.props;
        return <h1></h1>
    }
}