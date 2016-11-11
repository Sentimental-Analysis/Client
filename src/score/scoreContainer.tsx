import * as React from "react";
import { Emotion } from "./components/emotion";
export interface IScoreProps {
    readonly score: number;
}

export class Score extends React.Component<IScoreProps, any> {
    public render() {
        return <div className="score">
            <Emotion value={this.props.score}></Emotion>
        </div>
    }
}