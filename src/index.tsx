import { INITIAL_SCORE } from './global/constants';
import {applyMiddleware, combineReducers, createStore} from "redux";
import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {reducers} from "./global/reducers";
import {App} from "./app/app";
import * as logger from "redux-logger"
import {AppState} from "./global/model";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const initialState: AppState = {
    score: INITIAL_SCORE,
    isSearching: false,
    error: "",
};

const combinedReducers = combineReducers(reducers);
const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(combinedReducers, initialState, middleware);

store.subscribe(() => {
    console.log("changed", store.getState());
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("container"));