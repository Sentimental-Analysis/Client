import {Tweet} from "../global/model";
import {Action} from "../global/actionTypes";

export function searchBoxReducer(state: Tweet[] = [], action: Action) {
    if(action.type === "SEARCH_FULFILLED") {
        if(action!.payload.isSuccess){
            return action!.payload.value;
        }
        return state;
    }
    return state;
}