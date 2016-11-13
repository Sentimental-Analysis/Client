import * as React from "react";

interface IAxisProps extends React.HTMLAttributes {

}

export class Axis extends React.Component<IAxisProps, any> {

    constructor(props: IAxisProps) {
        super(props);
    }

    public getTranslateString = () => {
        const {orientation, height, width, zero = 0} = this.props;

        if (orientation === 'top') {
            return `translate(0, ${zero})`;
        } else if (orientation === 'bottom') {
            return `translate(0, ${zero == 0 ? height : zero})`;
        } else if (orientation === 'left') {
            return `translate(${zero}, 0)`;
        } else if (orientation === 'right') {
            return `translate(${zero == 0 ? width : zero}, 0)`;
        } else {
            return '';
        }
    }

    public d3ScaleExtent = (domain: any) => {
        const start = domain[0];
        const stop = domain[domain.length - 1];
        return start < stop ? [start, stop] : [stop, start];
    }

    public d3ScaleRange = (scale: any) => {
        return scale.rangeExtent ? scale.rangeExtent() : this.d3ScaleExtent(scale.range());
    }

    public render() {
        const {
            height,
            width,
            tickArguments = [10],
            tickValues = null,
            tickDirection = "horizontal",
            innerTickSize = 6,
            tickPadding = 3,
            outerTickSize = 6,
            scale,
            orientation,
            zero = 0,
            label = "",
            className = "axis"
        } = this.props;

        let {tickFormat = null} = this.props;
        let ticks = tickValues == null
            ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()
            : tickValues;

        if (!tickFormat) {
            if (scale.tickFormat) {
                tickFormat = scale.tickFormat.apply(scale, tickArguments);
            } else {
                tickFormat = (x: any) => x;
            }
        }

        if (zero != height && zero != width && zero != 0) {
            ticks = ticks.filter((element: any) => element != 0);
        }

        const tickSpacing = Math.max(innerTickSize, 0) + tickPadding;

        const sign = orientation === 'top' || orientation === 'left' ? -1 : 1;

        const range = this.d3ScaleRange(scale);

        const activeScale = scale.rangeBand ? (e: any) => scale(e) + scale.rangeBand() / 2 : scale;

        let transform: any = 0;
        let x: any = 0;
        let y: any = 0;
        let x2: any = 0;
        let y2: any = 0;
        let dy: any = 0;
        let textAnchor: any = 0;
        let d: any = 0;
        let labelElement: any = 0;
        let tickRotation: any = 0;

        if (orientation === 'bottom' || orientation === 'top') {
            transform = 'translate({}, 0)';
            x = 0;
            y = sign * tickSpacing;
            x2 = 0;
            y2 = sign * innerTickSize;
            dy = sign < 0 ? '0em' : '.71em';
            textAnchor = 'middle';
            d = `M${range[0]}, ${sign * outerTickSize}V0H${range[1]}V${sign * outerTickSize}`;
            if (tickDirection === 'vertical') {
                tickRotation = -90;
                x = -tickSpacing;
                y = -innerTickSize;
                textAnchor = 'end';
            } else if (tickDirection === 'diagonal') {
                tickRotation = -60;
                x = -tickSpacing;
                y = 0;
                textAnchor = 'end';
            }

            labelElement = <text className={`${className} label`} textAnchor={"end"} x={width} y={-6}>{label}</text>;
        } else {
            transform = 'translate(0, {})';
            x = sign * tickSpacing;
            y = 0;
            x2 = sign * innerTickSize;
            y2 = 0;
            dy = '.32em';
            textAnchor = sign < 0 ? 'end' : 'start';
            d = `M${sign * outerTickSize}, ${range[0]}H0V${range[1]}H${sign * outerTickSize}`;
            if (tickDirection === 'vertical') {
                tickRotation = -90;
                x -= sign * tickSpacing;
                y = -(tickSpacing + innerTickSize);
                textAnchor = 'middle';
            } else if (tickDirection === 'diagonal') {
                tickRotation = -60;
                x -= sign * tickSpacing;
                y = -(tickSpacing + innerTickSize);
                textAnchor = 'middle';
            }

            labelElement = <text className={`${className} label`} textAnchor="end" y={6} dy={orientation === 'left' ? '.75em' : '-1.25em'} transform="rotate(-90)">{label}</text>;
        }

        const tickElements = ticks.map((tick: any, index: any) => {
            const position = activeScale(tick);
            const translate = transform.replace('{}', position);
            return (
                <g key={`${tick}.${index}`} className="tick" transform={translate}>
                    <line x2={x2} y2={y2} stroke="#aaa" />
                    <text x={x} y={y} dy={dy} textAnchor={textAnchor} transform={`rotate(${tickRotation})`}>
                        {tickFormat(tick)}</text>
                </g>
            );
        });

        const pathElement = <path className="domain" d={d} fill="none" stroke="#aaa" />;

        const axisBackground = <rect className="axis-background" fill="none" />;

        return (
            <g ref="axis" className={className} transform={this.getTranslateString()} style={{ shapeRendering: 'crispEdges' }}>
                {axisBackground}
                {tickElements}
                {pathElement}
                {labelElement}
            </g>);
    }
}