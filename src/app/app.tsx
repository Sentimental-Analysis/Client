import { SearchBox } from '../searchbox/searchBoxContainer';
import { Score } from "../score/scoreContainer";
import * as React from 'react';
import { AppState } from '../global/model';
import { Action } from '../global/actionTypes';
import { Dispatch } from 'redux';
import { Reducers } from '../global/reducers';
import { searchTweetByKey } from '../searchbox/searchBoxActions';
import { connect } from 'react-redux';

export interface AppProps {
}

export interface IAppDispatchProps {
    searchTweetByKey: (key: string) => Action;
}

const mapStateToProps = (state: AppState, appProps: AppProps): AppState => ({
    error: state.error,
    tweets: state.tweets,
    isSearching: state.isSearching,
    sentiment: state.sentiment,
    trend: { kind: "Stable" }
});

const mapDispatchToProps = (dispatch: Dispatch<Reducers>) => ({
    searchTweetByKey: (key: string) => dispatch(searchTweetByKey(key))
});

class AppComponent extends React.Component<AppState & AppProps & IAppDispatchProps, any> {
    constructor(props: AppState & AppProps & IAppDispatchProps) {
        super(props);
    }

    render() {
        return <div className="container" >
                <SearchBox Search={this.props.searchTweetByKey} ></SearchBox>
                <Score score={this.props.sentiment} ></Score>
            </div>;
    }
}

export const App: React.ComponentClass<AppProps> = connect(mapStateToProps, mapDispatchToProps)(AppComponent);