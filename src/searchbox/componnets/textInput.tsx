import * as React from "react";
import { ENTER_KEY } from "../../global/constants";

export interface ITextInputProps {
    onSearch: (value: string) => void;
    text: string;
    placeholder: string;
    search: boolean;
}

export interface ITextInputState {
    text: string;
}

export class TextInput extends React.Component<ITextInputProps, ITextInputState> {

    constructor(props: ITextInputProps) {
        super(props);
        this.state = { text: "" };
    }

    public handleSubmit(e: React.KeyboardEvent) {
        if (e.which === ENTER_KEY) {
            const text = (e.target as any).value as string;
            this.props.onSearch(text);
            if (this.props.search) {
                this.setState({ text: "" });
            }
        }
    }

    public handleChange(e: React.SyntheticEvent) {
        this.setState({ text: (e.target as any).value })
    }

    public handleBlur(e: React.SyntheticEvent) {
        if (!this.props.search) {
            this.props.onSearch((e.target as any).value);
        }
    }

    public render() {
        return <input type="text" name="searchTweet" id="tweet-search" className="input-lg form-control"
            onBlur={this.handleBlur} onKeyDown={this.handleSubmit} onChange={this.handleChange}
            autoFocus={this.state.text.length > 0} placeholder={this.props.placeholder} />;
    }
}
