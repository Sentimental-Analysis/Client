import * as React from "react";

export interface SubmitButtonProps {
    readonly value: string;
}

export class SubmitButton extends React.Component<SubmitButtonProps, any> {
    public render() {
        return <input className="btn btn-default btn-lg" type="submit" value={this.props.value} />
    }
}