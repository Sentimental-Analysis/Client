import { Score } from '../global/model';
import {Action} from "../global/actionTypes";

export function searchBoxReducer(state: Score = {ke}, action: Action): Score {
    if(action.type === "SEARCH_FULFILLED") {
        if(action!.payload.data.isSuccess) {
            return action.payload.data.value!;
        }
        return state;
    }
    return state;
}