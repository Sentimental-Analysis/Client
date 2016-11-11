import { rateSentiment } from '../utils/sentiment';
import { Tweet } from '../global/model';
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