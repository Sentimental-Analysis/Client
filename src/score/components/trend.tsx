import * as React from 'react';
import { ITrend, Tweets } from '../../global/model';
import { rateTrend } from '../../utils/math';


export class Trend extends React.Component<ITrend, any> {

    constructor(props: ITrend) {
        super(props);
    }

    public render() {
        return <div>
            <h1>Trend</h1>
            <p>{this.props.kind}</p>
        </div>;
    }
}