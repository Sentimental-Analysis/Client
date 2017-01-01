import {Score, SentimentWord} from "./model";
import { searchBoxReducer } from "../searchbox/searchBoxReducer";
import { Action } from "./actionTypes";
import {sentimentReducer} from "../details/detailReducers";

export type Reducer<TState> = (state: TState, action: Action) => TState;

export type Reducers = { sentiment: Reducer<SentimentWord>, score: Reducer<Score>, isSearching: Reducer<boolean>, error: Reducer<string> };

export function isSearching(state: boolean = false, action: Action) {
    return action.type === "SEARCH_PENDING";
}

export function error(state: string = "", action: Action) {
    if (action.type === "SEARCH_REJECTED") {
        return action.payload;
    }
    return state;
}

export const reducers: Reducers = {
    error,
    isSearching,
    score: searchBoxReducer,
    sentiment: sentimentReducer,
};
