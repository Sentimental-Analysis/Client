import * as React from "react";
import {Tweets} from "../global/model";
import {ITrend, rateTrend} from "../utils/math";


export class Trend extends React.Component<Tweets, ITrend> {

    constructor(props: Tweets){
        super(props);
        this.state = rateTrend(this.props.data)
    }

    public render() {
        return <div>
            <h1>Trend</h1>
            <p>{this.state.kind}</p>
        </div>
    }
}