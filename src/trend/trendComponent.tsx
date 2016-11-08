import * as React from "react";
import {Tweet, Tweets} from "../global/model";
import {ITrend, rateTrend} from "../utils/math";


export class TrendComponent extends React.Component<Tweets, ITrend> {

    constructor(props: Tweets){
        super(props);
        this.state = {kind: "Stable"}
    }

    public componentDidMount(){
        if(this.props && this.props!.data){
            this.setState(rateTrend(this.props.data))
        }
    }

    public render() {
        return <div>
            <h1>Trend</h1>
            <p>{this.state.kind}</p>
        </div>
    }
}