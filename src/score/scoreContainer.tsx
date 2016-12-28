import { Score } from '../global/model';
import * as React from 'react';
import { Emotion } from './components/emotion';
import { Details } from './components/details';
import './score.scss';

export interface IScoreProps {
    readonly score: Score;
}

export class ScoreComponent extends React.Component<IScoreProps, any> {
    public render() {
        return <div className="score">
            <div className="details">
                <Details score={this.props.score} ></Details>
            </div>
        </div>
    }
}