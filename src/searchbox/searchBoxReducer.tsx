import {Tweet} from "../global/model";
import {Action} from "../global/actionTypes";

export const searchBoxReducer = (state: Tweet[] = [], action: Action) => {
    if(action.type === "SEARCH_PENDING") {
        console.log("Elo");
        return state;
    }
};