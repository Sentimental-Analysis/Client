import { Emotion } from './emotion';
import * as React from 'react';

export interface IDetailsProps {
    readonly score: number;
}

export class Details extends React.Component<IDetailsProps, any> {
    public render() {
        return <div className="row text" >
            <div className="col-md-12 well nopadding" >
                <Emotion value={this.props.score} ></Emotion>
            </div>
        </div>
    }
}