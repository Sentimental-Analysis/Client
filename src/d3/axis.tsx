import * as React from "react";
import { Size } from "./models";

export interface IAxisProps extends Size {
    tickArguments?: any[];
    tickValues?: any[];
    tickFormat?: any;
    tickDirection?: "horizontal" | "vertical" | "diagonal";
    innerTickSize?: number;
    tickPadding?: number;
    outerTickSize?: number;
    scale: any;
    className?: string;
    zero?: number;
    orientation?: 'top' | 'bottom' | 'left' | 'right'
    label?: string;
}

export class Axis extends React.Component<IAxisProps, any> {
    getTranslateString = () => {
        const {orientation, height, width, zero} = this.props;
        if (orientation === 'top') {
            return `translate(0, ${zero})`;
        } else if (orientation === 'bottom') {
            return `translate(0, ${zero == 0 ? height : zero})`;
        } else if (orientation === 'left') {
            return `translate(${zero}, 0)`;
        } else if (orientation === 'right') {
            return `translate(${zero == 0 ? width : zero}, 0)`;
        } else {
            return "";
        }
    }

    render() {
        const {
            height,
            tickArguments,
            tickValues,
            tickDirection,
            innerTickSize,
            tickPadding,
            outerTickSize,
            scale,
            orientation,
            zero,
        } = this.props;

        const {
            width,
            className,
            label
        } = this.props;
        let {tickFormat} = this.props;

        return <h1></h1>
    }
}