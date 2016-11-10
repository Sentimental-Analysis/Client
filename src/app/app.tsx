import * as React from "react";
import {AppState} from "../global/model";
import {Action} from "../global/actionTypes";
import {Dispatch} from "redux";
import {Reducers} from "../global/reducers";
import {searchTweetByKey} from "../searchbox/searchBoxActions";
import { connect } from "react-redux";

export interface AppProps {
    label: string;
}

export interface IAppDispatchProps {
    searchTweetByKey : (key: string) => Action;
}

const mapStateToProps = (state: AppState, appProps: AppProps): AppState => ({
    error: state.error,
    tweets: state.tweets,
    isSearching: state.isSearching
});

const mapDispatchToProps = (dispatch: Dispatch<Reducers>) => ({
    searchTweetByKey: (key: string) => dispatch(searchTweetByKey(key))
});

export class AppComponent extends React.Component<AppState & AppProps & IAppDispatchProps, any> {
    constructor(props: AppState & AppProps & IAppDispatchProps) {
        super(props);
    }

    render() {
        return <h1>{this.props.label}</h1>;
    }
}

export const App: React.ComponentClass<AppProps> = connect(mapStateToProps, mapDispatchToProps)(AppComponent);