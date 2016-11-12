import * as React from "react";
import * as d3 from "d3";

const {number, shape} = React.PropTypes;

interface IChartProps {
    readonly height: number;
    readonly width: number;
    readonly data: {
        tweets: { sentiment: string, date: Date }[];
    }
}

export class LineChart extends React.Component<IChartProps, any> {
    componentDidMount() {
        const { width, height, data } = this.props
        const force = d3;
    }
}