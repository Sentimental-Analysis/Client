import { Path } from './path';
import * as React from 'react';


export interface IDataSetProps extends React.HTMLAttributes {
    label?: any;
    data?: any;
    onMouseEnter?:any;
}

export class DataSet extends React.Component<IDataSetProps, any> {
    public render() {
        const {
            width,
            height,
            data,
            line,
            strokeWidth,
            strokeLinecap,
            strokeDasharray,
            colorScale,
            values,
            label,
            onMouseEnter,
            onMouseLeave
        } = this.props;

        const sizeId = width + 'x' + height;

        const lines = data.map((stack: any, index: any) => <Path
            key={`${label(stack)}.${index}`}
            className={'line'}
            d={line(values(stack))}
            stroke={colorScale(label(stack))}
            strokeWidth={typeof strokeWidth === 'function' ? strokeWidth(label(stack)) : strokeWidth}
            strokeLinecap={typeof strokeLinecap === 'function' ? strokeLinecap(label(stack)) : strokeLinecap}
            strokeDasharray={typeof strokeDasharray === 'function' ? strokeDasharray(label(stack)) : strokeDasharray}
            data={values(stack)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ clipPath: `url(#lineClip_${sizeId})` }}
            />);

        return <g>
            <defs>
                <clipPath id={`lineClip_${sizeId}`}>
                    <rect width={width} height={height} />
                </clipPath>
            </defs>
            {lines}
            <rect
                width={width}
                height={height}
                fill={'none'}
                stroke={'none'}
                style={{ pointerEvents: 'all' }}
                onMouseMove={evt => { onMouseEnter(evt, data); } }
                onMouseLeave={evt => { onMouseLeave(evt); } }
                />
        </g>
    }
}