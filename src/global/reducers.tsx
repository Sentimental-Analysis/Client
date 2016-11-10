import {searchBoxReducer} from "../searchbox/searchBoxReducer";
import {Action} from "./actionTypes";
import {Tweet} from "./model";

export type Reducer<TState> = (state: TState, action: Action) => TState;

export type Reducers = { tweets: Reducer<Tweet[]>, isSearching: Reducer<boolean>, error: Reducer<string> };

export function isSearching(state: boolean = false, action: Action) {
    return action.type === "SEARCH_PENDING";
}

export function error(state: string = "", action: Action) {
    if(action.type === "SEARCH_REJECTED") {
        return action.payload;
    }
    return state;
}

export const reducers: Reducers = {
    tweets: searchBoxReducer,
    isSearching: isSearching,
    error: error
};