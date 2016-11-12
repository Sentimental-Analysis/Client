import * as React from "react";

export interface IEmotionProps {
    readonly value: number;
}

function getEmotionText(value: number): string {
    if (value === 0.0) {
        return "NEUTRALNE";
    } else if (value > 0.0) {
        return "POZYTYWNE";
    } else if (value < 0.0) {
        return "NEGATYWNE";
    } else {
        return "NEUTRALNE";
    }
}

export class Emotion extends React.Component<IEmotionProps, any> {
    public render() {
        return <div>
            <h1>Nastwienie</h1>
            <h2>{getEmotionText(this.props.value)}</h2>
        </div>;
    }
}