import * as React from "react";

export interface IPathProps {
  readonly className?: string;
  readonly stroke: string;
  readonly strokeLinecap?: "butt" | "round" | "square" | "inherit";
  readonly strokeWidth?: string;
  readonly strokeDasharray?: string;
  readonly fill: string;
  readonly d: string;
  readonly data: any[];
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
            data
        } = this.props;
        
    return <path 
      className={className}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap as any}
      strokeDasharray={strokeDasharray}
      fill={fill}
      d={d}
      ></path>
  }
}