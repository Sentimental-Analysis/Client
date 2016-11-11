import { Trend } from './trend';
import { ITrend } from '../../global/model';
import * as React from 'react';

export interface IDetailsProps {
    readonly trend: ITrend;
}

export class Details extends React.Component<IDetailsProps, any> {
    public render() {
        return <div className="row text" >
                    <div className="col-md-4" >
                        <Trend kind={this.props.trend.kind} ></Trend>
                    </div>
                </div>
    }
}