import * as React from "react";

export interface IEmotionProps {
    readonly value: number;
}

function getEmotionText(value: number): string {
    if(value === 0.0) {
        return "NEUTRALNY";
    } else if(value > 0.0) {
        return "POZYTYWNY";
    } else if(value < 0.0) {
        return "NEGATYWNY";
    } else {
        return "NEUTRALNY";
    }
}

export class Emotion extends React.Component<IEmotionProps, any> {
    public render() {
        return <h1 className="" >{getEmotionText(this.props.value)}</h1>
    }
}