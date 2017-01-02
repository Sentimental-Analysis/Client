import SearchBox from "../searchbox/searchBoxContainer";
import * as React from "react";
import {AppState} from "../global/model";
import {Action} from "../global/actionTypes";
import {Dispatch} from "redux";
import {Reducers} from "../global/reducers";
import {searchTweetByKey} from "../searchbox/searchBoxActions";
import {connect} from "react-redux";
import Details from "../details/deatilContainer";
import Empty from "../empty/empty";

export interface AppProps {
}

export interface IAppDispatchProps {
    searchTweetByKey: (key: string) => Action;
}

const mapStateToProps = (state: AppState, appProps: AppProps): AppState => ({
    error: state.error,
    isSearching: state.isSearching,
    score: state.score,
    sentiment: state.sentiment,
    trend: state.trend,
});

const mapDispatchToProps = (dispatch: Dispatch<Reducers>) => ({
    searchTweetByKey: (key: string) => dispatch(searchTweetByKey(key)),
});

class AppComponent extends React.Component<AppState & AppProps & IAppDispatchProps, any> {
    constructor(props: AppState & AppProps & IAppDispatchProps) {
        super(props);
    }

    public render() {
        const dataComponent = this.props.score.key !== "" ? <Details score={this.props.score} sentiment={this.props.sentiment} trend={this.props.trend} /> : <Empty/>;
        return <div className="container">
            <SearchBox onSearch={this.props.searchTweetByKey} isSearching={this.props.isSearching}/>
            {dataComponent}
        </div>;
    }
}

export const App: React.ComponentClass<AppProps> = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
