import {applyMiddleware, combineReducers, createStore} from "redux";
import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {reducers} from "./global/reducers";
import {App} from "./app/app";
import * as logger from "redux-logger"
import {AppState} from "./global/model";

const appState: AppState = {
  tweets: []
};

const combinedReducers = combineReducers(Object.assign({}, reducers, {routing: routerReducer}));
const middleware = applyMiddleware(logger());
const store = createStore(combinedReducers, appState, middleware);

const history = syncHistoryWithStore(browserHistory, store);

store.subscribe(() => {
    console.log("changed", store.getState());
});

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}></Route>
        </Router>
    </Provider>,
    document.getElementById("container"));