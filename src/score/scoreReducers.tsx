import { rateTrend } from '../utils/math';
import { rateSentiment } from '../utils/sentiment';
import { ITrend, Tweet } from '../global/model';
import { Action } from '../global/actionTypes';

export function scoreReducer(state: number = 0.0, action: Action): number {
    if(action.type === "SEARCH_FULFILLED") {
        if(action.payload.data.isSuccess) {
            return rateSentiment(action.payload.data.value!);
        }
        return state;
    }
    return state;
}

export function trendReducer(state: ITrend = { kind: "Stable" }, action: Action): ITrend {
    if(action.type === "SEARCH_FULFILLED") {
        if(action.payload.data.isSuccess) {
            return rateTrend(action.payload.data.value!);
        }
        return state;
    }
    return state;
}