import { ITrend } from '../global/model';
import * as React from 'react';
import { Emotion } from './components/emotion';
import { Details } from './components/details';
import './score.scss';

export interface IScoreProps {
    readonly score: number;
    readonly trend: ITrend;
}

export class ScoreComponent extends React.Component<IScoreProps, any> {
    public render() {
        return <div className="score">
            <div className="details">
                <Details trend={this.props.trend} value={this.props.score} ></Details>
            </div>
        </div>
    }
}