import { searchBoxReducer } from '../searchbox/searchBoxReducer';
import { Action } from './actionTypes';
import { ITrend, Tweet } from './model';
import { scoreReducer, trendReducer } from '../score/scoreReducers';

export type Reducer<TState> = (state: TState, action: Action) => TState;

export type Reducers = { tweets: Reducer<Tweet[]>, isSearching: Reducer<boolean>, error: Reducer<string>, sentiment: Reducer<number>, trend: Reducer<ITrend> };

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
    tweets: searchBoxReducer,
    isSearching: isSearching,
    error: error,
    sentiment: scoreReducer,
    trend: trendReducer
};