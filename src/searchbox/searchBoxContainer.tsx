import {Action} from "../global/actionTypes";
import * as React from "react";

interface ISearchBoxProps {
    readonly onSearch: (value: string) => Action;
    readonly isSearching: boolean;
}

interface ISearchBoxState {
    text: string;
}

class SearchBox extends React.Component<ISearchBoxProps, ISearchBoxState> {

    constructor(props: ISearchBoxProps) {
        super(props);
        this.state = {text: ""};
    }

    public handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.onSearch(this.state.text);
        if (!this.props.isSearching) {
            this.setState({text: ""});
        }
    }

    public handleChange = (e: React.SyntheticEvent) => {
        this.setState({text: (e.target as any).value});
    }

    public handleBlur = () => {
        if (this.props.isSearching) {
            this.props.onSearch(this.state.text);
        }
    }

    public render() {
        return <div className="searchBox row">
            <div className="col-lg-12 nopadding">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group input-group-lg">
                        <input type="text" name="searchTweet" id="tweet-search" className="input-lg form-control"
                               onBlur={this.handleBlur} onChange={this.handleChange}
                               autoFocus={this.state.text.length > 0} placeholder="Wpisz frazę"/>
                        <span className="input-group-btn">
                               <input className="btn btn-default btn-lg" type="submit" value="Szukaj"
                                      disabled={this.props.isSearching}/>
                            </span>
                    </div>
                </form>
            </div>
        </div>;
    }
}

export default SearchBox;
