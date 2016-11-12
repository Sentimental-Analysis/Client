import * as React from "react";

export interface IChartProps extends React.HTMLAttributes {

}

export class Chart extends React.Component<IChartProps, any> {
    public render() {
        const {
            width,
            height,
            margin,
            viewBox,
            preserveAspectRatio,
            children
        } = this.props;
        return <svg ref="svg" width={width} height={height} viewBox={viewBox} preserveAspectRatio={preserveAspectRatio} >
            <g transform={`translate(${margin.left}, ${margin.top})`}>{children}</g>
        </svg>
    }
}