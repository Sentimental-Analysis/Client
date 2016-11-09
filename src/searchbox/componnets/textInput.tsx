import * as React from "react";

export interface ITextInputProps {
    onSearch : (value: string) => void;
    text: string;
    placeholder: string;
    search: boolean;
}

export interface ITextInputState {
    text: string;
}

export class TextInput extends React.Component<ITextInputProps, ITextInputState>{
    public render() {
        return <h1></h1>;
    }
}
