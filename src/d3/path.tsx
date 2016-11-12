import * as React from "react";

export interface IPathProps extends React.HTMLAttributes {
}

export class Path extends React.Component<IPathProps, any> {
    public render() {
        const {
            className = "path",
            stroke,
            strokeWidth = "2",
            strokeLinecap = "butt",
            strokeDasharray = "none",
            fill = "none",
            d,
            style,
            data,
            onMouseEnter,
            onMouseLeave
        } = this.props;

        return <path
            className={className}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeDasharray={strokeDasharray}
            fill={fill}
            d={d}
            onMouseMove={evt => onMouseEnter(evt)}
            onMouseLeave={evt => onMouseLeave(evt)}
            style={style}
            />
    }
}