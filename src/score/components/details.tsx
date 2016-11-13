import { Emotion } from './emotion';
import { ITrend } from '../../global/model';
import { Trend } from './trend';
import * as React from 'react';

export interface IDetailsProps {
    readonly trend: ITrend;
    readonly value: number;
}

export class Details extends React.Component<IDetailsProps, any> {
    public render() {
        return <div className="row text" >
            <div className="col-md-6 well nopadding" >
                <Trend kind={this.props.trend.kind} ></Trend>
            </div>
            <div className="col-md-6 well nopadding" >
                <Emotion value={this.props.value} ></Emotion>
            </div>
        </div>
    }
}